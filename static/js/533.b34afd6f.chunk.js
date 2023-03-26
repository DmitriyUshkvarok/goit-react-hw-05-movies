"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[533],{3342:function(t,e,n){n.d(e,{Z:function(){return r}});var a="ButtonBack_btnBack__tjozC",c=n(184),r=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{className:a,type:"button",children:"\u2190 Go Back"})})}},2743:function(t,e,n){n.d(e,{Z:function(){return g}});var a=n(1087),c=n(7689),r="MoviesList_moviesList__P6SP5",o="MoviesList_moviesItem__r+0sq",i="MoviesItem_cardWrapper__mxmjM",s="MoviesItem_imgWrapper__TWN0D",u="MoviesItem_moviesImg__MqMs7",l="MoviesItem_cardTitle__bY-Ko",v="MoviesItem_ratingStarsContainer__XGfJ5",h="MoviesItem_goldStar__duxiK",d="MoviesItem_grayStar__7ijiP",_="MoviesItem_ratingText__Hzr+S",f="MoviesItem_ratingNumber__6ftL3",m=n(184);var p=function(t){var e=t.poster_path,n=t.title,a=t.vote_average,c=10*a,r=Math.floor(c/10),o=Array.from({length:10},(function(t,e){return e<r?(0,m.jsx)("span",{className:h,children:"\u2605"},"star-".concat(e)):(0,m.jsx)("span",{className:d,children:"\u2605"},"star-".concat(e))}));return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:s,children:(0,m.jsx)("img",{className:u,src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://via.placeholder.com/300x400",alt:n,width:300})}),(0,m.jsx)("h3",{className:l,children:n||"Movie without a title"}),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("p",{className:_,children:a?o:"N/A"}),(0,m.jsx)("span",{className:f,children:a?a.toFixed(1):"N/A"})]})]})})};var g=function(t){var e=t.movies,n=(0,c.TH)();return(0,m.jsx)("ul",{className:r,children:e.map((function(t,e){var c=t.id,r=t.poster_path,i=t.title,s=t.vote_average;return(0,m.jsx)("li",{className:o,children:(0,m.jsx)(a.rU,{to:"/movies/".concat(c),state:{from:n},children:(0,m.jsx)(p,{id:c,poster_path:r,title:i,vote_average:s},c)})},"".concat(c,"-").concat(e))}))})}},8533:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var a=n(9439),c=n(2791),r=n(7367),o=n(3342),i="ActorsMoviesPage_actorsMovies__qYM8t",s="ActorsMoviesPage_btnBackWrapper__Xflc6",u=n(9085),l=n(5700),v=n(2743),h=n(1087),d=n(7689),_=n(184),f=function(){var t=(0,d.UO)().id,e=(0,c.useState)([]),n=(0,a.Z)(e,2),f=n[0],m=n[1],p=(0,c.useState)(null),g=(0,a.Z)(p,2),x=g[0],j=g[1],M=(0,c.useState)(!0),y=(0,a.Z)(M,2),k=y[0],Z=y[1];(0,d.s0)();return(0,c.useEffect)((function(){r.Z.fetchMoviesbyActors(t).then((function(t){m(t),0===t.length&&u.Am.error("sorry, that's all the actors we could find")})).catch((function(t){j(t)})).finally((function(){return Z(!1)}))}),[t]),x?(0,_.jsx)("p",{children:x.message}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l.Z,{children:[(0,_.jsx)("div",{className:s,children:(0,_.jsx)(h.rU,{to:"/movie/actors/",children:(0,_.jsx)(o.Z,{})})}),k?(0,_.jsx)("p",{children:"Loading..."}):(0,_.jsx)("div",{className:i,children:(0,_.jsx)(v.Z,{movies:f})})]}),";"]})}},7367:function(t,e,n){var a=n(1243),c="https://api.themoviedb.org/3/",r="f27eea818d2010463700365b0c06a16e";var o={fetchMoviesbyActors:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(c,"person/").concat(t,"/movie_credits?api_key=").concat(r,"&page=").concat(e)).then((function(t){return t.data.cast}))},fetchTrending:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.Z.get("".concat(c,"trending/all/day?api_key=").concat(r,"&page=").concat(t)).then((function(t){return t.data.results}))},fetchSearchMovie:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(c,"search/movie?query=").concat(t,"&api_key=").concat(r,"&page=").concat(e)).then((function(t){return t.data.results}))},fetchMovieDetalis:function(t){return a.Z.get("".concat(c,"movie/").concat(t,"?api_key=").concat(r)).then((function(t){return t.data}))},fetchMovieCredits:function(t){return a.Z.get("".concat(c,"movie/").concat(t,"/credits?api_key=").concat(r)).then((function(t){return t.data}))},fetchMovieReview:function(t){return a.Z.get("".concat(c,"movie/").concat(t,"/reviews?api_key=").concat(r)).then((function(t){return t.data.results}))},fetchTrailerMovies:function(t){return a.Z.get("".concat(c,"movie/").concat(t,"/videos?api_key=").concat(r)).then((function(t){return t.data.results}))},fetchAllgenres:function(){return a.Z.get("".concat(c,"/genre/movie/list?api_key=").concat(r)).then((function(t){return t.data.genres}))},fetchByGenre:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.Z.get("".concat(c,"/discover/movie?api_key=").concat(r,"&with_genres=").concat(t,"&page=").concat(e)).then((function(t){return t.data}))},fetchActors:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.Z.get("".concat(c,"person/popular?api_key=").concat(r,"&page=").concat(t)).then((function(t){return t.data}))},fetchByYear:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return a.Z.get("".concat(c,"discover/movie?api_key=").concat(r,"&sort_by=popularity.desc&page=").concat(t,"&primary_release_year=").concat(e)).then((function(t){return t.data.results}))}};e.Z=o}}]);
//# sourceMappingURL=533.b34afd6f.chunk.js.map