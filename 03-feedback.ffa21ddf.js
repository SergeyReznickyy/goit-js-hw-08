!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(E,t),d?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function E(){var e=p();if(j(e))return M(e);f=setTimeout(E,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function M(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function _(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(E,t),y(l)}return void 0===f&&(f=setTimeout(E,t)),a}return t=O(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?g(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),_.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},_.flush=function(){return void 0===f?a:M(p())},_}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),j=document.querySelector("input"),E=document.querySelector("textarea"),M={};JSON.parse(localStorage.getItem("FORM_KEY"))&&(j.value=JSON.parse(localStorage.getItem("FORM_KEY")).email,E.value=JSON.parse(localStorage.getItem("FORM_KEY")).message),S.addEventListener("input",e(t)((function(e){M[e.target.name]=e.target.value,localStorage.setItem("FORM_KEY",JSON.stringify(M))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("FORM_KEY"))),S.reset(),localStorage.removeItem("FORM_KEY")}))}();
//# sourceMappingURL=03-feedback.ffa21ddf.js.map