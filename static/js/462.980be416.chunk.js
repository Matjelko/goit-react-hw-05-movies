"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[462],{546:function(e,t,n){var r,a=n(168),u=n(87),c=n(444),o=n(689),i=n(184),s=(0,c.ZP)(u.OL)(r||(r=(0,a.Z)(["\n  color: black;\n  font-size: 20px;\n"])));t.Z=function(e){var t=e.id,n=e.title,r=(0,o.TH)();return(0,i.jsx)("li",{id:t,children:(0,i.jsx)(s,{to:"/movies/".concat(t),state:{from:r},children:n})})}},462:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),c=n.n(u),o=n(184),i=function(e){var t=e.handleSubmit,n=e.value,r=e.onChange;return(0,o.jsxs)("form",{onSubmit:t,children:[(0,o.jsx)("input",{className:"searchbar__input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Film...",value:n,onChange:function(e){return r(e.target.value)}}),(0,o.jsx)("button",{className:"searchbar__button",type:"submit",children:"Search"})]})},s=n(546),l=n(791),f=n(87),h=function(){var e,t=(0,l.useState)([]),n=(0,a.Z)(t,2),u=n[0],h=n[1],p=(0,f.lr)(),v=(0,a.Z)(p,2),d=v[0],m=v[1],x=null!==(e=d.get("query"))&&void 0!==e?e:"",b=function(){var e=(0,r.Z)(c().mark((function e(t){var n,a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target[0].value,a="https://api.themoviedb.org/3/search/movie?api_key=".concat("6cd416a210a971fc6ba2d58e4253069e","&query=").concat(n),u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{style:{marginTop:40},children:[(0,o.jsx)(i,{handleSubmit:b,value:x,onChange:function(e){m(""!==e?{query:e}:{})}}),(0,o.jsx)("ul",{children:u.map((function(e){return(0,o.jsx)(s.Z,{id:e.id,title:e.title},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,a,u,c){try{var o=e[u](c),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var c=e.apply(t,n);function o(e){r(c,a,u,o,i,"next",e)}function i(e){r(c,a,u,o,i,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=462.980be416.chunk.js.map