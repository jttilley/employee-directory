(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),a=n.n(c),o=n(16),s=n.n(o),i=(n(26),n(6)),l=n.n(i),h=n(4),u=n(17),j=n(20),d=(n(28),n(29),a.a.createContext({employees:[],search:"",handleInputChange:function(){}}));var b=function(){var e=Object(c.useContext)(d),t=e.search,n=e.handleInputChange;return Object(r.jsx)("form",{className:"form-inline",children:Object(r.jsx)("input",{className:"form-control mr-sm-2",name:"search",type:"search",placeholder:"Find Employee","aria-label":"Search",value:t,id:"search",onChange:n})})};var m=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)(b,{})})};n(30);var f=function(e){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on a column headers to sort or use the search to narrow your results."})]})};n(31);var p=function(e){var t=e.key,n=e.pic,c=e.name,a=e.email,o=e.phone,s=e.dob;return Object(r.jsxs)("tr",{id:t,children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:n})}),Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:o}),Object(r.jsx)("td",{children:a}),Object(r.jsx)("td",{children:s})]})},O=n(18),x=n.n(O),v=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")},y=n(55),g=n(7),k=n.n(g),C=[];var w=function(){var e=Object(c.useState)({employees:[],search:""}),t=Object(j.a)(e,2),n=t[0],a=t[1],o=n.employees,s=n.search;Object(c.useEffect)((function(){i()}),[]);var i=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,C=t.data.results,console.log("mainList: ",C),a(Object(h.a)(Object(h.a)({},n),{},{employees:C})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("There was an error processing your results.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();function b(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}function O(e,t){return e.phone<t.phone?-1:e.phone>t.phone?1:0}function x(e,t){return e.email<t.email?-1:e.email>t.email?1:0}function g(e,t){return e.dob.date<t.dob.date?-1:e.dob.date>t.dob.date?1:0}var w=function(e){var t=[];switch(e.target.innerText){case"Name":t=o.sort(b);break;case"Phone":t=o.sort(O);break;case"Email":t=o.sort(x);break;case"Date of Birth":t=o.sort(g)}a(Object(h.a)(Object(h.a)({},n),{},{employees:t}))};return Object(r.jsx)(d.Provider,{value:{search:s,employees:o,handleInputChange:function(e){!function(e){var t=C.filter((function(t){return"".concat(t.name.first," ").concat(t.name.last,"\n      ").concat(t.phone,"\n      ").concat(t.email,"\n      ").concat(k()(t.dob.date).format("MM/DD/YYYY")).toLowerCase().indexOf(e.toLowerCase())>-1}));a(Object(h.a)(Object(h.a)({},n),{},{search:e,employees:t}))}(e.target.value)}},children:Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{}),Object(r.jsx)(m,{}),Object(r.jsxs)(y.a,{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Image"}),Object(r.jsx)("th",{onClick:w,children:"Name"}),Object(r.jsx)("th",{onClick:w,children:"Phone"}),Object(r.jsx)("th",{onClick:w,children:"Email"}),Object(r.jsx)("th",{onClick:w,children:"Date of Birth"})]})}),Object(r.jsx)("tbody",{children:o.map((function(e){return Object(r.jsx)(p,{pic:e.picture.thumbnail,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,dob:k()(e.dob.date).format("MM/DD/YYYY")},e.cell)}))})]})]})})};n(52);s.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.321cf7b5.chunk.js.map