(function(){"use strict";var t={2789:function(t,n,e){var s=e(8935),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Vue Todo App")]),t._m(0),e("br"),e("TaskRender",{attrs:{taskList:"Tasks"}})],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("strong",[t._v("- - -")])])}],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"task-render"}},[e("form",{on:{submit:function(n){return n.preventDefault(),t.addTask()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"task-input",attrs:{type:"text",placeholder:"Add new task"},domProps:{value:t.newTask},on:{input:function(n){n.target.composing||(t.newTask=n.target.value)}}}),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"submit",value:"OK"}})]),t._l(t.tasks,(function(t){return e("TaskCard",{key:t.id,attrs:{task:t}})}))],2)},a=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isRemoved||t.isDiscarded?t.isRemoved?e("div",{staticClass:"removed",attrs:{id:"task-card"}},[e("p",{attrs:{id:"content"}},[t._v(t._s(t.content))]),e("div",{staticClass:"buttons"},[e("button",{staticClass:"red",on:{click:function(n){return t.discard()}}},[t._v("Discard")]),e("button",{staticClass:"green",on:{click:function(n){return t.restore()}}},[t._v("Restore")])])]):t._e():e("div",{class:{complete:t.isDone},attrs:{id:"task-card"}},[e("p",{attrs:{id:"content"}},[t._v(t._s(t.content))]),e("div",{staticClass:"buttons"},[t.isDone?e("button",{staticClass:"yellow",on:{click:function(n){return t.toggle()}}},[t._v("Undo")]):e("button",{staticClass:"green",on:{click:function(n){return t.toggle()}}},[t._v("Done")]),e("button",{staticClass:"red",on:{click:function(n){return t.remove()}}},[t._v("Delete")])])])},c=[],l={name:"TaskCard",props:["task"],data(){return{isDone:this.task.isDone,content:this.task.content,isRemoved:!1,isDiscarded:!1}},methods:{toggle:function(){this.isDone=!this.isDone},remove:function(){this.isRemoved=!0},restore:function(){this.isRemoved=!1},discard:function(){this.isDiscarded=!0,this.restore()}}},d=l,f=e(1001),v=(0,f.Z)(d,u,c,!1,null,"463e001e",null),p=v.exports,k={name:"TaskRender",props:[],components:{TaskCard:p},data(){return{newTask:"",tasks:[]}},methods:{addTask:function(){""!==this.newTask&&(this.tasks.unshift({content:this.newTask,isDone:!1}),this.newTask="")}}},h=k,m=(0,f.Z)(h,i,a,!1,null,"5faaf974",null),_=m.exports,b={name:"App",components:{TaskRender:_}},w=b,g=(0,f.Z)(w,r,o,!1,null,null,null),T=g.exports;s.Z.config.productionTip=!1,new s.Z({render:t=>t(T)}).$mount("#app")}},n={};function e(s){var r=n[s];if(void 0!==r)return r.exports;var o=n[s]={exports:{}};return t[s](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,s,r,o){if(!s){var i=1/0;for(l=0;l<t.length;l++){s=t[l][0],r=t[l][1],o=t[l][2];for(var a=!0,u=0;u<s.length;u++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](s[u])}))?s.splice(u--,1):(a=!1,o<i&&(i=o));if(a){t.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[s,r,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,s){var r,o,i=s[0],a=s[1],u=s[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(u)var l=u(e)}for(n&&n(s);c<i.length;c++)o=i[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(l)},s=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(2789)}));s=e.O(s)})();
//# sourceMappingURL=app.0149cc09.js.map