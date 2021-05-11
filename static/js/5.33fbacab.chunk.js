(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{100:function(e,t,a){},107:function(e,t,a){"use strict";a(99);var r=a(0),n=a.n(r),i=n.a.forwardRef((function(e,t){var a=e.identity,r=e.type,i=e.formik,c=e.children;return n.a.createElement("div",{className:"form-input"},n.a.createElement("label",{className:"form-input__label",htmlFor:a},c," ",function(e){var t=i.touched[e],a=i.errors[e];return t&&a&&n.a.createElement("span",{className:"form-input__toolkit"},a)||null}(a)),n.a.createElement("input",Object.assign({ref:t,type:r,className:"form-input__field",name:a},i.getFieldProps(a))))}));t.a=i},160:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a(0),i=a.n(n),c=a(5),o=a(12),u=(a(26),a(100),a(99),a(13)),s=a(107),l=a(20),m=a(21),d=(a(160),function(e){var t=e.acknowledgeAlert,a=e.endType,r="signupFailed"===a?"OK":"Login";return i.a.createElement("div",{className:"login-prompt"},i.a.createElement("p",{className:"login-prompt__toolkit"},function(e){switch(e){case"userNotSaved":return"We have created your account but failed to save your\n                personal data due to some network error. Kindly login with your email\n                and re-update them if needed. Cheers!";case"signupFailed":return"Failed to create your account due to some error. Please try again";default:return"Your account was successfully created"}}(a)),i.a.createElement("button",{type:"button",className:"button--success signup-prompt__button",onClick:t},r))}),p=a(129),f=a(126),b=f.a({email:f.b().email("is invalid").required("is required").max(64,"must not be longer than 20 characters"),password:f.b().required("is required").min(6,"must be 6 characters at least"),name:f.b().required("is required"),country:f.b().required("is required"),zipCode:f.b().required("is required").matches(/^[0-9]+$/,"must be a number").min(4,"must be 4 characters at least").max(4,"should only contain 4 digits"),contactNumber:f.b().required("is required").matches(/^[0-9]+$/,"must be a number")});t.default=function(e){var t=e.history,a=Object(c.b)(),f=Object(m.a)(!1),y=Object(r.a)(f,2),g=y[0],E=y[1],h=Object(c.c)((function(e){return e.signup.loading})),N=Object(c.c)((function(e){return e.signup.conflictMessage})),_=Object(c.c)((function(e){return e.signup.endType})),k=Object(n.useRef)();Object(n.useEffect)((function(){k.current.focus()}),[]);var v=function(){"userSaved"===_||"userNotSaved"===_?(t.replace("/login"),E(!1)):E(!1)},w=Object(p.a)({initialValues:{email:"",password:"",name:"",country:"",zipCode:"",contactNumber:""},validationSchema:b,onSubmit:function(e){a(o.k(e,E))}}),q=h&&i.a.createElement("p",{className:"form__toolkit"},"Creating your account")||N&&i.a.createElement("p",{className:"form__error"},N.replace(/_/g," ")+" :(")||null,O=Object.keys(w.errors).length;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form"},q,h?i.a.createElement(u.a,null):i.a.createElement("form",{className:"form__form",onSubmit:w.handleSubmit},i.a.createElement(s.a,{editing:!0,formik:w,identity:"email",type:"email",ref:k},"Email"),i.a.createElement(s.a,{editing:!0,formik:w,identity:"password",type:"password"},"Password"),i.a.createElement(s.a,{editing:!0,formik:w,identity:"name",type:"text"},"Name"),i.a.createElement(s.a,{editing:!0,formik:w,identity:"country",type:"text"},"Country"),i.a.createElement(s.a,{editing:!0,formik:w,identity:"zipCode",type:"text"},"Zip Code"),i.a.createElement(s.a,{editing:!0,formik:w,identity:"contactNumber",type:"text"},"Contact Number"),i.a.createElement("button",{disabled:!O<=0,type:"submit",className:"button--success form__submit"},"Create"))),g?i.a.createElement(l.a,{closeAlert:v},i.a.createElement(d,{endType:_,acknowledgeAlert:v})):null)}},99:function(e,t,a){}}]);
//# sourceMappingURL=5.33fbacab.chunk.js.map