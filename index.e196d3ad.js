!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(b(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=b(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var a=u.test(n);return a||f.test(n)?c(n.slice(2),a?2:8):r.test(n)?NaN:+n}e=function(t,n,e){var o,i,r,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,a=n,u=t.apply(r,e)}function h(t){return a=t,f=setTimeout(E,n),l?g(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-a>=r}function E(){var t=y();if(j(t))return T(t);f=setTimeout(E,function(t){var e=n-(t-c);return s?p(e,r-(t-a)):e}(t))}function T(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function O(){var t=y(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===f)return h(c);if(s)return f=setTimeout(E,n),g(c)}return void 0===f&&(f=setTimeout(E,n)),u}return n=m(n)||0,b(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(m(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:T(y())},O};var g={inputEl:document.getElementById("search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")};g.inputEl.addEventListener("input",t(e)((function(t){var n=t.target.value.trim();console.log(n),(e=n,fetch("https://restcountries.com/v3.1/name/".concat(e)).then((function(t){return t.json()}))).then((function(t){return t.map((function(t){var n=t.name.official,e=(t.capital,t.population,t.flag);t.flags.svg,t.languages;return function(t){var n=t.official,e=t.flag;g.countryListEl.insertAdjacentHTML("beforeend","<li>\n      <p><span>".concat(e,"</span>").concat(n,"</p>\n    </li>"))}({official:n,flag:e})}))}));var e}),300))}();
//# sourceMappingURL=index.e196d3ad.js.map
