(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"14ae":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getPreOrderById=o,t.addConfirmOrder=a,t.payConfirm=d,t.findAllOrders=s,t.cancelOrder=u,t.receiveDone=c,t.deleteOrder=l;var i=n(r("336b"));function o(e){return(0,i.default)({url:"/lejuClient/order/getPreOrderById/".concat(e)})}function a(e){return(0,i.default)({url:"/lejuClient/order/addConfirmOrder",method:"post",data:e})}function d(e){return(0,i.default)({url:"/lejuClient/order/payConfirm",method:"post",data:e})}function s(){return(0,i.default)({url:"/lejuClient/order/findAllOrders"})}function u(e){return(0,i.default)({url:"/lejuClient/order/cancelOrder/".concat(e),method:"post"})}function c(e){return(0,i.default)({url:"/lejuClient/order/receiveDone",method:"post",data:e})}function l(e){return(0,i.default)({url:"/lejuClient/order/deleteOrder/".concat(e),method:"delete"})}},"167e":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n="https://leju.bufan.cloud";var i=n;t.default=i},"215f":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},methods:{checkLogin:function(){var e=uni.getStorageSync("leju-token");return!!e||(uni.showModal({title:"登录提示",content:"暂未登录,是否跳转到登录界面",success:function(e){e.confirm&&uni.navigateTo({url:"/pages/mine/login/login"})}}),!1)}}},i=n;t.default=i},"2a36":function(e,t,r){var n=r("f6fc");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("35e18ea3",n,!0,{sourceMap:!1,shadowMode:!1})},"336b":function(e,t,r){"use strict";var n=r("4ea4");r("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("167e")),o=function(e){return new Promise((function(t,r){uni.request({url:i.default+e.url,method:e.method,header:{token:uni.getStorageSync("leju-token")},data:e.data,timeout:5e3,success:function(e){e.data.success?t(e.data):20002==e.data.code?(uni.clearStorage(),uni.showModal({title:"登录提示",content:"登录已失效，是否重新登录",success:function(e){e.confirm&&uni.navigateTo({url:"/pages/mine/login/login"})}})):uni.showToast({title:e.data.message,icon:"none"})},fail:function(e){r(e)}})}))},a=o;t.default=a},"40c6":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"order"},[r("v-uni-view",{staticClass:"navBar"},e._l(e.navList,(function(t,n){return r("v-uni-view",{key:t.id,staticClass:"nav-item",class:{active:n==e.current},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleNav(n)}}},[e._v(e._s(t.label))])})),1),4!=e.current?r("v-uni-view",{staticClass:"orderList"},e._l(e.list,(function(t){return r("v-uni-view",{key:t.order.id,staticClass:"order-card"},[r("v-uni-view",{staticClass:"order-title"},[r("v-uni-view",{staticClass:"orderSn"},[e._v("订单编号："+e._s(t.order.orderSn))]),r("v-uni-view",{staticClass:"status"},[e._v(e._s(e._f("statusText")(t.order.status)))])],1),e._l(t.items,(function(t){return r("v-uni-view",{key:t.id,staticClass:"sku-block"},[r("v-uni-image",{staticClass:"img",attrs:{src:t.productPic,mode:""}}),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"p1"},[r("v-uni-text",[e._v(e._s(t.productName))]),r("v-uni-text",[e._v("￥"+e._s(t.productPrice)+"元")])],1),r("v-uni-view",{staticClass:"p2"},[r("v-uni-text",[e._v("编号："+e._s(t.id))]),r("v-uni-text",[e._v("x "+e._s(t.productQuantity))])],1),r("v-uni-view",{staticClass:"p3"},[e._v("规格："+e._s(e._f("filterGoods")(t.productAttr)))]),2==e.current?r("v-uni-view",{staticClass:"p4"},[t.isReturn?r("v-uni-text",{staticClass:"returning"},[e._v("退货中")]):r("v-uni-text",{on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.rejectGoods(t.orderId,t.id)}}},[e._v("退货")])],1):e._e()],1)],1)})),r("v-uni-view",{staticClass:"totalPrice"},[r("v-uni-text",[e._v("时间："+e._s(t.order.createTime))]),r("v-uni-text",[e._v("合计：￥"+e._s(t.order.totalPrice))])],1),r("v-uni-view",{staticClass:"btns"},[0==e.current?r("v-uni-view",{staticClass:"btn",on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.cancelOrder(t.order.id)}}},[e._v("取消订单")]):e._e(),0==e.current?r("v-uni-view",{staticClass:"btn",on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.goPayment(t.order.id)}}},[e._v("付款")]):e._e(),2==e.current?r("v-uni-view",{staticClass:"btn",on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.confirmReceipt(t.order.id)}}},[e._v("确认收货")]):e._e(),3==e.current?r("v-uni-view",{staticClass:"btn del",on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.deleteOrder(t.order.id)}}},[e._v("订单已关闭，删除记录")]):e._e()],1)],2)})),1):r("v-uni-view",{staticClass:"returnOrder orderList"},e._l(e.returnList,(function(t){return r("v-uni-view",{key:t.id,staticClass:"order-card"},[r("v-uni-view",{staticClass:"order-title"},[r("v-uni-view",{staticClass:"orderSn"},[e._v("订单编号："+e._s(t.orderSn))]),r("v-uni-view",{staticClass:"status",class:{red:2==t.status||3==t.status}},[e._v(e._s(e._f("orderProcessText")(t.status)))])],1),r("v-uni-view",{staticClass:"sku-block"},[r("v-uni-image",{staticClass:"img",attrs:{src:t.productPic,mode:""}}),r("v-uni-view",{staticClass:"info"},[r("v-uni-view",{staticClass:"p1"},[r("v-uni-text",[e._v(e._s(t.productName))]),r("v-uni-text",[e._v("￥"+e._s(t.productPrice)+"元")])],1),r("v-uni-view",{staticClass:"p2"},[r("v-uni-text",[e._v("编号："+e._s(t.orderItemId))]),r("v-uni-text",[e._v("x "+e._s(t.productCount))])],1),r("v-uni-view",{staticClass:"p3"},[e._v("规格："+e._s(e._f("filterGoods")(t.productAttr)))])],1)],1),r("v-uni-view",{staticClass:"totalPrice"},[r("v-uni-text",[e._v("时间："+e._s(t.createTime))]),r("v-uni-text",[e._v("合计：￥"+e._s(t.productPrice*t.productCount))])],1)],1)})),1)],1)},o=[]},"49c0":function(e,t,r){"use strict";r.r(t);var n=r("40c6"),i=r("f16f");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("8a1b");var a,d=r("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"75213af4",null,!1,n["a"],a);t["default"]=s.exports},"8a1b":function(e,t,r){"use strict";var n=r("2a36"),i=r.n(n);i.a},"8d17":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getCompanyAddrss=o,t.addOrderReturnApply=a,t.orderReturnApplys=d;var i=n(r("336b"));function o(){return(0,i.default)({url:"/lejuClient/orderReturn/getCompanyAddrss"})}function a(e){return(0,i.default)({url:"/lejuClient/orderReturn/addOrderReturnApply",method:"post",data:e})}function d(){return(0,i.default)({url:"/lejuClient/orderReturn/orderReturnApplys"})}},add8:function(e,t,r){"use strict";var n=r("4ea4");r("99af"),r("4de4"),r("4160"),r("13d5"),r("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r("14ae"),o=r("8d17"),a=(r("cf4a"),n(r("215f"))),d={mixins:[a.default],data:function(){return{current:0,orderList:[],returnList:[],navList:[{label:"待付款",id:1},{label:"已付款",id:2},{label:"已发货",id:3},{label:"已收货",id:4},{label:"售后",id:5}]}},filters:{filterGoods:function(e){if("string"==typeof e){var t=JSON.parse(e);return t.reduce((function(e,t){return e+t.key+":"+t.value+"   "}),"")}return e.reduce((function(e,t){return e+t.key+":"+t.value+"   "}),"")},statusText:function(e){return 0==e?"未付款":1==e?"已付款,等待发货":2==e?"已发货":3==e?"已收货":4==e?"已退单":"无效订单"},orderProcessText:function(e){var t="等待处理";switch(JSON.stringify(e)){case"0":t="等待处理";break;case"1":t="等待用户发货";break;case"2":t="已退款";break;case"3":t="已拒绝";break;case"9":t="拒绝退货";break;default:break}return t}},computed:{list:function(){var e=this;return this.orderList.filter((function(t){return 3==e.current?3==t.order.status||4==t.order.status:t.order.status==e.current}))}},onLoad:function(e){this.checkLogin()&&(this.current=e.type,this.init())},methods:{init:function(){var e=this;(0,i.findAllOrders)().then((function(t){console.log(t),e.orderList=t.data.orderList,t.data.orderList.forEach((function(e){e.order.totalPrice=e.items.reduce((function(e,t){return e+t.productPrice*t.productQuantity}),0)}))})),(0,o.orderReturnApplys)().then((function(t){console.log(t),e.returnList=t.data.items}))},toggleNav:function(e){this.current=e},cancelOrder:function(e){var t=this;(0,i.cancelOrder)(e).then((function(e){t.init()}))},goPayment:function(e){uni.navigateTo({url:"../order/confirmOrder/confirmOrder?orderId=".concat(e)})},confirmReceipt:function(e){(0,i.receiveDone)({orderId:e}).then((function(e){console.log(e)}))},rejectGoods:function(e,t){uni.navigateTo({url:"./returnGoods/returnGoods?orderId=".concat(e,"&&id=").concat(t)})},deleteOrder:function(e){(0,i.deleteOrder)(e).then((function(e){console.log(e)}))}}};t.default=d},cf4a:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.productDetail=o,t.addCart=a,t.addPreOrder=d;var i=n(r("336b"));function o(e){return(0,i.default)({url:"/lejuClient/product/productDetail/".concat(e)})}function a(e){return(0,i.default)({url:"/lejuClient/cart/addCart",method:"post",data:e})}function d(e){return(0,i.default)({url:"/lejuClient/order/addPreOrder",method:"post",data:e})}},f16f:function(e,t,r){"use strict";r.r(t);var n=r("add8"),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},f6fc:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.order .navBar[data-v-75213af4]{width:100%;overflow-y:auto;position:fixed;left:0;top:0;top:%?80?%;display:flex;justify-content:space-around;width:100%;height:%?62?%;padding-top:%?14?%;background-color:#354e44;color:#fff;font-size:%?30?%;line-height:%?62?%;z-index:999}.order .navBar .nav-item.active[data-v-75213af4]{border-bottom:%?2?% solid #dd524d;color:#dd524d}.order .orderList[data-v-75213af4]{margin-top:%?130?%}.order .orderList .order-card[data-v-75213af4]{width:%?672?%;box-sizing:border-box;padding:%?36?%;border-radius:%?24?%;background-color:#fff;margin:%?30?% auto;font-size:%?24?%;color:#3e3e3e}.order .orderList .order-card .order-title[data-v-75213af4]{display:flex;justify-content:space-between;align-items:center;border-bottom:%?2?% solid #f1ece7;padding-bottom:%?30?%}.order .orderList .order-card .order-title .red[data-v-75213af4]{color:red}.order .orderList .order-card .sku-block[data-v-75213af4]{display:flex;justify-content:flex-start;align-items:center;border-bottom:%?2?% solid #f1ece7;padding:%?30?% 0}.order .orderList .order-card .sku-block .img[data-v-75213af4]{width:%?162?%;height:%?162?%;flex-shrink:0;background-color:#8f8f94}.order .orderList .order-card .sku-block .info[data-v-75213af4]{width:%?470?%;margin-left:%?28?%}.order .orderList .order-card .sku-block .info .p1[data-v-75213af4]{font-size:%?26?%;line-height:%?74?%;display:flex;justify-content:space-between;align-items:center}.order .orderList .order-card .sku-block .info .p2[data-v-75213af4]{font-size:%?22?%;color:#8d8d8d;line-height:%?30?%;margin-top:%?4?%;display:flex;justify-content:space-between;align-items:center}.order .orderList .order-card .sku-block .info .p3[data-v-75213af4]{font-size:%?22?%;color:#8d8d8d;line-height:%?30?%;margin-top:%?4?%}.order .orderList .order-card .sku-block .info .p4[data-v-75213af4]{text-align:right;margin-top:%?10?%;color:#8d8d8d;text-decoration:underline}.order .orderList .order-card .sku-block .info .p4 .returning[data-v-75213af4]{color:red}.order .orderList .order-card .totalPrice[data-v-75213af4]{font-size:%?26?%;line-height:%?36?%;text-align:right;margin-top:%?14?%;display:flex;justify-content:space-between}.order .orderList .order-card .btns[data-v-75213af4]{margin-top:%?20?%;display:flex;justify-content:flex-end;align-items:center}.order .orderList .order-card .btns .btn[data-v-75213af4]{width:%?124?%;height:%?50?%;border:%?2?% solid #2d4f43;font-size:%?26?%;border-radius:%?10?%;color:#2d4f43;text-align:center;line-height:%?50?%;margin-left:%?32?%}.order .orderList .order-card .btns .btn.del[data-v-75213af4]{width:%?300?%;border-color:#dd524d}',""]),e.exports=t}}]);