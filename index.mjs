// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-accessor@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-write-accessor@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-next-tick@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";function j(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})})),t}var v="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function y(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}var w=y,x=_;function T(e){if(w===setTimeout)return setTimeout(e,0);if((w===y||!w)&&setTimeout)return w=setTimeout,setTimeout(e,0);try{return w(e,0)}catch(t){try{return w.call(null,e,0)}catch(t){return w.call(this,e,0)}}}"function"==typeof v.setTimeout&&(w=setTimeout),"function"==typeof v.clearTimeout&&(x=clearTimeout);var M,E=[],O=!1,P=-1;function k(){O&&M&&(O=!1,M.length?E=M.concat(E):P=-1,E.length&&L())}function L(){if(!O){var e=T(k);O=!0;for(var t=E.length;t;){for(M=E,E=[];++P<t;)M&&M[P].run();P=-1,t=E.length}M=null,O=!1,function(e){if(x===clearTimeout)return clearTimeout(e);if((x===_||!x)&&clearTimeout)return x=clearTimeout,clearTimeout(e);try{x(e)}catch(t){try{return x.call(null,e)}catch(t){return x.call(this,e)}}}(e)}}function R(e,t){this.fun=e,this.array=t}R.prototype.run=function(){this.fun.apply(null,this.array)};function W(){}var q=W,D=W,N=W,S=W,A=W,z=W,G=W;var V=v.performance||{},C=V.now||V.mozNow||V.msNow||V.oNow||V.webkitNow||function(){return(new Date).getTime()};var J=new Date;var B={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];E.push(new R(e,t)),1!==E.length||O||T(L)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:q,addListener:D,once:N,off:S,removeListener:A,removeAllListeners:z,emit:G,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*C.call(V),r=Math.floor(t),i=Math.floor(t%1*1e9);return e&&(r-=e[0],(i-=e[1])<0&&(r--,i+=1e9)),[r,i]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-J)/1e3}},F=require("stream");"disable"===B.env.READABLE_STREAM&&F?(module.exports=F,exports=module.exports=F.Readable,exports.Readable=F.Readable,exports.Writable=F.Writable,exports.Duplex=F.Duplex,exports.Transform=F.Transform,exports.PassThrough=F.PassThrough,exports.Stream=F):(exports=module.exports=require("./lib/_stream_readable.js"),exports.Stream=F||exports,exports.Readable=exports,exports.Writable=require("./lib/_stream_writable.js"),exports.Duplex=require("./lib/_stream_duplex.js"),exports.Transform=require("./lib/_stream_transform.js"),exports.PassThrough=require("./lib/_stream_passthrough.js"));var I=j(Object.freeze({__proto__:null})),H={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308,name:"improved-ziggurat"},K=l,Q=u,U=m.isPrimitive,X=h.isPrimitive,Y=c.isPrimitive,Z=f.isPrimitive,$=g.isPrimitive,ee=b;var te=function(e,t){return K(t)?Q(t,"sep")&&(e.sep=t.sep,!Y(e.sep))?new TypeError(ee("invalid option. `%s` option must be a primitive string. Option: `%s`.","sep",e.sep)):Q(t,"objectMode")&&(e.objectMode=t.objectMode,!U(e.objectMode))?new TypeError(ee("invalid option. `%s` option must be a primitive boolean. Option: `%s`.","objectMode",e.objectMode)):Q(t,"encoding")&&(e.encoding=t.encoding,!Y(e.encoding)&&null!==e.encoding)?new TypeError(ee("invalid option. `%s` option must be a primitive string or null. Option: `%s`.","encoding",e.encoding)):Q(t,"highWaterMark")&&(e.highWaterMark=t.highWaterMark,!X(e.highWaterMark))?new TypeError(ee("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","highWaterMark",e.highWaterMark)):Q(t,"iter")&&(e.iter=t.iter,!$(e.iter))?new TypeError(ee("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):Q(t,"siter")&&(e.siter=t.siter,!Z(e.siter))?new TypeError(ee("invalid option. `%s` option must be a positive integer. Option: `%s`.","siter",e.siter)):(Q(t,"name")&&(e.name=t.name),Q(t,"prng")&&(e.prng=t.prng),Q(t,"seed")&&(e.seed=t.seed),Q(t,"state")&&(e.state=t.state),Q(t,"copy")&&(e.copy=t.copy),null):new TypeError(ee("invalid argument. Options must be an object. Value: `%s`.",t))};module.exports=void 0!==B&&"renderer"===B.type?require("./browser.js"):require("./node.js");var re=j(Object.freeze({__proto__:null}))("random:streams:randn"),ie=I.Readable,ne=t,se=r,oe=i,ae=n,de=e,pe=s,le=o,ue=a.factory,me=d,he=p,ce=H,fe=te,ge=re;function be(e){var t,r;if(!(this instanceof be))return arguments.length>0?new be(e):new be;if(t=se(ce),arguments.length>0&&(r=fe(t,e)))throw r;return ge("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),ie.call(this,t),ae(this,"_destroyed",!1),de(this,"_objectMode",t.objectMode),de(this,"_sep",t.sep),de(this,"_iter",t.iter),de(this,"_siter",t.siter),ae(this,"_i",0),de(this,"_prng",ue(t)),de(this,"PRNG",this._prng.PRNG),this}oe(be,ie),pe(be.prototype,"seed",(function(){return this._prng.seed})),pe(be.prototype,"seedLength",(function(){return this._prng.seedLength})),le(be.prototype,"state",(function(){return this._prng.state}),(function(e){this._prng.state=e})),pe(be.prototype,"stateLength",(function(){return this._prng.stateLength})),pe(be.prototype,"byteLength",(function(){return this._prng.byteLength})),de(be.prototype,"_read",(function(){var e,t;if(!this._destroyed)for(e=!0;e;){if(this._i+=1,this._i>this._iter)return ge("Finished generating pseudorandom numbers."),this.push(null);t=this._prng(),ge("Generated a new pseudorandom number. Value: %d. Iter: %d.",t,this._i),!1===this._objectMode&&(t=t.toString(),t=1===this._i?me(t):me(this._sep+t)),e=this.push(t),this._i%this._siter==0&&this.emit("state",this.state)}})),de(be.prototype,"destroy",(function(e){var t;return this._destroyed?(ge("Attempted to destroy an already destroyed stream."),this):(t=this,this._destroyed=!0,he((function(){e&&(ge("Stream was destroyed due to an error. Error: %s.",ne(e)?e.message:JSON.stringify(e)),t.emit("error",e));ge("Closing the stream..."),t.emit("close")})),this)}));var je=l,ve=r,ye=b,_e=be;var we=r,xe=be;var Te=e,Me=be,Ee=function(e){var t;if(arguments.length>0){if(!je(t=e))throw new TypeError(ye("invalid argument. Options must be an object. Value: `%s`.",t));t=ve(e,1)}else t={};return t.objectMode=!0,new _e(t)},Oe=function(e){var t;return t=arguments.length>0?we(e,1):{},r;function r(){return new xe(t)}};Te(Me,"objectMode",Ee),Te(Me,"factory",Oe);var Pe=Me;export{Pe as default,Oe as factory,Ee as objectMode};
//# sourceMappingURL=index.mjs.map