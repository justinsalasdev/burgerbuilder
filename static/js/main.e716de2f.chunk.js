(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],[,function(e,t,n){"use strict";n.d(t,"w",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"v",(function(){return o})),n.d(t,"t",(function(){return i})),n.d(t,"u",(function(){return u})),n.d(t,"s",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"A",(function(){return f})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return p})),n.d(t,"r",(function(){return b})),n.d(t,"n",(function(){return v})),n.d(t,"h",(function(){return E})),n.d(t,"k",(function(){return h})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return O})),n.d(t,"z",(function(){return N})),n.d(t,"y",(function(){return k})),n.d(t,"x",(function(){return S})),n.d(t,"m",(function(){return I})),n.d(t,"q",(function(){return _})),n.d(t,"o",(function(){return T})),n.d(t,"p",(function(){return j})),n.d(t,"l",(function(){return D}));var a="SET_INGREDIENTS",r="FETCH_INGREDIENTS_FAILED",c="ADD_INGREDIENT",o="REMOVE_INGREDIENT",i="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="FETCH_START",d="FETCH_STORE",m="FETCH_FAIL",f="UDPATE_ORDER_STATUS",g="LOGIN_START",p="LOGIN_STORE",b="PROFILE_STORE",v="PROFILE_FAIL",E="LOGIN_FAIL",h="LOGOUT",y="LOGIN_EXPIRED",O="LOGIN_EXPIRED_ACK",N="SIGNUP_START",k="SIGNUP_END",S="SIGNUP_CONFLICT",I="PROFILE_EDIT",_="PROFILE_START_SAVE",T="PROFILE_STARTEND",j="PROFILE_SAVE_FAILED",D="PROFILE_EDIT_END"},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"j",(function(){return u})),n.d(t,"h",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return k})),n.d(t,"g",(function(){return O})),n.d(t,"i",(function(){return N})),n.d(t,"a",(function(){return y})),n.d(t,"k",(function(){return I})),n.d(t,"m",(function(){return D})),n.d(t,"l",(function(){return _})),n.d(t,"c",(function(){return j}));var a,r=n(1),c=n(6),o=n.n(c),i=function(e){return{type:r.a,ingredient:e}},u=function(e){return{type:r.v,ingredient:e}},l=function(){return function(e){return o.a.get("https://react-burger-builder-12ae6.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.w,ingredients:n}))}),(function(t){var n;e((n="Can't initialize burger builder app :(",{type:r.c,errorMessage:n}))})).catch((function(e){alert(e)}))}},s=n(4),d=function(e){return{type:r.A,status:e}},m=function(e){return{type:r.b,fetchMessage:e}},f=function(e,t){return function(n){n({type:r.d});var a="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"'),c="https://react-burger-builder-12ae6.firebaseio.com/orders.json".concat(a);o.a.get(c).then((function(e){var t,a=[];for(var c in e.data)a.unshift(Object(s.a)(Object(s.a)({},e.data[c]),{},{key:c}));n((t=a,{type:r.e,orders:t})),n(d("updated"))}),(function(){n(m("Can't retrieve your orders :("))})).catch((function(e){return n(m("Something went wrong. Unable to fetch your orders"))}))}},g=function(e){return{type:r.s,checkOutMessage:e}},p=function(e,t,n){return function(a){var c="https://react-burger-builder-12ae6.firebaseio.com/orders.json?auth="+t;a({type:r.t}),o.a.post(c,e).then((function(){var e;a((e="Thank you for purchasing!",{type:r.u,checkOutMessage:e})),a(d("outdated")),n(!0)}),(function(){a(g("Failed to place your order :( Please try again")),n(!0)})).catch((function(){a(g("Network Error! Failed to place your order :("))}))}},b=function(e,t){return{type:r.j,idToken:e,userId:t}},v=function(e){return function(t){a=setTimeout((function(){t(O("auto"))}),1e3*e)}},E=function(e){return{type:r.r,userData:e}},h=function(e){return{type:r.n,errorMessage:e}},y=function(){return{type:r.g}},O=function(e){return clearTimeout(a),localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),localStorage.removeItem("userData"),{type:r.k,method:e}},N=function(e){return function(t){if(e){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)t(O("auto"));else{var a=localStorage.getItem("userId"),c=JSON.parse(localStorage.getItem("userData")),o=(n.getTime()-(new Date).getTime())/1e3;t(E(c)),t(b(e,a)),t(v(o)),t({type:r.f})}}}},k=function(e,t){var n=null,a=null,c=null;return function(i){i({type:r.i});var u="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE");o.a.post(u,Object(s.a)(Object(s.a)({},e),{},{returnSecureToken:!0})).then((function(e){n=e.data.localId,a=e.data.idToken,c=e.data.expiresIn,function(e,t){var n="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"'),a="https://react-burger-builder-12ae6.firebaseio.com/users.json".concat(n);return o.a.get(a)}(a,n).then((function(e){var t=new Date((new Date).getTime()+new Date(1e3*c).getTime());localStorage.setItem("token",a),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",n);var r={};for(var o in e.data)Object.assign(r,Object(s.a)(Object(s.a)({},e.data[o]),{},{id:o}));localStorage.setItem("userData",JSON.stringify(r)),i(b(a,n)),i(v(c)),i(E(r))}),(function(){i(h("Failed to login due to some errors :(")),t(!0)}))}),(function(e){var t=e.response.data.error.message;i(function(e){return{type:r.h,conflictMessage:e}}(t))})).catch((function(){i(h("Network Error! Failed to login :(")),t(!0)}))}},S=function(e){return{type:r.y,endType:e}},I=function(e,t){var n=e.email,a=e.password,c=e.name,i=e.country,u=e.zipCode,l=e.contactNumber,d=null,m={email:n,password:a},f={name:c,country:i,zipCode:u,contactNumber:l};return function(e){e({type:r.z}),function(e){var t="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE");return o.a.post(t,Object(s.a)(Object(s.a)({},e),{},{returnSecureToken:!0}))}(m).then((function(n){var a=n.data.idToken,r=n.data.localId;d=a,function(e,t){var n="?auth=".concat(t);return o.a.post("https://react-burger-builder-12ae6.firebaseio.com/users.json".concat(n),e)}(Object(s.a)(Object(s.a)({},f),{},{userId:r}),a).then((function(){e(S("userSaved")),t(!0)}),(function(n){(function(e){var t="https://identitytoolkit.googleapis.com/v1/accounts:delete?key=".concat("AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE");return o.a.post(t,{idToken:e})})(d).then((function(){e(S("signupFailed")),t(!0)}),(function(){e(S("userNotSaved")),t(!0)}))}))}),(function(t){var n=t.response.data.error.message;e(function(e){return{type:r.x,conflictMessage:e}}(n))})).catch((function(){e(S("signupFailed")),t(!0)}))}},_=function(){return{type:r.m}},T=function(e){return{type:r.p,errorMessage:e}},j=function(){return{type:r.l}},D=function(e,t,n,a,c,i){var u={method:"post",headers:{"X-HTTP-Method-Override":"PATCH"},params:{auth:a}},l="https://react-burger-builder-12ae6.firebaseio.com/users/".concat(t,".json");return function(a){a({type:r.q}),o.a.post(l,e,u).then((function(e){var c=Object(s.a)(Object(s.a)({},e.data),{},{userId:n,id:t});localStorage.setItem("userData",JSON.stringify(c)),a(E(e.data)),a({type:r.o}),i.replace("/profile")}),(function(){a(T("Failed to save changes")),c(!0)})).catch((function(){a(T("Failed to save changes")),c(!0)}))}}},function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(91);t.a=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",null),r.a.createElement("div",null))}},,,,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=(n(90),n(25));t.a=function(e){var t=e.closeAlert;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{clicked:t}),r.a.createElement("div",{className:"alert"},e.children))}},function(e,t,n){"use strict";var a=n(14),r=n(0);t.a=function(e){var t=Object(r.useState)(e),n=Object(a.a)(t,2);return[n[0],n[1]]}},,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(85);t.a=function(e){var t=e.clicked;return r.a.createElement("div",{className:"backdrop",onClick:t})}},function(e,t,n){},,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(93);t.a=function(e){var t=e.children,n=e.acknowledgeAlert;return r.a.createElement("div",{className:"error-prompt"},r.a.createElement("p",{className:"error-prompt__toolkit"},t),r.a.createElement("button",{type:"button",className:"button--success error-prompt__button",onClick:n},"OK"))}},,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";var a=n(49),r=n(0),c=n.n(r),o=(n(86),n(34),n(87),function(e){var t=null;switch(e.type){case"bread-bottom":t=c.a.createElement("div",{className:"bread-bottom"});break;case"bread-top":t=c.a.createElement("div",{className:"bread-top"},c.a.createElement("div",{className:"seeds1"}),c.a.createElement("div",{className:"seeds2"}));break;case"meat":t=c.a.createElement("div",{className:"meat"});break;case"cheese":t=c.a.createElement("div",{className:"cheese"});break;case"bacon":t=c.a.createElement("div",{className:"bacon"});break;case"salad":t=c.a.createElement("div",{className:"salad"});break;default:t=null}return t});t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(a.a)(Array(e.ingredients[t])).map((function(e,n){return c.a.createElement(o,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=c.a.createElement("p",{className:"burger__instruction"},"FEEL FREE TO ADD INGREDIENTS")),c.a.createElement("div",{className:"burger scrollbar"},c.a.createElement(o,{type:"bread-top"}),t,c.a.createElement(o,{type:"bread-bottom"}))}},,function(e,t,n){e.exports=n.p+"static/media/spatula.849a5a23.svg"},function(e,t,n){e.exports=n.p+"static/media/profile.ff190b2d.svg"},function(e,t,n){e.exports=n.p+"static/media/notes.d0b42f7c.svg"},,,,function(e,t,n){e.exports=n(94)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=(n(56),n(14)),u=(n(57),n(34),n(58),n(59),function(e){return r.a.createElement("div",{className:"logo"})}),l=(n(60),n(61),n(3)),s=n(15),d=n(12),m=n(5),f=n(45),g=n.n(f),p=n(46),b=n.n(p),v=n(47),E=n.n(v),h=function(e){var t=e.closeSideDrawer,n=Object(m.b)(),a=Object(l.g)(),c=null!==Object(m.c)((function(e){return e.login.idToken}));return r.a.createElement("ul",{className:"navigation-items",onClick:t},r.a.createElement("li",null,r.a.createElement(s.c,{to:"/",exact:!0,className:"link--nav",activeClassName:"active"},r.a.createElement("img",{className:"navigation-items__img",src:g.a,alt:"to burger builder"}),r.a.createElement("span",{className:"navigation-items__text"},"Burger Builder"))),c?r.a.createElement("li",null,r.a.createElement(s.c,{to:"/profile",exact:!0,className:"link--nav",activeClassName:"active"},r.a.createElement("img",{className:"navigation-items__img",src:b.a,alt:"to your profile"}),r.a.createElement("span",{className:"navigation-items__text"},"Profile"))):null,c?r.a.createElement("li",null,r.a.createElement(s.c,{to:"/orders",exact:!0,className:"link--nav",activeClassName:"active"},r.a.createElement("img",{className:"navigation-items__img",src:E.a,alt:"to your order list"}),r.a.createElement("span",{className:"navigation-items__text"},"Orders"))):null,c?null:r.a.createElement("li",null,r.a.createElement(s.c,{to:"/login",exact:!0,className:"link--nav",activeClassName:"active"},"Login")),c?r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"link--nav",onClick:function(e){e.preventDefault(),n(d.g("manual")),a.replace("/")}},"Logout")):null)},y=(n(83),function(e){var t=e.toggleSideDrawer;return r.a.createElement("div",{onClick:t,className:"drawertoggle"},r.a.createElement("div",{className:"drawertoggle__bar"}),r.a.createElement("div",{className:"drawertoggle__bar"}),r.a.createElement("div",{className:"drawertoggle__bar"}))}),O=function(e){var t=e.toggleSideDrawer;return r.a.createElement("div",{className:"toolbar"},r.a.createElement(y,{toggleSideDrawer:t}),r.a.createElement(u,null),r.a.createElement("nav",{className:"toolbar__nav"},r.a.createElement(h,null)))},N=(n(84),n(25)),k=function(e){var t=e.sideDrawerOpen,n=e.closeSideDrawer,a=e.isAuthenticated;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(N.a,{clicked:n}):null,r.a.createElement("div",{className:t?"sidedrawer--open":"sidedrawer--close"},r.a.createElement("nav",null,r.a.createElement(h,{side:!0,isAuthenticated:a,closeSideDrawer:n}))))},S=function(e){var t=e.children,n=Object(m.c)((function(e){return null!==e.login.idToken})),c=Object(a.useState)(!1),o=Object(i.a)(c,2),u=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{toggleSideDrawer:function(){l(!u)},isAuthenticated:n}),r.a.createElement(k,{isAuthenticated:n,sideDrawerOpen:u,closeSideDrawer:function(){l(!1)}}),r.a.createElement("main",{className:"main"},t))},I=n(4),_=n(43),T=(n(26),n(88),n(89),function(e){var t=e.label,n=e.removeIngredient,a=e.disabled,c=e.addIngredient;return r.a.createElement("div",{className:"build-control"},r.a.createElement("div",{className:"build-control__label"},t),r.a.createElement("button",{className:"button--less build-control__button",onClick:n,disabled:a},"Less"),r.a.createElement("button",{className:"button--more build-control__button",onClick:c},"More"))}),j=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],D=function(e){var t=e.startOrder,n=e.disabled,a=e.price,c=e.addIngredient,o=e.removeIngredient,i=Object(I.a)({},n),u=!Object.keys(i).map((function(e){return!i[e]})).reduce((function(e,t){return e||t}),!1);return r.a.createElement("div",{className:"build-controls"},r.a.createElement("p",{className:"build-controls__price"},"Current price: ",r.a.createElement("span",null,"$",a)),j.map((function(e){return r.a.createElement(T,{key:e.label,label:e.label,addIngredient:function(){return c(e.type)},removeIngredient:function(){return o(e.type)},disabled:n[e.type]})})),r.a.createElement("button",{className:"button--success build-controls__order",disabled:u,onClick:t},"Order now!"))},w=n(20),A=n(13),F=(n(92),function(e){var t=e.cancelOrder,n=e.goToLogin;return r.a.createElement("div",{className:"order-prompt"},r.a.createElement("p",{className:"order-prompt__toolkit"},"Please login to continue"),r.a.createElement("button",{type:"button",className:"button--failed order-prompt__button",onClick:t},"Cancel"),r.a.createElement("button",{type:"button",className:"button--success order-prompt__button",onClick:n},"Login"))}),M=n(21),R=function(e){var t=Object(m.b)(),n=Object(M.a)(!1),c=Object(i.a)(n,2),o=c[0],u=c[1],l=Object(m.c)((function(e){return e.buildBurger.ingredients})),s=Object(m.c)((function(e){return e.buildBurger.totalPrice.toFixed(2)})),f=Object(m.c)((function(e){return e.buildBurger.errorMessage})),g=Object(m.c)((function(e){return null!==e.login.idToken}));Object(a.useEffect)((function(){l||t(d.e())}),[]);var p=function(){return u(!1)},b=Object(I.a)({},l);for(var v in b)b[v]=b[v]<=0;return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(w.a,{closeAlert:p},r.a.createElement(F,{cancelOrder:p,goToLogin:function(){e.history.push("/login"),u(!1)}})):null,l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{ingredients:l}),r.a.createElement(D,{addIngredient:function(e){return t(d.b(e))},removeIngredient:function(e){return t(d.j(e))},disabled:b,price:s,startOrder:function(){return g&&e.history.push("/checkout")||u(!0)}}))||f&&r.a.createElement("p",{style:{color:"lightgrey"}},f)||r.a.createElement(A.a,null))},C=n(31),P=r.a.lazy((function(){return n.e(9).then(n.bind(null,161))})),L=r.a.lazy((function(){return n.e(4).then(n.bind(null,165))})),x=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,162))})),B=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,166))})),z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,163))})),G=r.a.lazy((function(){return n.e(8).then(n.bind(null,164))})),J=function(e){var t=Object(m.b)(),n=Object(m.c)((function(e){return e.login.idToken})),c=Object(m.c)((function(e){return e.login.timerExpired})),o=Object(M.a)(!1),u=Object(i.a)(o,2),s=u[0],f=u[1],g=localStorage.getItem("token");Object(a.useEffect)((function(){t(d.i(g)),localStorage.setItem("purchaseCount","0")}),[]);var p=function(){f(!1),t(d.a())};Object(a.useEffect)((function(){c&&f(!0)}),[c]);var b=null!==n;return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(w.a,{closeAlert:p},r.a.createElement(C.a,{acknowledgeAlert:p},"You are automatically logged out :( Please login again")):null,r.a.createElement(S,null,r.a.createElement(l.d,null,function(e){return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(l.b,{path:"/checkout",component:P})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(l.b,{path:"/orders",component:L})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(l.b,{path:"/profile-edit",component:z})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(l.b,{path:"/profile",component:G})),r.a.createElement(l.b,{path:"/",exact:!0,component:R}),r.a.createElement(l.a,{to:"/"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(l.b,{path:"/login",component:x})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(A.a,null)},r.a.createElement(l.b,{path:"/signup",component:B})),r.a.createElement(l.b,{path:"/",exact:!0,component:R}),r.a.createElement(l.a,{to:"/"}))}(b))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(16),H=n(1),K={ingredients:null,totalPrice:4,errorMessage:null},Y={salad:.5,cheese:.4,meat:1.3,bacon:.7};function X(e){return JSON.parse(JSON.stringify(e))}var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.w:var n=X(e);return n.ingredients?(n.error=!1,n):(n.ingredients={salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},n.error=!1,n.purchasing=!1,n);case H.c:var a=X(e);return a.errorMessage=t.errorMessage,a;case H.a:var r=X(e);return r.ingredients[t.ingredient]++,r.totalPrice+=Y[t.ingredient],r;case H.v:var c=X(e);return c.ingredients[t.ingredient]--,c.totalPrice-=Y[t.ingredient],c;default:return e}},Q={loading:!1,purchased:!1,checkOutMessage:null};function V(e){return JSON.parse(JSON.stringify(e))}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.t:var n=V(Q);return n.loading=!0,n;case H.u:var a=V(e);return a.loading=!1,a.checkOutMessage=t.checkOutMessage,a;case H.s:var r=V(e);return r.loading=!1,r.checkOutMessage=t.checkOutMessage,r;default:return e}},Z={orders:[],loading:!1,fetchMessage:null,ordersStatus:"outdated"};function $(e){return JSON.parse(JSON.stringify(e))}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.d:var n=$(e);return n.loading=!0,n;case H.e:var a=$(e);return a.orders=t.orders,a.loading=!1,a;case H.A:var r=$(e);return r.ordersStatus=t.status,r;case H.b:var c=$(e);return c.fetchMessage=t.fetchMessage,c.loading=!1,c;default:return e}},te={idToken:null,userId:null,userData:{},conflictMessage:null,errorMessage:null,loading:!1,timerExpired:!1};function ne(e){return JSON.parse(JSON.stringify(e))}var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.i:var n=ne(te);return n.loading=!0,n;case H.j:var a=ne(e);return a.idToken=t.idToken,a.userId=t.userId,a;case H.r:var r=ne(e);return r.userData=t.userData,r.loading=!1,r;case H.n:var c=ne(e);return c.errorMessage=t.errorMessage,c.loading=!1,c;case H.h:var o=ne(e);return o.conflictMessage=t.conflictMessage,o.loading=!1,o;case H.f:var i=ne(e);return i.timerExpired=!0,i;case H.g:var u=ne(e);return u.timerExpired=!1,u;case H.k:var l=ne(e);return"auto"===t.method&&(l.timerExpired=!0),l.idToken=null,l.userId=null,l;default:return e}},re={conflictMessage:null,loading:!1,endType:null};function ce(e){return JSON.parse(JSON.stringify(e))}var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.z:var n=ce(re);return n.loading=!0,n;case H.y:var a=ce(e);return a.loading=!1,a.endType=t.endType,a;case H.x:var r=ce(e);return r.conflictMessage=t.conflictMessage,r.loading=!1,r;default:return e}},ie={editing:!1,loading:!1,errorMessage:null};function ue(e){return JSON.parse(JSON.stringify(e))}var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.m:var n=ue(ie);return n.editing=!0,n;case H.q:var a=ue(e);return a.loading=!0,a;case H.p:var r=ue(e);return r.errorMessage=t.errorMessage,r.loading=!1,r;case H.o:var c=ue(e);return c.loading=!1,c;case H.l:var o=ue(e);return o.editing=!1,o;default:return e}},se=n(48),de=U.d,me=Object(U.c)({buildBurger:q,placeOrder:W,fetchOrders:ee,login:ae,signup:oe,updateProfile:le}),fe=Object(U.e)(me,de(Object(U.a)(se.a))),ge=r.a.createElement(m.a,{store:fe},r.a.createElement(s.a,{basename:"/burgerbuilder"},r.a.createElement(J,null)));o.a.render(r.a.createElement(r.a.StrictMode,null,ge),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,2,3]]]);
//# sourceMappingURL=main.e716de2f.chunk.js.map