(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{104:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(105);t.a=function(e){var t=e.children,a=e.acknowledgeAlert;return r.a.createElement("div",{className:"error-prompt"},r.a.createElement("p",{className:"error-prompt__toolkit"},t),r.a.createElement("button",{type:"button",className:"button--success error-prompt__button",onClick:a},"OK"))}},105:function(e,t,a){},106:function(e,t,a){"use strict";a(96);var n=a(0),r=a.n(n),c=r.a.forwardRef((function(e,t){var a=e.identity,n=e.type,c=e.formik,i=e.children;return r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{className:"form-input__label",htmlFor:a},i," ",function(e){var t=c.touched[e],a=c.errors[e];return t&&a&&r.a.createElement("span",{className:"form-input__toolkit"},a)||null}(a)),r.a.createElement("input",Object.assign({ref:t,type:n,className:"form-input__field",name:a},c.getFieldProps(a))))}));t.a=c},162:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(0),c=a.n(r),i=a(14),l=a(5),o=a(13),s=(a(96),a(24),a(97),a(12)),m=a(106),u=a(29),f=a(30),p=a(104),b=a(128),d=a(125);t.default=function(e){var t=Object(f.a)(!1),a=Object(n.a)(t,2),E=a[0],g=a[1],_=Object(l.b)(),h=Object(l.c)((function(e){return e.login.loading})),v=Object(l.c)((function(e){return e.login.conflictMessage})),y=Object(l.c)((function(e){return e.login.errorMessage})),k=Object(r.useRef)();Object(r.useEffect)((function(){k.current.focus()}),[]);var N=function(){g(!1)},O=Object(b.a)({initialValues:{email:"",password:""},validationSchema:d.a({email:d.b().email("is invalid").required("is required").max(64,"must not be longer than 20 characters"),password:d.b().required("is required").min(6,"must be 6 characters atleast")}),onSubmit:function(e){_(o.e(e,g))}}),j=v&&c.a.createElement("p",{className:"form__error"},v.replace(/_/g," ")+" :(")||null,w=!Object.keys(O.errors).length<=0;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form"},j,h?c.a.createElement("div",null,c.a.createElement("p",{style:{color:"wheat",marginBottom:"1rem"}},"Signing in..."),c.a.createElement(s.a,null)):c.a.createElement("form",{className:"form__form",onSubmit:O.handleSubmit},c.a.createElement(m.a,{editing:!0,formik:O,identity:"email",type:"email",ref:k},"Email"),c.a.createElement(m.a,{editing:!0,formik:O,identity:"password",type:"password"},"Password"),c.a.createElement("button",{disabled:w,type:"submit",className:"button--success form__submit"},"Submit")),h?null:c.a.createElement(i.b,{className:"link--to",to:"/signup"},"Create account")),E?c.a.createElement(u.a,{closeAlert:N},c.a.createElement(p.a,{acknowledgeAlert:N},y)):null)}},96:function(e,t,a){},97:function(e,t,a){}}]);
//# sourceMappingURL=6.f1c27bfc.chunk.js.map