function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return l.Date.now()};function y(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=r.test(t);return e||u.test(t)?f(t.slice(2),e?2:8):i.test(t)?NaN:+t}e=function(t,n,e){var o,i,r,u,f,c,a=0,l=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,a=n,u=t.apply(r,e)}function h(t){return a=t,f=setTimeout(E,n),l?g(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-a>=r}function E(){var t=v();if(j(t))return T(t);f=setTimeout(E,function(t){var e=n-(t-c);return s?d(e,r-(t-a)):e}(t))}function T(t){return f=void 0,b&&o?g(t):(o=i=void 0,u)}function w(){var t=v(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===f)return h(c);if(s)return f=setTimeout(E,n),g(c)}return void 0===f&&(f=setTimeout(E,n)),u}return n=m(n)||0,y(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(m(e.maxWait)||0,n):r,b="trailing"in e?!!e.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(v())},w};const b={inputEl:document.getElementById("search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")};function g(t){return t.map((({name:{official:t},capital:n,population:e,flag:o,flags:{svg:i},languages:r})=>`<li>\n      <p><span>${o}</span>${t}</p>\n    </li>`)).join("")}b.inputEl.addEventListener("input",t(e)((function(t){let n=t.target.value.trim();console.log(n),(e=n,fetch(`https://restcountries.com/v3.1/name/${e}`).then((t=>t.json()))).then((t=>{return console.log(g(t)),n=g(t),void(b.countryListEl.innerHTML=n);var n}));var e}),300));
//# sourceMappingURL=index.3b837db2.js.map
