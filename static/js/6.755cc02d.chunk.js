(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{106:function(e,t,a){"use strict";a(98);var n=a(0),r=a.n(n),c=r.a.forwardRef((function(e,t){var a=e.identity,n=e.type,c=e.formik,i=e.children;return r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{className:"form-input__label",htmlFor:a},i," ",function(e){var t=c.touched[e],a=c.errors[e];return t&&a&&r.a.createElement("span",{className:"form-input__toolkit"},a)||null}(a)),r.a.createElement("input",Object.assign({ref:t,type:n,className:"form-input__field",name:a},c.getFieldProps(a))))}));t.a=c},163:function(e,t,a){"use strict";a.r(t);var n=a(14),r=(a(26),a(99),a(98),a(0)),c=a.n(r),i=a(5),o=a(12),u=a(13),m=a(106),l=a(20),s=a(21),f=a(128),b=a(125),d=a(31),p=b.a({name:b.b().required("is required").max(20,"must not be longer than 20 characters"),country:b.b().required("is required").max(20,"must not be longer than 20 characters"),zipCode:b.b().required("is required").matches(/^[0-9]+$/,"must be a number").min(4,"must be 4 characters at least").max(4,"should not be more than 4 digits"),contactNumber:b.b().required("is required").matches(/^[0-9]+$/,"must be a number").max(20,"must not be longer than 20 digits")});t.default=function(e){var t=Object(i.c)((function(e){return e.login.userData})),a=t.contactNumber,b=t.country,y=t.name,h=t.userId,g=t.zipCode,E=t.id,N=Object(i.c)((function(e){return e.updateProfile.loading})),v=Object(i.c)((function(e){return e.updateProfile.errorMessage})),O=Object(i.c)((function(e){return e.login.idToken})),j=Object(i.b)(),k=Object(s.a)(!1),_=Object(n.a)(k,2),C=_[0],q=_[1],x=e.history;Object(r.useEffect)((function(){return j(o.l()),function(){j(o.c())}}),[]);var S=function(){q(!1)},w=Object(f.a)({initialValues:{name:y,country:b,zipCode:g,contactNumber:a},validationSchema:p,onSubmit:function(e){j(o.m(e,E,h,O,q,x))}});Object(r.useEffect)((function(){setTimeout((function(){}),500)}));var z=Object.keys(w.errors).length>0,J=JSON.stringify(w.initialValues)!==JSON.stringify(w.values),F=J?"Save":"No changes";return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form"},N?c.a.createElement("div",null,c.a.createElement("p",{style:{color:"wheat",marginBottom:"1rem"}},"Saving changes..."),c.a.createElement(u.a,null)):c.a.createElement("form",{className:"form__form",onSubmit:w.handleSubmit},c.a.createElement(m.a,{formik:w,identity:"name",type:"text"},"Name"),c.a.createElement(m.a,{formik:w,identity:"country",type:"text"},"Country"),c.a.createElement(m.a,{formik:w,identity:"zipCode",type:"text"},"Zip Code"),c.a.createElement(m.a,{formik:w,identity:"contactNumber",type:"text"},"Contact Number"),c.a.createElement("button",{type:"button",className:"button--more form__cancel",onClick:function(){x.replace("/profile")}},"Cancel"),c.a.createElement("button",{disabled:!J||z,type:"submit",className:"button--success form__submit"},F))),C?c.a.createElement(l.a,{closeAlert:S},c.a.createElement(d.a,{acknowledgeAlert:S},v)):null)}},98:function(e,t,a){},99:function(e,t,a){}}]);
//# sourceMappingURL=6.755cc02d.chunk.js.map