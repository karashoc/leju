(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-find-articleInfo-articleInfo"],{"013e":function(t,e,n){"use strict";var r=n("8b8b"),a=n.n(r);a.a},"0bba":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("e8d2"),a={data:function(){return{articleInfo:{}}},onLoad:function(t){var e=this;(0,r.productArticle)(t.articleId).then((function(t){console.log(t),e.articleInfo=t.data.productArticle}))}};e.default=a},"167e":function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r="https://leju.bufan.cloud";var a=r;e.default=a},"32e7":function(t,e,n){"use strict";n.r(e);var r=n("bc1e"),a=n("b58c");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("013e");var c,o=n("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"e3f3d7b2",null,!1,r["a"],c);e["default"]=u.exports},"336b":function(t,e,n){"use strict";var r=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("167e")),i=function(t){return new Promise((function(e,n){uni.request({url:a.default+t.url,method:t.method,header:{token:uni.getStorageSync("leju-token")},data:t.data,timeout:5e3,success:function(t){t.data.success?e(t.data):20002==t.data.code?(uni.clearStorage(),uni.showModal({title:"登录提示",content:"登录已失效，是否重新登录",success:function(t){t.confirm&&uni.navigateTo({url:"/pages/mine/login/login"})}})):uni.showToast({title:t.data.message,icon:"none"})},fail:function(t){n(t)}})}))},c=i;e.default=c},"8b8b":function(t,e,n){var r=n("e40a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("26b96aa8",r,!0,{sourceMap:!1,shadowMode:!1})},b58c:function(t,e,n){"use strict";n.r(e);var r=n("0bba"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},bc1e:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"articleInfo"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.articleInfo.title))]),n("v-uni-view",{staticClass:"author"},[t._v("作者："+t._s(t.articleInfo.author))]),n("v-uni-view",{staticClass:"time"},[t._v("时间："+t._s(t.articleInfo.modifyTime))]),n("v-uni-view",{staticClass:"summary"},[t._v("概要描述："+t._s(t.articleInfo.summary))]),n("v-uni-image",{staticClass:"cover-img",attrs:{src:t.articleInfo.coverImg,mode:""}})],1)},i=[]},e40a:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.articleInfo[data-v-e3f3d7b2]{padding:%?60?%}.articleInfo .title[data-v-e3f3d7b2]{font-size:%?48?%;color:#000;font-weight:700}.articleInfo .author[data-v-e3f3d7b2]{color:#333}.articleInfo .time[data-v-e3f3d7b2]{color:#333}.articleInfo .cover-img[data-v-e3f3d7b2]{width:100%;margin:15px auto}',""]),t.exports=e},e8d2:function(t,e,n){"use strict";var r=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.findArticleByPage=i,e.findBrandsByPage=c,e.productArticle=o;var a=r(n("336b"));function i(t,e){return(0,a.default)({url:"/lejuClient/productArticle/findArticleByPage/".concat(t,"/").concat(e)})}function c(t,e){return(0,a.default)({url:"/lejuClient/brand/findBrandsByPage/".concat(t,"/").concat(e)})}function o(t){return(0,a.default)({url:"/lejuClient/productArticle/productArticle/".concat(t)})}}}]);