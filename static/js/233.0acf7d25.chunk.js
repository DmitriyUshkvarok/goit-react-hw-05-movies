"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[233],{4640:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(3433),c=t(9439),a="HomePage_trandingMovies__2UC1J",s=t(5700),u=t(2743),i=t(2791),o=t(4771),l=t(7367),f=t(7596),h=t(1087),d=t(7689),g="GanreList_ganreList__Ukkui",m="GanreList_ganreListItem__oINk6",_=t(184);var Z=function(e){var n=e.genres,t=(0,d.TH)();return(0,_.jsx)("ul",{className:g,children:n.map((function(e){var n=e.id,r=e.name;return(0,_.jsx)(h.rU,{to:"genre/".concat(n),state:{from:t},children:(0,_.jsx)("li",{className:m,children:(0,_.jsx)("p",{children:r})})},n)}))})};var x=function(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],h=n[1],d=(0,i.useState)(1),g=(0,c.Z)(d,2),m=g[0],x=g[1],j=(0,i.useState)(!1),k=(0,c.Z)(j,2),v=k[0],p=k[1],L=(0,i.useState)([]),w=(0,c.Z)(L,2),S=w[0],C=w[1],N=(0,i.useState)(!1),b=(0,c.Z)(N,2),E=b[0],U=b[1],A=(0,i.useCallback)((function(e){p(!0),l.Z.fetchTrending(e).then((function(n){p(!1),0===n.length&&f.Am.error("sorry, that's all the movies we could find"),h((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),x(e)})).catch((function(e){p(!1)}))}),[]);return(0,i.useEffect)((function(){return U(!0),function(){return U(!1)}}),[]),(0,i.useEffect)((function(){E&&0===t.length&&A(m)}),[m,A,t.length,E]),(0,i.useEffect)((function(){l.Z.fetchAllgenres().then((function(e){C(e)})).catch("error")}),[]),(0,_.jsx)("section",{className:a,children:(0,_.jsxs)(s.Z,{children:[(0,_.jsx)(Z,{genres:S}),(0,_.jsx)(o.Z,{dataLength:t.length,next:function(){return A(m+1)},hasMore:!v,loader:(0,_.jsx)("p",{children:"Loading..."}),children:(0,_.jsx)(u.Z,{movies:t})})]})})}}}]);
//# sourceMappingURL=233.0acf7d25.chunk.js.map