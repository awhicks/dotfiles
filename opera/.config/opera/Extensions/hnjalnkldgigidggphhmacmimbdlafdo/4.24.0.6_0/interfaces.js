Interfaces=function(){var t=function(t,n){this.type=t,this.options=n,this.options&&(this.options.include&&(this.options.include=[].concat(this.options.include)),this.options.exclude&&(this.options.exclude=[].concat(this.options.exclude)))},n=function(t,n){n=[].concat(n);for(i=0;i<n.length;++i)for(j=0;j<t.length;++j)if(t[j]===n[i])return!0;return!1};t.prototype.requiredBy=function(t){if(t&&this.options){if(this.options.include)return n(this.options.include,t);if(this.options.exclude)return!n(this.options.include,t)}return!0},t.prototype.isSyncronized=function(){return this.options&&!0===this.options.sync},t.prototype.isSyncronousFunction=function(){return this.type===Interfaces.TYPE_SYNC_FUNCTION},t.prototype.isFunction=function(){return this.type===Interfaces.TYPE_FUNCTION||this.type===Interfaces.TYPE_SYNC_FUNCTION},t.prototype.isConstructor=function(){return this.type===Interfaces.TYPE_CONSTRUCTOR},t.prototype.isPrimitive=function(){return!this.isFunction()&&!this.isConstructor()},t.prototype.shouldSendIndirect=function(){return this.isPrimitive()?!this.options||void 0===this.options.sendIndirect||this.options.sendIndirect:this.options&&!0===this.options.sendIndirect},t.prototype.allowWrite=function(){return this.options&&!0===this.options.write},t.prototype.addIncludes=function(t){this.options=this.options||{},this.options.include=this.options.include.concat(t)};var o,e,r,c,s,u,f,a=(o=function(t,n,o,i){return function(){var e=arguments;if(i.cloneObjects&&!t.isSyncronousFunction()){var r=function(t){return"function"==typeof t?function(){var n=c(Array.from(arguments));t.apply(null,n)}:t},c=function(t){return t?(Array.isArray(t)?(n=[],t.forEach(function(t){"object"==typeof t?n.push(c(t)):n.push(r(t))})):(n={},Object.keys(t).forEach(function(o){t[o]&&"object"==typeof t[o]?n[o]=c(t[o]):n[o]=r(t[o])})),r(n)):null;var n};e=Array.prototype.map.call(e,function(t){return"object"==typeof t?c(t):r(t)})}return o.apply(n,e)}},e=function(t,n,o){if("function"==typeof o.requestFunction)return function(){for(var i=[],e=0,r=arguments.length;e<r;++e)i.push(arguments[e]);return o.requestFunction({cmd:t.length>0?t.concat(n):n,args:i})};throw"requestFunction must be specified for this interface since it is not direct access."},r=function(t,n,o){return function(){"function"==typeof n&&n.apply(t,arguments),"function"==typeof o&&o.apply(t,arguments)}},c=function(n,i,s,u,f,a){var p,h,l,y,d,v,F,P=!1,T=[];for(var I in u){var O=u[I];O instanceof t?O.isFunction()?!O.requiredBy(a.context)||O.isSyncronousFunction()&&a.asyncOnly||(a.direct||O.isSyncronousFunction()?i&&"function"==typeof i[I]?(n[I]=o(O,i,i[I],a),!a.direct&&O.shouldSendIndirect()&&(n[I]=r(n,n[I],e(f,I,a)))):T.push(O.type+": "+f.concat(I).join(".")):n[I]=e(f,I,a)):O.isConstructor()?O.requiredBy(a.context)&&!a.asyncOnly&&(i&&"function"==typeof i[I]?n[I]=i[I]:T.push(O.type+": "+f.concat(I).join("."))):P=!0:(n.hasOwnProperty(I)||(n[I]={}),c(n[I],i?i[I]:i,s?s[I]:s,u[I],f.concat(I),a))}if(P&&(n.get=(v=s,F=u,function(t){if(F.hasOwnProperty(t))return v[t];throw t+" is not defined in the interface."}),n.set=(p=s,h=u,l=f,d=function(t,n,o){if(!t.allowWrite())throw l.concat(n)+" is not writeable.";if(!t||typeof o!==t.type)throw n+" is not defined in the interface.";p[n]=o},(y=a).direct?function(t,n){var o=h[t];d(o,t,n)}:function(t,n){var o=h[t];d(o,t,n),o.shouldSendIndirect()&&y.requestFunction({cmd:"LPData.setValue",args:[l.concat(t),n]})})),T.length>0&&a.checkMissing)throw"Background instance does not support the following:\n"+T.join("\n");return n},function(t,n){return c(n.instance||{},n.source||n.sourceFunctions,n.source||n.sourceData,t,[],n)}),p=(s={},u={},f=function(n,o,i,e){var r=[];for(var c in n){var s=e?e.concat(c):[c],u=n[c];u instanceof t?u.isPrimitive()&&u.requiredBy(o)&&(!i||u.isSyncronized())&&r.push({sourceFunction:u.options&&u.options.sourceFunction,path:s}):r=r.concat(f(u,o,i,s))}return r},function(t,n){var o=[];t=[].concat(t);for(var i=0;i<t.length;++i){var e,r=t[i];n.syncronizedOnly?void 0===(e=u[r])&&(e=u[r]=f(n.interface,r,!0)):void 0===(e=s[r])&&(e=s[r]=f(n.interface,r,!1)),o=o.concat(e)}return o});return{TYPE_CONSTRUCTOR:"contsructor",TYPE_SYNC_FUNCTION:"synchronous function",TYPE_FUNCTION:"function",TYPE_STRING:"string",TYPE_BOOLEAN:"boolean",TYPE_NUMBER:"number",TYPE_OBJECT:"object",Definition:t,extend:function(t,n){for(var o in n){var i=n[o];switch(typeof i){case"object":t.hasOwnProperty(o)?Interfaces.extend(t[o],i):t[o]=i;break;default:t[o]=i}}},createInstance:a,getPrimitives:function(t){var n={};if(t.context)for(var o=p(t.context,t),i=0,e=o.length;i<e;++i){var r,c=o[i];r=c.sourceFunction?"function"==typeof c.sourceFunction?c.sourceFunction():LPReflection.callFunction(null,c.sourceFunction,[],{context:t.source}):LPReflection.getValue(t.interface,c.path,{context:t.source}),LPReflection.setValue(null,c.path,r,{context:n})}return n},clearPrimitives:function(t){if(t.context)for(var n=p(t.context,t),o=0;o<n.length;++o)LPReflection.setValue(null,n[o].path,null,{context:t.source})},getName:function(t){for(var n in this)if(t===this[n])return n;throw new Error("Could not find interface name.")}}}();
//# sourceMappingURL=sourcemaps/interfaces.js.map
