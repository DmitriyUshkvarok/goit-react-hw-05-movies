/*! For license information please see 33.67039426.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{743:function(t,e,o){o.d(e,{Z:function(){return p}});var n=o(87),r=o(689),s="MoviesList_moviesList__P6SP5",i="MoviesList_moviesItem__r+0sq",l={cardTitle:"MoviesItem_cardTitle__bY-Ko"},a=o(831),c=o(184);var h=function(t){var e=t.poster_path,o=t.title;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:l.cardWrapper,children:[(0,c.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):a,alt:o,width:300}),(0,c.jsx)("h3",{className:l.cardTitle,children:o||"Movie without a title"})]})})};var p=function(t){var e=t.movies,o=(0,r.TH)();return(0,c.jsx)("ul",{className:s,children:e.map((function(t,e){var r=t.id,s=t.poster_path,l=t.title;return(0,c.jsx)("li",{className:i,children:(0,c.jsx)(n.rU,{to:"/movies/".concat(r),state:{from:o},children:(0,c.jsx)(h,{id:r,poster_path:s,title:l})})},"".concat(r,"-").concat(e))}))})}},367:function(t,e,o){var n=o(243),r="https://api.themoviedb.org/3/",s="f27eea818d2010463700365b0c06a16e";var i={fetchTrending:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.Z.get("".concat(r,"trending/all/day?api_key=").concat(s,"&page=").concat(t)).then((function(t){return t.data.results}))},fetchSearchMovie:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return n.Z.get("".concat(r,"search/movie?query=").concat(t,"&api_key=").concat(s,"&page=").concat(e)).then((function(t){return t.data.results}))},fetchMovieDetalis:function(t){return n.Z.get("".concat(r,"movie/").concat(t,"?api_key=").concat(s)).then((function(t){return t.data}))},fetchMovieCredits:function(t){return n.Z.get("".concat(r,"movie/").concat(t,"/credits?api_key=").concat(s)).then((function(t){return t.data}))},fetchMovieReview:function(t){return n.Z.get("".concat(r,"movie/").concat(t,"/reviews?api_key=").concat(s)).then((function(t){return t.data.results}))}};e.Z=i},771:function(t,e,o){var n=o(791),r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},r(t,e)};var s=function(){return s=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},s.apply(this,arguments)};var i="Pixel",l="Percent",a={unit:l,value:.8};function c(t){return"number"===typeof t?{unit:l,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var h=function(t){function e(e){var o=t.call(this,e)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(t){o.lastScrollTop||(o.dragging=!0,t instanceof MouseEvent?o.startY=t.pageY:t instanceof TouchEvent&&(o.startY=t.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(t){o.dragging&&(t instanceof MouseEvent?o.currentY=t.pageY:t instanceof TouchEvent&&(o.currentY=t.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&(o.props.refreshFunction&&o.props.refreshFunction(),o.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="unset")}))},o.onScrollListener=function(t){"function"===typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(t)}),0);var e=o.props.height||o._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||((o.props.inverse?o.isElementAtTop(e,o.props.scrollThreshold):o.isElementAtBottom(e,o.props.scrollThreshold))&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=e.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},o.throttledOnScrollListener=function(t,e,o,n){var r,s=!1,i=0;function l(){r&&clearTimeout(r)}function a(){var a=this,c=Date.now()-i,h=arguments;function p(){i=Date.now(),o.apply(a,h)}function u(){r=void 0}s||(n&&!r&&p(),l(),void 0===n&&c>t?p():!0!==e&&(r=setTimeout(n?u:p,void 0===n?t-c:t)))}return"boolean"!==typeof e&&(n=o,o=e,e=void 0),a.cancel=function(){l(),s=!0},a}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(t,e){return t.dataLength!==e.prevDataLength?s(s({},e),{prevDataLength:t.dataLength}):null},e.prototype.isElementAtTop=function(t,e){void 0===e&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,n=c(e);return n.unit===i?t.scrollTop<=n.value+o-t.scrollHeight+1:t.scrollTop<=n.value/100+o-t.scrollHeight+1},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,n=c(e);return n.unit===i?t.scrollTop+o>=t.scrollHeight-n.value:t.scrollTop+o>=n.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},n.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&n.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},n.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(n.Component);e.Z=h},831:function(t,e,o){t.exports=o.p+"static/media/poster.f55d248454cd0ab3bc5b.jpeg"}}]);
//# sourceMappingURL=33.67039426.chunk.js.map