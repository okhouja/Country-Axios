(this["webpackJsonpcountry-axios"]=this["webpackJsonpcountry-axios"]||[]).push([[0],{19:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(13),s=n.n(r),o=(n(19),n(3)),i=n(14),u=n.n(i),j=n(0),l=function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h4",{children:"\ud83d\udd78"}),Object(j.jsx)("h6",{children:"Loading ..."})]})},b=function(t){var e=t.results.map((function(t,e){console.log(t);var n=t.name,c=t.flag,a=t.capital,r=t.population;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:n}),Object(j.jsxs)("h5",{children:["Capital: ",a]}),Object(j.jsxs)("h5",{children:["Population: ",r]}),Object(j.jsx)("img",{src:c,alt:n,className:"flag"})]},e)}));return Object(j.jsx)(a.a.Fragment,{children:e})},h=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),h=i[0],O=i[1],d=Object(c.useState)(!0),x=Object(o.a)(d,2),f=x[0],p=x[1];return Object(c.useEffect)((function(){setTimeout((function(){p(!1)}),1e3)}),[]),f?Object(j.jsx)(l,{}):Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=encodeURIComponent(n);console.log(e);var c="https://restcountries.eu/rest/v2/name/".concat(e);u()(c).then((function(t){var e=t.data;return O(e)})).catch((function(t){return console.log("Your had an ".concat(t))}))},children:[Object(j.jsx)("input",{type:"text",value:n,onChange:function(t){r(t.target.value)},placeholder:"Write a country name"}),Object(j.jsx)("button",{type:"submit",children:"Search"})]}),Object(j.jsx)(b,{results:h})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5f21f256.chunk.js.map