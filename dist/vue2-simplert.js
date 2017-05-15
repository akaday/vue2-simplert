/*!
 *  @author: Irfan Maulana 
 *   vue2-simplert v.0.0.8 
 *   https://github.com/mazipan/vue2-simplert  
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Simplert=t():e.Simplert=t()}(this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="../dist/",t(0)}([function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=i(6),o=r(n);e.exports=o.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="#068AC9",r="info";t.default={props:{isUseRadius:!1,isUseIcon:!1,simplertData:Object},data:function(){return{isShownData:!1,title:"",message:"",type:r,colorBtn:i}},watch:{simplertData:function(e){var t=this;t.openSimplert(e)}},methods:{closeOverlay:function(e){var t=this;"simplert simplert--shown"===e.target.className&&(t.isShownData=!1,t.type=r)},closeSimplert:function(e){var t=this;e.preventDefault(),t.isShownData=!1,t.type=r},openSimplert:function(e){var t=this;t.isShownData=!0,"undefined"!=typeof e&&(t.title=e.title,t.message=e.message,"undefined"!=typeof e.type?t.type=e.type:t.type=r,"undefined"!=typeof e.colorBtn?t.colorBtn=e.colorBtn:t.colorBtn=i)}}}},function(e,t,i){t=e.exports=i(3)(),t.push([e.id,".simplert{line-height:1.15;font-size:14px}html{box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;font-size:62.5%}*,:after,:before{box-sizing:inherit}.simplert{position:fixed;z-index:999;top:0;left:0;overflow:auto;width:100%;height:100%;background-color:#000;background-color:rgba(0,0,0,.4);text-align:center;display:none}.simplert--shown{display:flex;align-items:center}.simplert--shown .simplert__content{animation-duration:.3s;animation-fill-mode:both;animation-name:zoomIn}.simplert__header{padding:2em 0}.simplert__title{display:block;font-size:30px}.simplert__content{position:relative;width:90%;max-width:400px;margin:0 auto;padding:0;background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}@media only screen and (min-width:768px){.simplert__content{width:30%}}.simplert__content--radius{border-radius:.3em}.simplert__body{padding-bottom:1em}.simplert__icon{margin:10px auto;width:80px;height:80px;position:relative;border-radius:50%}.simplert__icon--info{border:4px solid #c9dae1}.simplert__icon--success{border:4px solid #a5dc86}.simplert__icon--warning{border:4px solid #f8bb86}.simplert__icon--error{border:4px solid #f27474}.simplert__line{height:5px;display:block;border-radius:2px;position:absolute;z-index:2}.simplert__line--info{width:7px;height:7px;top:19px;border-radius:50%;margin-left:-3px}.simplert__line--info,.simplert__line--info-2{background-color:#c9dae1;position:absolute;left:50%}.simplert__line--info-2{width:5px;height:29px;border-radius:2px;margin-left:-2px;bottom:15px}.simplert__line--success{background-color:#a5dc86;width:25px;-webkit-transform:rotate(45deg);transform:rotate(45deg);left:6px;top:44px}.simplert__line--success-2{background-color:#a5dc86;width:47px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:6px;top:38px}.simplert__line--warning{position:absolute;width:5px;height:35px;left:50%;top:10px;border-radius:2px;margin-left:-2px;background-color:#f8bb86}.simplert__line--warning-2{position:absolute;width:7px;height:7px;border-radius:50%;margin-left:-3px;left:50%;bottom:10px;background-color:#f8bb86}.simplert__line--error{background-color:#f27474;-webkit-transform:rotate(45deg);transform:rotate(45deg);left:13px;width:47px;top:35px}.simplert__line--error-2{background-color:#f27474;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:13px;width:47px;top:35px}.simplert__footer{padding:1em 0}.simplert__close{display:inline-block;padding:10px 20px;outline:none;border:none;text-align:center;cursor:pointer;background-color:#068ac9;color:#fff;-webkit-appearance:none;-moz-appearance:none}.simplert__close--radius{border-radius:.3em}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(e,t,i){function r(e,t){for(var i=0;i<e.length;i++){var r=e[i],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(p(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(p(r.parts[o],t));u[r.id]={id:r.id,refs:1,parts:s}}}}function n(e){for(var t=[],i={},r=0;r<e.length;r++){var n=e[r],o=n[0],s=n[1],a=n[2],l=n[3],p={css:s,media:a,sourceMap:l};i[o]?i[o].parts.push(p):t.push(i[o]={id:o,parts:[p]})}return t}function o(e,t){var i=h(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?i.insertBefore(t,r.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function p(e,t){var i,r,n;if(t.singleton){var o=b++;i=v||(v=a(t)),r=c.bind(null,i,o,!1),n=c.bind(null,i,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=l(t),r=f.bind(null,i),n=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(t),r=d.bind(null,i),n=function(){s(i)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}function c(e,t,i,r){var n=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var o=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function d(e,t){var i=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function f(e,t){var i=t.css,r=t.sourceMap;r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([i],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(n),o&&URL.revokeObjectURL(o)}var u={},_=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=_(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=_(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=n(e);return r(i,t),function(e){for(var o=[],s=0;s<i.length;s++){var a=i[s],l=u[a.id];l.refs--,o.push(l)}if(e){var p=n(e);r(p,t)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){var r=i(2);"string"==typeof r&&(r=[[e.id,r,""]]);i(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,i){function r(e){i(5)}var n=i(7)(i(1),i(8),r,null,null);e.exports=n.exports},function(e,t){e.exports=function(e,t,i,r,n){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r);var p;if(n?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=p):i&&(p=i),p){var c=l.functional,d=c?l.render:l.beforeCreate;c?l.render=function(e,t){return p.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,p):[p]}return{esModule:o,exports:s,options:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"simplert",class:e.isShownData?"simplert--shown":"",attrs:{role:"modal"},on:{click:e.closeOverlay}},[i("div",{staticClass:"simplert__content",class:e.isUseRadius?"simplert__content--radius":""},[i("div",{staticClass:"simplert__header"},[e.isUseIcon?i("div",["info"===e.type?i("div",{staticClass:"simplert__icon simplert__icon--info"},[i("div",{staticClass:"simplert__line simplert__line--info"}),e._v(" "),i("div",{staticClass:"simplert__line simplert__line--info-2"})]):e._e(),e._v(" "),"success"===e.type?i("div",{staticClass:"simplert__icon simplert__icon--success"},[i("div",{staticClass:"simplert__line simplert__line--success"}),e._v(" "),i("div",{staticClass:"simplert__line simplert__line--success-2"})]):e._e(),e._v(" "),"warning"===e.type?i("div",{staticClass:"simplert__icon simplert__icon--warning"},[i("div",{staticClass:"simplert__line simplert__line--warning"}),e._v(" "),i("div",{staticClass:"simplert__line simplert__line--warning-2"})]):e._e(),e._v(" "),"error"===e.type?i("div",{staticClass:"simplert__icon simplert__icon--error"},[i("div",{staticClass:"simplert__line simplert__line--error"}),e._v(" "),i("div",{staticClass:"simplert__line simplert__line--error-2"})]):e._e()]):e._e(),e._v(" "),i("b",{staticClass:"simplert__title"},[e._v(e._s(e.title))])]),e._v(" "),i("div",{staticClass:"simplert__body"},[i("div",{domProps:{innerHTML:e._s(e.message)}})]),e._v(" "),i("div",{staticClass:"simplert__footer"},[i("button",{staticClass:"simplert__close",class:e.isUseRadius?"simplert__close--radius":"",style:{"background-color":e.colorBtn},on:{click:e.closeSimplert}},[e._v("\n                Close\n            ")])])])])},staticRenderFns:[]}}])});