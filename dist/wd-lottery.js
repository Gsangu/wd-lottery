!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=6)}([function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(4)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){"use strict";r(0)},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".__big-wheel[data-v-5a7fd88c]{position:relative;display:inline-block}.__big-wheel .wrap[data-v-5a7fd88c]{position:absolute;width:100%;height:100%}.__big-wheel .wrap .prize-wrap[data-v-5a7fd88c]{position:absolute;left:25%;top:0;width:50%;height:50%}.__big-wheel .wrap .prize-wrap .item[data-v-5a7fd88c]{position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:center bottom;display:flex;align-items:center;justify-content:center}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[r].concat(i).concat([o]).join("\n")}var s;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){var n,o,i={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=a.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,f=0,u=[],p=r(5);function d(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(y(n.parts[s],e))}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(y(n.parts[s],e));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function v(t,e){var r=c(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,r);r.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return m(e,t.attrs),v(t,e),e}function m(t,e){Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])}))}function y(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=f++;r=l||(l=g(e)),n=x.bind(null,r,s,!1),o=x.bind(null,r,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),v(t,e),e}(e),n=R.bind(null,r,e),o=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(e),n=C.bind(null,r),o=function(){b(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=h(t,e);return d(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var s=r[o];(a=i[s.id]).refs--,n.push(a)}t&&d(h(t,e),e);for(o=0;o<n.length;o++){var a;if(0===(a=n[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var w,_=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function C(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function R(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=p(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,r){"use strict";r.r(e),r.d(e,"LuckyWheel",(function(){return s}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"bigWheel",staticClass:"__big-wheel",style:{width:t.width,height:t.height||t.width}},[r("div",{staticClass:"wrap",style:{transform:t.rotateAngle,transition:t.rotateTransition}},[r("canvas",{directives:[{name:"show",rawName:"v-show",value:t.showBg,expression:"showBg"}],ref:"canvas",attrs:{id:"canvas"}},[t._v("浏览器版本过低")]),t._v(" "),t._t("bg"),t._v(" "),r("div",{staticClass:"prize-wrap"},t._l(t.prizeList,(function(e,n){return r("div",{key:n,staticClass:"item",style:t._calcRotateAngle(n)},[r("div",{staticClass:"content"},[t._t("item",null,{item:e,index:n})],2)])})),0)],2)])};n._withStripped=!0;var o={name:"luckyWheel",props:{prizeList:{type:Array,required:!0},width:{required:!0},height:{type:String,default:""},showBg:{type:Boolean,default:!0},prizeBgColors:{type:Array,default:()=>["#F47F45","#FFA468"]},borderColor:{type:String,default:"#ff9800"},turnsNumber:{type:Number,default:5},turnsTime:{type:Number,default:5}},data:()=>({startRotateDegree:0,rotateAngle:"rotate(30deg)",rotateTransition:""}),methods:{init(){const t=this.prizeList.length,e=this.prizeBgColors,r=this.borderColor,n=this.$refs.canvas.getContext("2d"),o=this.$refs.canvas.width=this.$refs.bigWheel.clientWidth,i=this.$refs.canvas.height=this.$refs.bigWheel.clientHeight;n.translate(0,i),n.rotate(-90*Math.PI/180);const s=o/2-1,a=2*Math.PI/t;n.clearRect(0,0,o,i),n.strokeStyle=r;let c=-1;for(let r=0;r<t;r++){const t=r*a;c++,n.fillStyle=e[c],c===e.length-1&&(c=-1),n.beginPath(),n.arc(.5*o,.5*i,s,t,t+a,!1),n.arc(.5*o,.5*i,0,t+a,t,!0),n.stroke(),n.fill(),n.save()}},rotate(t){const e=this.turnsTime,r=this.startRotateDegree+360*this.turnsNumber+360-(180/this.prizeList.length+360/this.prizeList.length*t)-this.startRotateDegree%360;this.startRotateDegree=r,this.rotateAngle=`rotate(${r}deg)`,this.rotateTransition=`transform ${e}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`,setTimeout(()=>{this.$emit("over",this.prizeList[t])},1e3*e+500)},_calcRotateAngle(t){return{transform:`rotate(${360/this.prizeList.length*t+180/this.prizeList.length}deg)`}}},mounted(){this.init()}};r(1);var i=function(t,e,r,n,o,i,s,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var f=l.render;l.render=function(t,e){return c.call(e),f(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}(o,n,[],!1,null,"5a7fd88c",null);i.options.__file="src/LuckyWheel.vue";var s=i.exports;s.install=t=>t.component(s.name,s);e.default={LuckyWheel:s}}])}));