(self["webpackChunkvue_firebase_auth"]=self["webpackChunkvue_firebase_auth"]||[]).push([[998],{444:function(e,t,n){"use strict";n.d(t,{BH:function(){return b},L:function(){return u},LL:function(){return A},P0:function(){return m},Pz:function(){return y},Sg:function(){return w},ZR:function(){return P},aH:function(){return g},b$:function(){return S},eu:function(){return T},hl:function(){return O},m9:function(){return K},ne:function(){return L},pd:function(){return j},q4:function(){return h},ru:function(){return k},tV:function(){return s},uI:function(){return x},vZ:function(){return D},w1:function(){return E},xO:function(){return W},xb:function(){return N},z$:function(){return C},zd:function(){return R}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],a=e[n++],l=e[n++],u=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,a=i?e[o+1]:0,l=o+2<e.length,u=l?e[o+2]:0,s=t>>2,c=(3&t)<<4|a>>4;let d=(15&a)<<2|u>>6,f=63&u;l||(f=64,i||(d=64)),r.push(n[s],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,l=i?n[e.charAt(o)]:0;++o;const u=o<e.length,s=u?n[e.charAt(o)]:64;++o;const c=o<e.length,d=c?n[e.charAt(o)]:64;if(++o,null==t||null==l||null==s||null==d)throw new a;const f=t<<2|l>>4;if(r.push(f),64!==s){const e=l<<4&240|s>>2;if(r.push(e),64!==d){const e=s<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=r(e);return i.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},s=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>c().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/vue-firebase-auth/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},v=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&s(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||f()||v()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},h=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=h(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[u(JSON.stringify(n)),u(JSON.stringify(a)),l].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function x(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function k(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function E(){const e=C();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){try{return"object"===typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="FirebaseError";class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=F,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?I(o,n):"Error",a=`${this.serviceName}: ${i} (${r}).`,l=new P(r,a,n);return l}}function I(e,t){return e.replace(M,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(_(n)&&_(i)){if(!D(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function _(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function R(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports["default"]=e.exports;var t={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return F()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=k(a,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,a),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=d;var v={};function p(){}function h(){}function m(){}var g={};c(g,l,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(T([])));b&&b!==n&&i.call(b,l)&&(g=b);var w=m.prototype=p.prototype=Object.create(g);function C(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,a,l,u){var s=f(e[o],e,a);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==r(d)&&i.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,u)}),(function(e){n("throw",e,l,u)})):t.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return n("throw",e,l,u)}))}u(s.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function k(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=f(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,v;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function T(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:F}}function F(){return{value:void 0,done:!0}}return h.prototype=m,c(w,"constructor",m),c(m,"constructor",h),h.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},C(x.prototype),c(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(d(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},C(w),c(w,s,"Generator"),c(w,l,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},t}e.exports=o,e.exports.__esModule=!0,e.exports["default"]=e.exports},847:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports["default"]=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports["default"]=e.exports},298:function(e,t,n){var r=n(984)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},119:function(e,t,n){"use strict";n.d(t,{PO:function(){return U},p7:function(){return nt},tv:function(){return it}});var r=n(252),o=n(262);
/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,a=e=>i?Symbol(e):"_vr_"+e,l=a("rvlm"),u=a("rvd"),s=a("r"),c=a("rl"),d=a("rvl"),f="undefined"!==typeof window;function v(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function h(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const m=()=>{};const g=/\/$/,y=e=>e.replace(g,"");function b(e,t,n="/"){let r,o={},i="",a="";const l=t.indexOf("?"),u=t.indexOf("#",l>-1?l:0);return l>-1&&(r=t.slice(0,l),i=t.slice(l+1,u>-1?u:t.length),o=e(i)),u>-1&&(r=r||t.slice(0,u),a=t.slice(u,t.length)),r=T(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:o,hash:a}}function w(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function C(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function x(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&k(t.matched[r],n.matched[o])&&S(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function S(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?O(e,t):Array.isArray(t)?O(t,e):e===t}function O(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function T(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,a=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==a&&"."!==i){if(".."!==i)break;a--}return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var F,P;(function(e){e["pop"]="pop",e["push"]="push"})(F||(F={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(P||(P={}));function A(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const I=/^[^#]+#/;function M(e,t){return e.replace(I,"#")+t}function N(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function _(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=N(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function W(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function j(e,t){R.set(e,t)}function L(e){const t=R.get(e);return R.delete(e),t}let B=()=>location.protocol+"//"+location.host;function H(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),C(n,"")}const a=C(n,e);return a+r+o}function V(e,t,n,r){let o=[],i=[],a=null;const l=({state:i})=>{const l=H(e,location),u=n.value,s=t.value;let c=0;if(i){if(n.value=l,t.value=i,a&&a===u)return void(a=null);c=s?i.position-s.position:0}else r(l);o.forEach((e=>{e(n.value,u,{delta:c,type:F.pop,direction:c?c>0?P.forward:P.back:P.unknown})}))};function u(){a=n.value}function s(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function c(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:D()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c),{pauseListeners:u,listen:s,destroy:d}}function K(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?D():null}}function z(e){const{history:t,location:n}=window,r={value:H(e,n)},o={value:t.state};function i(r,i,a){const l=e.indexOf("#"),u=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+r:B()+e+r;try{t[a?"replaceState":"pushState"](i,"",u),o.value=i}catch(s){console.error(s),n[a?"replace":"assign"](u)}}function a(e,n){const a=p({},t.state,K(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,a,!0),r.value=e}function l(e,n){const a=p({},o.value,t.state,{forward:e,scroll:D()});i(a.current,a,!0);const l=p({},K(r.value,e,null),{position:a.position+1},n);i(e,l,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:l,replace:a}}function U(e){e=A(e);const t=z(e),n=V(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=p({location:"",base:e,go:r,createHref:M.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function $(e){return"string"===typeof e||e&&"object"===typeof e}function Y(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G=a("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function Z(e,t){return p(new Error,{type:e,[G]:!0},t)}function X(e,t){return e instanceof Error&&G in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=p({},ee,t),r=[];let o=n.start?"^":"";const i=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let t=0;t<c.length;t++){const r=c[t];let a=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(te,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;i.push({name:e,repeatable:n,optional:l});const d=u||Q;if(d!==Q){a+=10;try{new RegExp(`(${d})`)}catch(s){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+s.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=l&&c.length<2?`(?:/${f})`:"/"+f),l&&(f+="?"),o+=f,a+=20,l&&(a+=-8),n&&(a+=-20),".*"===d&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function l(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const i of o)if(0===i.type)n+=i.value;else if(1===i.type){const{value:a,repeatable:l,optional:u}=i,s=a in t?t[a]:"";if(Array.isArray(s)&&!l)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(s)?s.join("/"):s;if(!c){if(!u)throw new Error(`Missing required param "${a}"`);o.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n}return{re:a,score:r,keys:i,parse:l,stringify:u}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function oe(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=re(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(ie(r))return 1;if(ie(o))return-1}return o.length-r.length}function ie(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ae={type:0,value:""},le=/[a-zA-Z0-9_]/;function ue(e){if(!e)return[[]];if("/"===e)return[[ae]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${s}": ${e}`)}let n=0,r=n;const o=[];let i;function a(){i&&o.push(i),i=[]}let l,u=0,s="",c="";function d(){s&&(0===n?i.push({type:0,value:s}):1===n||2===n||3===n?(i.length>1&&("*"===l||"+"===l)&&t(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:s,regexp:c,repeatable:"*"===l||"+"===l,optional:"*"===l||"?"===l})):t("Invalid state to consume buffer"),s="")}function f(){s+=l}while(u<e.length)if(l=e[u++],"\\"!==l||2===n)switch(n){case 0:"/"===l?(s&&d(),a()):":"===l?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===l?n=2:le.test(l)?f():(d(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&u--);break;case 2:")"===l?"\\"==c[c.length-1]?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&u--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${s}"`),d(),a(),o}function se(e,t,n){const r=ne(ue(e.path),n);const o=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ce(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,l=fe(e);l.aliasOf=r&&r.record;const s=me(t,e),c=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)c.push(p({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let d,f;for(const t of c){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(d=se(t,n,s),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),o&&e.name&&!pe(d)&&a(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,u(d)}return f?()=>{a(f)}:m}function a(e){if(Y(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function l(){return n}function u(e){let t=0;while(t<n.length&&oe(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function s(e,t){let o,i,a,l={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw Z(1,{location:e});a=o.record.name,l=p(de(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=o.stringify(l)}else if("path"in e)i=e.path,o=n.find((e=>e.re.test(i))),o&&(l=o.parse(i),a=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw Z(1,{location:e,currentLocation:t});a=o.record.name,l=p({},t.params,e.params),i=o.stringify(l)}const u=[];let s=o;while(s)u.unshift(s.record),s=s.parent;return{name:a,path:i,params:l,matched:u,meta:he(u)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:s,removeRoute:a,getRoutes:l,getRecordMatcher:o}}function de(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ve(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function ve(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some((t=>t===e||ge(e,t)))}const ye=/#/g,be=/&/g,we=/\//g,Ce=/=/g,xe=/\?/g,ke=/\+/g,Se=/%5B/g,Ee=/%5D/g,Oe=/%5E/g,Te=/%60/g,Fe=/%7B/g,Pe=/%7C/g,Ae=/%7D/g,Ie=/%20/g;function Me(e){return encodeURI(""+e).replace(Pe,"|").replace(Se,"[").replace(Ee,"]")}function Ne(e){return Me(e).replace(Fe,"{").replace(Ae,"}").replace(Oe,"^")}function De(e){return Me(e).replace(ke,"%2B").replace(Ie,"+").replace(ye,"%23").replace(be,"%26").replace(Te,"`").replace(Fe,"{").replace(Ae,"}").replace(Oe,"^")}function _e(e){return De(e).replace(Ce,"%3D")}function We(e){return Me(e).replace(ye,"%23").replace(xe,"%3F")}function Re(e){return null==e?"":We(e).replace(we,"%2F")}function je(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(ke," "),n=e.indexOf("="),i=je(n<0?e:e.slice(0,n)),a=n<0?null:je(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(a)}else t[i]=a}return t}function Be(e){let t="";for(let n in e){const r=e[n];if(n=_e(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map((e=>e&&De(e))):[r&&De(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function He(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ke(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((a,l)=>{const u=e=>{!1===e?l(Z(4,{from:n,to:t})):e instanceof Error?l(e):$(e)?l(Z(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),a())},s=e.call(r&&r.instances[o],t,n,u);let c=Promise.resolve(s);e.length<3&&(c=c.then(u)),c.catch((e=>l(e)))}))}function ze(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(Ue(a)){const l=a.__vccOpts||a,u=l[t];u&&o.push(Ke(u,n,r,i,e))}else{let l=a();0,o.push((()=>l.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=v(o)?o.default:o;i.components[e]=a;const l=a.__vccOpts||a,u=l[t];return u&&Ke(u,n,r,i,e)()}))))}}return o}function Ue(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=(0,r.f3)(s),n=(0,r.f3)(c),i=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),a=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const a=o.findIndex(k.bind(null,r));if(a>-1)return a;const l=Ze(e[t-2]);return t>1&&Ze(r)===l&&o[o.length-1].path!==l?o.findIndex(k.bind(null,e[t-2])):a})),l=(0,r.Fl)((()=>a.value>-1&&Je(n.params,i.value.params))),u=(0,r.Fl)((()=>a.value>-1&&a.value===n.matched.length-1&&S(n.params,i.value.params)));function d(n={}){return Ge(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(m):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:l,isExactActive:u,navigate:d}}const Ye=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=(0,o.qj)($e(e)),{options:i}=(0,r.f3)(s),a=(0,r.Fl)((()=>({[Xe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),qe=Ye;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(d),a=(0,r.Fl)((()=>e.route||i.value)),s=(0,r.f3)(u,0),c=(0,r.Fl)((()=>a.value.matched[s]));(0,r.JJ)(u,s+1),(0,r.JJ)(l,c),(0,r.JJ)(d,a);const f=(0,o.iH)();return(0,r.YP)((()=>[f.value,c.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&k(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=a.value,i=c.value,l=i&&i.components[e.name],u=e.name;if(!l)return et(n.default,{Component:l,route:o});const s=i.props[e.name],d=s?!0===s?o.params:"function"===typeof s?s(o):s:null,v=e=>{e.component.isUnmounted&&(i.instances[u]=null)},h=(0,r.h)(l,p({},d,t,{onVnodeUnmounted:v,ref:f}));return et(n.default,{Component:h,route:o})||h}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Qe;function nt(e){const t=ce(e.routes,e),n=e.parseQuery||Le,i=e.stringifyQuery||Be,a=e.history;const l=Ve(),u=Ve(),v=Ve(),g=(0,o.XI)(q);let y=q;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const C=h.bind(null,(e=>""+e)),k=h.bind(null,Re),S=h.bind(null,je);function E(e,n){let r,o;return Y(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function O(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function T(){return t.getRoutes().map((e=>e.record))}function P(e){return!!t.getRecordMatcher(e)}function A(e,r){if(r=p({},r||g.value),"string"===typeof e){const o=b(n,e,r.path),i=t.resolve({path:o.path},r),l=a.createHref(o.fullPath);return p(o,i,{params:S(i.params),hash:je(o.hash),redirectedFrom:void 0,href:l})}let o;if("path"in e)o=p({},e,{path:b(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];o=p({},e,{params:k(e.params)}),r.params=k(r.params)}const l=t.resolve(o,r),u=e.hash||"";l.params=C(S(l.params));const s=w(i,p({},e,{hash:Ne(u),path:l.path})),c=a.createHref(s);return p({fullPath:s,hash:u,query:i===Be?He(e.query):e.query||{}},l,{redirectedFrom:void 0,href:c})}function I(e){return"string"===typeof e?b(n,e,g.value.path):p({},e)}function M(e,t){if(y!==e)return Z(8,{from:t,to:e})}function N(e){return H(e)}function R(e){return N(p(I(e),{replace:!0}))}function B(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=I(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function H(e,t){const n=y=A(e),r=g.value,o=e.state,a=e.force,l=!0===e.replace,u=B(n);if(u)return H(p(I(u),{state:o,force:a,replace:l}),t||n);const s=n;let c;return s.redirectedFrom=t,!a&&x(i,r,n)&&(c=Z(16,{to:s,from:r}),oe(r,r,!0,!1)),(c?Promise.resolve(c):K(s,r)).catch((e=>X(e)?X(e,2)?e:re(e):te(e,s,r))).then((e=>{if(e){if(X(e,2))return H(p(I(e.to),{state:o,force:a,replace:l}),t||s)}else e=U(s,r,!0,l,o);return z(s,r,e),e}))}function V(e,t){const n=M(e,t);return n?Promise.reject(n):Promise.resolve()}function K(e,t){let n;const[r,o,i]=ot(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const l of r)l.leaveGuards.forEach((r=>{n.push(Ke(r,e,t))}));const a=V.bind(null,e,t);return n.push(a),rt(n).then((()=>{n=[];for(const r of l.list())n.push(Ke(r,e,t));return n.push(a),rt(n)})).then((()=>{n=ze(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ke(r,e,t))}));return n.push(a),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ke(o,e,t));else n.push(Ke(r.beforeEnter,e,t));return n.push(a),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(i,"beforeRouteEnter",e,t),n.push(a),rt(n)))).then((()=>{n=[];for(const r of u.list())n.push(Ke(r,e,t));return n.push(a),rt(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of v.list())r(e,t,n)}function U(e,t,n,r,o){const i=M(e,t);if(i)return i;const l=t===q,u=f?history.state:{};n&&(r||l?a.replace(e.fullPath,p({scroll:l&&u&&u.scroll},o)):a.push(e.fullPath,o)),g.value=e,oe(e,t,n,l),re()}let $;function G(){$||($=a.listen(((e,t,n)=>{const r=A(e),o=B(r);if(o)return void H(p(o,{replace:!0}),r).catch(m);y=r;const i=g.value;f&&j(W(i.fullPath,n.delta),D()),K(r,i).catch((e=>X(e,12)?e:X(e,2)?(H(e.to,r).then((e=>{X(e,20)&&!n.delta&&n.type===F.pop&&a.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&a.go(-n.delta,!1),te(e,r,i)))).then((e=>{e=e||U(r,i,!1),e&&(n.delta?a.go(-n.delta,!1):n.type===F.pop&&X(e,20)&&a.go(-1,!1)),z(r,i,e)})).catch(m)})))}let J,Q=Ve(),ee=Ve();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return J&&g.value!==q?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function re(e){return J||(J=!e,G(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function oe(t,n,o,i){const{scrollBehavior:a}=e;if(!f||!a)return Promise.resolve();const l=!o&&L(W(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&_(e))).catch((e=>te(e,t,n)))}const ie=e=>a.go(e);let ae;const le=new Set,ue={currentRoute:g,addRoute:E,removeRoute:O,hasRoute:P,getRoutes:T,resolve:A,options:e,push:N,replace:R,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:l.add,beforeResolve:u.add,afterEach:v.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",qe),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(g)}),f&&!ae&&g.value===q&&(ae=!0,N(a.location).catch((e=>{0})));const n={};for(const o in q)n[o]=(0,r.Fl)((()=>g.value[o]));e.provide(s,t),e.provide(c,(0,o.qj)(n)),e.provide(d,g);const i=e.unmount;le.add(e),e.unmount=function(){le.delete(e),le.size<1&&(y=q,$&&$(),$=null,g.value=q,ae=!1,J=!1),i()}}};return ue}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function ot(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const i=t.matched[a];i&&(e.matched.find((e=>k(e,i)))?r.push(i):n.push(i));const l=e.matched[a];l&&(t.matched.find((e=>k(e,l)))||o.push(l))}return[n,r,o]}function it(){return(0,r.f3)(s)}},816:function(e,t,n){"use strict";n.d(t,{Jn:function(){return he},qX:function(){return de},Xd:function(){return ce},Mq:function(){return ge},ZF:function(){return me},KN:function(){return ye}});var r=n(463),o=n(333),i=n(444);const a=(e,t)=>t.some((t=>e instanceof t));let l,u;function s(){return l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,v=new WeakMap,p=new WeakMap,h=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(x(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),h.set(t,e),t}function g(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||v.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return x(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(k(this),t),x(d.get(this))}:function(...t){return x(e.apply(k(this),t))}:function(t,...n){const r=e.call(k(this),t,...n);return v.set(r,t.sort?t.sort():[t]),x(r)}}function C(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&g(e),a(e,s())?new Proxy(e,y):e)}function x(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=C(e);return t!==e&&(p.set(e,t),h.set(t,e)),t}const k=e=>h.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),l=x(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(x(a.result),e.oldVersion,e.newVersion,x(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),l.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),l}const E=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],T=new Map;function F(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!E.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return T.set(t,i),i}b((e=>({...e,get:(t,n,r)=>F(t,n)||e.get(t,n,r),has:(t,n)=>!!F(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const I="@firebase/app",M="0.9.4",N=new o.Yd("@firebase/app"),D="@firebase/app-compat",_="@firebase/analytics-compat",W="@firebase/analytics",R="@firebase/app-check-compat",j="@firebase/app-check",L="@firebase/auth",B="@firebase/auth-compat",H="@firebase/database",V="@firebase/database-compat",K="@firebase/functions",z="@firebase/functions-compat",U="@firebase/installations",$="@firebase/installations-compat",Y="@firebase/messaging",q="@firebase/messaging-compat",G="@firebase/performance",J="@firebase/performance-compat",Z="@firebase/remote-config",X="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.17.2",ie="[DEFAULT]",ae={[I]:"fire-core",[D]:"fire-core-compat",[W]:"fire-analytics",[_]:"fire-analytics-compat",[j]:"fire-app-check",[R]:"fire-app-check-compat",[L]:"fire-auth",[B]:"fire-auth-compat",[H]:"fire-rtdb",[V]:"fire-rtdb-compat",[K]:"fire-fn",[z]:"fire-fn-compat",[U]:"fire-iid",[$]:"fire-iid-compat",[Y]:"fire-fcm",[q]:"fire-fcm-compat",[G]:"fire-perf",[J]:"fire-perf-compat",[Z]:"fire-rc",[X]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},le=new Map,ue=new Map;function se(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ce(e){const t=e.name;if(ue.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const n of le.values())se(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ve=new i.LL("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=oe;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),a=o.name;if("string"!==typeof a||!a)throw ve.create("bad-app-name",{appName:String(a)});if(n||(n=(0,i.aH)()),!n)throw ve.create("no-options");const l=le.get(a);if(l){if((0,i.vZ)(n,l.options)&&(0,i.vZ)(o,l.config))return l;throw ve.create("duplicate-app",{appName:a})}const u=new r.H0(a);for(const r of ue.values())u.addComponent(r);const s=new pe(n,o,u);return le.set(a,s),s}function ge(e=ie){const t=le.get(e);if(!t&&e===ie)return me();if(!t)throw ve.create("no-app",{appName:e});return t}function ye(e,t,n){var o;let i=null!==(o=ae[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&e.push("and"),l&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}ce(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",we=1,Ce="firebase-heartbeat-store";let xe=null;function ke(){return xe||(xe=S(be,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ve.create("idb-open",{originalErrorMessage:e.message})}))),xe}async function Se(e){try{const t=await ke();return t.transaction(Ce).objectStore(Ce).get(Oe(e))}catch(t){if(t instanceof i.ZR)N.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Ee(e,t){try{const n=await ke(),r=n.transaction(Ce,"readwrite"),o=r.objectStore(Ce);return await o.put(t,Oe(e)),r.done}catch(n){if(n instanceof i.ZR)N.warn(n.message);else{const e=ve.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=1024,Fe=2592e6;class Pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Fe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ae(),{heartbeatsToSend:t,unsentEntries:n}=Ie(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ae(){const e=new Date;return e.toISOString().substring(0,10)}function Ie(e,t=Te){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){ce(new r.wA("platform-logger",(e=>new P(e)),"PRIVATE")),ce(new r.wA("heartbeat",(e=>new Pe(e)),"PRIVATE")),ye(I,M,e),ye(I,M,"esm2017"),ye("fire-js","")}De("")},463:function(e,t,n){"use strict";n.d(t,{H0:function(){return s},wA:function(){return o}});var r=n(444);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:l(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function l(e){return e===i?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){"use strict";n.d(t,{Yd:function(){return s},in:function(){return o}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,l={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=l[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class s{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},977:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(816),o="firebase",i="9.17.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(o,i,"app")},502:function(e,t,n){"use strict";n.d(t,{hJ:function(){return nt},v0:function(){return br},e5:function(){return vt},rh:function(){return pn}});var r=n(444),o=n(816),i=n(333);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var l=n(463);function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s=u,c=new r.LL("auth","Firebase",u()),d=new i.Yd("@firebase/auth");function f(e,...t){d.logLevel<=i["in"].ERROR&&d.error(`Auth (${o.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function h(e,t,n){const o=Object.assign(Object.assign({},s()),{[t]:n}),i=new r.LL("auth","Firebase",o);return i.create(t,{appName:e.name})}function m(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&v(e,"argument-error"),h(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function y(e,t,...n){if(!e)throw g(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Map;function x(e){w(e instanceof Function,"Expected a class definition");let t=C.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,C.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const n=(0,o.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,r.vZ)(o,null!==t&&void 0!==t?t:{}))return e;v(e,"already-initialized")}const i=n.initialize({options:t});return i}function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(x);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function P(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return F()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function W(e,t,n,o,i={}){return R(e,i,(async()=>{let i={},a={};o&&("GET"===t?a=o:i={body:JSON.stringify(o)});const l=(0,r.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),M.fetch()(L(e,e.config.apiHost,n,l),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},i))}))}async function R(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},N),t);try{const t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw H(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw H(e,"user-disabled",i);const l=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw h(e,l,a);v(e,l)}}catch(i){if(i instanceof r.ZR)throw i;v(e,"internal-error",{message:String(i)})}}async function j(e,t,n,r,o={}){const i=await W(e,t,n,r,o);return"mfaPendingCredential"in i&&v(e,"multi-factor-auth-required",{_serverResponse:i}),i}function L(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?I(e.config,o):`${e.config.apiScheme}://${o}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return W(e,"POST","/v1/accounts:delete",t)}async function K(e,t){return W(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t=!1){const n=(0,r.m9)(e),o=await n.getIdToken(t),i=Y(o);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,l=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:o,authTime:z($(i.auth_time)),issuedAtTime:z($(i.iat)),expirationTime:z($(i.exp)),signInProvider:l||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function $(e){return 1e3*Number(e)}function Y(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function q(e){const t=Y(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r.ZR&&J(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),o=await G(e,K(n,{idToken:r}));y(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?ne(i.providerUserInfo):[],l=te(e.providerData,a),u=e.isAnonymous,s=!(e.email&&i.passwordHash)&&!(null===l||void 0===l?void 0:l.length),c=!!u&&s,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function ee(e){const t=(0,r.m9)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){const n=await R(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,a=L(e,o,"/v1/token",`key=${i}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(a,{method:"POST",headers:l,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new oe;return n&&(y("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(y("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ae{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new X(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return U(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,a,l,u,s;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,v=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,h=null!==(l=t._redirectEventId)&&void 0!==l?l:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,g=null!==(s=t.lastLoginAt)&&void 0!==s?s:void 0,{uid:b,emailVerified:w,isAnonymous:C,providerData:x,stsTokenManager:k}=t;y(b&&k,e,"internal-error");const S=oe.fromJSON(this.name,k);y("string"===typeof b,e,"internal-error"),ie(c,e.name),ie(d,e.name),y("boolean"===typeof w,e,"internal-error"),y("boolean"===typeof C,e,"internal-error"),ie(f,e.name),ie(v,e.name),ie(p,e.name),ie(h,e.name),ie(m,e.name),ie(g,e.name);const E=new ae({uid:b,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:C,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(E.providerData=x.map((e=>Object.assign({},e)))),h&&(E._redirectEventId=h),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const o=new ae({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}le.type="NONE";const ue=le;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=se(this.userKey,r.apiKey,o),this.fullPersistenceKey=se("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(x(ue),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||x(ue);const i=se(n,e.config.apiKey,e.name);let a=null;for(const s of t)try{const t=await s._get(i);if(t){const n=ae._fromJSON(e,t);s!==o&&(a=n),o=s;break}}catch(u){}const l=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&l.length?(o=l[0],a&&await o._set(i,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(u){}}))),new ce(o,e,n)):new ce(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(he(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ye(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=(0,r.z$)()){return/firefox\//i.test(e)}function ve(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,r.z$)()){return/crios\//i.test(e)}function he(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function be(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,r.z$)()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return(0,r.w1)()&&10===document.documentMode}function xe(e=(0,r.z$)()){return be(e)||me(e)||ye(e)||ge(e)||/windows phone/i.test(e)||he(e)}function ke(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=de((0,r.z$)());break;case"Worker":n=`${de((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.beforeStateQueue=new Ee(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=x(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==i||!(null===a||void 0===a?void 0:a.user)||(r=a.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(x(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&x(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return y(i,this,"internal-error"),i.then((()=>o(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Te(e){return(0,r.m9)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pe(e,t,n){const r=Te(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ae(t),{host:a,port:l}=Ie(t),u=null===l?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Ne()}function Ae(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ie(e){const t=Ae(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:Me(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Me(t)}}}function Me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ne(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e,t){return W(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function We(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",_(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}async function je(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends De{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Le(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Le(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return We(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return _e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",_(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="http://localhost";class Ve extends De{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new Ve(n,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return Be(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Be(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Be(e,t)}buildRequest(){const e={requestUri:He,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(e,t){return W(e,"POST","/v1/accounts:sendVerificationCode",_(e,t))}async function ze(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t))}async function Ue(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const $e={["USER_NOT_FOUND"]:"user-not-found"};async function Ye(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,n),$e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends De{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ze(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ye(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,o=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=o?(0,r.zd)((0,r.pd)(o))["link"]:null;return i||o||n||t||e}class Ze{constructor(e){var t,n,o,i,a,l;const u=(0,r.zd)((0,r.pd)(e)),s=null!==(t=u["apiKey"])&&void 0!==t?t:null,c=null!==(n=u["oobCode"])&&void 0!==n?n:null,d=Ge(null!==(o=u["mode"])&&void 0!==o?o:null);y(s&&c&&d,"argument-error"),this.apiKey=s,this.operation=d,this.code=c,this.continueUrl=null!==(i=u["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=u["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(l=u["tenantId"])&&void 0!==l?l:null}static parseLink(e){const t=Je(e);try{return new Ze(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Le._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ze.parseLink(t);return y(n,"argument-error"),Le._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Qe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends et{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch(t){return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com",tt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends et{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nt.credential(t,n)}catch(r){return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com",nt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends et{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch(t){return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com",rt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot extends et{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ot.credential(t,n)}catch(r){return null}}}ot.TWITTER_SIGN_IN_METHOD="twitter.com",ot.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ae._fromIdTokenResponse(e,n,r),i=at(n),a=new it({user:o,providerId:i,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=at(n);return new it({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function at(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt extends r.ZR{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,lt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new lt(e,t,n,r)}}function ut(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw lt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return it._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ct(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await G(e,ut(r,o,t,e),n);y(i.idToken,r,"internal-error");const a=Y(i.idToken);y(a,r,"internal-error");const{sub:l}=a;return y(e.uid===l,r,"user-mismatch"),it._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&v(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t,n=!1){const r="signIn",o=await ut(e,r,t),i=await it._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function ft(e,t){return dt(Te(e),t)}function vt(e,t,n){return ft((0,r.m9)(e),Xe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,t,n,o){return(0,r.m9)(e).onIdTokenChanged(t,n,o)}function ht(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:start",_(e,t))}function gt(e,t){return W(e,"POST","/v2/accounts/mfaEnrollment:finalize",_(e,t))}new WeakMap;const yt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){const e=(0,r.z$)();return ve(e)||be(e)}const Ct=1e3,xt=10;class kt extends bt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wt()&&ke(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Ce()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ct)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kt.type="LOCAL";const St=kt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends bt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Et.type="SESSION";const Ot=Et;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ft(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(i).map((async e=>e(t.origin,o))),l=await Tt(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.receivers=[];class At{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((a,l)=>{const u=Pt("",20);r.port1.start();const s=setTimeout((()=>{l(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(s),o=setTimeout((()=>{l(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),a(t.data.response);break;default:clearTimeout(s),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function Mt(e){It().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return"undefined"!==typeof It()["WorkerGlobalScope"]&&"function"===typeof It()["importScripts"]}async function Dt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function _t(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Wt(){return Nt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="firebaseLocalStorageDb",jt=1,Lt="firebaseLocalStorage",Bt="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Vt(e,t){return e.transaction([Lt],t?"readwrite":"readonly").objectStore(Lt)}function Kt(){const e=indexedDB.deleteDatabase(Rt);return new Ht(e).toPromise()}function zt(){const e=indexedDB.open(Rt,jt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Lt,{keyPath:Bt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Lt)?t(n):(n.close(),await Kt(),t(await zt()))}))}))}async function Ut(e,t,n){const r=Vt(e,!0).put({[Bt]:t,value:n});return new Ht(r).toPromise()}async function $t(e,t){const n=Vt(e,!1).get(t),r=await new Ht(n).toPromise();return void 0===r?null:r.value}function Yt(e,t){const n=Vt(e,!0).delete(t);return new Ht(n).toPromise()}const qt=800,Gt=3;class Jt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await zt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Gt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ft._getInstance(Wt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dt(),!this.activeServiceWorker)return;this.sender=new At(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&_t()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zt();return await Ut(e,yt,"1"),await Yt(e,yt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ut(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>$t(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Vt(e,!1).getAll();return new Ht(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Jt.type="LOCAL";const Zt=Jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:start",_(e,t))}function Qt(e,t){return W(e,"POST","/v2/accounts/mfaSignIn:finalize",_(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function tn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",en().appendChild(r)}))}function nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nn("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn="recaptcha";async function on(e,t,n){var r;const o=await n.verify();try{let i;if(y("string"===typeof o,e,"argument-error"),y(n.type===rn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){y("enroll"===t.type,e,"internal-error");const n=await mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;y(n,e,"missing-multi-factor-info");const a=await Xt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Ke(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an{constructor(e){this.providerId=an.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return on(this.auth,e,(0,r.m9)(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return an.credentialFromTaggedObject(t)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ln(e,t){return t?x(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.PROVIDER_ID="phone",an.PHONE_SIGN_IN_METHOD="phone";class un extends De{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sn(e){return dt(e.auth,new un(e),e.bypassAuthState)}function cn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ct(n,new un(e),e.bypassAuthState)}async function dn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),st(n,new un(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:a}=e;if(i)return void this.reject(i);const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return dn;case"reauthViaPopup":case"reauthViaRedirect":return cn;default:v(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new A(2e3,1e4);async function pn(e,t,n){const r=Te(e);m(e,t,Qe);const o=ln(r,n),i=new hn(r,"signInViaPopup",t,o);return i.executeNotNull()}class hn extends fn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Pt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,vn.get())};e()}}hn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn="pendingRedirect",gn=new Map;class yn extends fn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=gn.get(this.auth._key());if(!e){try{const t=await bn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}gn.set(this.auth._key(),e)}return this.bypassAuthState||gn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bn(e,t){const n=xn(t),r=Cn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function wn(e,t){gn.set(e._key(),t)}function Cn(e){return x(e._redirectPersistence)}function xn(e){return se(mn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t,n=!1){const r=Te(e),o=ln(r,t),i=new yn(r,o,n),a=await i.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=6e5;class En{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Fn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Tn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sn&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(e))}saveEventToCache(e){this.cachedEventUids.add(On(e)),this.lastProcessedEventTime=Date.now()}}function On(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Tn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Fn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t={}){return W(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,In=/^https?/;async function Mn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Pn(e);for(const r of t)try{if(Nn(r))return}catch(n){}v(e,"unauthorized-domain")}function Nn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!In.test(n))return!1;if(An.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new A(3e4,6e4);function _n(){const e=It().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Wn(e){return new Promise(((t,n)=>{var r,o,i;function a(){_n(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_n(),n(p(e,"network-request-failed"))},timeout:Dn.get()})}if(null===(o=null===(r=It().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=It().gapi)||void 0===i?void 0:i.load)){const t=nn("iframefcb");return It()[t]=()=>{gapi.load?a():n(p(e,"network-request-failed"))},tn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw Rn=null,e}))}let Rn=null;function jn(e){return Rn=Rn||Wn(e),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new A(5e3,15e3),Bn="__/auth/iframe",Hn="emulator/auth/iframe",Vn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?I(t,Hn):`https://${e.config.authDomain}/${Bn}`,i={apiKey:t.apiKey,appName:e.name,v:o.Jn},a=Kn.get(e.config.apiHost);a&&(i.eid=a);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Un(e){const t=await jn(e),n=It().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=It().setTimeout((()=>{r(o)}),Ln.get());function a(){It().clearTimeout(i),n(t)}t.ping(a).then(a,(()=>{r(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yn=500,qn=600,Gn="_blank",Jn="http://localhost";class Zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xn(e,t,n,o=Yn,i=qn){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-o)/2,0).toString();let u="";const s=Object.assign(Object.assign({},$n),{width:o.toString(),height:i.toString(),top:a,left:l}),c=(0,r.z$)().toLowerCase();n&&(u=pe(c)?Gn:n),fe(c)&&(t=t||Jn,s.scrollbars="yes");const d=Object.entries(s).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(c)&&"_self"!==u)return Qn(t||"",u),new Zn(null);const f=window.open(t||"",u,d);y(f,e,"popup-blocked");try{f.focus()}catch(v){}return new Zn(f)}function Qn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="__/auth/handler",tr="emulator/auth/handler";function nr(e,t,n,i,a,l){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.Jn,eventId:a};if(t instanceof Qe){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(l||{}))u[e]=t}if(t instanceof et){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const s=u;for(const r of Object.keys(s))void 0===s[r]&&delete s[r];return`${rr(e)}?${(0,r.xO)(s).slice(1)}`}function rr({config:e}){return e.emulator?I(e,tr):`https://${e.authDomain}/${er}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class ir{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ot,this._completeRedirectFn=kn,this._overrideRedirectResult=wn}async _openPopup(e,t,n,r){var o;w(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=nr(e,t,n,E(),r);return Xn(e,i,Pt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Mt(nr(e,t,n,E(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Un(e),n=new En(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(or,{type:or},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==o&&t(!!o),v(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xe()||ve()||be()}}const ar=ir;class lr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class ur extends lr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ur(e)}_finalizeEnroll(e,t,n){return gt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Qt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sr{constructor(){}static assertion(e){return ur._fromCredential(e)}}sr.FACTOR_ID="phone";var cr="@firebase/auth",dr="0.21.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pr(e){(0,o.Xd)(new l.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:a}=r.options;return((t,r)=>{y(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:t.name});const o={apiKey:i,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},l=new Oe(t,r,o);return S(l,n),l})(r,o)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o.Xd)(new l.wA("auth-internal",(e=>{const t=Te(e.getProvider("auth").getImmediate());return(e=>new fr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(cr,dr,vr(e)),(0,o.KN)(cr,dr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=300,mr=(0,r.Pz)("authIdTokenMaxAge")||hr;let gr=null;const yr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mr)return;const o=null===n||void 0===n?void 0:n.token;gr!==o&&(gr=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function br(e=(0,o.Mq)()){const t=(0,o.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=k(e,{popupRedirectResolver:ar,persistence:[Zt,St,Ot]}),i=(0,r.Pz)("authTokenSyncURL");if(i){const e=yr(i);ht(n,e,(()=>e(n.currentUser))),pt(n,(t=>e(t)))}const a=(0,r.q4)("auth");return a&&Pe(n,`http://${a}`),n}pr("Browser")},247:function(e,t,n){"use strict";n.d(t,{ET:function(){return Fs},hJ:function(){return es},JU:function(){return ts},ad:function(){return os}});var r,o=n(816),i=n(463),a=n(333),l=n(444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},s={},c=c||{},d=u||self;function f(){}function v(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function C(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function x(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function k(){this.s=this.s,this.o=this.o}var S=0;k.prototype.s=!1,k.prototype.na=function(){this.s||(this.s=!0,this.M(),0==S)||h(this)},k.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function O(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function T(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(v(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let o=0;o<r;o++)e[n+o]=t[o]}else e.push(t)}}function F(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function A(e){return/^[\s\xa0]*$/.test(e)}var I=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function M(e,t){return e<t?-1:e>t?1:0}function N(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return-1!=N().indexOf(e)}function _(e){return _[" "](e),e}function W(e){var t=G;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}_[" "]=f;var R,j=D("Opera"),L=D("Trident")||D("MSIE"),B=D("Edge"),H=B||L,V=D("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),K=-1!=N().toLowerCase().indexOf("webkit")&&!D("Edge");function z(){var e=d.document;return e?e.documentMode:void 0}e:{var U="",$=function(){var e=N();return V?/rv:([^\);]+)(\)|;)/.exec(e):B?/Edge\/([\d\.]+)/.exec(e):L?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):K?/WebKit\/(\S+)/.exec(e):j?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if($&&(U=$?$[1]:""),L){var Y=z();if(null!=Y&&Y>parseFloat(U)){R=String(Y);break e}}R=U}var q,G={};function J(){return W((function(){let e=0;const t=I(String(R)).split("."),n=I("9").split("."),r=Math.max(t.length,n.length);for(let a=0;0==e&&a<r;a++){var o=t[a]||"",i=n[a]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==o[0].length&&0==i[0].length)break;e=M(0==o[1].length?0:parseInt(o[1],10),0==i[1].length?0:parseInt(i[1],10))||M(0==o[2].length,0==i[2].length)||M(o[2],i[2]),o=o[3],i=i[3]}while(0==e)}return 0<=e}))}if(d.document&&L){var Z=z();q=Z||(parseInt(R,10)||void 0)}else q=void 0;var X=q;function Q(e,t){if(F.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{_(t.nodeName);var o=!0;break e}catch(i){}o=!1}o||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.X.h.call(this)}}x(Q,F);var ee={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,o){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=o,this.key=++ne,this.ba=this.ea=!1}function oe(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ae(e){const t={};for(const n in e)t[n]=e[n];return t}const le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){let n,r;for(let o=1;o<arguments.length;o++){for(n in r=arguments[o],r)e[n]=r[n];for(let t=0;t<le.length;t++)n=le[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function se(e){this.src=e,this.g={},this.h=0}function ce(e,t){var n=t.type;if(n in e.g){var r,o=e.g[n],i=E(o,t);(r=0<=i)&&Array.prototype.splice.call(o,i,1),r&&(oe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var o=0;o<e.length;++o){var i=e[o];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==r)return o}return-1}se.prototype.add=function(e,t,n,r,o){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var a=de(e,t,r,o);return-1<a?(t=e[a],n||(t.ea=!1)):(t=new re(t,this.src,i,!!r,o),t.ea=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),ve={};function pe(e,t,n,r,o){if(r&&r.once)return ge(e,t,n,r,o);if(Array.isArray(t)){for(var i=0;i<t.length;i++)pe(e,t[i],n,r,o);return null}return n=Se(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,o):he(e,t,n,!1,r,o)}function he(e,t,n,r,o,i){if(!t)throw Error("Invalid event type");var a=p(o)?!!o.capture:!!o,l=xe(e);if(l||(e[fe]=l=new se(e)),n=l.add(t,n,r,a,i),n.proxy)return n;if(r=me(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)P||(o=a),void 0===o&&(o=!1),e.addEventListener(t.toString(),r,o);else if(e.attachEvent)e.attachEvent(we(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function me(){function e(n){return t.call(e.src,e.listener,n)}const t=Ce;return e}function ge(e,t,n,r,o){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ge(e,t[i],n,r,o);return null}return n=Se(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,o):he(e,t,n,!0,r,o)}function ye(e,t,n,r,o){if(Array.isArray(t))for(var i=0;i<t.length;i++)ye(e,t[i],n,r,o);else r=p(r)?!!r.capture:!!r,n=Se(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=de(i,n,r,o),-1<n&&(oe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=xe(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,o)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ce(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(we(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=xe(t))?(ce(n,e),0==n.h&&(n.src=null,t[fe]=null)):oe(e)}}}function we(e){return e in ve?ve[e]:ve[e]="on"+e}function Ce(e,t){if(e.ba)e=!0;else{t=new Q(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&be(e),e=n.call(r,t)}return e}function xe(e){return e=e[fe],e instanceof se?e:null}var ke="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[ke]||(e[ke]=function(t){return e.handleEvent(t)}),e[ke])}function Ee(){k.call(this),this.i=new se(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new F(t,e);else if(t instanceof F)t.target=t.target||e;else{var o=t;t=new F(r,e),ue(t,o)}if(o=!0,n)for(var i=n.length-1;0<=i;i--){var a=t.g=n[i];o=Te(a,r,!0,t)&&o}if(a=t.g=e,o=Te(a,r,!0,t)&&o,o=Te(a,r,!1,t)&&o,n)for(i=0;i<n.length;i++)a=t.g=n[i],o=Te(a,r,!1,t)&&o}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,i=0;i<t.length;++i){var a=t[i];if(a&&!a.ba&&a.capture==n){var l=a.listener,u=a.ha||a.src;a.ea&&ce(e.i,a),o=!1!==l.call(u,r)&&o}}return o&&!r.defaultPrevented}x(Ee,k),Ee.prototype[te]=!0,Ee.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},Ee.prototype.M=function(){if(Ee.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oe(n[r]);delete t.g[e],t.h--}}this.I=null},Ee.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ee.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Fe=d.JSON.stringify;function Pe(){var e=je;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=Me.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ie,Me=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ne),(e=>e.reset()));class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){d.setTimeout((()=>{throw e}),0)}function _e(e,t){Ie||We(),Re||(Ie(),Re=!0),je.add(e,t)}function We(){var e=d.Promise.resolve(void 0);Ie=function(){e.then(Le)}}var Re=!1,je=new Ae;function Le(){for(var e;e=Pe();){try{e.h.call(e.g)}catch(n){De(n)}var t=Me;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Re=!1}function Be(e,t){Ee.call(this),this.h=e||1,this.g=t||d,this.j=w(this.lb,this),this.l=Date.now()}function He(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ve(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Ke(e){e.g=Ve((()=>{e.g=null,e.i&&(e.i=!1,Ke(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}x(Be,Ee),r=Be.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Oe(this,"tick"),this.ca&&(He(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Be.X.M.call(this),He(this),delete this.g};class ze extends k{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ke(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(e){k.call(this),this.h=e,this.g={}}x(Ue,k);var $e=[];function Ye(e,t,n,r){Array.isArray(n)||(n&&($e[0]=n.toString()),n=$e);for(var o=0;o<n.length;o++){var i=pe(t,n[o],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function qe(e){ie(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Ge(){this.g=!0}function Je(e,t,n,r,o,i){e.info((function(){if(e.g)if(i)for(var a="",l=i.split("&"),u=0;u<l.length;u++){var s=l[u].split("=");if(1<s.length){var c=s[0];s=s[1];var d=c.split("_");a=2<=d.length&&"type"==d[1]?a+(c+"=")+s+"&":a+(c+"=redacted&")}}else a=null;else a=i;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+t+"\n"+n+"\n"+a}))}function Ze(e,t,n,r,o,i,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+t+"\n"+n+"\n"+i+" "+a}))}function Xe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Qe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var i=o[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var a=1;a<o.length;a++)o[a]=""}}}return Fe(n)}catch(l){return t}}Ue.prototype.M=function(){Ue.X.M.call(this),qe(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ge.prototype.Aa=function(){this.g=!1},Ge.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Ee}function ot(e){F.call(this,tt.Pa,e)}function it(e){const t=rt();Oe(t,new ot(t))}function at(e,t){F.call(this,tt.STAT_EVENT,e),this.stat=t}function lt(e){const t=rt();Oe(t,new at(t,e))}function ut(e,t){F.call(this,tt.Qa,e),this.size=t}function st(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",x(ot,F),tt.STAT_EVENT="statevent",x(at,F),tt.Qa="timingevent",x(ut,F);var ct={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ft(){}function vt(e){return e.h||(e.h=e.i())}function pt(){}ft.prototype.h=null;var ht,mt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function gt(){F.call(this,"d")}function yt(){F.call(this,"c")}function bt(){}function wt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ue(this),this.O=xt,e=H?125:void 0,this.T=new Be(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ct}function Ct(){this.i=null,this.g="",this.h=!1}x(gt,F),x(yt,F),x(bt,ft),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},ht=new bt;var xt=45e3,kt={},St={};function Et(e,t,n){e.K=1,e.v=Yt(Vt(t)),e.s=n,e.P=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),At(e),e.A=Vt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),ln(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Ct,e.g=dr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(w(e.La,e,e.g),e.N)),Ye(e.S,e.g,"readystatechange",e.ib),t=e.H?ae(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),it(),Je(e.j,e.u,e.A,e.m,e.U,e.s)}function Tt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Ft(e,t,n){let r,o=!0;for(;!e.I&&e.C<n.length;){if(r=Pt(e,n),r==St){4==t&&(e.o=4,lt(14),o=!1),Xe(e.j,e.m,null,"[Incomplete Response]");break}if(r==kt){e.o=4,lt(15),Xe(e.j,e.m,n,"[Invalid Chunk]"),o=!1;break}Xe(e.j,e.m,r,null),_t(e,r)}Tt(e)&&r!=St&&r!=kt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,lt(16),o=!1),e.i=e.i&&o,o?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,lt(11))):(Xe(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),Nt(e))}function Pt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?kt:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function At(e){e.V=Date.now()+e.O,It(e,e.O)}function It(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=st(w(e.gb,e),t)}function Mt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Nt(e){0==e.l.G||e.I||ar(e.l,e)}function Dt(e){Mt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,He(e.T),qe(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function _t(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||hn(n.h,e)))if(!e.J&&hn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var o=r;if(0==o[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ir(n),qn(n)}nr(n),lt(18)}}else n.Ba=o[1],0<n.Ba-n.T&&37500>o[2]&&n.L&&0==n.A&&!n.v&&(n.v=st(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(s){}n.ja=void 0}}else ur(n,11)}else if((e.J||n.g==e)&&ir(n),!A(t))for(o=n.Fa.g.parse(t),t=0;t<o.length;t++){let s=o[t];if(n.T=s[0],s=s[1],2==n.G)if("c"==s[0]){n.I=s[1],n.ka=s[2];const t=s[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const o=s[4];null!=o&&(n.Ca=o,n.j.info("SVER="+n.Ca));const c=s[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(mn(i,i.h),i.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,$t(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var a=e;if(r.sa=cr(r,r.H?r.ka:null,r.V),a.J){gn(r.h,a);var l=a,u=r.J;u&&l.setTimeout(u),l.B&&(Mt(l),At(l)),r.g=a}else tr(r);0<n.i.length&&Jn(n)}else"stop"!=s[0]&&"close"!=s[0]||ur(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?ur(n,7):Yn(n):"noop"!=s[0]&&n.l&&n.l.wa(s),n.A=0)}it(4)}catch(s){}}function Wt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(v(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Rt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(v(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function jt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Rt(e),r=Wt(e),o=r.length,i=0;i<o;i++)t.call(void 0,r[i],n&&n[i],e)}r=wt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==Hn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const c=Hn(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(3!=c||H||this.g&&(this.h.h||this.g.fa()||Vn(this.g)))){this.I||4!=c||7==t||it(8==t||0>=f?3:2),Mt(this);var n=this.g.aa();this.Y=n;t:if(Tt(this)){var r=Vn(this.g);e="";var o=r.length,i=4==Hn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Dt(this),Nt(this);var a="";break t}this.h.i=new d.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==o-1});r.splice(0,o),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,Ze(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(l)){var s=l;break t}}s=null}if(!(n=s)){this.i=!1,this.o=3,lt(12),Dt(this),Nt(this);break e}Xe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_t(this,n)}this.P?(Ft(this,c,a),H&&this.i&&3==c&&(Ye(this.S,this.T,"tick",this.hb),this.T.start())):(Xe(this.j,this.m,a,null),_t(this,a)),4==c&&Dt(this),this.i&&!this.I&&(4==c?ar(this.l,this):(this.i=!1,At(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Dt(this),Nt(this)}}}catch(c){}},r.hb=function(){if(this.g){var e=Hn(this.g),t=this.g.fa();this.C<t.length&&(Mt(this),Ft(this,e,t),this.i&&4!=e&&At(this))}},r.cancel=function(){this.I=!0,Dt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Qe(this.j,this.A),2!=this.K&&(it(),lt(17)),Dt(this),this.o=2,Nt(this)):It(this,this.V-e)};var Lt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),o=null;if(0<=r){var i=e[n].substring(0,r);o=e[n].substring(r+1)}else i=e[n];t(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Ht(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ht){this.h=void 0!==t?t:e.h,Kt(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ut(this,n),this.o=e.o}else e&&(n=String(e).match(Lt))?(this.h=!!t,Kt(this,n[1]||"",!0),this.s=qt(n[2]||""),this.g=qt(n[3]||"",!0),zt(this,n[4]),this.l=qt(n[5]||"",!0),Ut(this,n[6]||"",!0),this.o=qt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Vt(e){return new Ht(e)}function Kt(e,t,n){e.j=n?qt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ut(e,t,n){t instanceof nn?(e.i=t,sn(e.i,e.h)):(n||(t=Gt(t,en)),e.i=new nn(t,e.h))}function $t(e,t,n){e.i.set(t,n)}function Yt(e){return $t(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function qt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Gt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ht.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Gt(t,Zt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Gt(t,Zt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Gt(n,"/"==n.charAt(0)?Qt:Xt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Gt(n,tn)),e.join("")};var Zt=/[#\/\?@]/g,Xt=/[#\?:]/g,Qt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Bt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){rn(e),t=un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function an(e,t){return rn(e),t=un(e,t),e.g.has(t)}function ln(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(un(e,t),O(n)),e.h+=n.length)}function un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sn(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),ln(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const o=e[r];for(let e=0;e<o.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)an(this,e)&&(t=t.concat(this.g.get(un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=un(this,e),an(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var cn=class{constructor(e,t){this.h=e,this.g=t}};function dn(e){this.l=e||fn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ga&&d.g.Ga()&&d.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function vn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function hn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function mn(e,t){e.g?e.g.add(t):e.h=t}function gn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return O(e.i)}function bn(){}function wn(){this.g=new bn}function Cn(e,t,n){const r=n||"";try{jt(e,(function(e,n){let o=e;p(e)&&(o=Fe(e)),t.push(r+n+"="+encodeURIComponent(o))}))}catch(o){throw t.push(r+"type="+encodeURIComponent("_badmap")),o}}function xn(e,t){const n=new Ge;if(d.Image){const r=new Image;r.onload=C(kn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=C(kn,n,r,"TestLoadImage: error",!1,t),r.onabort=C(kn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=C(kn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function kn(e,t,n,r,o){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,o(r)}catch(i){}}function Sn(e){this.l=e.ac||null,this.j=e.jb||!1}function En(e,t){Ee.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=On,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},bn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},x(Sn,ft),Sn.prototype.g=function(){return new En(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),x(En,Ee);var On=0;function Tn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Fn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pn(e)}function Pn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=On)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Fn(this)),this.readyState=On},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fn(this):Pn(this),3==this.readyState&&Tn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,Fn(this))},r.Ua=function(e){this.g&&(this.response=e,Fn(this))},r.ga=function(){this.g&&Fn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=d.JSON.parse;function In(e){Ee.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mn,this.K=this.L=!1}x(In,Ee);var Mn="",Nn=/^https?$/i,Dn=["POST","PUT"];function _n(e){return L&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Rn(e),Ln(e)}function Rn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function jn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=Hn(e)||2!=e.aa()))if(e.v&&4==Hn(e))Ve(e.Ha,0,e);else if(Oe(e,"readystatechange"),4==Hn(e)){e.h=!1;try{const u=e.aa();e:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===u){var o=String(e.H).match(Lt)[1]||null;if(!o&&d.self&&d.self.location){var i=d.self.location.protocol;o=i.substr(0,i.length-1)}r=!Nn.test(o?o.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var a=2<Hn(e)?e.g.statusText:""}catch(l){a=""}e.j=a+" ["+e.aa()+"]",Rn(e)}}finally{Ln(e)}}}function Ln(e,t){if(e.g){Bn(e);const r=e.g,o=e.C[0]?f:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=o}catch(n){}}}function Bn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Hn(e){return e.g?e.g.readyState:0}function Vn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Mn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Tr){return null}}function Kn(e){let t="";return ie(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Kn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):$t(e,t,n))}function Un(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function $n(e){this.Ca=0,this.i=[],this.j=new Ge,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Un("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Un("baseRetryDelayMs",5e3,e),this.bb=Un("retryDelaySeedMs",1e4,e),this.$a=Un("forwardChannelMaxRetries",2,e),this.ta=Un("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(e&&e.concurrentRequestLimit),this.Fa=new wn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Yn(e){if(Gn(e),3==e.G){var t=e.U++,n=Vt(e.F);$t(n,"SID",e.I),$t(n,"RID",t),$t(n,"TYPE","terminate"),Qn(e,n),t=new wt(e,e.j,t,void 0),t.K=2,t.v=Yt(Vt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=dr(t.l,null),t.g.da(t.v)),t.F=Date.now(),At(t)}sr(e)}function qn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Gn(e){qn(e),e.u&&(d.clearTimeout(e.u),e.u=null),ir(e),e.h.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Jn(e){vn(e.h)||e.m||(e.m=!0,_e(e.Ja,e),e.C=0)}function Zn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=st(w(e.Ja,e,t),lr(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.U++;const r=Vt(e.F);$t(r,"SID",e.I),$t(r,"RID",n),$t(r,"AID",e.T),Qn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new wt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),mn(e.h,n),Et(n,r,t)}function Qn(e,t){e.ia&&ie(e.ia,(function(e,n){$t(t,n,e)})),e.l&&jt({},(function(e,n){$t(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?w(e.l.Ra,e.l,e):null;e:{var o=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=o[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let l=0;l<n;l++){let n=o[l].h;const u=o[l].g;if(n-=t,0>n)t=Math.max(0,o[l].h-100),a=!1;else try{Cn(u,e,"req"+n+"_")}catch(i){r&&r(u)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,_e(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=st(w(e.Ia,e),lr(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function or(e){e.g=new wt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Vt(e.sa);$t(t,"RID","rpc"),$t(t,"SID",e.I),$t(t,"CI",e.L?"0":"1"),$t(t,"AID",e.T),$t(t,"TYPE","xmlhttp"),Qn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Yt(Vt(t)),n.s=null,n.P=!0,Ot(n,e)}function ir(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function ar(e,t){var n=null;if(e.g==t){ir(e),rr(e),e.g=null;var r=2}else{if(!hn(e.h,t))return;n=t.D,gn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var o=e.C;r=rt(),Oe(r,new ut(r,n)),Jn(e)}else tr(e);else if(o=t.o,3==o||0==o&&0<e.pa||!(1==r&&Zn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),o){case 1:ur(e,5);break;case 4:ur(e,10);break;case 3:ur(e,6);break;default:ur(e,2)}}function lr(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ur(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=w(e.kb,e);n||(n=new Ht("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Kt(n,"https"),Yt(n)),xn(n.toString(),r)}else lt(2);e.G=0,e.l&&e.l.va(t),sr(e),Gn(e)}function sr(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(T(e.la,t),T(e.la,e.i),e.h.i.length=0,O(e.i),e.i.length=0),e.l.ua()}}function cr(e,t,n){var r=n instanceof Ht?Vt(n):new Ht(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),zt(r,r.m);else{var o=d.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var i=new Ht(null,void 0);r&&Kt(i,r),t&&(i.g=t),o&&zt(i,o),n&&(i.l=n),r=i}return n=e.D,t=e.za,n&&t&&$t(r,n,t),$t(r,"VER",e.ma),Qn(e,r),r}function dr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new In(new Sn({jb:!0})):new In(e.ra),t.Ka(e.H),t}function fr(){}function vr(){if(L&&!(10<=Number(X)))throw Error("Environmental error: no available transport.")}function pr(e,t){Ee.call(this),this.g=new $n(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!A(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!A(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function hr(e){gt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){yt.call(this),this.status=1}function gr(e){this.g=e}r=In.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ht.g(),this.C=this.u?vt(this.u):vt(ht),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Wn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=d.FormData&&e instanceof d.FormData,!(0<=E(Dn,t))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,l]of n)this.g.setRequestHeader(a,l);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bn(this),0<this.B&&((this.K=_n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=Ve(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Wn(this,i)}},r.qa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Ln(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),In.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?jn(this):this.fb())},r.fb=function(){jn(this)},r.aa=function(){try{return 2<Hn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=$n.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const o=new wt(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=ae(i),ue(i,this.S)):i=this.S),null!==this.o||this.N||(o.H=i,i=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,o,t),n=Vt(this.F),$t(n,"RID",e),$t(n,"CVER",22),this.D&&$t(n,"X-HTTP-Session-Id",this.D),Qn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(Kn(i)))+"&"+t:this.o&&zn(n,this.o,i)),mn(this.h,o),this.Ya&&$t(n,"TYPE","init"),this.O?($t(n,"$req",t),$t(n,"SID","null"),o.Z=!0,Et(o,n,null)):Et(o,n,t),this.G=2}}else 3==this.G&&(e?Xn(this,e):0==this.i.length||vn(this.h)||Xn(this))},r.Ia=function(){if(this.u=null,or(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=st(w(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,lt(10),qn(this),or(this))},r.cb=function(){null!=this.v&&(this.v=null,qn(this),nr(this),lt(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},vr.prototype.g=function(e,t){return new pr(e,t)},x(pr,Ee),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;lt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=cr(e,null,e.V),Jn(e)},pr.prototype.close=function(){Yn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Fe(e),e=n);t.i.push(new cn(t.ab++,e)),3==t.G&&Jn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Yn(this.g),delete this.g,pr.X.M.call(this)},x(hr,gt),x(mr,yt),x(gr,fr),gr.prototype.xa=function(){Oe(this.g,"a")},gr.prototype.wa=function(e){Oe(this.g,new hr(e))},gr.prototype.va=function(e){Oe(this.g,new mr)},gr.prototype.ua=function(){Oe(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ct.NO_ERROR=0,ct.TIMEOUT=8,ct.HTTP_ERROR=6,dt.COMPLETE="complete",pt.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",Ee.prototype.listen=Ee.prototype.N,In.prototype.listenOnce=In.prototype.O,In.prototype.getLastError=In.prototype.Oa,In.prototype.getLastErrorCode=In.prototype.Ea,In.prototype.getStatus=In.prototype.aa,In.prototype.getResponseJson=In.prototype.Sa,In.prototype.getResponseText=In.prototype.fa,In.prototype.send=In.prototype.da,In.prototype.setWithCredentials=In.prototype.Ka;var yr=s.createWebChannelTransport=function(){return new vr},br=s.getStatEventTarget=function(){return rt()},wr=s.ErrorCode=ct,Cr=s.EventType=dt,xr=s.Event=tt,kr=s.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=s.FetchXmlHttpFactory=Sn,Er=s.WebChannel=pt,Or=s.XhrIo=In;const Tr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fr.UNAUTHENTICATED=new Fr(null),Fr.GOOGLE_CREDENTIALS=new Fr("google-credentials-uid"),Fr.FIRST_PARTY=new Fr("first-party-uid"),Fr.MOCK_USER=new Fr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Pr="9.17.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new a.Yd("@firebase/firestore");function Ir(){return Ar.logLevel}function Mr(e,...t){if(Ar.logLevel<=a["in"].DEBUG){const n=t.map(_r);Ar.debug(`Firestore (${Pr}): ${e}`,...n)}}function Nr(e,...t){if(Ar.logLevel<=a["in"].ERROR){const n=t.map(_r);Ar.error(`Firestore (${Pr}): ${e}`,...n)}}function Dr(e,...t){if(Ar.logLevel<=a["in"].WARN){const n=t.map(_r);Ar.warn(`Firestore (${Pr}): ${e}`,...n)}}function _r(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(e="Unexpected state"){const t=`FIRESTORE (${Pr}) INTERNAL ASSERTION FAILED: `+e;throw Nr(t),new Error(t)}function Rr(e,t){e||Wr()}function jr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Br extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fr.UNAUTHENTICATED)))}shutdown(){}}class zr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ur{constructor(e){this.t=e,this.currentUser=Fr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let o=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Hr,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=o;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{Mr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Mr("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Hr)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Mr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Rr("string"==typeof t.accessToken),new Vr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Rr(null===e||"string"==typeof e),new Fr(e)}}class $r{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Fr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Rr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Yr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new $r(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Fr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Mr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Mr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Mr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Mr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Rr("string"==typeof e.token),this.A=e.token,new qr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Jr(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%e.length))}return n}}function Xr(e,t){return e<t?-1:e>t?1:0}function Qr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Br(Lr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Br(Lr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Br(Lr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Br(Lr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return eo.fromMillis(Date.now())}static fromDate(e){return eo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new eo(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xr(this.nanoseconds,e.nanoseconds):Xr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.timestamp=e}static fromTimestamp(e){return new to(e)}static min(){return new to(new eo(0,0))}static max(){return new to(new eo(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n){void 0===t?t=0:t>e.length&&Wr(),void 0===n?n=e.length-t:n>e.length-t&&Wr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===no.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),o=t.get(r);if(n<o)return-1;if(n>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ro extends no{construct(e,t,n){return new ro(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Br(Lr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ro(t)}static emptyPath(){return new ro([])}}const oo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class io extends no{construct(e,t,n){return new io(e,t,n)}static isValidIdentifier(e){return oo.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),io.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new io(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(0===n.length)throw new Br(Lr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Br(Lr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Br(Lr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(o(),r++)}if(o(),i)throw new Br(Lr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new io(t)}static emptyPath(){return new io([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.path=e}static fromPath(e){return new ao(ro.fromString(e))}static fromName(e){return new ao(ro.fromString(e).popFirst(5))}static empty(){return new ao(ro.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ro.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ro.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ao(new ro(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}lo.UNKNOWN_ID=-1;function uo(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,o=to.fromTimestamp(1e9===r?new eo(n+1,0):new eo(n,r));return new co(o,ao.empty(),t)}function so(e){return new co(e.readTime,e.key,-1)}class co{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new co(to.min(),ao.empty(),-1)}static max(){return new co(to.max(),ao.empty(),-1)}}function fo(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ao.comparator(e.documentKey,t.documentKey),0!==n?n:Xr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class po{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(e){if(e.code!==Lr.FAILED_PRECONDITION||e.message!==vo)throw e;Mr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new mo(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof mo?t:mo.resolve(t)}catch(e){return mo.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):mo.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):mo.reject(t)}static resolve(e){return new mo(((t,n)=>{t(e)}))}static reject(e){return new mo(((t,n)=>{n(e)}))}static waitFor(e){return new mo(((t,n)=>{let r=0,o=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++o,i&&o===r&&t()}),(e=>n(e)))})),i=!0,o===r&&t()}))}static or(e){let t=mo.resolve(!1);for(const n of e)t=t.next((e=>e?mo.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new mo(((n,r)=>{const o=e.length,i=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;t(e[u]).next((e=>{i[u]=e,++a,a===o&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new mo(((n,r)=>{const o=()=>{!0===e()?t().next((()=>{o()}),r):n()};o()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}yo.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(e,t,n,r,o,i,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class wo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new wo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ko(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e){return null==e}function Eo(e){return 0===e&&1/e==-1/0}function Oo(e){return"number"==typeof e&&Number.isInteger(e)&&!Eo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new To("Invalid base64 string: "+e):e}}(e);return new Fo(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fo(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fo.EMPTY_BYTE_STRING=new Fo("");const Po=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ao(e){if(Rr(!!e),"string"==typeof e){let t=0;const n=Po.exec(e);if(Rr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Io(e.seconds),nanos:Io(e.nanos)}}function Io(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Mo(e){return"string"==typeof e?Fo.fromBase64String(e):Fo.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Do(e){const t=Ao(e.mapValue.fields.__local_write_time__.timestampValue);return new eo(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?No(e)?4:Yo(e)?9007199254740991:10:Wr()}function Ro(e,t){if(e===t)return!0;const n=Wo(e);if(n!==Wo(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Do(e).isEqual(Do(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ao(e.timestampValue),r=Ao(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Mo(e.bytesValue).isEqual(Mo(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Io(e.geoPointValue.latitude)===Io(t.geoPointValue.latitude)&&Io(e.geoPointValue.longitude)===Io(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Io(e.integerValue)===Io(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Io(e.doubleValue),r=Io(t.doubleValue);return n===r?Eo(n)===Eo(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Qr(e.arrayValue.values||[],t.arrayValue.values||[],Ro);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Co(n)!==Co(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!Ro(n[o],r[o])))return!1;return!0}(e,t);default:return Wr()}}function jo(e,t){return void 0!==(e.values||[]).find((e=>Ro(e,t)))}function Lo(e,t){if(e===t)return 0;const n=Wo(e),r=Wo(t);if(n!==r)return Xr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Io(e.integerValue||e.doubleValue),r=Io(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Bo(e.timestampValue,t.timestampValue);case 4:return Bo(Do(e),Do(t));case 5:return Xr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Mo(e),r=Mo(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let o=0;o<n.length&&o<r.length;o++){const e=Xr(n[o],r[o]);if(0!==e)return e}return Xr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Xr(Io(e.latitude),Io(t.latitude));return 0!==n?n:Xr(Io(e.longitude),Io(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const e=Lo(n[o],r[o]);if(e)return e}return Xr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===_o.mapValue&&t===_o.mapValue)return 0;if(e===_o.mapValue)return 1;if(t===_o.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),o=t.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let a=0;a<r.length&&a<i.length;++a){const e=Xr(r[a],i[a]);if(0!==e)return e;const t=Lo(n[r[a]],o[i[a]]);if(0!==t)return t}return Xr(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Wr()}}function Bo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Xr(e,t);const n=Ao(e),r=Ao(t),o=Xr(n.seconds,r.seconds);return 0!==o?o:Xr(n.nanos,r.nanos)}function Ho(e){return Vo(e)}function Vo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ao(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Mo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ao.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Vo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${Vo(e.fields[o])}`;return n+"}"}(e.mapValue):Wr();var t,n}function Ko(e){return!!e&&"integerValue"in e}function zo(e){return!!e&&"arrayValue"in e}function Uo(e){return!!e&&"mapValue"in e}function $o(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xo(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=$o(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$o(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Yo(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(e,t){this.position=e,this.inclusive=t}}function Go(e,t,n){let r=0;for(let o=0;o<e.position.length;o++){const i=t[o],a=e.position[o];if(r=i.field.isKeyField()?ao.comparator(ao.fromName(a.referenceValue),n.key):Lo(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Jo(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ro(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{}class Xo extends Zo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ai(e,t,n):"array-contains"===t?new ci(e,n):"in"===t?new di(e,n):"not-in"===t?new fi(e,n):"array-contains-any"===t?new vi(e,n):new Xo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new li(e,n):new ui(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Lo(t,this.value)):null!==t&&Wo(this.value)===Wo(t)&&this.matchesComparison(Lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Wr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qo extends Zo{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new Qo(e,t)}matches(e){return ei(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt((e=>e.isInequality()));return null!==e?e.field:null}dt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ei(e){return"and"===e.op}function ti(e){return ni(e)&&ei(e)}function ni(e){for(const t of e.filters)if(t instanceof Qo)return!1;return!0}function ri(e){if(e instanceof Xo)return e.field.canonicalString()+e.op.toString()+Ho(e.value);if(ti(e))return e.filters.map((e=>ri(e))).join(",");{const t=e.filters.map((e=>ri(e))).join(",");return`${e.op}(${t})`}}function oi(e,t){return e instanceof Xo?function(e,t){return t instanceof Xo&&e.op===t.op&&e.field.isEqual(t.field)&&Ro(e.value,t.value)}(e,t):e instanceof Qo?function(e,t){return t instanceof Qo&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&oi(n,t.filters[r])),!0)}(e,t):void Wr()}function ii(e){return e instanceof Xo?function(e){return`${e.field.canonicalString()} ${e.op} ${Ho(e.value)}`}(e):e instanceof Qo?function(e){return e.op.toString()+" {"+e.getFilters().map(ii).join(" ,")+"}"}(e):"Filter"}class ai extends Xo{constructor(e,t,n){super(e,t,n),this.key=ao.fromName(n.referenceValue)}matches(e){const t=ao.comparator(e.key,this.key);return this.matchesComparison(t)}}class li extends Xo{constructor(e,t){super(e,"in",t),this.keys=si("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ui extends Xo{constructor(e,t){super(e,"not-in",t),this.keys=si("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function si(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ao.fromName(e.referenceValue)))}class ci extends Xo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zo(t)&&jo(t.arrayValue,this.value)}}class di extends Xo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&jo(this.value.arrayValue,t)}}class fi extends Xo{constructor(e,t){super(e,"not-in",t)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!jo(this.value.arrayValue,t)}}class vi extends Xo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>jo(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t="asc"){this.field=e,this.dir=t}}function hi(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.comparator=e,this.root=t||yi.EMPTY}insert(e,t){return new mi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,yi.BLACK,null,null))}remove(e){return new mi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gi(this.root,e,this.comparator,!0)}}class gi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yi{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=null!=n?n:yi.RED,this.left=null!=r?r:yi.EMPTY,this.right=null!=o?o:yi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new yi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===o?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return yi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return yi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const e=this.left.check();if(e!==this.right.check())throw Wr();return e+(this.isRed()?0:1)}}yi.EMPTY=null,yi.RED=!0,yi.BLACK=!1,yi.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(e,t,n,r,o){return this}insert(e,t,n){return new yi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(e){this.comparator=e,this.data=new mi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wi(this.data.getIterator())}getIteratorFrom(e){return new wi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof bi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new bi(this.comparator);return t.data=e,t}}class wi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(e){this.fields=e,e.sort(io.comparator)}static empty(){return new Ci([])}unionWith(e){let t=new bi(io.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ci(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.value=e}static empty(){return new xi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Uo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$o(t)}setAll(e){let t=io.emptyPath(),n={},r=[];e.forEach(((e,o)=>{if(!t.isImmediateParentOf(o)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=o.popLast()}e?n[o.lastSegment()]=$o(e):r.push(o.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());Uo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ro(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Uo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){xo(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new xi($o(this.value))}}function ki(e){const t=[];return xo(e.fields,((e,n)=>{const r=new io([e]);if(Uo(n)){const e=ki(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ci(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Si{constructor(e,t,n,r,o,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=i,this.documentState=a}static newInvalidDocument(e){return new Si(e,0,to.min(),to.min(),to.min(),xi.empty(),0)}static newFoundDocument(e,t,n,r){return new Si(e,1,t,to.min(),n,r,0)}static newNoDocument(e,t){return new Si(e,2,t,to.min(),to.min(),xi.empty(),0)}static newUnknownDocument(e,t){return new Si(e,3,t,to.min(),to.min(),xi.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(to.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=to.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Si&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Si(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t=null,n=[],r=[],o=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=a,this._t=null}}function Oi(e,t=null,n=[],r=[],o=null,i=null,a=null){return new Ei(e,t,n,r,o,i,a)}function Ti(e){const t=jr(e);if(null===t._t){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>ri(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),So(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ho(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ho(e))).join(",")),t._t=e}return t._t}function Fi(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!hi(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!oi(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Jo(e.startAt,t.startAt)&&Jo(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi{constructor(e,t=null,n=[],r=[],o=null,i="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Ai(e,t,n,r,o,i,a,l){return new Pi(e,t,n,r,o,i,a,l)}function Ii(e){return new Pi(e)}function Mi(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ni(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Di(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function _i(e){return null!==e.collectionGroup}function Wi(e){const t=jr(e);if(null===t.wt){t.wt=[];const e=Di(t),n=Ni(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new pi(e)),t.wt.push(new pi(io.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new pi(io.keyField(),e))}}}return t.wt}function Ri(e){const t=jr(e);if(!t.gt)if("F"===t.limitType)t.gt=Oi(t.path,t.collectionGroup,Wi(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const o of Wi(t)){const t="desc"===o.dir?"asc":"desc";e.push(new pi(o.field,t))}const n=t.endAt?new qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qo(t.startAt.position,t.startAt.inclusive):null;t.gt=Oi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.gt}function ji(e,t,n){return new Pi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Li(e,t){return Fi(Ri(e),Ri(t))&&e.limitType===t.limitType}function Bi(e){return`${Ti(Ri(e))}|lt:${e.limitType}`}function Hi(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ii(e))).join(", ")}]`),So(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ho(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ho(e))).join(",")),`Target(${t})`}(Ri(e))}; limitType=${e.limitType})`}function Vi(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ao.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Wi(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Go(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Wi(e),t))&&!(e.endAt&&!function(e,t,n){const r=Go(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Wi(e),t))}(e,t)}function Ki(e){return(t,n)=>{let r=!1;for(const o of Wi(e)){const e=zi(o,t,n);if(0!==e)return e;r=r||o.field.isKeyField()}return 0}}function zi(e,t,n){const r=e.field.isKeyField()?ao.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),o=n.data.field(e);return null!==r&&null!==o?Lo(r,o):Wr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Wr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eo(t)?"-0":t}}function $i(e){return{integerValue:""+e}}function Yi(e,t){return Oo(t)?$i(t):Ui(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this._=void 0}}function Gi(e,t,n){return e instanceof Xi?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Qi?ea(e,t):e instanceof ta?na(e,t):function(e,t){const n=Zi(e,t),r=oa(n)+oa(e.It);return Ko(n)&&Ko(e.It)?$i(r):Ui(e.Tt,r)}(e,t)}function Ji(e,t,n){return e instanceof Qi?ea(e,t):e instanceof ta?na(e,t):n}function Zi(e,t){return e instanceof ra?Ko(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Xi extends qi{}class Qi extends qi{constructor(e){super(),this.elements=e}}function ea(e,t){const n=ia(t);for(const r of e.elements)n.some((e=>Ro(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ta extends qi{constructor(e){super(),this.elements=e}}function na(e,t){let n=ia(t);for(const r of e.elements)n=n.filter((e=>!Ro(e,r)));return{arrayValue:{values:n}}}class ra extends qi{constructor(e,t){super(),this.Tt=e,this.It=t}}function oa(e){return Io(e.integerValue||e.doubleValue)}function ia(e){return zo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Qi&&t instanceof Qi||e instanceof ta&&t instanceof ta?Qr(e.elements,t.elements,Ro):e instanceof ra&&t instanceof ra?Ro(e.It,t.It):e instanceof Xi&&t instanceof Xi}(e.transform,t.transform)}class la{constructor(e,t){this.version=e,this.transformResults=t}}class ua{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ua}static exists(e){return new ua(void 0,e)}static updateTime(e){return new ua(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ca{}function da(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ca(e.key,ua.none()):new ma(e.key,e.data,ua.none());{const n=e.data,r=xi.empty();let o=new bi(io.comparator);for(let e of t.fields)if(!o.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),o=o.add(e)}return new ga(e.key,r,new Ci(o.toArray()),ua.none())}}function fa(e,t,n){e instanceof ma?function(e,t,n){const r=e.value.clone(),o=ba(e.fieldTransforms,t,n.transformResults);r.setAll(o),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ga?function(e,t,n){if(!sa(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ba(e.fieldTransforms,t,n.transformResults),o=t.data;o.setAll(ya(e)),o.setAll(r),t.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function va(e,t,n,r){return e instanceof ma?function(e,t,n,r){if(!sa(e.precondition,t))return n;const o=e.value.clone(),i=wa(e.fieldTransforms,r,t);return o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null}(e,t,n,r):e instanceof ga?function(e,t,n,r){if(!sa(e.precondition,t))return n;const o=wa(e.fieldTransforms,r,t),i=t.data;return i.setAll(ya(e)),i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return sa(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function pa(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),o=Zi(r.transform,e||null);null!=o&&(null===n&&(n=xi.empty()),n.set(r.field,o))}return n||null}function ha(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Qr(e,t,((e,t)=>aa(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ma extends ca{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ga extends ca{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ya(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ba(e,t,n){const r=new Map;Rr(e.length===n.length);for(let o=0;o<n.length;o++){const i=e[o],a=i.transform,l=t.data.field(i.field);r.set(i.field,Ji(a,l,n[o]))}return r}function wa(e,t,n){const r=new Map;for(const o of e){const e=o.transform,i=n.data.field(o.field);r.set(o.field,Gi(e,i,t))}return r}class Ca extends ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xa extends ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ka,Sa;function Ea(e){switch(e){default:return Wr();case Lr.CANCELLED:case Lr.UNKNOWN:case Lr.DEADLINE_EXCEEDED:case Lr.RESOURCE_EXHAUSTED:case Lr.INTERNAL:case Lr.UNAVAILABLE:case Lr.UNAUTHENTICATED:return!1;case Lr.INVALID_ARGUMENT:case Lr.NOT_FOUND:case Lr.ALREADY_EXISTS:case Lr.PERMISSION_DENIED:case Lr.FAILED_PRECONDITION:case Lr.ABORTED:case Lr.OUT_OF_RANGE:case Lr.UNIMPLEMENTED:case Lr.DATA_LOSS:return!0}}function Oa(e){if(void 0===e)return Nr("GRPC error has no .code"),Lr.UNKNOWN;switch(e){case ka.OK:return Lr.OK;case ka.CANCELLED:return Lr.CANCELLED;case ka.UNKNOWN:return Lr.UNKNOWN;case ka.DEADLINE_EXCEEDED:return Lr.DEADLINE_EXCEEDED;case ka.RESOURCE_EXHAUSTED:return Lr.RESOURCE_EXHAUSTED;case ka.INTERNAL:return Lr.INTERNAL;case ka.UNAVAILABLE:return Lr.UNAVAILABLE;case ka.UNAUTHENTICATED:return Lr.UNAUTHENTICATED;case ka.INVALID_ARGUMENT:return Lr.INVALID_ARGUMENT;case ka.NOT_FOUND:return Lr.NOT_FOUND;case ka.ALREADY_EXISTS:return Lr.ALREADY_EXISTS;case ka.PERMISSION_DENIED:return Lr.PERMISSION_DENIED;case ka.FAILED_PRECONDITION:return Lr.FAILED_PRECONDITION;case ka.ABORTED:return Lr.ABORTED;case ka.OUT_OF_RANGE:return Lr.OUT_OF_RANGE;case ka.UNIMPLEMENTED:return Lr.UNIMPLEMENTED;case ka.DATA_LOSS:return Lr.DATA_LOSS;default:return Wr()}}(Sa=ka||(ka={}))[Sa.OK=0]="OK",Sa[Sa.CANCELLED=1]="CANCELLED",Sa[Sa.UNKNOWN=2]="UNKNOWN",Sa[Sa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sa[Sa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sa[Sa.NOT_FOUND=5]="NOT_FOUND",Sa[Sa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sa[Sa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sa[Sa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sa[Sa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sa[Sa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sa[Sa.ABORTED=10]="ABORTED",Sa[Sa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sa[Sa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sa[Sa.INTERNAL=13]="INTERNAL",Sa[Sa.UNAVAILABLE=14]="UNAVAILABLE",Sa[Sa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,o]of n)if(this.equalsFn(r,e))return o}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xo(this.inner,((t,n)=>{for(const[r,o]of n)e(r,o)}))}isEmpty(){return ko(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new mi(ao.comparator);function Pa(){return Fa}const Aa=new mi(ao.comparator);function Ia(...e){let t=Aa;for(const n of e)t=t.insert(n.key,n);return t}function Ma(e){let t=Aa;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Na(){return _a()}function Da(){return _a()}function _a(){return new Ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Wa=new mi(ao.comparator),Ra=new bi(ao.comparator);function ja(...e){let t=Ra;for(const n of e)t=t.add(n);return t}const La=new bi(Xr);function Ba(){return La}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const e={and:"AND",or:"OR"}})();class Ha{constructor(e,t){this.databaseId=e,this.yt=t}}function Va(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ka(e,t){return e.yt?t.toBase64():t.toUint8Array()}function za(e,t){return Va(e,t.toTimestamp())}function Ua(e){return Rr(!!e),to.fromTimestamp(function(e){const t=Ao(e);return new eo(t.seconds,t.nanos)}(e))}function $a(e,t){return function(e){return new ro(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ya(e){const t=ro.fromString(e);return Rr(il(t)),t}function qa(e,t){return $a(e.databaseId,t.path)}function Ga(e){const t=Ya(e);return 4===t.length?ro.emptyPath():Za(t)}function Ja(e){return new ro(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Za(e){return Rr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Xa(e,t,n){return{name:qa(e,t),fields:n.value.mapValue.fields}}function Qa(e,t){let n;if(t instanceof ma)n={update:Xa(e,t.key,t.value)};else if(t instanceof Ca)n={delete:qa(e,t.key)};else if(t instanceof ga)n={update:Xa(e,t.key,t.data),updateMask:ol(t.fieldMask)};else{if(!(t instanceof xa))return Wr();n={verify:qa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Xi)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Qi)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ta)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ra)return{fieldPath:t.field.canonicalString(),increment:n.It};throw Wr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:za(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Wr()}(e,t.precondition)),n}function el(e,t){return e&&e.length>0?(Rr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ua(e.updateTime):Ua(t);return n.isEqual(to.min())&&(n=Ua(t)),new la(n,e.transformResults||[])}(e,t)))):[]}function tl(e){let t=Ga(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Rr(1===r);const e=n.from[0];e.allDescendants?o=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=nl(e);return t instanceof Qo&&ti(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>function(e){return new pi(rl(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let l=null;n.limit&&(l=function(e){let t;return t="object"==typeof e?e.value:e,So(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new qo(n,t)}(n.startAt));let s=null;return n.endAt&&(s=function(e){const t=!e.before,n=e.values||[];return new qo(n,t)}(n.endAt)),Ai(t,o,a,i,l,"F",u,s)}function nl(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=rl(e.unaryFilter.field);return Xo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=rl(e.unaryFilter.field);return Xo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=rl(e.unaryFilter.field);return Xo.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rl(e.unaryFilter.field);return Xo.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}(e):void 0!==e.fieldFilter?function(e){return Xo.create(rl(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Qo.create(e.compositeFilter.filters.map((e=>nl(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Wr()}}(e.compositeFilter.op))}(e):Wr()}function rl(e){return io.fromServerFormat(e.fieldPath)}function ol(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function il(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ll=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ul=ll;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&fa(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=va(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=va(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Da();return this.mutations.forEach((r=>{const o=e.get(r.key),i=o.overlayedDocument;let a=this.applyToLocalView(i,o.mutatedFields);a=t.has(r.key)?null:a;const l=da(i,a);null!==l&&n.set(r.key,l),i.isValidDocument()||i.convertToNoDocument(to.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ja())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,((e,t)=>ha(e,t)))&&Qr(this.baseMutations,e.baseMutations,((e,t)=>ha(e,t)))}}class cl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Rr(e.mutations.length===n.length);let r=Wa;const o=e.mutations;for(let i=0;i<o.length;i++)r=r.insert(o[i].key,n[i].version);return new cl(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.oe=e}}function vl(e){const t=tl({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ji(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(Io(e.integerValue));else if("doubleValue"in e){const n=Io(e.doubleValue);isNaN(n)?this.fe(t,13):(this.fe(t,15),Eo(n)?t.de(0):t.de(n))}else if("timestampValue"in e){const n=e.timestampValue;this.fe(t,20),"string"==typeof n?t._e(n):(t._e(`${n.seconds||""}`),t.de(n.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(Mo(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.fe(t,45),t.de(n.latitude||0),t.de(n.longitude||0)}else"mapValue"in e?Yo(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):Wr()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){const n=e.fields||{};this.fe(t,55);for(const r of Object.keys(n))this.we(r,t),this.he(n[r],t)}Ie(e,t){const n=e.values||[];this.fe(t,50);for(const r of n)this.he(r,t)}ye(e,t){this.fe(t,37),ao.fromName(e).path.forEach((e=>{this.fe(t,60),this.Te(e,t)}))}fe(e,t){e.de(t)}me(e){e.de(2)}}pl.Ee=new pl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(){this.Ze=new ml}addToCollectionParentIndex(e,t){return this.Ze.add(t),mo.resolve()}getCollectionParents(e,t){return mo.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return mo.resolve()}deleteFieldIndex(e,t){return mo.resolve()}getDocumentsMatchingTarget(e,t){return mo.resolve(null)}getIndexType(e,t){return mo.resolve(0)}getFieldIndexes(e,t){return mo.resolve([])}getNextCollectionGroupToUpdate(e){return mo.resolve(null)}getMinOffset(e,t){return mo.resolve(co.min())}getMinOffsetFromCollectionGroup(e,t){return mo.resolve(co.min())}updateCollectionGroup(e,t,n){return mo.resolve()}updateIndexEntries(e,t){return mo.resolve()}}class ml{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new bi(ro.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new bi(ro.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class gl{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new gl(e,gl.DEFAULT_COLLECTION_PERCENTILE,gl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gl.DEFAULT_COLLECTION_PERCENTILE=10,gl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gl.DEFAULT=new gl(41943040,gl.DEFAULT_COLLECTION_PERCENTILE,gl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gl.DISABLED=new gl(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new yl(0)}static Sn(){return new yl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{constructor(){this.changes=new Ta((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Si.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?mo.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&va(n.mutation,e,Ci.empty(),eo.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,ja()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=ja()){const r=Na();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Ia();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Na();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ja())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let o=Pa();const i=_a(),a=_a();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof ga)?o=o.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),va(a.mutation,t,a.mutation.getFieldMask(),eo.now())):i.set(t.key,Ci.empty())})),this.recalculateAndSaveOverlays(e,o).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new wl(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=_a();let r=new mi(((e,t)=>e-t)),o=ja();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const o of e)o.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let a=n.get(e)||Ci.empty();a=o.applyToLocalView(i,a),n.set(e,a);const l=(r.get(o.batchId)||ja()).add(e);r=r.insert(o.batchId,l)}))})).next((()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),l=r.key,u=r.value,s=Da();u.forEach((e=>{if(!o.has(e)){const r=da(t.get(e),n.get(e));null!==r&&s.set(e,r),o=o.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,l,s))}return mo.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ao.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_i(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((o=>{const i=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):mo.resolve(Na());let a=-1,l=o;return i.next((t=>mo.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),o.get(t)?mo.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{l=l.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,o))).next((()=>this.computeViews(e,l,t,ja()))).next((e=>({batchId:a,changes:Ma(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ao(t)).next((e=>{let t=Ia();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let o=Ia();return this.indexManager.getCollectionParents(e,r).next((i=>mo.forEach(i,(i=>{const a=function(e,t){return new Pi(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,a,n).next((e=>{e.forEach(((e,t)=>{o=o.insert(e,t)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Si.newInvalidDocument(r)))}));let n=Ia();return e.forEach(((e,o)=>{const i=r.get(e);void 0!==i&&va(i.mutation,o,Ci.empty(),eo.now()),Vi(t,o)&&(n=n.insert(e,o))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return mo.resolve(this.es.get(t))}saveBundleMetadata(e,t){var n;return this.es.set(t.id,{id:(n=t).id,version:n.version,createTime:Ua(n.createTime)}),mo.resolve()}getNamedQuery(e,t){return mo.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,function(e){return{name:e.name,query:vl(e.bundledQuery),readTime:Ua(e.readTime)}}(t)),mo.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.overlays=new mi(ao.comparator),this.ss=new Map}getOverlay(e,t){return mo.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Na();return mo.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ce(e,t,r)})),mo.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ss.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ss.delete(n)),mo.resolve()}getOverlaysForCollection(e,t,n){const r=Na(),o=t.length+1,i=new ao(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===o&&e.largestBatchId>n&&r.set(e.getKey(),e)}return mo.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new mi(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=o.get(e.largestBatchId);null===t&&(t=Na(),o=o.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Na(),l=o.getIterator();for(;l.hasNext();)if(l.getNext().value.forEach(((e,t)=>a.set(e,t))),a.size()>=r)break;return mo.resolve(a)}ce(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ss.get(r.largestBatchId).delete(n.key);this.ss.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new dl(t,n));let o=this.ss.get(t);void 0===o&&(o=ja(),this.ss.set(t,o)),this.ss.set(t,o.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.rs=new bi(El.os),this.us=new bi(El.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){const n=new El(e,t);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ls(new El(e,t))}fs(e,t){e.forEach((e=>this.removeReference(e,t)))}ds(e){const t=new ao(new ro([])),n=new El(t,e),r=new El(t,e+1),o=[];return this.us.forEachInRange([n,r],(e=>{this.ls(e),o.push(e.key)})),o}_s(){this.rs.forEach((e=>this.ls(e)))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const t=new ao(new ro([])),n=new El(t,e),r=new El(t,e+1);let o=ja();return this.us.forEachInRange([n,r],(e=>{o=o.add(e.key)})),o}containsKey(e){const t=new El(e,0),n=this.rs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class El{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return ao.comparator(e.key,t.key)||Xr(e.gs,t.gs)}static cs(e,t){return Xr(e.gs,t.gs)||ao.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new bi(El.os)}checkEmpty(e){return mo.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const o=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new sl(o,t,n,r);this.mutationQueue.push(i);for(const a of r)this.ps=this.ps.add(new El(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return mo.resolve(i)}lookupMutationBatch(e,t){return mo.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ts(n),o=r<0?0:r;return mo.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return mo.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(e){return mo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new El(t,0),r=new El(t,Number.POSITIVE_INFINITY),o=[];return this.ps.forEachInRange([n,r],(e=>{const t=this.Is(e.gs);o.push(t)})),mo.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new bi(Xr);return t.forEach((e=>{const t=new El(e,0),r=new El(e,Number.POSITIVE_INFINITY);this.ps.forEachInRange([t,r],(e=>{n=n.add(e.gs)}))})),mo.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;ao.isDocumentKey(o)||(o=o.child(""));const i=new El(new ao(o),0);let a=new bi(Xr);return this.ps.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.gs)),!0)}),i),mo.resolve(this.Es(a))}Es(e){const t=[];return e.forEach((e=>{const n=this.Is(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Rr(0===this.As(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ps;return mo.forEach(t.mutations,(r=>{const o=new El(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ps=n}))}bn(e){}containsKey(e,t){const n=new El(t,0),r=this.ps.firstAfterOrEqual(n);return mo.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,mo.resolve()}As(e,t){return this.Ts(e)}Ts(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Is(e){const t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.Rs=e,this.docs=new mi(ao.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,i=this.Rs(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return mo.resolve(n?n.document.mutableCopy():Si.newInvalidDocument(t))}getEntries(e,t){let n=Pa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Si.newInvalidDocument(e))})),mo.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=Pa();const i=t.path,a=new ao(i.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:e,value:{document:a}}=l.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||fo(so(a),n)<=0||(r.has(a.key)||Vi(t,a))&&(o=o.insert(a.key,a.mutableCopy()))}return mo.resolve(o)}getAllFromCollectionGroup(e,t,n,r){Wr()}bs(e,t){return mo.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Fl(this)}getSize(e){return mo.resolve(this.size)}}class Fl extends bl{constructor(e){super(),this.Xn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(n)})),mo.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.persistence=e,this.vs=new Ta((e=>Ti(e)),Fi),this.lastRemoteSnapshotVersion=to.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Sl,this.targetCount=0,this.Ss=yl.Vn()}forEachTarget(e,t){return this.vs.forEach(((e,n)=>t(n))),mo.resolve()}getLastRemoteSnapshotVersion(e){return mo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return mo.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),mo.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ps&&(this.Ps=t),mo.resolve()}xn(e){this.vs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ss=new yl(t),this.highestTargetId=t),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,mo.resolve()}updateTargetData(e,t){return this.xn(t),mo.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,mo.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.vs.forEach(((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.vs.delete(i),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),mo.waitFor(o).next((()=>r))}getTargetCount(e){return mo.resolve(this.targetCount)}getTargetData(e,t){const n=this.vs.get(t)||null;return mo.resolve(n)}addMatchingKeys(e,t,n){return this.Vs.hs(t,n),mo.resolve()}removeMatchingKeys(e,t,n){this.Vs.fs(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((t=>{o.push(r.markPotentiallyOrphaned(e,t))})),mo.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),mo.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Vs.ws(t);return mo.resolve(n)}containsKey(e,t){return mo.resolve(this.Vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.Ds={},this.overlays={},this.Cs=new yo(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Pl(this),this.indexManager=new hl,this.remoteDocumentCache=function(e){return new Tl(e)}((e=>this.referenceDelegate.ks(e))),this.Tt=new fl(t),this.Os=new xl(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ds[e.toKey()];return n||(n=new Ol(t,this.referenceDelegate),this.Ds[e.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,t,n){Mr("MemoryPersistence","Starting transaction:",e);const r=new Il(this.Cs.next());return this.referenceDelegate.Ms(),n(r).next((e=>this.referenceDelegate.Fs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}$s(e,t){return mo.or(Object.values(this.Ds).map((n=>()=>n.containsKey(e,t))))}}class Il extends po{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.Bs=new Sl,this.Ls=null}static qs(e){return new Ml(e)}get Us(){if(this.Ls)return this.Ls;throw Wr()}addReference(e,t,n){return this.Bs.addReference(n,t),this.Us.delete(n.toString()),mo.resolve()}removeReference(e,t,n){return this.Bs.removeReference(n,t),this.Us.add(n.toString()),mo.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),mo.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach((e=>this.Us.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Us.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ms(){this.Ls=new Set}Fs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mo.forEach(this.Us,(n=>{const r=ao.fromPath(n);return this.Ks(e,r).next((e=>{e||t.removeEntry(r,to.min())}))})).next((()=>(this.Ls=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ks(e,t).next((e=>{e?this.Us.delete(t.toString()):this.Us.add(t.toString())}))}ks(e){return 0}Ks(e,t){return mo.or([()=>mo.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.$s(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ci=n,this.xi=r}static Ni(e,t){let n=ja(),r=ja();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Nl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.ki=!1}initialize(e,t){this.Oi=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Mi(e,t).next((o=>o||this.Fi(e,t,r,n))).next((n=>n||this.$i(e,t)))}Mi(e,t){if(Mi(t))return mo.resolve(null);let n=Ri(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=ji(t,null,"F"),n=Ri(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const o=ja(...r);return this.Oi.getDocuments(e,o).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.Bi(t,r);return this.Li(t,i,o,n.readTime)?this.Mi(e,ji(t,null,"F")):this.qi(e,i,t,n)}))))})))))}Fi(e,t,n,r){return Mi(t)||r.isEqual(to.min())?this.$i(e,t):this.Oi.getDocuments(e,n).next((o=>{const i=this.Bi(t,o);return this.Li(t,i,n,r)?this.$i(e,t):(Ir()<=a["in"].DEBUG&&Mr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hi(t)),this.qi(e,i,t,uo(r,-1)))}))}Bi(e,t){let n=new bi(Ki(e));return t.forEach(((t,r)=>{Vi(e,r)&&(n=n.add(r))})),n}Li(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const o="F"===e.limitType?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}$i(e,t){return Ir()<=a["in"].DEBUG&&Mr("QueryEngine","Using full collection scan to execute query:",Hi(t)),this.Oi.getDocumentsMatchingQuery(e,t,co.min())}qi(e,t,n,r){return this.Oi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t,n,r){this.persistence=e,this.Ui=t,this.Tt=r,this.Ki=new mi(Xr),this.Gi=new Ta((e=>Ti(e)),Fi),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(n)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cl(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ki)))}}function Wl(e,t,n,r){return new _l(e,t,n,r)}async function Rl(e,t){const n=jr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((o=>(r=o,n.zi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const o=[],i=[];let a=ja();for(const e of r){o.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({Wi:e,removedBatchIds:o,addedBatchIds:i})))}))}))}function jl(e,t){const n=jr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),o=n.ji.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const o=n.batch,i=o.keys();let a=mo.resolve();return i.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Rr(null!==i),t.version.compareTo(i)<0&&(o.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,o)))}(n,e,t,o).next((()=>o.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ja();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Ll(e){const t=jr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ns.getLastRemoteSnapshotVersion(e)))}function Bl(e,t){const n=jr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}class Hl{constructor(){this.activeTargetIds=Ba()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vl{constructor(){this.Ur=new Hl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,n){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Hl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{Gr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){Mr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){Mr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,n,r,o){const i=this.fo(e,t);Mr("RestConnection","Sending: ",i,n);const a={};return this._o(a,r,o),this.wo(e,i,a,n).then((e=>(Mr("RestConnection","Received: ",e),e)),(t=>{throw Dr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}mo(e,t,n,r,o,i){return this.lo(e,t,n,r,o)}_o(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Pr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}fo(e,t){const n=Ul[e];return`${this.co}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,n,r){return new Promise(((o,i)=>{const a=new Or;a.setWithCredentials(!0),a.listenOnce(Cr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case wr.NO_ERROR:const t=a.getResponseJson();Mr("Connection","XHR received:",JSON.stringify(t)),o(t);break;case wr.TIMEOUT:Mr("Connection",'RPC "'+e+'" timed out'),i(new Br(Lr.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const n=a.getStatus();if(Mr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Lr).indexOf(t)>=0?t:Lr.UNKNOWN}(t.status);i(new Br(e,t.message))}else i(new Br(Lr.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new Br(Lr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{Mr("Connection",'RPC "'+e+'" completed.')}}));const l=JSON.stringify(r);a.send(t,"POST",l,n,15)}))}yo(e,t,n){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yr(),i=br(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Sr({})),this._o(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Mr("Connection","Creating WebChannel: "+l,a);const u=o.createWebChannel(l,a);let s=!1,c=!1;const d=new $l({Yr:e=>{c?Mr("Connection","Not sending because WebChannel is closed:",e):(s||(Mr("Connection","Opening WebChannel transport."),u.open(),s=!0),Mr("Connection","WebChannel sending:",e),u.send(e))},Zr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Er.EventType.OPEN,(()=>{c||Mr("Connection","WebChannel transport opened.")})),f(u,Er.EventType.CLOSE,(()=>{c||(c=!0,Mr("Connection","WebChannel transport closed"),d.oo())})),f(u,Er.EventType.ERROR,(e=>{c||(c=!0,Dr("Connection","WebChannel transport errored:",e),d.oo(new Br(Lr.UNAVAILABLE,"The operation could not be completed")))})),f(u,Er.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];Rr(!!n);const r=n,o=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(o){Mr("Connection","WebChannel received error:",o);const e=o.status;let t=function(e){const t=ka[e];if(void 0!==t)return Oa(t)}(e),n=o.message;void 0===t&&(t=Lr.INTERNAL,n="Unknown error status: "+e+" with message "+o.message),c=!0,d.oo(new Br(t,n)),u.close()}else Mr("Connection","WebChannel received:",n),d.uo(n)}})),f(i,xr.STAT_EVENT,(e=>{e.stat===kr.PROXY?Mr("Connection","Detected buffering proxy"):e.stat===kr.NOPROXY&&Mr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.ro()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(e){return new Ha(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,n=1e3,r=1.5,o=6e4){this.Ys=e,this.timerId=t,this.po=n,this.Io=r,this.To=o,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const t=Math.floor(this.Eo+this.Po()),n=Math.max(0,Date.now()-this.Ro),r=Math.max(0,t-n);r>0&&Mr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,(()=>(this.Ro=Date.now(),e()))),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,n,r,o,i,a,l){this.Ys=e,this.So=n,this.Do=r,this.connection=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Jl(e,t)}Oo(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,(()=>this.Lo())))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==e?this.ko.reset():t&&t.code===Lr.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):t&&t.code===Lr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Co===t&&this.jo(e,n)}),(t=>{e((()=>{const e=new Br(Lr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.zo(e)}))}))}jo(e,t){const n=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr((()=>{n((()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.no((e=>{n((()=>this.zo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Fo(){this.state=5,this.ko.vo((async()=>{this.state=0,this.start()}))}zo(e){return Mr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget((()=>this.Co===e?t():(Mr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xl extends Zl{constructor(e,t,n,r,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.Tt=o,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(Rr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const t=el(e.writeResults,e.commitTime),n=Ua(e.commitTime);return this.listener.eu(n,t)}return Rr(!e.writeResults||0===e.writeResults.length),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Ja(this.Tt),this.qo(e)}tu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Qa(this.Tt,e)))};this.qo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new Br(Lr.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.lo(e,t,n,r,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Lr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br(Lr.UNKNOWN,e.toString())}))}mo(e,t,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.mo(e,t,n,o,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Lr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Br(Lr.UNKNOWN,e.toString())}))}terminate(){this.iu=!0}}class eu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve()))))}fu(e){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,"Online"===e&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Nr(t),this.cu=!1):Mr("OnlineStateTracker",t)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=o,this.yu.Gr((e=>{n.enqueueAndForget((async()=>{ou(this)&&(Mr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=jr(e);t.mu.add(4),await ru(t),t.pu.set("Unknown"),t.mu.delete(4),await nu(t)}(this))}))})),this.pu=new eu(n,r)}}async function nu(e){if(ou(e))for(const t of e.gu)await t(!0)}async function ru(e){for(const t of e.gu)await t(!1)}function ou(e){return 0===jr(e).mu.size}async function iu(e,t,n){if(!go(t))throw t;e.mu.add(1),await ru(e),e.pu.set("Offline"),n||(n=()=>Ll(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Mr("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await nu(e)}))}function au(e,t){return t().catch((n=>iu(e,n,t)))}async function lu(e){const t=jr(e),n=yu(t);let r=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;uu(t);)try{const e=await Bl(t.localStore,r);if(null===e){0===t._u.length&&n.Bo();break}r=e.batchId,su(t,e)}catch(e){await iu(t,e)}cu(t)&&du(t)}function uu(e){return ou(e)&&e._u.length<10}function su(e,t){e._u.push(t);const n=yu(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function cu(e){return ou(e)&&!yu(e).Oo()&&e._u.length>0}function du(e){yu(e).start()}async function fu(e){yu(e).su()}async function vu(e){const t=yu(e);for(const n of e._u)t.tu(n.mutations)}async function pu(e,t,n){const r=e._u.shift(),o=cl.from(r,t,n);await au(e,(()=>e.remoteSyncer.applySuccessfulWrite(o))),await lu(e)}async function hu(e,t){t&&yu(e).Xo&&await async function(e,t){if(n=t.code,Ea(n)&&n!==Lr.ABORTED){const n=e._u.shift();yu(e).$o(),await au(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await lu(e)}var n}(e,t),cu(e)&&du(e)}async function mu(e,t){const n=jr(e);n.asyncQueue.verifyOperationInProgress(),Mr("RemoteStore","RemoteStore received new credentials");const r=ou(n);n.mu.add(3),await ru(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await nu(n)}async function gu(e,t){const n=jr(e);t?(n.mu.delete(2),await nu(n)):t||(n.mu.add(2),await ru(n),n.pu.set("Unknown"))}function yu(e){return e.Eu||(e.Eu=function(e,t,n){const r=jr(e);return r.ru(),new Xl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,n)}(e.datastore,e.asyncQueue,{Xr:fu.bind(null,e),no:hu.bind(null,e),nu:vu.bind(null,e),eu:pu.bind(null,e)}),e.gu.push((async t=>{t?(e.Eu.$o(),await lu(e)):(await e.Eu.stop(),e._u.length>0&&(Mr("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))}))),e.Eu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class bu{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,o){const i=Date.now()+n,a=new bu(e,t,i,r,o);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Br(Lr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(e,t){if(Nr("AsyncQueue",`${t}: ${e}`),go(e))return new Br(Lr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.queries=new Ta((e=>Bi(e)),Li),this.onlineState="Unknown",this.vu=new Set}}function xu(e){e.vu.forEach((e=>{e.next()}))}class ku{constructor(e,t,n,r,o,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.rc={},this.oc=new Ta((e=>Bi(e)),Li),this.uc=new Map,this.cc=new Set,this.ac=new mi(ao.comparator),this.hc=new Map,this.lc=new Sl,this.fc={},this.dc=new Map,this._c=yl.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function Su(e,t,n){const r=Mu(e);try{const e=await function(e,t){const n=jr(e),r=eo.now(),o=t.reduce(((e,t)=>e.add(t.key)),ja());let i,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let l=Pa(),u=ja();return n.ji.getEntries(e,o).next((e=>{l=e,l.forEach(((e,t)=>{t.isValidDocument()||(u=u.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,l))).next((o=>{i=o;const a=[];for(const e of t){const t=pa(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new ga(e.key,t,ki(t.value.mapValue),ua.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:Ma(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.fc[e.currentUser.toKey()];r||(r=new mi(Xr)),r=r.insert(t,n),e.fc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Au(r,e.changes),await lu(r.remoteStore)}catch(e){const t=wu(e,"Failed to persist write");n.reject(t)}}function Eu(e,t,n){const r=jr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.oc.forEach(((n,r)=>{const o=r.view.Pu(t);o.snapshot&&e.push(o.snapshot)})),function(e,t){const n=jr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const o of n.listeners)o.Pu(t)&&(r=!0)})),r&&xu(n)}(r.eventManager,t),e.length&&r.rc.Ho(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ou(e,t){const n=jr(e),r=t.batch.batchId;try{const e=await jl(n.localStore,t);Pu(n,r,null),Fu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Au(n,e)}catch(e){await ho(e)}}async function Tu(e,t,n){const r=jr(e);try{const e=await function(e,t){const n=jr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Rr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Pu(r,t,n),Fu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Au(r,e)}catch(n){await ho(n)}}function Fu(e,t){(e.dc.get(t)||[]).forEach((e=>{e.resolve()})),e.dc.delete(t)}function Pu(e,t,n){const r=jr(e);let o=r.fc[r.currentUser.toKey()];if(o){const e=o.get(t);e&&(n?e.reject(n):e.resolve(),o=o.remove(t)),r.fc[r.currentUser.toKey()]=o}}async function Au(e,t,n){const r=jr(e),o=[],i=[],a=[];r.oc.isEmpty()||(r.oc.forEach(((e,l)=>{a.push(r.mc(l,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){o.push(e);const t=Nl.Ni(l.targetId,e);i.push(t)}})))})),await Promise.all(a),r.rc.Ho(o),await async function(e,t){const n=jr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>mo.forEach(t,(t=>mo.forEach(t.Ci,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>mo.forEach(t.xi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!go(e))throw e;Mr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ki.get(e),r=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(r);n.Ki=n.Ki.insert(e,o)}}}(r.localStore,i))}async function Iu(e,t){const n=jr(e);if(!n.currentUser.isEqual(t)){Mr("SyncEngine","User change. New user:",t.toKey());const e=await Rl(n.localStore,t);n.currentUser=t,function(e,t){e.dc.forEach((e=>{e.forEach((e=>{e.reject(new Br(Lr.CANCELLED,t))}))})),e.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Au(n,e.Wi)}}function Mu(e){const t=jr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ou.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Tu.bind(null,t),t}class Nu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){return Wl(this.persistence,new Dl,e.initialUser,this.Tt)}Tc(e){return new Al(Ml.qs,this.Tt)}Ic(e){return new Vl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Du{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Eu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Iu.bind(null,this.syncEngine),await gu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Cu}createDatastore(e){const t=Gl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Yl(r));var r;return function(e,t,n,r){return new Ql(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,o=e=>Eu(this.syncEngine,e,0),i=zl.C()?new zl:new Kl,new tu(t,n,r,o,i);var t,n,r,o,i}createSyncEngine(e,t){return function(e,t,n,r,o,i,a){const l=new ku(e,t,n,r,o,i);return a&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=jr(e);Mr("RemoteStore","RemoteStore shutting down."),t.mu.add(5),await ru(t),t.yu.shutdown(),t.pu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _u{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Fr.UNAUTHENTICATED,this.clientId=Zr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Mr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Mr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Br(Lr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=wu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wu(e,t){e.asyncQueue.verifyOperationInProgress(),Mr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Rl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Ru(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ju(e);Mr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>mu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>mu(t.remoteStore,n))),e.onlineComponents=t}async function ju(e){return e.offlineComponents||(Mr("FirestoreClient","Using default OfflineComponentProvider"),await Wu(e,new Nu)),e.offlineComponents}async function Lu(e){return e.onlineComponents||(Mr("FirestoreClient","Using default OnlineComponentProvider"),await Ru(e,new Du)),e.onlineComponents}function Bu(e){return Lu(e).then((e=>e.syncEngine))}const Hu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e,t,n){if(!n)throw new Br(Lr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ku(e,t,n,r){if(!0===t&&!0===r)throw new Br(Lr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function zu(e){if(!ao.isDocumentKey(e))throw new Br(Lr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Uu(e){if(ao.isDocumentKey(e))throw new Br(Lr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function $u(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Wr()}function Yu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Br(Lr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$u(e);throw new Br(Lr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Br(Lr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Br(Lr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ku("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Br(Lr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Br(Lr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Kr;switch(e.type){case"gapi":const t=e.client;return new Yr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Br(Lr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Hu.get(e);t&&(Mr("ComponentProvider","Removing Datastore"),Hu.delete(e),t.terminate())}(this),Promise.resolve()}}function Ju(e,t,n,r={}){var o;const i=(e=Yu(e,Gu))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Dr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Fr.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(o=e._app)||void 0===o?void 0:o.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Br(Lr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Fr(i)}e._authCredentials=new zr(new Vr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zu(this.firestore,e,this._key)}}class Xu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Xu(this.firestore,e,this._query)}}class Qu extends Xu{constructor(e,t,n){super(e,t,Ii(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zu(this.firestore,null,new ao(e))}withConverter(e){return new Qu(this.firestore,e,this._path)}}function es(e,t,...n){if(e=(0,l.m9)(e),Vu("collection","path",t),e instanceof Gu){const r=ro.fromString(t,...n);return Uu(r),new Qu(e,null,r)}{if(!(e instanceof Zu||e instanceof Qu))throw new Br(Lr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ro.fromString(t,...n));return Uu(r),new Qu(e.firestore,null,r)}}function ts(e,t,...n){if(e=(0,l.m9)(e),1===arguments.length&&(t=Zr.R()),Vu("doc","path",t),e instanceof Gu){const r=ro.fromString(t,...n);return zu(r),new Zu(e,null,new ao(r))}{if(!(e instanceof Zu||e instanceof Qu))throw new Br(Lr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ro.fromString(t,...n));return zu(r),new Zu(e.firestore,e instanceof Qu?e.converter:null,new ao(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Jl(this,"async_queue_retry"),this.Hc=()=>{const e=ql();e&&Mr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};const e=ql();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=ql();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise((()=>{}));const t=new Hr;return this.Yc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Uc.push(e),this.Zc())))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(x){if(!go(x))throw x;Mr("AsyncQueue","Operation failed with retryable error: "+x)}this.Uc.length>0&&this.ko.vo((()=>this.Zc()))}}Yc(e){const t=this.qc.then((()=>(this.jc=!0,e().catch((e=>{this.Qc=e,this.jc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Nr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.jc=!1,e))))));return this.qc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);const r=bu.createAndSchedule(this,e,t,n,(e=>this.Xc(e)));return this.Gc.push(r),r}Jc(){this.Qc&&Wr()}verifyOperationInProgress(){}async ta(){let e;do{e=this.qc,await e}while(e!==this.qc)}ea(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then((()=>{this.Gc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Gc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()}))}sa(e){this.Wc.push(e)}Xc(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}class rs extends Gu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ns,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||as(this),this._firestoreClient.terminate()}}function os(e,t){const n="object"==typeof e?e:(0,o.Mq)(),r="string"==typeof e?e:t||"(default)",i=(0,o.qX)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,l.P0)("firestore");e&&Ju(i,...e)}return i}function is(e){return e._firestoreClient||as(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function as(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new bo(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new _u(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(Fo.fromBase64String(e))}catch(e){throw new Br(Lr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ls(Fo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Br(Lr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new io(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Br(Lr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Br(Lr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xr(this._lat,e._lat)||Xr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=/^__.*__$/;class fs{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ga(e,this.data,this.fieldMask,t,this.fieldTransforms):new ma(e,this.data,t,this.fieldTransforms)}}function vs(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class ps{constructor(e,t,n,r,o,i){this.settings=e,this.databaseId=t,this.Tt=n,this.ignoreUndefinedProperties=r,void 0===o&&this.ia(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new ps(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.aa(e),r}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.oa({path:n,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Es(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(0===e.length)throw this.fa("Document fields must not be empty");if(vs(this.ra)&&ds.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class hs{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=n||Gl(e)}wa(e,t,n,r=!1){return new ps({ra:e,methodName:t,_a:n,path:io.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function ms(e){const t=e._freezeSettings(),n=Gl(e._databaseId);return new hs(e._databaseId,!!t.ignoreUndefinedProperties,n)}function gs(e,t,n,r,o,i={}){const a=e.wa(i.merge||i.mergeFields?2:0,t,n,o);Cs("Data must be an object, but it was:",a,r);const l=bs(r,a);let u,s;if(i.merge)u=new Ci(a.fieldMask),s=a.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const o=xs(t,r,n);if(!a.contains(o))throw new Br(Lr.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);Os(e,o)||e.push(o)}u=new Ci(e),s=a.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,s=a.fieldTransforms;return new fs(new xi(l),u,s)}function ys(e,t){if(ws(e=(0,l.m9)(e)))return Cs("Unsupported field value:",t,e),bs(e,t);if(e instanceof ss)return function(e,t){if(!vs(t.ra))throw t.fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&4!==t.ra)throw t.fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const o of e){let e=ys(o,t.la(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Yi(t.Tt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=eo.fromDate(e);return{timestampValue:Va(t.Tt,n)}}if(e instanceof eo){const n=new eo(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Va(t.Tt,n)}}if(e instanceof cs)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ls)return{bytesValue:Ka(t.Tt,e._byteString)};if(e instanceof Zu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$a(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.fa(`Unsupported field value: ${$u(e)}`)}(e,t)}function bs(e,t){const n={};return ko(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xo(e,((e,r)=>{const o=ys(r,t.ua(e));null!=o&&(n[e]=o)})),{mapValue:{fields:n}}}function ws(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof eo||e instanceof cs||e instanceof ls||e instanceof Zu||e instanceof ss)}function Cs(e,t,n){if(!ws(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=$u(n);throw"an object"===r?t.fa(e+" a custom object"):t.fa(e+" "+r)}}function xs(e,t,n){if((t=(0,l.m9)(t))instanceof us)return t._internalPath;if("string"==typeof t)return Ss(e,t);throw Es("Field path arguments must be of type string or ",e,!1,void 0,n)}const ks=new RegExp("[~\\*/\\[\\]]");function Ss(e,t,n){if(t.search(ks)>=0)throw Es(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new us(...t.split("."))._internalPath}catch(r){throw Es(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Es(e,t,n,r,o){const i=r&&!r.isEmpty(),a=void 0!==o;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${o}`),u+=")"),new Br(Lr.INVALID_ARGUMENT,l+e+u)}function Os(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ts(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function Fs(e,t){const n=Yu(e.firestore,rs),r=ts(e),o=Ts(e.converter,t);return Ps(n,[gs(ms(e.firestore),"addDoc",r._key,o,null!==e.converter,{}).toMutation(r._key,ua.exists(!1))]).then((()=>r))}function Ps(e,t){return function(e,t){const n=new Hr;return e.asyncQueue.enqueueAndForget((async()=>Su(await Bu(e),t,n))),n.promise}(is(e),t)}!function(e,t=!0){!function(e){Pr=e}(o.Jn),(0,o.Xd)(new i.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const o=e.getProvider("app").getImmediate(),i=new rs(new Ur(e.getProvider("auth-internal")),new Gr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Br(Lr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(e.options.projectId,t)}(o,n),o);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(Tr,"3.8.4",e),(0,o.KN)(Tr,"3.8.4","esm2017")}()}}]);
//# sourceMappingURL=chunk-vendors.1cee7e81.js.map