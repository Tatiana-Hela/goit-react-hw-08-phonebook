"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[756],{2756:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(9434),a=function(e){return e.contacts.items},u=n(2791),o="ContactsPage_container__idZzt",i="ContactsPage_text__H967y",c=n(5036),s=n(9439),l="ContactForm_form__dhl+T",f="ContactForm_label__-cVXI",m="ContactForm_input__Bl93P",p="ContactForm_button__eSwX9",d=n(184),h=function(){var e=(0,u.useState)(""),t=(0,s.Z)(e,2),n=t[0],a=t[1],o=(0,u.useState)(""),i=(0,s.Z)(o,2),h=i[0],v=i[1],_=(0,r.I0)(),y=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":v(r);break;default:throw new Error("There isn't such option")}};return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_((0,c.uK)({name:n,number:h})),a(""),v("")},className:l,children:[(0,d.jsxs)("label",{className:f,children:["Name",(0,d.jsx)("input",{className:m,type:"text",name:"name",value:n,placeholder:"Enter name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:y,required:!0})]}),(0,d.jsxs)("label",{className:f,children:["Number",(0,d.jsx)("input",{className:m,type:"tel",name:"number",value:h,placeholder:"Enter number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:y,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{className:p,type:"submit",children:"Add contacts"})]})},v="NOT_FOUND";var _=function(e,t){return e===t};function y(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?_:r,u=n.maxSize,o=void 0===u?1:u,i=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),s=1===o?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:v},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return v}return{get:r,put:function(t,a){r(t)===v&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(o,c);function l(){var t=s.get(arguments);if(t===v){if(t=e.apply(null,arguments),i){var n=s.getEntries().find((function(e){return i(e.value,t)}));n&&(t=n.value)}s.put(arguments,t)}return t}return l.clearCache=function(){return s.clear()},l}function b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i.memoizeOptions,l=void 0===s?n:s,f=Array.isArray(l)?l:[l],m=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}(r),p=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(f)),d=e((function(){for(var e=[],t=m.length,n=0;n<t;n++)e.push(m[n].apply(null,arguments));return u=p.apply(null,e)}));return Object.assign(d,{resultFunc:c,memoizedResultFunc:p,dependencies:m,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),d}}var x=b(y),g=function(e){return e.filter},j=x([g,a],(function(e,t){var n=e.trim().toLowerCase();return t.filter((function(e){return e.name.trim().toLowerCase().includes(n)}))})),C={list:"ContactList_list__csErn"},N="ContactItem_button__IRFBz",k="ContactItem_item__gxreB",w="ContactItem_info__fyb5q",E=function(e){var t=e.id,n=e.name,a=e.number,u=(0,r.I0)();return(0,d.jsxs)("li",{className:k,children:[(0,d.jsxs)("p",{className:w,children:[n,": ",a]}),(0,d.jsx)("button",{className:N,type:"button",onClick:function(){return u((0,c.GK)(t))},children:"Delete"})]},t)},F=function(){var e=(0,r.v9)(j);return(0,d.jsxs)(d.Fragment,{children:[0===e.length&&(0,d.jsx)("p",{className:C.text,children:"There is no such contact"}),(0,d.jsx)("ul",{className:C.list,children:e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,d.jsx)(E,{id:t,name:n,number:r},t)}))})]})},A=n(5653),z="Filter_label__vEd1E",I="Filter_input__N7T3z",S=function(){var e=(0,r.v9)(g),t=(0,r.I0)();return(0,d.jsxs)("label",{className:z,children:["Find contacts by name",(0,d.jsx)("input",{className:I,type:"text",placeholder:"Enter name...",value:e,onChange:function(e){return t((0,A.T)(e.target.value))}})]})},q="Section_title__SLHvV",P=function(e){var t=e.title,n=e.children;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:q,children:t}),n]})},T=function(){var e=(0,r.v9)(a),t=(0,r.I0)();(0,u.useEffect)((function(){t((0,c.yF)())}),[t]);var n=Boolean(e.length);return(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)(P,{title:"Phonebook",children:(0,d.jsx)(h,{})}),(0,d.jsxs)(P,{title:"Contacts",children:[n&&(0,d.jsx)(S,{}),n&&(0,d.jsx)(F,{}),!n&&(0,d.jsx)("p",{className:i,children:"Your phonebook is empty. Please add contact."})]})]})}}}]);
//# sourceMappingURL=756.dfffb421.chunk.js.map