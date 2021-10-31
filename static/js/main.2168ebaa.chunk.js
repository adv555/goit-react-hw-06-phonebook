(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={Section:"Section_Section__CqcNT",Title:"Section_Title__3JdV3",FormSection:"Section_FormSection__26CAb"}},14:function(e,t,n){e.exports={FilterInput:"Filter_FilterInput__3kH4y",FilterLabel:"Filter_FilterLabel__31TZv"}},18:function(e,t,n){e.exports={AppHeader:"Header_AppHeader__1safz"}},30:function(e,t,n){},31:function(e,t,n){},4:function(e,t,n){e.exports={contactList:"ContactList_contactList__3MzlG",contactListItem:"ContactList_contactListItem__1l6Fa",text:"ContactList_text__2dM24"}},41:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(9),i=n.n(r),o=n(2),s=n(3),l=n(17),u=n(19),d={ADD:"contacts/add",DELETE:"contacts/delete",CHANGE_FILTER:"contacts/filter"},b=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],m=Object(s.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case d.ADD:var a=e.some((function(e){return e.name===c.name}));return a?alert("".concat(c.name," is already in the contact")):[].concat(Object(u.a)(e),[c]);case d.DELETE:return e.filter((function(e){return e.id!==c}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;return n===d.CHANGE_FILTER?c:e}}),j=Object(s.combineReducers)({contacts:m}),p=Object(s.createStore)(j,Object(l.composeWithDevTools)()),h=(n(30),n(31),n(18)),f=n.n(h),O=n(1);var x=function(e){var t=e.title,n=e.children;return Object(O.jsx)("header",{className:f.a.AppHeader,children:Object(O.jsxs)("div",{className:"Container",children:[Object(O.jsx)("h1",{children:t}),n]})})},_=n(11),v=n.n(_);var C=function(e){var t=e.title,n=e.children;return Object(O.jsxs)("section",{className:"Container ".concat(v.a.Section),children:[Object(O.jsx)("h2",{className:v.a.Title,children:t}),Object(O.jsx)("div",{className:v.a.FormSection,children:n})]})},N=n(15),F=n(6),g=n.n(F),y=n(7),L=n.n(y);var S=Object(o.b)(null,(function(e){return{onSubmit:function(t,n){return e(function(e,t){return{type:d.ADD,payload:{id:g.a.generate(),name:e,number:t}}}(t,n))}}}))((function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(N.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(N.a)(o,2),l=s[0],u=s[1],d=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":u(c);break;default:return}},b=function(){i(""),u("")},m=g.a.generate(),j=g.a.generate();return Object(O.jsxs)("form",{className:L.a.Form,onSubmit:function(e){e.preventDefault(),t(r,l),console.log(r,l),b()},children:[Object(O.jsxs)("div",{className:L.a.Group,children:[Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,id:m,onChange:d}),Object(O.jsx)("label",{htmlFor:m,children:"Name"}),Object(O.jsx)("div",{className:"bar"})]}),Object(O.jsxs)("div",{className:L.a.Group,children:[Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,id:j,onChange:d}),Object(O.jsx)("label",{htmlFor:j,children:"Number"}),Object(O.jsx)("div",{className:"bar"})]}),Object(O.jsx)("button",{className:L.a.Btn,type:"submit",children:"add contact"})]})})),A=n(4),E=n.n(A),D=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},T=Object(o.b)((function(e){var t=e.contacts,n=t.items,c=t.filter;return{contacts:D(n,c)}}),(function(e){return{onDeleteContact:function(t){return e(function(e){return{type:d.DELETE,payload:e}}(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(O.jsx)("ul",{className:E.a.contactList,children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(O.jsxs)("li",{className:E.a.contactListItem,id:t,children:[Object(O.jsx)("p",{className:E.a.text,children:c}),Object(O.jsx)("p",{className:E.a.text,children:a}),Object(O.jsx)("button",{className:E.a.btn,type:"button",onClick:function(){return n(t)},children:"delete"})]},t)}))})})),k=n(14),I=n.n(k),H=Object(o.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e((n=t.target.value,{type:d.CHANGE_FILTER,payload:n}));var n}}}))((function(e){var t=e.value,n=e.onChange;return Object(O.jsxs)("label",{className:I.a.FilterLabel,htmlFor:"",children:["Filter contacts by name",Object(O.jsx)("input",{className:I.a.FilterInput,type:"text",value:t,onChange:n})]})}));function w(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{title:"PhoneBook",children:Object(O.jsx)(H,{})}),Object(O.jsxs)(C,{title:"Contacts",children:[Object(O.jsx)(S,{}),Object(O.jsx)(T,{})]})]})}console.log(p.getState()),i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(o.a,{store:p,children:Object(O.jsx)(w,{})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={Form:"ContactForm_Form__pmdyI",Btn:"ContactForm_Btn__3RNXk",Group:"ContactForm_Group__2kBuf"}}},[[41,1,2]]]);
//# sourceMappingURL=main.2168ebaa.chunk.js.map