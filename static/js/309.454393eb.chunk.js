"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[309],{4332:function(e,n,t){t.d(n,{Z:function(){return F}});var r,a,c,o,i,s,l,u,h,d,f,m,v,g,p=t(1087),x=t(7689),_="MoviesList_moviesList__P6SP5",Z="MoviesList_moviesItem__r+0sq",b=t(168),y=t(4313),j=y.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n"]))),k=y.ZP.div(a||(a=(0,b.Z)(["\n  overflow: hidden;\n  margin-bottom: 5px;\n"]))),w=y.ZP.img(c||(c=(0,b.Z)(["\n  max-width: 100%;\n  object-fit: cover;\n  transition: transform 0.4s;\n  -webkit-transition: transform 0.4s;\n  -moz-transition: transform 0.4s;\n  -ms-transition: transform 0.4s;\n  -o-transition: transform 0.4s;\n\n  &:hover {\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n"]))),S=y.ZP.h3(o||(o=(0,b.Z)(["\n  max-width: 300px;\n  color: aqua;\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: auto;\n"]))),N=y.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n"]))),P=y.ZP.span(s||(s=(0,b.Z)(["\n  font-size: 10px;\n  color: gold;\n"]))),B=y.ZP.span(l||(l=(0,b.Z)(["\n  font-size: 10px;\n  color: gray;\n"]))),L=y.ZP.p(u||(u=(0,b.Z)(["\n  color: rgb(36, 35, 35);\n  font-size: 10px;\n"]))),M=y.ZP.span(h||(h=(0,b.Z)(["\n  font-size: 8px;\n"]))),Y=y.ZP.p(d||(d=(0,b.Z)(["\n  color: red;\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: auto;\n"]))),A=(0,y.iv)(f||(f=(0,b.Z)(["\n  background: #f85032;\n  background: -webkit-linear-gradient(to right, #e73827, #f85032);\n  background: linear-gradient(to right, #e73827, #f85032);\n"]))),T=(0,y.iv)(m||(m=(0,b.Z)(["\n  background: #f7971e;\n  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);\n  background: linear-gradient(to right, #ffd200, #f7971e);\n  color: rgb(36, 35, 35);\n"]))),z=(0,y.iv)(v||(v=(0,b.Z)(["\n  background: #000000;\n  background: -webkit-linear-gradient(to right, #0f9b0f, #000000);\n  background: linear-gradient(to right, #0f9b0f, #000000);\n  color: #fff;\n"]))),C=y.ZP.div(g||(g=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 10px;\n  heigth: 10px;\n  padding: 5px;\n  font-weight: bold;\n  margin-left: 10px;\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-red\n  &.rating-red {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-yellow\n  &.rating-yellow {\n    ","\n  }\n\n  // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 rating-green\n  &.rating-green {\n    ","\n  }\n"])),A,T,z),I=t(184);var q=function(e){var n=e.poster_path,t=e.title,r=e.vote_average,a=e.release_date,c=10*r,o=Math.floor(c/10),i=Array.from({length:10},(function(e,n){return n<o?(0,I.jsx)(P,{children:"\u2605"},"star-".concat(n)):(0,I.jsx)(B,{children:"\u2605"},"star-".concat(n))})),s=function(e){return e<=4?"red":e<7?"yellow":"green"}(r),l="rating-".concat(s);return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(j,{children:[(0,I.jsx)(k,{children:(0,I.jsx)(w,{src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://via.placeholder.com/300x400",alt:t,width:300})}),(0,I.jsx)(S,{children:t||"Movie without a title"}),(0,I.jsxs)(N,{children:[(0,I.jsx)(L,{children:r?i:"N/A"}),(0,I.jsx)(C,{className:l,children:(0,I.jsx)(M,{children:r?r.toFixed(1):"N/A"})}),(0,I.jsx)(Y,{children:a?a.slice(0,4):"N/A"})]})]})})};var F=function(e){var n=e.movies,t=(0,x.TH)();return(0,I.jsx)("ul",{className:_,children:n.map((function(e,n){var r=e.id,a=e.poster_path,c=e.title,o=e.vote_average,i=e.release_date;return(0,I.jsx)("li",{className:Z,children:(0,I.jsx)(p.rU,{to:"/movies/".concat(r),state:{from:t},children:(0,I.jsx)(q,{id:r,poster_path:a,title:c,vote_average:o,release_date:i},r)})},"".concat(r,"-").concat(n))}))})}},4309:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(3433),a=t(9439),c=t(2791),o=t(7689),i={searchbar:"MoviePage_searchbar__Hfnpz"},s=t(9085),l="Searchbar_form__D-hp5",u="Searchbar_inputSearch__xAbPo",h="Searchbar_serchBtn__JmOW6",d=t(184);var f=function(e){var n=e.onSubmit,t=(0,c.useState)(""),r=(0,a.Z)(t,2),o=r[0],i=r[1];return(0,d.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),o?(n(o),i("")):s.Am.error("Please, enter your name movie!")},children:[(0,d.jsx)("input",{className:u,name:"query",value:o,type:"text",autoComplete:"off",placeholder:"Enter the movie name",onChange:function(e){i(e.currentTarget.value.toLowerCase().trim())}}),(0,d.jsx)("button",{type:"submit",className:h,children:"Search"})]})},m=t(5700),v=t(4332),g=t(4771),p=t(7367),x={movieBarList:"MoviesBar_movieBarList__OTYcq",movieBarListItem:"MoviesBar_movieBarListItem__e8kT6"},_=t(1087),Z=t(5861),b=t(4687),y=t.n(b),j={selectedYear:"SearchByYear_selectedYear__3bTgh",selectLabel:"SearchByYear_selectLabel__tWzcV",searchText:"SearchByYear_searchText__5iNfz",selectYear:"SearchByYear_selectYear__5Gye4",selectIcon:"SearchByYear_selectIcon__PBBt+","css-b62m3t-container":"SearchByYear_css-b62m3t-container__o2MPF"},k={},w=function(e){var n=e.hendleIncrement;return(0,d.jsx)("div",{children:(0,d.jsx)("button",{className:k.btnLoadMore,type:"button",onClick:function(){return n()},children:"Load More"})})},S=t(6970),N=t(9806),P=t(1632);var B=function(){var e=(0,c.useState)(0),n=(0,a.Z)(e,2),t=n[0],r=n[1],o=(0,c.useState)([]),i=(0,a.Z)(o,2),l=i[0],u=i[1],h=(0,c.useState)(null),f=(0,a.Z)(h,2),m=f[0],g=f[1],x=(0,c.useState)(!1),_=(0,a.Z)(x,2),b=_[0],k=_[1],B=(0,c.useState)(1),L=(0,a.Z)(B,2),M=L[0],Y=L[1],A=(0,c.useState)(!1),T=(0,a.Z)(A,2),z=T[0],C=T[1];if((0,c.useEffect)((function(){if(0!==t){var e=function(){var e=(0,Z.Z)(y().mark((function e(){var n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),C(!0),e.prev=2,e.next=5,p.Z.fetchByYear(M,t);case 5:n=e.sent,u(n),0===n.length&&s.Am.error("sorry, that's all the movies we could find"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g(e.t0);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[M,t]),m)return(0,d.jsx)("p",{children:m.message});for(var I=[],q=(new Date).getFullYear(),F=q;F>=q-50;F--)I.push(F);return(0,d.jsxs)("div",{className:j.selectedWrapper,children:[(0,d.jsxs)("div",{className:j.selectedYear,children:[(0,d.jsx)("label",{className:j.selectLabel,htmlFor:"year-select",children:"Select a year:"}),(0,d.jsxs)("div",{className:j.selectWrapper,children:[(0,d.jsx)(S.ZP,{className:j.select,classNamePrefix:"react-select",name:"year-select",id:"year-select",value:{value:t,label:t},onChange:function(e){return r(e.value)},options:I.map((function(e){return{value:e,label:e}})),placeholder:"Select a year",menuPlacement:"auto"}),(0,d.jsx)("div",{className:j.selectIcon,children:(0,d.jsx)(N.G,{icon:P.CjD})})]})]}),l.length>0?(0,d.jsx)(v.Z,{movies:l}):b?(0,d.jsx)("p",{children:"Loading..."}):(0,d.jsx)("p",{className:j.searchText,children:"Please select a year to see movies."}),z&&(0,d.jsx)(w,{hendleIncrement:function(){Y(M+1)}})]})};var L=function(){var e=(0,o.TH)();return(0,d.jsxs)("div",{className:x.movieBarWrapper,children:[(0,d.jsx)("ul",{className:x.movieBarList,children:(0,d.jsx)("li",{className:x.movieBarListItem,children:(0,d.jsx)(_.rU,{to:"/movie/actors/",state:{from:e},children:"Actors"})})}),(0,d.jsx)("div",{children:(0,d.jsx)(B,{})})]})},M=function(){var e=(0,o.s0)(),n=(0,o.TH)(),t=(0,c.useState)([]),l=(0,a.Z)(t,2),u=l[0],h=l[1],x=(0,c.useState)(""),_=(0,a.Z)(x,2),Z=_[0],b=_[1],y=(0,c.useState)(0),j=(0,a.Z)(y,2),k=j[0],w=j[1],S=(0,c.useState)(!1),N=(0,a.Z)(S,2),P=N[0],B=N[1],M=(0,c.useCallback)((function(e){B(!0),p.Z.fetchSearchMovie(Z,e).then((function(n){0===n.length?(s.Am.error("sorry, that's all the movies we could find"),B(!1)):(h((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),w(e))})).catch((function(e){s.Am.error("Failed to fetch movies.")}))}),[Z]);(0,c.useEffect)((function(){b(new URLSearchParams(n.search).get("query")),w(1)}),[n.search]),(0,c.useEffect)((function(){Z&&M(1)}),[M,Z]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(m.Z,{children:[(0,d.jsxs)("section",{className:i.searchbar,children:[(0,d.jsx)(f,{onSubmit:function(n){n!==Z&&(h([]),e("?query=".concat(n)))}}),(0,d.jsx)(L,{})]}),(0,d.jsx)("section",{className:i.moviesListSearch,children:u&&(0,d.jsx)(g.Z,{dataLength:u.length,next:function(){M(k+1)},hasMore:P,loader:(0,d.jsx)("p",{children:"Loading..."}),children:(0,d.jsx)(v.Z,{movies:u})})})]})})}},7367:function(e,n,t){var r=t(1243),a="https://api.themoviedb.org/3/",c="f27eea818d2010463700365b0c06a16e";var o={fetchMoviesbyActors:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(a,"person/").concat(e,"/movie_credits?api_key=").concat(c,"&page=").concat(n)).then((function(e){return e.data.cast}))},fetchTrending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.Z.get("".concat(a,"trending/all/day?api_key=").concat(c,"&page=").concat(e)).then((function(e){return e.data.results}))},fetchSearchMovie:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(a,"search/movie?query=").concat(e,"&api_key=").concat(c,"&page=").concat(n)).then((function(e){return e.data.results}))},fetchMovieDetalis:function(e){return r.Z.get("".concat(a,"movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.data}))},fetchMovieCredits:function(e){return r.Z.get("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.data}))},fetchMovieReview:function(e){return r.Z.get("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.data.results}))},fetchTrailerMovies:function(e){return r.Z.get("".concat(a,"movie/").concat(e,"/videos?api_key=").concat(c)).then((function(e){return e.data.results}))},fetchAllgenres:function(){return r.Z.get("".concat(a,"/genre/movie/list?api_key=").concat(c)).then((function(e){return e.data.genres}))},fetchByGenre:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(a,"/discover/movie?api_key=").concat(c,"&with_genres=").concat(e,"&page=").concat(n)).then((function(e){return e.data}))},fetchActors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=n?"".concat(a,"search/person?api_key=").concat(c,"&page=").concat(e,"&query=").concat(n):"".concat(a,"person/popular?api_key=").concat(c,"&page=").concat(e);return r.Z.get(t).then((function(e){return e.data}))},fetchByYear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;return r.Z.get("".concat(a,"discover/movie?api_key=").concat(c,"&sort_by=popularity.desc&page=").concat(e,"&primary_release_year=").concat(n)).then((function(e){return e.data.results}))},fetchExpectedMovies:function(){return r.Z.get("".concat(a,"/movie/upcoming?api_key=").concat(c)).then((function(e){return e.data.results}))}};n.Z=o}}]);
//# sourceMappingURL=309.454393eb.chunk.js.map