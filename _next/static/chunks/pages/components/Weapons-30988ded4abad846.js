(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{1304:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Weapons",function(){return n(5786)}])},2654:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(8754),n(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return m},usePathname:function(){return h},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return l.useServerInsertedHTML},useRouter:function(){return g},useParams:function(){return b},useSelectedLayoutSegments:function(){return _},useSelectedLayoutSegment:function(){return x},redirect:function(){return a.redirect},notFound:function(){return c.notFound}});let r=n(7294),o=n(6451),i=n(4858),u=n(2654),s=n(4780),l=n(2286),a=n(6780),c=n(8358),d=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function m(){(0,u.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(i.SearchParamsContext),t=(0,r.useMemo)(()=>e?new p(e):null,[e]);return t}function h(){return(0,u.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(i.PathnameContext)}function g(){(0,u.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function b(){(0,u.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,n){void 0===n&&(n={});let r=t[1];for(let t of Object.values(r)){let r=t[0],o=Array.isArray(r),i=o?r[1]:r;if(!i||i.startsWith("__PAGE__"))continue;let u=o&&("c"===r[2]||"oc"===r[2]);u?n[r[0]]=r[1].split("/"):o&&(n[r[0]]=r[1]),n=e(t,n)}return n}(e.tree):null}function _(e){void 0===e&&(e="children"),(0,u.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(o.LayoutRouterContext);return function e(t,n,r,o){let i;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)i=t[1][n];else{var u;let e=t[1];i=null!=(u=e.children)?u:Object.values(e)[0]}if(!i)return o;let l=i[0],a=(0,s.getSegmentValue)(l);return!a||a.startsWith("__PAGE__")?o:(o.push(a),e(i,n,!1,o))}(t,e)}function x(e){void 0===e&&(e="children"),(0,u.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=_(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8358:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return o}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6780:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return s},redirect:function(){return l},isRedirectError:function(){return a},getURLFromRedirectError:function(){return c},getRedirectTypeFromError:function(){return d}});let i=n(6170),u="NEXT_REDIRECT";function s(e,t){let n=Error(u);n.digest=u+";"+t+";"+e;let r=i.requestAsyncStorage.getStore();return r&&(n.mutableCookies=r.mutableCookies),n}function l(e,t){throw void 0===t&&(t="replace"),s(e,t)}function a(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r]=e.digest.split(";",3);return t===u&&("replace"===n||"push"===n)&&"string"==typeof r}function c(e){return a(e)?e.digest.split(";",3)[2]:null}function d(e){if(!a(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=r||(r={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4780:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return i},useServerInsertedHTML:function(){return u}});let r=n(1757),o=r._(n(7294)),i=o.default.createContext(null);function u(e){let t=(0,o.useContext)(i);t&&t(e)}},367:function(e,t,n){"use strict";var r=n(5893),o=n(9332);n(7294),t.Z=()=>{let e=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"flex fixed items-center w-full h-20 bg-white z-40 text-black",children:[(0,r.jsx)("img",{className:"w-32 ml-52 cursor-pointer",src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/logo.png",onClick:()=>e.push("/")}),(0,r.jsxs)("ul",{className:"flex ml-20",children:[(0,r.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Character"),children:["Character",(0,r.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,r.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Weapons"),children:["Weapons",(0,r.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,r.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Artifacts"),children:["Artifacts",(0,r.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,r.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Boss"),children:["Boss",(0,r.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,r.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/God"),children:["God",(0,r.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]}),(0,r.jsxs)("li",{className:"w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group",onClick:()=>e.push("/components/Universe"),children:["Universe",(0,r.jsx)("span",{className:"block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"})]})]})]})}},5786:function(e,t,n){"use strict";n.r(t),n.d(t,{Weapons:function(){return s}});var r=n(5893),o=n(7294),i=n(367);n(4685);var u=n(7973);n(5004),n(2858);let s=()=>{let[e,t]=(0,o.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsxs)("div",{className:"w-full min-h-full flex items-center",children:[(0,r.jsxs)("div",{className:"w-2/12 h-full flex justify-between flex-col items-center pt-40",children:[(0,r.jsx)("img",{src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/양손검.png",className:0==e?"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]":"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100",onClick:()=>t(0)}),(0,r.jsx)("img",{src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/한손검.png",className:1==e?"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]":"items-center h-24 mt-8 cursor-pointer  bg-black rounded-full transition-all ease-in-out duration-300 scale-100",onClick:()=>t(1)}),(0,r.jsx)("img",{src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/법구.png",className:2==e?"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]":"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100",onClick:()=>t(2)}),(0,r.jsx)("img",{src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/활.png",className:3==e?"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]":"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100",onClick:()=>t(3)}),(0,r.jsx)("img",{src:"https://genshin-impact-info.github.io/GenshinImpact_inform/images/menu/weapon/창.png",className:4==e?"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-110 shadow-[0_6px_11px_0px_rgba(0,0,0,0.5)]":"items-center h-24 mt-8 cursor-pointer bg-black rounded-full transition-all ease-in-out duration-300 scale-100",onClick:()=>t(4)})]}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.tq,{})})]})]})};t.default=s},4685:function(){},9332:function(e,t,n){e.exports=n(3537)},2616:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return i}});let n=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class r{disable(){throw n}getStore(){}run(){throw n}exit(){throw n}enterWith(){throw n}}let o=globalThis.AsyncLocalStorage;function i(){return o?new o:new r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let r=n(2616),o=(0,r.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},function(e){e.O(0,[774,998,77,888,179],function(){return e(e.s=1304)}),_N_E=e.O()}]);