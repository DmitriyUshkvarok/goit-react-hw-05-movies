"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var c=n(439),a=n(689),r=n(791),i=n(367),o={author:"Reviews_author__CqYAZ",content:"Reviews_content__13k0w"},u=n(700),s=n(184);var h=function(){var e=(0,a.UO)().movieId,t=(0,r.useState)([]),n=(0,c.Z)(t,2),h=n[0],d=n[1],f=(0,r.useState)(!0),l=(0,c.Z)(f,2),v=l[0],m=l[1],p=(0,r.useState)(null),g=(0,c.Z)(p,2),_=g[0],w=g[1];return(0,r.useEffect)((function(){m(!0),i.Z.fetchMovieReview(e).then(d).catch((function(e){w(e),m(!1)})).finally(m(!1))}),[e]),v?(0,s.jsx)("p",{children:"Loading..."}):_?(0,s.jsx)("p",{children:_.message}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{children:(0,s.jsx)("div",{className:o.reviewList,children:h&&h.length>0?h.map((function(e){var t=e.author,n=e.content,c=e.id;return(0,s.jsxs)("div",{className:o.reviewListItem,children:[(0,s.jsxs)("p",{className:o.author,children:["Author: ",t]}),(0,s.jsxs)("p",{className:o.content,children:["Content:",n]})]},c)})):(0,s.jsx)("p",{children:"No review members found"})})})})}},367:function(e,t,n){var c=n(243),a="https://api.themoviedb.org/3/",r="f27eea818d2010463700365b0c06a16e";var i={fetchTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c.Z.get("".concat(a,"trending/all/day?api_key=").concat(r,"&page=").concat(e)).then((function(e){return e.data.results}))},fetchSearchMovie:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.Z.get("".concat(a,"search/movie?query=").concat(e,"&api_key=").concat(r,"&page=").concat(t)).then((function(e){return e.data.results}))},fetchMovieDetalis:function(e){return c.Z.get("".concat(a,"movie/").concat(e,"?api_key=").concat(r)).then((function(e){return e.data}))},fetchMovieCredits:function(e){return c.Z.get("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.data}))},fetchMovieReview:function(e){return c.Z.get("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.data.results}))}};t.Z=i}}]);
//# sourceMappingURL=168.58322b7c.chunk.js.map