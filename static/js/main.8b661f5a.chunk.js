(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"q",(function(){return r})),n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"p",(function(){return o})),n.d(t,"l",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"n",(function(){return s})),n.d(t,"o",(function(){return d})),n.d(t,"m",(function(){return m})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return g})),n.d(t,"i",(function(){return p})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return h}));var r="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",c="ADD_INGREDIENT",o="REMOVE_INGREDIENT",i="INIT_ORDER",u="CANCELED_ORDER",l="CHECKOUT_BURGER",s="PURCHASE_BURGER_START",d="PURCHASE_BURGER_SUCCESS",m="PURCHASE_BURGER_FAIL",f="FETCH_ORDERS_START",g="FETCH_ORDER_SUCCESS",p="FETCH_ORDER_FAIL",E="AUTH_START",b="AUTH_SUCCESS",_="AUTH_FAIL",h="AUTH_LOGOUT"},,,,,,,,,function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"k",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"j",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return v})),n.d(t,"i",(function(){return _})),n.d(t,"d",(function(){return h}));var r=n(1),a=n(13),c=function(e){return{type:r.a,ingredient:e}},o=function(e){return{type:r.p,ingredient:e}},i=function(){return function(e){return a.a.get("/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.q,ingredients:n}))})).catch((function(t){e({type:r.h})}))}},u=function(){return{type:r.l}},l=function(){return{type:r.f}},s=function(){return{type:r.g}},d=function(e,t){return function(n){n({type:r.n}),a.a.post("/orders.json?auth="+t,e).then((function(e){n({type:r.o})})).catch((function(e){n(function(e){return{type:r.m,error:e}}(e))}))}},m=n(14),f=function(e,t){return function(n){n({type:r.j});var c="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');a.a.get("/orders.json".concat(c)).then((function(e){var t,a=[];for(var c in e.data)a.unshift(Object(m.a)(Object(m.a)({},e.data[c]),{},{id:c}));n((t=a,{type:r.k,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.i,error:t}))}))}},g=n(28),p=n.n(g).a.create({baseURL:"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE"}),E=function(e){return{type:r.e,authData:e}},b=function(e){return function(t){setTimeout((function(){t(_())}),900*e)}},_=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},h=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(_());else{var r=localStorage.getItem("userId");e(E({idToken:t,localId:r}));var a=(n.getTime()-(new Date).getTime())/1e3;e(b(a))}}else e(_())}},v=function(e,t,n){return function(a){a({type:r.d});var c={email:e,password:t,returnSecureToken:!0},o="AIzaSyB9KjbBy3MryQYOKkZDjOXiYzScBLApRFE",i={signUp:"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(o),signIn:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(o)};p.post(n?i.signUp:i.signIn,c).then((function(e){var t=new Date((new Date).getTime()+new Date(1e3*e.data.expiresIn).getTime());localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(b(e.data.expiresIn)),a(E(e.data))})).catch((function(e){a(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}}},function(e,t,n){"use strict";t.a=function(e){return e.children}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__2ZP9H",BreadTop:"BurgerIngredients_BreadTop__1NwWx",Seeds1:"BurgerIngredients_Seeds1__3TBcT",Seeds2:"BurgerIngredients_Seeds2__1NoW7",Meat:"BurgerIngredients_Meat__2qrZI",Cheese:"BurgerIngredients_Cheese__2G8sW",Salad:"BurgerIngredients_Salad__cDm6D",Bacon:"BurgerIngredients_Bacon__2V3rE"}},function(e,t,n){"use strict";var r=n(28),a=n.n(r).a.create({baseURL:"https://react-burger-builder-12ae6.firebaseio.com"});t.a=a},,,,,,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3i9Ic",Label:"BuildControl_Label__2LmF9",Less:"BuildControl_Less__3x6Vt",More:"BuildControl_More__oZbFL"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(55),o=n.n(c);t.a=function(){return a.a.createElement("div",{className:o.a.Spinner},a.a.createElement("div",null),a.a.createElement("div",null))}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(38),o=n.n(c);t.a=function(e){return a.a.createElement("button",{className:[o.a.Button,o.a[e.btnType]].join(" "),onClick:e.clicked,type:e.type,disabled:e.disabled},e.children)}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(53),o=n.n(c);t.a=function(e){return e.show?a.a.createElement("div",{className:o.a.Backdrop,onClick:e.clicked}):null}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=(n(90),n(11)),o=n(27);t.a=a.a.memo((function(e){return a.a.createElement(c.a,null,a.a.createElement(o.a,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:e.show?"modal modal--show":"modal"},e.children))}),(function(e,t){return t.show===e.show&&t.children===e.children}))},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__2lUmQ",NavigationItems__side:"NavigationItems_NavigationItems__side__1H79u"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1ZMx7",burgerP:"Burger_burgerP__2OCWF",burgerScroll:"Burger_burgerScroll__1r98W"}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2UdKM",DesktopOnly:"Toolbar_DesktopOnly__3yDdd"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3uydx",instruction:"BuildControls_instruction__lhqOz",OrderButton:"BuildControls_OrderButton__hHPA0",enable:"BuildControls_enable__rfqPn"}},function(e,t,n){e.exports={Button:"Button_Button__37ErL",Success:"Button_Success__2P7Ld",Danger:"Button_Danger__PdNGn"}},,function(e,t,n){"use strict";var r=n(18),a=n(0),c=n.n(a),o=n(29),i=n(11);t.a=function(e,t){return function(n){var u=function(e){var t=Object(a.useState)(null),n=Object(r.a)(t,2),c=n[0],o=n[1],i=e.interceptors.request.use((function(e){return o(null),e})),u=e.interceptors.response.use((function(e){return e}),(function(e){o(e)}));Object(a.useEffect)((function(){return function(){e.interceptors.request.eject(i),e.interceptors.response.eject(u)}}),[i,u]);return[c,function(){o(null)}]}(t),l=Object(r.a)(u,2),s=l[0],d=l[1];return c.a.createElement(i.a,null,c.a.createElement(o.a,{show:s,modalClosed:d},s?s.message:null),c.a.createElement(e,n))}}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(39),a=n(0),c=n.n(a),o=n(31),i=n.n(o),u=n(12),l=n.n(u),s=function(e){var t=null;switch(e.type){case"bread-bottom":t=c.a.createElement("div",{className:l.a.BreadBottom});break;case"bread-top":t=c.a.createElement("div",{className:l.a.BreadTop},c.a.createElement("div",{className:l.a.Seeds1}),c.a.createElement("div",{className:l.a.Seeds2}));break;case"meat":t=c.a.createElement("div",{className:l.a.Meat});break;case"cheese":t=c.a.createElement("div",{className:l.a.Cheese});break;case"bacon":t=c.a.createElement("div",{className:l.a.Bacon});break;case"salad":t=c.a.createElement("div",{className:l.a.Salad});break;default:t=null}return t},d=[i.a.Burger,i.a.burgerScroll];t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return c.a.createElement(s,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=c.a.createElement("p",{className:i.a.burgerP},"Feel free to add ingredients")),c.a.createElement("div",{className:d.join(" ")},c.a.createElement(s,{type:"bread-top"}),t,c.a.createElement(s,{type:"bread-bottom"}))}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3r8A1"}},,function(e,t,n){e.exports={Spinner:"Spinner_Spinner__1udTu","lds-ripple":"Spinner_lds-ripple__2LAf1"}},,function(e,t,n){e.exports=n(92)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),o=n.n(c),i=(n(62),n(18)),u=(n(63),n(33)),l=n.n(u),s=n(52),d=n.n(s),m=(n(64),function(e){return a.a.createElement("div",{className:"logo"},a.a.createElement("img",{src:d.a,alt:"brand-logo",className:"logo__img"}))}),f=n(30),g=n.n(f),p=(n(65),n(16)),E=function(e){return a.a.createElement("li",{className:"navigation-item"},a.a.createElement(p.b,{to:e.link,exact:!0,activeClassName:"active"},e.children))},b=function(e){var t=[];return t=e.side?[g.a.NavigationItems,g.a.NavigationItems__side].join(" "):[g.a.NavigationItems],a.a.createElement("ul",{className:t,onClick:e.sideDrawerClose},a.a.createElement(E,{link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(E,{link:"/orders"},"Orders"):null,a.a.createElement(E,{link:e.isAuthenticated?"/logout":"/auth"},e.isAuthenticated?"Logout":"Login"))},_=(n(70),function(e){return a.a.createElement("div",{onClick:e.clicked,className:"drawertoggle"},a.a.createElement("div",{className:"drawertoggle__bar"}),a.a.createElement("div",{className:"drawertoggle__bar"}),a.a.createElement("div",{className:"drawertoggle__bar"}))}),h=function(e){return a.a.createElement("header",{className:l.a.Toolbar},a.a.createElement(_,{clicked:e.drawerToggleClicked}),a.a.createElement(m,{tool:!0}),a.a.createElement("nav",{className:l.a.DesktopOnly},a.a.createElement(b,{isAuthenticated:e.isAuthenticated})))},v=(n(71),n(27)),y=n(11),k=function(e){return a.a.createElement(y.a,null,a.a.createElement(v.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:e.open?"sidedrawer sidedrawer--open":"sidedrawer sidedrawer--close"},a.a.createElement("nav",null,a.a.createElement(b,{side:!0,isAuthenticated:e.isAuthenticated,sideDrawerClose:e.closed}))))},B=n(4),O=function(e){var t=Object(B.d)((function(e){return null!==e.authenticate.token})),n=Object(r.useState)(!1),c=Object(i.a)(n,2),o=c[0],u=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{drawerToggleClicked:function(){u(!o)},isAuthenticated:t}),a.a.createElement(k,{isAuthenticated:t,open:o,closed:function(){u(!1)}}),a.a.createElement("main",{className:"main"},e.children))},N=n(14),S=n(51),I=n(13),C=n(37),T=n.n(C),j=n(21),w=n.n(j),A=function(e){return a.a.createElement("div",{className:w.a.BuildControl},a.a.createElement("div",{className:w.a.Label},e.label),a.a.createElement("button",{className:w.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:w.a.More,onClick:e.added},"More"))},D=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],R=function(e){var t=Object(N.a)({},e.disabled),n=!Object.keys(t).map((function(e){return!t[e]})).reduce((function(e,t){return e||t}),!1);return a.a.createElement("div",{className:T.a.BuildControls},a.a.createElement("p",null,"Current price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))),D.map((function(t){return a.a.createElement(A,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:T.a.OrderButton,disabled:n,onClick:e.ordered},"ORDER NOW"))},x=n(29),L=(n(91),n(23)),U=function(e){var t,n,r,c=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.ingredients[t])}));return a.a.createElement("div",{className:"ordersummary"},a.a.createElement("h3",{className:"ordersummary__heading"},"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients :"),a.a.createElement("ul",{className:"ordersummary__items"},c),a.a.createElement("p",{className:"ordersummary__info"},a.a.createElement("strong",null,"Total Price: $",e.price.toFixed(2))),e.isAuthenticated?null:a.a.createElement("p",{className:"ordersummary__info"},"Please login in to continue"),a.a.createElement(L.a,{btnType:"Danger",clicked:e.cancelOrder},"Cancel"),(t=e.isAuthenticated,n=e.continueOrder,r=e.loginHandler,t?a.a.createElement(L.a,{btnType:"Success",clicked:n},"Continue"):a.a.createElement(L.a,{btnType:"Success",clicked:r},"Login")))},F=n(22),P=n(40),H=n(10),M=Object(P.a)((function(e){var t=Object(B.c)(),n=Object(r.useCallback)((function(){return t(H.g())}),[]),c=function(){return t(H.c())},o=Object(B.d)((function(e){return e.buildBurger.ingredients})),i=Object(B.d)((function(e){return e.buildBurger.totalPrice})),u=Object(B.d)((function(e){return e.placeOrder.ordered})),l=Object(B.d)((function(e){return e.buildBurger.error})),s=Object(B.d)((function(e){return null!==e.authenticate.token}));Object(r.useEffect)((function(){n()}),[n]);var d=function(){c()},m=Object(N.a)({},o);for(var f in m)m[f]=m[f]<=0;var g=null,p=l?a.a.createElement("p",null,"Ingredients can't be loaded :("):a.a.createElement(F.a,null);return o&&(p=a.a.createElement(y.a,null,a.a.createElement(S.a,{ingredients:o}),a.a.createElement(R,{ingredientAdded:function(e){return t(H.a(e))},ingredientRemoved:function(e){return t(H.k(e))},disabled:m,price:i,ordered:function(){t(H.h())}})),g=a.a.createElement(U,{cancelOrder:d,ingredients:o,continueOrder:function(){c(),e.history.replace("/checkout")},loginHandler:function(){e.history.replace("/auth")},price:i,isAuthenticated:s})),a.a.createElement(y.a,null,a.a.createElement(x.a,{show:u,modalClosed:d},g),p)}),I.a),G=n(3),J=function(e){var t=Object(B.c)(),n=Object(r.useCallback)((function(){return t(H.i())}),[t]);return Object(r.useEffect)((function(){n()}),[n]),a.a.createElement(G.a,{to:"/"})},q=a.a.lazy((function(){return n.e(3).then(n.bind(null,105))})),z=a.a.lazy((function(){return n.e(5).then(n.bind(null,106))})),W=a.a.lazy((function(){return n.e(4).then(n.bind(null,104))})),K=function(e){var t=Object(B.c)(),n=Object(r.useCallback)((function(){return t(H.d())}),[t]),c=Object(B.d)((function(e){return null!==e.authenticate.token}));Object(r.useEffect)((function(){n()}),[n]);return a.a.createElement(O,null,a.a.createElement(G.d,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(F.a,null)},function(e){return e?a.a.createElement(a.a.Fragment,null,a.a.createElement(G.b,{path:"/checkout",component:q}),a.a.createElement(G.b,{path:"/orders",component:z}),a.a.createElement(G.b,{path:"/logout",component:J}),a.a.createElement(G.b,{path:"/",exact:!0,component:M}),a.a.createElement(G.a,{to:"/"})):a.a.createElement(a.a.Fragment,null,a.a.createElement(G.b,{path:"/auth",component:W}),a.a.createElement(G.b,{path:"/",exact:!0,component:M}),a.a.createElement(G.a,{to:"/"}))}(c))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(15),Y=n(1),Q={ingredients:null,totalPrice:4,error:!1},V={salad:.5,cheese:.4,meat:1.3,bacon:.7};function $(e){return JSON.parse(JSON.stringify(e))}var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.q:var n=$(e);return n.ingredients?(n.error=!1,n):(n.ingredients={salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},n.error=!1,n.purchasing=!1,n);case Y.h:var r=$(e);return r.error=!0,r;case Y.a:var a=$(e);return a.ingredients[t.ingredient]++,a.totalPrice+=V[t.ingredient],a;case Y.p:var c=$(e);return c.ingredients[t.ingredient]--,c.totalPrice-=V[t.ingredient],c;default:return e}},ee={loading:!1,purchased:!1,ordered:!1};function te(e){return JSON.parse(JSON.stringify(e))}var ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.l:var n=te(e);return n.ordered=!0,n;case Y.f:var r=te(e);return r.ordered=!1,r;case Y.g:var a=te(e);return a.purchased=!1,a;case Y.o:var c=te(e);return c.loading=!1,c.purchased=!0,c;case Y.m:var o=te(e);return o.loading=!1,o;case Y.n:var i=te(e);return i.loading=!0,i;default:return e}},re={orders:[],fetching:!0};function ae(e){return JSON.parse(JSON.stringify(e))}var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.j:var n=ae(e);return n.fetching=!0,n;case Y.k:var r=ae(e);return r.orders=t.orders,r.fetching=!0,r;case Y.i:var a=ae(e);return a.fetching=!0,a;default:return e}},oe={token:null,userId:null,error:null,loading:!1};function ie(e){return JSON.parse(JSON.stringify(e))}var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.d:var n=ie(e);return n.loading=!0,n.error=null,n;case Y.e:var r=ie(e);return r.token=t.authData.idToken,r.userId=t.authData.localId,r.error=null,r.loading=!1,r;case Y.b:var a=ie(e);return a.error=t.error,a.loading=!1,a;case Y.c:var c=ie(e);return c.token=null,c.userId=null,c;default:return e}},le=n(56),se=Z.d,de=Object(Z.c)({buildBurger:X,placeOrder:ne,fetchOrders:ce,authenticate:ue}),me=Object(Z.e)(de,se(Object(Z.a)(le.a))),fe=a.a.createElement(B.a,{store:me},a.a.createElement(p.a,{basename:"/burgerbuilder"},a.a.createElement(K,null)));o.a.render(a.a.createElement(a.a.Fragment,null,fe),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[57,1,2]]]);
//# sourceMappingURL=main.8b661f5a.chunk.js.map