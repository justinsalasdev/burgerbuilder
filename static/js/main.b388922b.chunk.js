(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__3iOFo",BreadTop:"BurgerIngredients_BreadTop__2b5kG",Seeds1:"BurgerIngredients_Seeds1__10oV4",Seeds2:"BurgerIngredients_Seeds2__3Cgi_",Meat:"BurgerIngredients_Meat__3Lg32",Cheese:"BurgerIngredients_Cheese__2NFYG",Salad:"BurgerIngredients_Salad__QngSB",Bacon:"BurgerIngredients_Bacon__2ICDg"}},,,function(e,t,a){e.exports={Input:"Input_Input__2fCFW",Label:"Input_Label__1q7UR",InputElement:"Input_InputElement__2q7Cn"}},,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__P9c2i",Open:"SideDrawer_Open__3vNMY",Close:"SideDrawer_Close__39mlF"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__6NGBu",Label:"BuildControl_Label__Mefbx",Less:"BuildControl_Less__3ZqhY",More:"BuildControl_More__3p2VI"}},,function(e,t,a){e.exports={Logo:"Logo_Logo__3Zlr2",Logo__side:"Logo_Logo__side__1pZXx",Logo__tool:"Logo_Logo__tool__29NMs"}},function(e,t,a){e.exports={Burger:"Burger_Burger__3Ygrm",burgerP:"Burger_burgerP__-C8aN",burgerScroll:"Burger_burgerScroll__oKrnC"}},function(e,t,a){e.exports={orderList:"OrderSummary_orderList__2IXvs",modalHeading:"OrderSummary_modalHeading__3lnYR",orderP:"OrderSummary_orderP__ODlUo"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1mUvC",DesktopOnly:"Toolbar_DesktopOnly__vZgRS"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__3Jr9R",active:"NavigationItem_active__3odWB"}},,,function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__2ggwP",OrderButton:"BuildControls_OrderButton__1XlTk",enable:"BuildControls_enable__1Z1hn"}},function(e,t,a){e.exports={Button:"Button_Button__1Zc-p",Success:"Button_Success__2VP4c",Danger:"Button_Danger__3pzSR"}},,,,,,,,,,,,function(e,t,a){e.exports={main:"Layout_main__tQatf"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__2b3Uo"}},,function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__11B7y"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2qVQD"}},function(e,t,a){e.exports={Modal:"Modal_Modal__2nnKT"}},,function(e,t,a){e.exports={Loader:"Spinner_Loader__IJ3pq","lds-facebook":"Spinner_lds-facebook__TFyXD"}},,function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__6r4fj"}},function(e,t,a){e.exports={ContactData:"ContactData_ContactData__31I5X"}},function(e,t,a){e.exports={Order:"Order_Order__jtRYE"}},,function(e,t,a){e.exports=a(85)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),l=(a(62),a(2)),c=a(3),s=a(5),d=a(4),u=a(7),m=function(e){return e.children},p=a(43),h=a.n(p),g=a(26),b=a.n(g),_=a(44),v=a.n(_),f=a(22),E=a.n(f),k=function(e){return r.a.createElement("div",{className:[E.a.Logo,e.tool?E.a.Logo__tool:E.a.Logo__side].join(" ")},r.a.createElement("img",{src:v.a,alt:"brand-logo"}))},y=a(45),C=a.n(y),O=a(27),j=a.n(O),S=a(15),B=function(e){return r.a.createElement("li",{className:j.a.NavigationItem},r.a.createElement(S.b,{to:e.link,exact:!0,activeClassName:j.a.active},e.children))},w=function(){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(B,{link:"/"},"Burger Builder"),r.a.createElement(B,{link:"/orders"},"Orders"))},N=a(47),I=a.n(N),H=function(e){return r.a.createElement("div",{onClick:e.clicked,className:I.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:b.a.Toolbar},r.a.createElement(H,{clicked:e.drawerToggleClicked}),r.a.createElement(k,{tool:!0}),r.a.createElement("nav",{className:b.a.DesktopOnly},r.a.createElement(w,null)))},x=a(19),L=a.n(x),T=a(48),P=a.n(T),M=function(e){return e.show?r.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked}):null},R=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(m,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(k,{side:!0}),r.a.createElement("nav",null,r.a.createElement(w,null))))},Y=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showSideDrawer:!1},n.sideDrawerClosedHandler=n.sideDrawerClosedHandler.bind(Object(u.a)(n)),n.sideDrawerToggleHandler=n.sideDrawerToggleHandler.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"sideDrawerClosedHandler",value:function(){this.setState({showSideDrawer:!1})}},{key:"sideDrawerToggleHandler",value:function(){this.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(R,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:h.a.main},this.props.children))}}]),a}(n.Component),U=a(12),q=a(56),F=a(23),W=a.n(F),Z=a(13),X=a.n(Z),z=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:X.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:X.a.BreadTop},r.a.createElement("div",{className:X.a.Seeds1}),r.a.createElement("div",{className:X.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:X.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:X.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:X.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:X.a.Salad});break;default:e=null}return e}}]),a}(n.Component),A=[W.a.Burger,W.a.burgerScroll],J=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(q.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(z,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",{className:W.a.burgerP},"Feel free to add ingredients")),r.a.createElement("div",{className:A.join(" ")},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},V=a(30),$=a.n(V),G=a(20),Q=a.n(G),K=function(e){return r.a.createElement("div",{className:Q.a.BuildControl},r.a.createElement("div",{className:Q.a.Label},e.label),r.a.createElement("button",{className:Q.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Q.a.More,onClick:e.added},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){var t=Object(U.a)({},e.disabled),a=!Object.keys(t).map((function(e){return!t[e]})).reduce((function(e,t){return e||t}),!1);return r.a.createElement("div",{className:$.a.BuildControls},r.a.createElement("p",null,"Current price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),ee.map((function(t){return r.a.createElement(K,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:$.a.OrderButton,disabled:a,onClick:e.ordered},"ORDER NOW"))},ae=a(49),ne=a.n(ae),re=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component),oe=a(24),ie=a.n(oe),le=a(31),ce=a.n(le),se=function(e){return r.a.createElement("button",{className:[ce.a.Button,ce.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},de=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.props.ingredients[t])}));return r.a.createElement(m,null,r.a.createElement("h3",{className:ie.a.modalHeading},"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients :"),r.a.createElement("ul",{className:ie.a.orderList},t),r.a.createElement("p",{className:ie.a.orderP},r.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement(se,{btnType:"Danger",clicked:this.props.cancelOrder},"Cancel"),r.a.createElement(se,{btnType:"Success",clicked:this.props.continueOrder},"Continue"))}}]),a}(n.Component),ue=a(50),me=a.n(ue).a.create({baseURL:"https://react-burger-builder-12ae6.firebaseio.com"}),pe=a(51),he=a.n(pe),ge=function(){return r.a.createElement("div",{className:he.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},be=function(e,t){return function(a){Object(s.a)(o,a);var n=Object(d.a)(o);function o(e){var t;return Object(l.a)(this,o),(t=n.call(this,e)).state={error:null},t}return Object(c.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"errorConfirmedHandler",value:function(){this.setState({error:null})}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(re,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(n.Component)},_e={salad:.5,cheese:.4,meat:1.3,bacon:.7},ve=be(function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={ingredients:null,totalPrice:4,purchasing:!1,loading:!1,error:!1},n.addIngredientHandler=n.addIngredientHandler.bind(Object(u.a)(n)),n.removeIngredientHandler=n.removeIngredientHandler.bind(Object(u.a)(n)),n.purchaseHandler=n.purchaseHandler.bind(Object(u.a)(n)),n.purchaseCancelHandler=n.purchaseCancelHandler.bind(Object(u.a)(n)),n.purchaseContinueHandler=n.purchaseContinueHandler.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;me.get("/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"purchaseHandler",value:function(){this.setState({purchasing:!0})}},{key:"purchaseCancelHandler",value:function(){this.setState({purchasing:!1})}},{key:"purchaseContinueHandler",value:function(){var e=[];for(var t in e.push("price=".concat(this.state.totalPrice.toFixed(2))),this.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(this.state.ingredients[t]));var a=e.join("&");this.props.history.push({pathname:"/checkout",search:"?"+a})}},{key:"addIngredientHandler",value:function(e){var t=this.state.ingredients[e]+1,a=Object(U.a)({},this.state.ingredients);a[e]=t;var n=_e[e],r=this.state.totalPrice+n;this.setState({totalPrice:r,ingredients:a})}},{key:"removeIngredientHandler",value:function(e){var t=this.state.ingredients[e];if(!(t<=0)){var a=t-1,n=Object(U.a)({},this.state.ingredients);n[e]=a;var r=_e[e],o=this.state.totalPrice-r;this.setState({totalPrice:o,ingredients:n})}}},{key:"render",value:function(){var e=Object(U.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded :("):r.a.createElement(ge,null);return this.state.ingredients&&(n=r.a.createElement(m,null,r.a.createElement(J,{ingredients:this.state.ingredients}),r.a.createElement(te,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,ordered:this.purchaseHandler})),a=r.a.createElement(de,{cancelOrder:this.purchaseCancelHandler,ingredients:this.state.ingredients,continueOrder:this.purchaseContinueHandler,price:this.state.totalPrice})),this.state.loading&&(a=r.a.createElement(ge,null)),r.a.createElement(m,null,r.a.createElement(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),n)}}]),a}(n.Component),me),fe=a(52),Ee=a(53),ke=a.n(Ee),ye=function(e){return r.a.createElement("div",{className:ke.a.CheckoutSummary},r.a.createElement("h2",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"30rem",height:"30rem",margin:"auto"}},r.a.createElement(J,{ingredients:e.ingredients})),r.a.createElement(se,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),r.a.createElement(se,{btnType:"Success",clicked:e.checkoutContinued},"Continue"))},Ce=a(1),Oe=a(16),je=a.n(Oe),Se=function(e){var t=null;switch(e.inputtype){case"input":t=r.a.createElement("input",Object.assign({className:je.a.InputElement},e));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:je.a.InputElement},e));break;default:t=r.a.createElement("input",Object.assign({className:je.a.InputElement},e))}return r.a.createElement("div",{className:je.a.Input},r.a.createElement("label",{className:je.a.Label},e.label),t)},Be=a(54),we=a.n(Be),Ne=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",address:{street:"",postalCode:""},loading:!1},n.orderHandler=n.orderHandler.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"orderHandler",value:function(e){var t=this;e.preventDefault(),console.log(this.props),this.setState({loading:!0});var a={ingredients:this.props.ingredients,price:this.props.price,customer:{name:"Rafael M",address:{street:"Test Street",zipCode:"15145",country:"China"},email:"test@test.com"}};me.post("/orders.json",a).then((function(e){t.setState({loading:!1}),t.props.history.replace("/")})).catch((function(e){t.setState({loading:!1})}))}},{key:"render",value:function(){var e=r.a.createElement("form",null,r.a.createElement(Se,{inputtype:"input",type:"text",name:"name",placeholder:"Your name"}),r.a.createElement(Se,{inputtype:"input",type:"email",name:"email",placeholder:"Your email"}),r.a.createElement(Se,{inputtype:"input",type:"text",name:"street",placeholder:"Street"}),r.a.createElement(Se,{inputtype:"input",type:"text",name:"postal",placeholder:"Postal Code"}),r.a.createElement(se,{btnType:"Success",clicked:this.orderHandler},"ORDER"));return this.state.loading&&(e=r.a.createElement(ge,null)),r.a.createElement("div",{className:we.a.ContactData},r.a.createElement("h4",null,"Enter your contact data"),e)}}]),a}(n.Component),Ie=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={ingredients:{},totalPrice:0},n.checkoutCancelledHandler=n.checkoutCancelledHandler.bind(Object(u.a)(n)),n.checkoutContinuedHandler=n.checkoutContinuedHandler.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),a={},n=0,r=Object(fe.a)(t.entries());try{for(r.s();!(e=r.n()).done;){var o=e.value;"price"===o[0]?n=o[1]:a[o[0]]=+o[1]}}catch(i){r.e(i)}finally{r.f()}this.setState({ingredients:a,totalPrice:n})}},{key:"checkoutCancelledHandler",value:function(){this.props.history.replace("/")}},{key:"checkoutContinuedHandler",value:function(){this.props.history.replace("/checkout/contact-data")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ye,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(Ce.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(Ne,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),a}(n.Component),He=a(55),De=a.n(He),xe=function(e){var t=[];for(var a in e.ingredients)t.push({name:a,amount:e.ingredients[a]});var n=t.map((function(e){return r.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 .8rem",border:"1px solid gray",padding:"0.5rem"}},e.name," : ",e.amount," ")}));return r.a.createElement("div",{className:De.a.Order},r.a.createElement("p",{style:{marginBottom:"1.2rem"}},"Ingredients: ",n),r.a.createElement("p",null,"Price : ",r.a.createElement("strong",null,"$ ",e.price)))},Le=be(function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={orders:[],loading:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;me.get("/orders.json").then((function(t){var a=[];for(var n in t.data)a.push(Object(U.a)(Object(U.a)({},t.data[n]),{},{id:n}));console.log(a),e.setState({loading:!1,orders:a}),console.log(t.data)})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(xe,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),a}(n.Component),me),Te=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(Ce.c,null,r.a.createElement(Ce.a,{path:"/checkout",component:Ie}),r.a.createElement(Ce.a,{path:"/orders",component:Le}),r.a.createElement(Ce.a,{path:"/",exact:!0,component:ve})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=r.a.createElement(S.a,{basename:"/burger-builder-dev"},r.a.createElement(Te,null));i.a.render(r.a.createElement(r.a.StrictMode,null,Pe),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[57,1,2]]]);
//# sourceMappingURL=main.b388922b.chunk.js.map