(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={FilterInput:"Filter_FilterInput__3kH4y",FilterLabel:"Filter_FilterLabel__31TZv"}},13:function(e,t,n){e.exports={AppHeader:"Header_AppHeader__1safz"}},19:function(e,t,n){},20:function(e,t,n){},3:function(e,t,n){e.exports={contactList:"ContactList_contactList__3MzlG",contactListItem:"ContactList_contactListItem__1l6Fa",text:"ContactList_text__2dM24"}},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),o=(n(19),n(14)),s=n(2),l=(n(20),n(5)),u=n.n(l),d=n(13),b=n.n(d),m=n(0);var j=function(e){var t=e.title,n=e.children;return Object(m.jsx)("header",{className:b.a.AppHeader,children:Object(m.jsxs)("div",{className:"Container",children:[Object(m.jsx)("h1",{children:t}),n]})})},h=n(9),p=n.n(h);var O=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{className:"Container ".concat(p.a.Section),children:[Object(m.jsx)("h2",{className:p.a.Title,children:t}),Object(m.jsx)("div",{className:p.a.FormSection,children:n})]})},x=n(6),f=n.n(x);var _=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),d=l[0],b=l[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":b(a);break;default:return}},h=function(){i(""),b("")},p=u.a.generate(),O=u.a.generate();return Object(m.jsxs)("form",{className:f.a.Form,onSubmit:function(e){e.preventDefault(),t(r,d),console.log(r,d),h()},children:[Object(m.jsxs)("div",{className:f.a.Group,children:[Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,id:p,onChange:j}),Object(m.jsx)("label",{htmlFor:p,children:"Name"}),Object(m.jsx)("div",{className:"bar"})]}),Object(m.jsxs)("div",{className:f.a.Group,children:[Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:d,id:O,onChange:j}),Object(m.jsx)("label",{htmlFor:O,children:"Number"}),Object(m.jsx)("div",{className:"bar"})]}),Object(m.jsx)("button",{className:f.a.Btn,type:"submit",children:"add contact"})]})},v=n(3),C=n.n(v),N=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:C.a.contactList,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(m.jsxs)("li",{className:C.a.contactListItem,id:c,children:[Object(m.jsx)("p",{className:C.a.text,children:t}),Object(m.jsx)("p",{className:C.a.text,children:a}),Object(m.jsx)("button",{className:C.a.btn,type:"button",onClick:function(){return n(c)},children:"delete"})]},c)}))})},F=n(11),S=n.n(F),g=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:S.a.FilterLabel,htmlFor:"",children:["Filter contacts by name",Object(m.jsx)("input",{className:S.a.FilterInput,type:"text",value:t,onChange:n})]})},L=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function k(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]}("contacts",L),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],d=i[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{title:"PhoneBook",children:Object(m.jsx)(g,{value:l,onChange:function(e){d(e.currentTarget.value)}})}),Object(m.jsxs)(O,{title:"Contacts",children:[Object(m.jsx)(_,{onSubmit:function(e,t){var a=[{id:u.a.generate(),name:e,number:t}];n.some((function(t){return t.name===e}))?alert("".concat(e," is already in the contact")):c((function(e){return[].concat(Object(o.a)(e),a)}))}}),Object(m.jsx)(N,{contacts:function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={Form:"ContactForm_Form__pmdyI",Btn:"ContactForm_Btn__3RNXk",Group:"ContactForm_Group__2kBuf"}},9:function(e,t,n){e.exports={Section:"Section_Section__CqcNT",Title:"Section_Title__3JdV3",FormSection:"Section_FormSection__26CAb"}}},[[30,1,2]]]);
//# sourceMappingURL=main.45584211.chunk.js.map