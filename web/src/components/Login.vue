<template>
  <modal>
    <div class="modal-backdrop">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeLogin" >
              <span aria-hidden="true">×</span>
              <span class="sr-only">Close</span>
            </button>
            <h4 class="modal-title">登录</h4>
          </div>
          <div class="modal-body">
            <div class="sfModal-content">
              <div class="row bg-white login-modal">
                <div class="col-md-12 login-wrap">
                  <form action="/api/user/login" method="POST" role="form" class="mt15">
                    <div class="form-group hidden">
                      <input
                        type="text"
                        class="form-control"
                        name="remember"
                        value="1"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <label for="username" class="control-label">手机号或Email</label>
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        tabindex="1"
                        required
                        placeholder="11 位手机号 或 Email"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <label class="control-label">密码</label>
                      <span class="pull-right">
                        <a href="/user/forgot" tabindex="4">忘记密码</a>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        tabindex="2"
                        required
                        placeholder="请输入密码"
                      />
                    </div>
                    <div class="form-group">
                      <a href="/user/phoneLogin" class="phoneLogin">手机验证码登录</a>
                    </div>
                    <div class="form-group clearfix">
                      <button
                        type="submit"
                        class="btn-block btn btn-primary pull-right pl20 pr20"
                        tabindex="3"
                        @click="toSignIn"
                      >登录</button>
                    </div>
                  </form>
                  <div class="text-muted text-center more-login-area">
                    <span class="more-login-words">更多登录方式</span>
                  </div>
                  <div class="widget-login mb15 text-center">
                    <a
                    >
                      <span class="icon-sn-google"></span>
                    </a>
                    <a
                      href="/user/oauth/github"
                      class
                      onclick="ga(&quot;send&quot;, &quot;event&quot;, &quot;3rd login button&quot;, &quot;clicked&quot;, &quot;login modal&quot;, {media: &quot;github&quot;});&quot;);"
                    >
                      <span class="icon-sn-github"></span>
                    </a>
                    <a href="/user/oauth/weixin">
                    <span class="icon-sn-weixin"></span>
                    </a>
                  </div>
                  <div class="form-group clearfix">
                    <a
                      class="btn-block btn btn-default pull-right pl20 pr20 SFLogin"
                    >注册新账号</a>
                  </div>
                  <p class="text-muted text-center mb15">
                    继续即表示你同意
                    <a href="/tos" target="_blank">《服务条款》</a>和
                    <a href="/privacy" target="_blank">《隐私政策》</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer hidden"></div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios';

export default {
  name:"login",
  data() {
    return {
      isChecked: true,
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "userInfo"
    })
  },
  methods: {
    toSignIn() {
      event.stopPropagation();
    },
    toSignUp() {
      this.$router.push({ path: "/signUp" });
    },
    signInBtnClick() {
      let username = this.username.trim();
      let password = this.password.trim();
      if (username === "" || password === "") {
        alert("手机号/邮箱或密码不能为空");
        this.username = "";
        this.password = "";
      } else {
        let _this = this;
        //验证登陆。首先在本地存储中查看是否存在该用户名并校验
        let username_session = localStorage.getItem(username);
        if (username_session && username_session === password) {
          this.$store.dispatch("signUpUser", {
            username: username,
            password: password,
            login: true
          });
          sessionStorage.setItem("isLogin", "true");
          _this.$router.push("/");
        } else {
          //若本地存储无该用户名信息，则请求后台接口，验证用户名和密码是否一致
          this.$store.dispatch("getUserInfo", _this.username);
          if (
            username === _this.user.username &&
            password === _this.user.password
          ) {
            //登陆成功
            this.$store.dispatch("signUpUser", {
              username: username,
              password: password,
              login: true
            });
            sessionStorage.setItem("isLogin", "true");
            if (_this.isChecked) {
              localStorage.setItem(username, password);
            }
            _this.$router.push("/");
          } else {
            alert("手机号/邮箱或密码不正确，请重新输入！");
            _this.password = "";
          }
        }
      }
    },
    changeCheckStatus() {
      this.isChecked = !this.isChecked;
    },

    //响应关闭按钮点击事件，通过$emit api通知父组件执行父组件的on-cancel方法
    closeLogin() {
        this.$emit('on-cancel');
    }
  }
};
</script>
<style scoped>
@import "../../../test/global.css" ;
html,
body {
  overflow: hidden;
  height: 100%;
}
.modal-open {
  overflow: hidden;
}
a
{
  font-size: 18px;
}
.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal-title {
    margin: 0;
    line-height:1.42858
}
.modal-body {
    position: relative;
    padding:15px
}
.clearfix:before, .fmt:before, .clearfix:after, .fmt:after {
    content: " ";
    display:table
}

.clearfix:after, .fmt:after {
    clear:both
}

.modal.fade .modal-dialog {
  -webkit-transform: translate3d(0, -25%, 0);
  transform: translate3d(0, -25%, 0);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}

.modal.in .modal-dialog {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: auto;
  padding-top: 10px;
}
.modal.in {
  top: 10%;
  background: #999;
}
.sfModal-content .row {
  margin: 0;
}
.col-md-12
{
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right:15px;
    width:100%;
}
.modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
  border:none;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin:0
}

button {
    overflow:visible
}

button, select {
    text-transform: none
}

button, html input[type="button"], input[type="reset"], input[type="submit"] {
    -webkit-appearance: button;
    cursor:pointer
}

button[disabled], html input[disabled] {
    cursor:default
}

button::-moz-focus-inner, input::-moz-focus-inner {
    border: 0;
    padding:0
}

input {
    line-height: normal
}

input[type="checkbox"], input[type="radio"] {
    box-sizing: border-box;
    padding: 0
}

input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button {
    height: auto
}

input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box
}

input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {
    -webkit-appearance:none
}

.btn-block {
    display: block;
    width:100%
}

.btn-block + .btn-block {
    margin-top: 5px
}

.login-modal {
  position: relative;
}

.login-modal .login-vline {
  position: absolute;
  height: 90%;
  border-left: 1px solid #eee;
  left: 50%;
  top: 35px;
}

.login-modal .login-wrap {
  padding: 0 125px;
}

@media (max-width: 600px) {
  .login-modal .login-wrap {
    padding: 0;
  }
}

.login-modal .login-wrap .more-login-area {
  margin-top: 30px;
  margin-bottom: 25px;
  border-bottom: 1px solid #eee;
  position: relative;
}

.login-modal .login-wrap .more-login-area .more-login-words {
  position: absolute;
  left: calc(50% - 52px);
  top: -10px;
  padding: 0 10px;
  background: #fff;
}

.login-modal .widget-login .btn {
  margin-bottom: 5px;
  padding: 0;
}


.login-modal .login-wrap .more-login-area .more-login-words {
    position: absolute;
    left: calc(50% - 52px);
    top: -10px;
    padding: 0 10px;
    background:#fff
}

.close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}

.hidden {
    display: none !important;
    visibility:hidden !important;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  filter: alpha(opacity=50);
}

button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.42858px;
}
.modal-header .close {
  margin-top: -2px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}

.mt15,
.mt-15 {
  margin-top: 15px !important;
}
.form-group {
  margin-bottom: 15px;
}
.form-inline .control-label {
  margin-bottom: 0;
  vertical-align: middle;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.clearfix:before,
.fmt:before,
.clearfix:after,
.fmt:after {
  content: " ";
  display: table;
}

.clearfix:after,
.fmt:after {
  clear: both;
}
.icon-sn-google {
  background-position: 0px -28px;
}

.modal-backdrop { 
    position: fixed; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    background-color: rgba(0,0,0,.3); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42858;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select:none
}

.btn:focus, .btn:active:focus, .btn.active:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset:-2px
}

.btn:hover, .btn:focus {
    color: #333;
    text-decoration:none
}

.btn:active, .btn.active {
    outline: 0;
    background-image: none;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    box-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125)
}

.btn.disabled, .btn[disabled], fieldset[disabled] .btn {
    cursor: not-allowed;
    pointer-events: none;
    opacity: .65;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    box-shadow:none
}
.btn-primary {
    color: #fff;
    background-color: #009a61;
    border-color:#008151
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #006741;
    border-color:#00432a
}

.btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {
    background-image:none
}

.btn-primary.disabled, .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled:active, .btn-primary.disabled.active, .btn-primary[disabled], .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled]:active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary, fieldset[disabled] .btn-primary:hover, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary:active, fieldset[disabled] .btn-primary.active {
    background-color: #009a61;
    border-color:#008151
}

.btn-primary .badge {
    color: #009a61;
    background-color:#fff
}
.text-muted {
    color:#777
}
.text-center {
    text-align:center
}
.mb15, .mb-15 {
    margin-bottom:15px !important
}
.icon-sn-google, .icon-sn-weixin
{ background-position:0px -28px;
 display: inline-block;
    background-image: url(../assets/images/icon-sn.svg);
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;
    vertical-align: middle;
    -moz-background-size: auto 56px;
    -o-background-size: auto 56px;
    -webkit-background-size: auto 56px;
    background-size: auto 56px;
}
.icon-sn-google:hover, .icon-sn-weixin:hover{
  opacity: .8;
    filter:alpha(opacity=80);
  
}

[class * = "icon-sn-"]{
    display: inline-block;
    background-image: url(../assets/images/icon-sn.svg);
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;
    vertical-align: middle;
    -moz-background-size: auto 56px;
    -o-background-size: auto 56px;
    -webkit-background-size: auto 56px;
    background-size: auto 56px;
    }

[class * ="icon-sn-"]:hover {
    opacity: .8;
    filter:alpha(opacity=80);
}

.btn-sn-google {
    background:#4285F4;
}

.btn-sn-google:hover, .btn-sn-google:active, .btn-sn-google:focus {
    background:#2a75f3
}

.btn-sn-github {
    background:#333
}

.btn-sn-github:hover, .btn-sn-github:active, .btn-sn-github:focus {
    background:#262626
}

.btn-sn-weibo {
    background:#E90D24
}

.btn-sn-weibo:hover, .btn-sn-weibo:active, .btn-sn-weibo:focus {
    background:#d10c20
}

.btn-sn-qq {
    background:#0098E6
}

.btn-sn-qq:hover, .btn-sn-qq:active, .btn-sn-qq:focus {
    background:#0087cd
}

.btn-sn-twitter {
    background:#50ABF1
}

.btn-sn-twitter:hover, .btn-sn-twitter:active, .btn-sn-twitter:focus {
    background:#38a0ef
}

.btn-sn-facebook {
    background:#4862A3
}

.btn-sn-facebook:hover, .btn-sn-facebook:active, .btn-sn-facebook:focus {
    background:#405791
}

.btn-sn-renren {
    background:#197BC8
}

.btn-sn-renren:hover, .btn-sn-renren:active, .btn-sn-renren:focus {
    background:#166db1
}

.btn-sn-tqq {
    background:#1F9ED2
}

.btn-sn-tqq:hover, .btn-sn-tqq:active, .btn-sn-tqq:focus {
    background:#1c8dbc
}

.btn-sn-douban {
    background:#279738
}

.btn-sn-douban:hover, .btn-sn-douban:active, .btn-sn-douban:focus {
    background:#228330
}

.btn-sn-weixin {
    background:#00B500
}

.btn-sn-weixin:hover, .btn-sn-weixin:active, .btn-sn-weixin:focus {
    background:#009c00
}

.btn-sn-dotted {
    background:#eee
}

.btn-sn-dotted:hover, .btn-sn-dotted:active, .btn-sn-dotted:focus {
    background:#e1e1e1
}

.btn-sn-site {
    background:#00B500
}

.btn-sn-site:hover, .btn-sn-site:active, .btn-sn-site:focus {
    background:#009c00
}

.btn-sn-linkedin {
    background:#0077B9
}

.btn-sn-linkedin:hover, .btn-sn-linkedin:active, .btn-sn-linkedin:focus {
    background: #0067a0
}

[class * ="btn-sn-"], [class * ="btn-sn-"]:hover, [class * ="btn-sn-"]:active, [class * ="btn-sn-"]:focus {
    border: none;
    color:#fff
}

.btn-sn-more {
    padding: 0;
    box-shadow:none
}

.btn-sn-more:hover, .btn-sn-more:active {
    box-shadow: none
}

[class * ="btn-sn-"] [class * ="icon-sn-"] {
    background-color:transparent
}

.icon-sn-google {
    background-position:0px -28px;
}
.icon-sn-weixin {
    background-position:-252px -28px;
    display: inline-block;
    background-image: url(../assets/images/icon-sn.svg);
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;
    vertical-align: middle;
    -moz-background-size: auto 56px;
    -o-background-size: auto 56px;
    -webkit-background-size: auto 56px;
    background-size: auto 56px;
}
</style>