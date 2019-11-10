<template>
  <div
    class="sfmodal modal in"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mySmallModalLabel"
    aria-hidden="true"
    style="display: block; padding-left: 0px;"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
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
                    <label for="username" class="control-label">手机号 或 Email</label>
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
                      onclick="ga(&quot;send&quot;, &quot;event&quot;, &quot;email login button&quot;, &quot;clicked&quot;, &quot;login modal&quot;);"
                    >登录</button>
                  </div>
                </form>
                <div class="text-muted text-center more-login-area">
                  <span class="more-login-words">更多登录方式</span>
                </div>
                <div class="widget-login mb15 text-center">
                  <a
                    href="/user/oauth/google"
                    class
                    onclick="ga(&quot;send&quot;, &quot;event&quot;, &quot;3rd login button&quot;, &quot;clicked&quot;, &quot;login modal&quot;, {media: &quot;google&quot;});"
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
                  <a
                    href="/user/oauth/weixin"
                    >
                    <svg
                      t="1573273511996"
                      class="icon-sn-google"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2780"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
                        fill="#00C800"
                        p-id="2781"
                      />
                      <path
                        d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                        fill="#00C800"
                        p-id="2782"
                      />
                    </svg>
                  </a>
                </div>
                <div class="form-group clearfix">
                  <a
                    class="btn-block btn btn-default pull-right pl20 pr20 SFLogin"
                    onclick="ga(&quot;send&quot;, &quot;event&quot;, &quot;email login button&quot;, &quot;clicked&quot;, &quot;login modal&quot;);"
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
    }
  }
};
</script>

<style>
.modal-open {
    overflow:hidden
}

.modal {
    display: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    outline:0
}

.modal.fade .modal-dialog {
    -webkit-transform: translate3d(0, -25%, 0);
    transform: translate3d(0, -25%, 0);
    -webkit-transition: -webkit-transform 0.3s ease-out;
    -moz-transition: -moz-transform 0.3s ease-out;
    -o-transition: -o-transform 0.3s ease-out;
    transition:transform 0.3s ease-out
}

.modal.in .modal-dialog {
    -webkit-transform: translate3d(0, 0, 0);
    transform:translate3d(0, 0, 0)
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y:auto
}

.modal-dialog {
    position: relative;
    width: auto;
    margin:10px
}
.sfModal-content .row {
    margin:0
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
    outline:0
}

.login-modal {
    position:relative
}

.login-modal .login-vline {
    position: absolute;
    height: 90%;
    border-left: 1px solid #eee;
    left: 50%;
    top:35px
}

.login-modal .login-wrap {
    padding:0 125px
}

@media (max-width: 600px) {
    .login-modal .login-wrap {
        padding:0
    }
}

.login-modal .login-wrap .more-login-area {
    margin-top: 30px;
    margin-bottom: 25px;
    border-bottom: 1px solid #eee;
    position:relative
}

.login-modal .login-wrap .more-login-area .more-login-words {
    position: absolute;
    left: calc(50% - 52px);
    top: -10px;
    padding: 0 10px;
    background:#fff
}

.login-modal .widget-login .btn {
    margin-bottom: 5px;
    padding:0
}
.close {
    float: right;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .2;
    filter:alpha(opacity=20)
}

.close:hover, .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: .5;
    filter:alpha(opacity=50)
}

button.close {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance:none
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    min-height:16.42858px
}
.modal-header .close {
    margin-top:-2px
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border:0
}

.sr-only-focusable:active, .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip:auto
}

.mt15, .mt-15 {
    margin-top:15px !important
}
.form-group {
    margin-bottom:15px
}
.form-inline .control-label {
        margin-bottom: 0;
        vertical-align:middle
    }
.input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom:0
}
.clearfix:before, .fmt:before, .clearfix:after, .fmt:after {
    content: " ";
    display:table
}

.clearfix:after, .fmt:after {
    clear:both
}
.icon-sn-google {
    background-position:0px -28px
}
</style>