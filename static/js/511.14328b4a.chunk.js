"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[511],{311:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(433),a=n(439),c=n(791),o=n(689),u={},s=n(596),i="Searchbar_form__D-hp5",h="Searchbar_inputSearch__xAbPo",l="Searchbar_serchBtn__JmOW6",f=n(184);var m=function(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),o=r[0],u=r[1];return(0,f.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),o?(t(o),u("")):s.Am.error("Please, enter your name movie!")},children:[(0,f.jsx)("input",{className:h,name:"query",value:o,type:"text",autoComplete:"off",placeholder:"Enter the movie name",onChange:function(e){u(e.currentTarget.value.toLowerCase().trim())}}),(0,f.jsx)("button",{type:"submit",className:l,children:"Search"})]})},S=n(700),d=n(743),p=n(771),b=n(367),_=function(){var e=(0,o.s0)(),t=(0,o.TH)(),n=(0,c.useState)([]),i=(0,a.Z)(n,2),h=i[0],l=i[1],_=(0,c.useState)(""),v=(0,a.Z)(_,2),x=v[0],Z=v[1],j=(0,c.useState)(1),g=(0,a.Z)(j,2),k=g[0],w=g[1],y=(0,c.useState)(!1),C=(0,a.Z)(y,2),L=C[0],N=C[1],q=(0,c.useCallback)((function(e){N(!0),b.Z.fetchSearchMovie(x,e).then((function(e){0===e.length&&(s.Am.error("sorry ,thats all the movies we cold find"),N(!1)),l((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e))})),w((function(e){return e+1}))})).catch((function(e){console.error(e)}))}),[x]);(0,c.useEffect)((function(){Z(new URLSearchParams(t.search).get("query"))}),[t.search]),(0,c.useEffect)((function(){x&&q(1)}),[q,x]);return(0,f.jsx)("section",{className:u.searchbar,children:(0,f.jsxs)(S.Z,{children:[(0,f.jsx)(m,{onSubmit:function(t){t!==x&&(l([]),e("?query=".concat(t)))}}),h&&(0,f.jsx)(p.Z,{dataLength:h.length,next:function(){q(k)},hasMore:L,loader:(0,f.jsx)("p",{children:"Loading..."}),children:(0,f.jsx)(d.Z,{movies:h})})]})})}}}]);
//# sourceMappingURL=511.14328b4a.chunk.js.map