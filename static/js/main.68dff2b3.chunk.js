(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){e.exports=t(265)},265:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(17),l=t.n(i),s=t(39),o=t(40),c=t(42),m=t(41),d=t(43),u=t(100),p=t(29),h=t(18),v=t(5),g=t.n(v),E=t(94),y=t.n(E),b=t(95),f=t.n(b),N=t(96),x=t.n(N),F=t(28),C=t.n(F),T=t(97),w=t.n(T),k=t(98),P=t.n(k),j=t(99),O=t.n(j),S=t(61),B=t.n(S),W=t(15),D=t.n(W),q=t(13),z=t.n(q),A=t(16),L=t.n(A);var V=function(e){var a=e.state,t=e.handleChange;return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{variant:"h6",gutterBottom:!0},"Shipping address"),n.a.createElement(z.a,{container:!0,spacing:24},n.a.createElement(z.a,{item:!0,xs:12,sm:6},n.a.createElement(L.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"fname",value:a.addressForm.firstName,onChange:t("firstName","addressForm"),error:!a.validation.firstName,helperText:a.validation.errorTypes.firstName})),n.a.createElement(z.a,{item:!0,xs:12,sm:6},n.a.createElement(L.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"lname",value:a.addressForm.lastName,onChange:t("lastName","addressForm"),error:!a.validation.lastName,helperText:a.validation.errorTypes.lastName})),n.a.createElement(z.a,{item:!0,xs:12},n.a.createElement(L.a,{required:!0,id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"billing address-line1",value:a.addressForm.address1,onChange:t("address1","addressForm"),error:!a.validation.address1,helperText:a.validation.errorTypes.address1})),n.a.createElement(z.a,{item:!0,xs:12},n.a.createElement(L.a,{id:"addiress2",name:"addiress2",label:"Address line 2",fullWidth:!0,autoComplete:"billing address-line2",value:a.addressForm.address2,onChange:t("address2","addressForm")})),n.a.createElement(z.a,{item:!0,xs:12,sm:6},n.a.createElement(L.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",value:a.addressForm.city,onChange:t("city","addressForm"),error:!a.validation.city,helperText:a.validation.errorTypes.city})),n.a.createElement(z.a,{item:!0,xs:12,sm:6},n.a.createElement(L.a,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0,value:a.addressForm.state,onChange:t("state","addressForm")})),n.a.createElement(z.a,{item:!0,xs:12,sm:6},n.a.createElement(L.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"billing postal-code",value:a.addressForm.zip,onChange:t("zip","addressForm"),error:!a.validation.zip,helperText:a.validation.errorTypes.zip})),n.a.createElement(z.a,{item:!0,xs:12,sm:6},n.a.createElement(L.a,{required:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"billing country",value:a.addressForm.country,onChange:t("country","addressForm"),error:!a.validation.country,helperText:a.validation.errorTypes.country}))))};var $=function(e){var a=e.state,t=e.handleChange;return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{variant:"h6",gutterBottom:!0},"Payment method"),n.a.createElement(z.a,{container:!0,spacing:24},n.a.createElement(z.a,{item:!0,xs:12,md:6},n.a.createElement(L.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,value:a.paymentForm.cardName,onChange:t("cardName","paymentForm"),error:!a.validation.cardName,helperText:a.validation.errorTypes.cardName})),n.a.createElement(z.a,{item:!0,xs:12,md:6},n.a.createElement(L.a,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,value:a.paymentForm.cardNumber,onChange:t("cardNumber","paymentForm"),error:!a.validation.cardNumber,helperText:a.validation.errorTypes.cardNumber})),n.a.createElement(z.a,{item:!0,xs:12,md:6},n.a.createElement(L.a,{required:!0,id:"expDate",label:"Expiry date (MM/YY)",fullWidth:!0,inputProps:{maxLength:5},value:a.paymentForm.expDate,onChange:t("expDate","paymentForm"),error:!a.validation.expDate,helperText:a.validation.errorTypes.expDate})),n.a.createElement(z.a,{item:!0,xs:12,md:6},n.a.createElement(L.a,{required:!0,id:"cvv",label:"CVV",inputProps:{maxLength:3},helperText:a.validation.errorTypes.cvv&&0!==a.validation.errorTypes.cvv.length?a.validation.errorTypes.cvv:"Last three digits on signature strip",fullWidth:!0,value:a.paymentForm.cvv,onChange:t("cvv","paymentForm"),error:!a.validation.cvv}))))},R=t(38),I=t(58),Y=t.n(I),J=t(59),M=t.n(J),Z=t(60),U=t.n(Z);var G=Object(R.withStyles)(function(e){return{listItem:{padding:"".concat(e.spacing.unit,"px 0")},total:{fontWeight:"700"},title:{marginTop:2*e.spacing.unit}}})(function(e){var a=e.state,t=e.classes;return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{variant:"h6",gutterBottom:!0},"Order summary"),n.a.createElement(Y.a,{disablePadding:!0},a.products.map(function(e){return n.a.createElement(M.a,{className:t.listItem,key:e.name},n.a.createElement(U.a,{primary:e.name,secondary:e.desc}),n.a.createElement(D.a,{variant:"body2"},e.price))}),n.a.createElement(M.a,{className:t.listItem},n.a.createElement(U.a,{primary:"Total"}),n.a.createElement(D.a,{variant:"subtitle1",className:t.total},"$34.06"))),n.a.createElement(z.a,{container:!0,spacing:16},n.a.createElement(z.a,{item:!0,xs:12,sm:6},n.a.createElement(D.a,{variant:"h6",gutterBottom:!0,className:t.title},"Shipping"),n.a.createElement(D.a,{gutterBottom:!0},a.addressForm.firstName," ",a.addressForm.lastName)),n.a.createElement(z.a,{item:!0,container:!0,direction:"column",xs:12,sm:6},n.a.createElement(D.a,{variant:"h6",gutterBottom:!0,className:t.title},"Payment details"),n.a.createElement(z.a,{container:!0}))))}),H=function(e,a){return e?"":a},K=function(e){for(var a=0,t=0;t<e.length;t++){var r=parseInt(e.substr(t,1));t%2===0&&(r*=2)>9&&(r=1+r%10),a+=r}return a%10===0},Q=function(e,a){var t,r=!1,n="";switch(e){case"firstName":r=a.trim().length>0,n=H(r,"Please enter a First Name");break;case"lastName":r=a.trim().length>0,n=H(r,"Please enter a Last Name");break;case"address1":r=a.trim().length>0,n=H(r,"Please enter an address Line");break;case"city":r=a.trim().length>0,n=H(r,"Please enter a city");break;case"country":r=a.trim().length>0,n=H(r,"Please enter a country");break;case"zip":r=a.trim().length>0,n=H(r,"Please enter a Zip/Postal Code");break;case"cardName":r=a.trim().length>0,n=H(r,"Please enter the name on the card");break;case"cardNumber":t=a.trim(),r=!!new RegExp("^[0-9]{16}$").test(t)&&K(t),n=H(r,"Please enter a valid card number");break;case"cvv":r=function(e){return!!new RegExp("^[0-9]{3}$").test(e)}(a.trim()),n=H(r,"Please enter a valid cvv");break;case"expDate":r=function(e){var a,t,r=e.split("/"),n=r[0],i="20"+r[1];return a=new Date,(t=new Date).setFullYear(i,n,1),t>a}(a.trim()),n=H(r,"Please enter a valid Expiry Date")}return[r,n]},X=["Shipping address","Payment details","Review your order"],_=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={activeStep:0,addressForm:{firstName:"",lastName:"",address1:"",address2:"",city:"",state:"",zip:"",country:""},paymentForm:{cardName:"",cardNumber:"",expDate:"",cvv:""},products:[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.47"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"}],validation:{hasErrorAddressForm:!0,hasErrorPaymentForm:!0,errorTypes:{}}},t.handleChange=function(e,a){return function(r){var n=r.target.value;t.setState(Object(h.a)({},a,Object(p.a)({},t.state[a],Object(h.a)({},e,n))),function(){t.handleValidation(e,n)})}},t.handleValidation=function(e,a){var r=Q(e,a),n=Object(u.a)(r,2),i=n[0],l=n[1];t.setState({validation:Object(p.a)({},t.state.validation,Object(h.a)({errorTypes:Object(p.a)({},t.state.validation.errorTypes,Object(h.a)({},e,l))},e,i))},t.handleFormValidation)},t.handleFormValidation=function(){var e=t.state.validation;t.setState({validation:Object(p.a)({},e,{hasErrorAddressForm:!t.state.validation.firstName||!t.state.validation.lastName||!t.state.validation.address1||!t.state.validation.city||!t.state.validation.zip||!t.state.validation.country,hasErrorPaymentForm:!t.state.validation.cardName||!t.state.validation.cardNumber||!t.state.validation.expDate||!t.state.validation.cvv})})},t.handleValid=function(){var e=t.state,a=e.activeStep,r=e.validation;return!(0===a&&!r.hasErrorAddressForm)&&(!(1===a&&!r.hasErrorPaymentForm)&&2!==a)},t.getStepContent=function(e){switch(e){case 0:return n.a.createElement(V,{state:t.state,handleChange:t.handleChange});case 1:return n.a.createElement($,{state:t.state,handleChange:t.handleChange});case 2:return n.a.createElement(G,{state:t.state,handleChange:t.handleChange});default:throw new Error("Unknown step")}},t.handleNext=function(){t.setState(function(e){return{activeStep:e.activeStep+1}})},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1}})},t.handleReset=function(){t.setState({activeStep:0})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state.activeStep;return n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,null),n.a.createElement(f.a,{position:"absolute",color:"default",className:e.appBar},n.a.createElement(x.a,null,n.a.createElement(D.a,{variant:"h6",color:"inherit",noWrap:!0},"Company name"))),n.a.createElement("main",{className:e.layout},n.a.createElement(C.a,{className:e.paper},n.a.createElement(D.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),n.a.createElement(w.a,{activeStep:a,className:e.stepper},X.map(function(e){return n.a.createElement(P.a,{key:e},n.a.createElement(O.a,null,e))})),n.a.createElement(n.a.Fragment,null,a===X.length?n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),n.a.createElement(D.a,{variant:"subtitle1"},"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.")):n.a.createElement(n.a.Fragment,null,this.getStepContent(a),n.a.createElement("div",{className:e.buttons},0!==a&&n.a.createElement(B.a,{onClick:this.handleBack,className:e.button},"Back"),n.a.createElement(B.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:e.button,disabled:this.handleValid()},a===X.length-1?"Place order":"Next")))))))}}]),a}(n.a.Component),ee=g()(function(e){return{appBar:{position:"relative"},layout:Object(h.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(h.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit}),stepper:{padding:"".concat(3*e.spacing.unit,"px 0 ").concat(5*e.spacing.unit,"px")},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:3*e.spacing.unit,marginLeft:e.spacing.unit}}})(_),ae=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(ee,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[101,2,1]]]);
//# sourceMappingURL=main.68dff2b3.chunk.js.map