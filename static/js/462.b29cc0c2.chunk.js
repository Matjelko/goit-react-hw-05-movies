"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[462],{546:function(t,e,n){var r,a=n(168),c=n(87),u=n(444),i=n(184),o=(0,u.ZP)(c.OL)(r||(r=(0,a.Z)(["\n  color: black;\n  font-size: 20px;\n"])));e.Z=function(t){var e=t.id,n=t.title;return(0,i.jsx)("li",{id:e,children:(0,i.jsx)(o,{to:"/movies/".concat(e),children:n})})}},462:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(184),o=function(t){var e=t.handleSubmit;return(0,i.jsxs)("form",{onSubmit:e,children:[(0,i.jsx)("input",{className:"searchbar__input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Film..."}),(0,i.jsx)("button",{className:"searchbar__button",type:"submit",children:"Search"})]})},s=n(546),f=n(791),l=function(){var t=(0,f.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],l=function(){var t=(0,r.Z)(u().mark((function t(e){var n,a,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),n=e.target[0].value,a="https://api.themoviedb.org/3/search/movie?api_key=".concat("6cd416a210a971fc6ba2d58e4253069e","&query=").concat(n),i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(a);case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,c(n.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,i.jsxs)("div",{style:{marginTop:40},children:[(0,i.jsx)(o,{handleSubmit:l}),(0,i.jsx)("ul",{children:n.map((function(t){return(0,i.jsx)(s.Z,{id:t.id,title:t.title},t.id)}))})]})}},861:function(t,e,n){function r(t,e,n,r,a,c,u){try{var i=t[c](u),o=i.value}catch(s){return void n(s)}i.done?e(o):Promise.resolve(o).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var u=t.apply(e,n);function i(t){r(u,a,c,i,o,"next",t)}function o(t){r(u,a,c,i,o,"throw",t)}i(void 0)}))}}n.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=462.b29cc0c2.chunk.js.map