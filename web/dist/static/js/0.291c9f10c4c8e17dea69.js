webpackJsonp([0],{Fczy:function(t,e){},U7fy:function(t,e){},aLMN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),r=a("exGp"),i=a.n(r),c=a("Dd8w"),o=a.n(c),l=a("NYxO"),m={props:["id","commentsList"],data:function(){return{ruleForm:{nickname:"",email:"",content:""},rules:{nickname:[{validator:function(t,e,a){""===e?a(new Error("请输入昵称")):a()},trigger:"blur"}],email:[{validator:function(t,e,a){""===e?a(new Error("请输入邮箱")):/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)?a():a(new Error("请输入正确的邮箱"))},trigger:"blur"}],content:[{validator:function(t,e,a){""===e?a(new Error("请输入评论内容")):a()},trigger:"blur"}]}}},computed:o()({},Object(l.d)({userInfo:function(t){return t.user.userInfo}})),created:function(){},methods:o()({},Object(l.b)({createComments:"comments/createComments"}),{changePage:function(t){var e=this;return i()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.$emit("changeCommentsPage",t);case 1:case"end":return a.stop()}},a,e)}))()},resetForm:function(t){this.$refs[t].resetFields()},showMessage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$message({message:t,type:e})},submitForm:function(t){var e,a=this;this.$refs[t].validate((e=i()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,a.createArticleComments();case 3:t.next=7;break;case 5:return a.showMessage("请完善表单","error"),t.abrupt("return",!1);case 7:case"end":return t.stop()}},t,a)})),function(t){return e.apply(this,arguments)}))},createArticleComments:function(){var t=this;return i()(s.a.mark(function e(){var a,n,r,i,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.ruleForm,n=a.content,r=a.nickname,i=a.email,e.next=3,t.createComments({email:i,nickname:r,content:n,article_id:t.id});case 3:c=e.sent,t.$message({message:"评论成功",type:"success"}),t.resetForm("ruleForm"),o=c.data.data,t.$emit("updateComments",o);case 8:case"end":return e.stop()}},e,t)}))()}})},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("section",{staticClass:"comments-create"},[a("h1",{staticClass:"comments-title"},[t._v("欢迎评论")]),t._v(" "),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-position":"left","label-width":"50px"}},[a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入您的昵称"},model:{value:t.ruleForm.nickname,callback:function(e){t.$set(t.ruleForm,"nickname",e)},expression:"ruleForm.nickname"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入您的邮箱（不会被公开）"},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("mavon-editor",{staticClass:"mavon-editor--box",attrs:{autofocus:!1,placeholder:"请输入评论内容",ishljs:!0},model:{value:t.ruleForm.content,callback:function(e){t.$set(t.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("提交评论")])],1)],1)],1),t._v(" "),t.commentsList&&t.commentsList.data.length>0?a("section",{staticClass:"comments-list"},[a("h1",{staticClass:"comments-title"},[t._v("评论列表")]),t._v(" "),a("ul",{staticClass:"comments-box"},t._l(t.commentsList.data,function(e,n){return a("li",{key:n,staticClass:"comments-item"},[a("div",{staticClass:"comments-item-username"},[a("i",{staticClass:"icon el-icon-chat-dot-round"}),t._v(" 来自「"+t._s(e.nickname)+"」的评论：\n        ")]),t._v(" "),a("div",{staticClass:"comments-item-content"},[a("mavon-editor",{staticStyle:{"min-height":"0",width:"100%"},attrs:{ishljs:!0,defaultOpen:"preview",editable:!1,subfield:!1,toolbarsFlag:!1},model:{value:e.content,callback:function(a){t.$set(e,"content",a)},expression:"item.content"}})],1)])}),0),t._v(" "),t.commentsList&&t.commentsList.meta?a("section",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-count":t.commentsList.meta.count,"current-page":t.commentsList.meta.current_page,total:t.commentsList.meta.total},on:{"current-change":t.changePage}})],1):t._e()]):t._e()])},staticRenderFns:[]};var d={components:{VComments:a("VU/8")(m,u,!1,function(t){a("Fczy"),a("U7fy")},"data-v-027c0f52",null).exports},data:function(){return{id:this.$route.params.id,detail:null}},created:function(){this.id?this.getArticle():this.$router.push("/article")},methods:o()({},Object(l.b)({getArticleDetail:"article/getArticleDetail",getCommentsList:"comments/getCommentsList",createComments:"comments/createComments"}),{updateComments:function(t){this.detail.comments_list.data.unshift(t)},changeCommentsPage:function(t){var e=this;return i()(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getCommentsList({article_id:e.id,page:t});case 2:n=a.sent,e.detail.comments_list=n.data.data;case 4:case"end":return a.stop()}},a,e)}))()},getArticle:function(){var t=this;return i()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getArticleDetail(t.id);case 2:a=e.sent,t.detail=a.data.data;case 4:case"end":return e.stop()}},e,t)}))()}})},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.detail?a("section",{staticClass:"container"},[a("section",{staticClass:"content"},[a("h1",{staticClass:"article-title"},[t._v(t._s(t.detail.title))]),t._v(" "),a("div",{staticClass:"article-info"},[t.detail.category_detail?a("p",{staticClass:"article-category"},[t._v("\n        "+t._s(t.detail.category_detail.name)+"\n      ")]):t._e(),t._v(" "),a("p",{staticClass:"article-author"},[t._v(" by "+t._s(t.detail.author))]),t._v(" "),a("p",{staticClass:"article-browser"},[t._v("阅读 "+t._s(t.detail.browse)+" 次\n      ")]),a("p",{staticClass:"article-browser"},[t._v("评论 "+t._s(t.detail.comments_list.data.length)+" 次")]),t._v(" "),a("p",{staticClass:"article-created-at"},[t._v(t._s(t.detail.created_at))])]),t._v(" "),a("div",{staticClass:"article-timer"},[a("p",{staticClass:"article-created-at"},[t._v(t._s(t.detail.created_at))])]),t._v(" "),a("div",{staticClass:"article-detail",attrs:{id:"article-detail"}},[a("mavon-editor",{staticStyle:{height:"100%"},attrs:{ishljs:!0,defaultOpen:"preview",editable:!1,subfield:!1,toolbarsFlag:!1},model:{value:t.detail.content,callback:function(e){t.$set(t.detail,"content",e)},expression:"detail.content"}})],1),t._v(" "),a("div",{staticClass:"v-comments"},[a("v-comments",{attrs:{commentsList:t.detail.comments_list,id:t.id},on:{changeCommentsPage:t.changeCommentsPage,updateComments:t.updateComments}})],1)])]):t._e()},staticRenderFns:[]};var p=a("VU/8")(d,f,!1,function(t){a("lMeE"),a("ikCB")},"data-v-d224aa0e",null);e.default=p.exports},ikCB:function(t,e){},lMeE:function(t,e){}});
//# sourceMappingURL=0.291c9f10c4c8e17dea69.js.map