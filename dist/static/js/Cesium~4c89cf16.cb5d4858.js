(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~4c89cf16"],{"01c0":function(t,e,i){"use strict";var a=i("535a"),r=i("7d62"),s=i("ddf7"),o=i("9fef");function n(t){t=Object(a["a"])(t,a["a"].EMPTY_OBJECT);var e=Object(o["a"])(t.container);this._container=e;var i=document.createElement("div");i.className="cesium-performanceDisplay";var r=document.createElement("div");r.className="cesium-performanceDisplay-fps",this._fpsText=document.createTextNode(""),r.appendChild(this._fpsText);var n=document.createElement("div");n.className="cesium-performanceDisplay-ms",this._msText=document.createTextNode(""),n.appendChild(this._msText),i.appendChild(n),i.appendChild(r),this._container.appendChild(i),this._lastFpsSampleTime=Object(s["a"])(),this._lastMsSampleTime=Object(s["a"])(),this._fpsFrameCount=0,this._msFrameCount=0,this._throttled=!1;var m=document.createElement("div");m.className="cesium-performanceDisplay-throttled",this._throttledText=document.createTextNode(""),m.appendChild(this._throttledText),i.appendChild(m)}Object.defineProperties(n.prototype,{throttled:{get:function(){return this._throttled},set:function(t){this._throttled!==t&&(this._throttledText.nodeValue=t?"(throttled)":"",this._throttled=t)}}}),n.prototype.update=function(t){var e=Object(s["a"])(),i=Object(a["a"])(t,!0);this._fpsFrameCount++;var r=e-this._lastFpsSampleTime;if(r>1e3){var o="N/A";i&&(o=1e3*this._fpsFrameCount/r|0),this._fpsText.nodeValue=o+" FPS",this._lastFpsSampleTime=e,this._fpsFrameCount=0}this._msFrameCount++;var n=e-this._lastMsSampleTime;if(n>200){var m="N/A";i&&(m=(n/this._msFrameCount).toFixed(2)),this._msText.nodeValue=m+" MS",this._lastMsSampleTime=e,this._msFrameCount=0}},n.prototype.destroy=function(){return Object(r["a"])(this)},e["a"]=n},"2a32":function(t,e,i){"use strict";var a=i("4f04");function r(t){}r.prototype.emit=function(t){a["a"].throwInstantiationError()},e["a"]=r},"3a8e":function(t,e,i){"use strict";var a=i("535a"),r=i("0541"),s=i("f533"),o=i("2c4b"),n=i("d3f9"),m=i("9c89"),c=i("5cb0");function l(t){t=Object(a["a"])(t,a["a"].EMPTY_OBJECT);var e=Object(a["a"])(t.translucent,!0),i=Object(a["a"])(t.closed,!1),r=Object(a["a"])(t.flat,!1),u=r?m["a"]:o["a"],h=r?n["a"]:s["a"],_=r?l.FLAT_VERTEX_FORMAT:l.VERTEX_FORMAT;this.material=void 0,this.translucent=e,this._vertexShaderSource=Object(a["a"])(t.vertexShaderSource,u),this._fragmentShaderSource=Object(a["a"])(t.fragmentShaderSource,h),this._renderState=c["a"].getDefaultRenderState(e,i,t.renderState),this._closed=i,this._vertexFormat=_,this._flat=r,this._faceForward=Object(a["a"])(t.faceForward,!i)}Object.defineProperties(l.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}},vertexFormat:{get:function(){return this._vertexFormat}},flat:{get:function(){return this._flat}},faceForward:{get:function(){return this._faceForward}}}),l.VERTEX_FORMAT=r["a"].POSITION_AND_NORMAL,l.FLAT_VERTEX_FORMAT=r["a"].POSITION_ONLY,l.prototype.getFragmentShaderSource=c["a"].prototype.getFragmentShaderSource,l.prototype.isTranslucent=c["a"].prototype.isTranslucent,l.prototype.getRenderState=c["a"].prototype.getRenderState,e["a"]=l},"3d28":function(t,e,i){"use strict";var a=i("670c"),r=i("be18"),s=i("bd8d"),o=i("535a"),n=i("2f63"),m=i("7d62"),c=i("21d7"),l=i("5ed2"),u=i("93da"),h=i("52f0"),_=i("8f7c"),d=i("b522"),p=i("bc20"),f=new a["a"](1,1);function b(t){t=Object(o["a"])(t,o["a"].EMPTY_OBJECT),this.show=Object(o["a"])(t.show,!0),this.updateCallback=t.updateCallback,this.loop=Object(o["a"])(t.loop,!0),this.image=Object(o["a"])(t.image,void 0);var e=t.emitter;Object(n["a"])(e)||(e=new d["a"](.5)),this._emitter=e,this._bursts=t.bursts,this._modelMatrix=h["a"].clone(Object(o["a"])(t.modelMatrix,h["a"].IDENTITY)),this._emitterModelMatrix=h["a"].clone(Object(o["a"])(t.emitterModelMatrix,h["a"].IDENTITY)),this._matrixDirty=!0,this._combinedMatrix=new h["a"],this._startColor=s["a"].clone(Object(o["a"])(t.color,Object(o["a"])(t.startColor,s["a"].WHITE))),this._endColor=s["a"].clone(Object(o["a"])(t.color,Object(o["a"])(t.endColor,s["a"].WHITE))),this._startScale=Object(o["a"])(t.scale,Object(o["a"])(t.startScale,1)),this._endScale=Object(o["a"])(t.scale,Object(o["a"])(t.endScale,1)),this._emissionRate=Object(o["a"])(t.emissionRate,5),this._minimumSpeed=Object(o["a"])(t.speed,Object(o["a"])(t.minimumSpeed,1)),this._maximumSpeed=Object(o["a"])(t.speed,Object(o["a"])(t.maximumSpeed,1)),this._minimumParticleLife=Object(o["a"])(t.particleLife,Object(o["a"])(t.minimumParticleLife,5)),this._maximumParticleLife=Object(o["a"])(t.particleLife,Object(o["a"])(t.maximumParticleLife,5)),this._minimumMass=Object(o["a"])(t.mass,Object(o["a"])(t.minimumMass,1)),this._maximumMass=Object(o["a"])(t.mass,Object(o["a"])(t.maximumMass,1)),this._minimumImageSize=a["a"].clone(Object(o["a"])(t.imageSize,Object(o["a"])(t.minimumImageSize,f))),this._maximumImageSize=a["a"].clone(Object(o["a"])(t.imageSize,Object(o["a"])(t.maximumImageSize,f))),this._sizeInMeters=Object(o["a"])(t.sizeInMeters,!1),this._lifetime=Object(o["a"])(t.lifetime,Number.MAX_VALUE),this._billboardCollection=void 0,this._particles=[],this._particlePool=[],this._previousTime=void 0,this._currentTime=0,this._carryOver=0,this._complete=new c["a"],this._isComplete=!1,this._updateParticlePool=!0,this._particleEstimate=0}function g(t){var e=t._emissionRate,i=t._maximumParticleLife,a=0,r=t._bursts;if(Object(n["a"])(r))for(var s=r.length,o=0;o<s;++o)a+=r[o].maximum;for(var m=t._billboardCollection,c=t.image,l=Math.ceil(e*i+a),u=t._particles,h=t._particlePool,_=Math.max(l-u.length-h.length,0),d=0;d<_;++d){var f=new p["a"];f._billboard=m.add({image:c}),h.push(f)}t._particleEstimate=l}function O(t){var e=t._particlePool.pop();return Object(n["a"])(e)||(e=new p["a"]),e}function S(t,e){t._particlePool.push(e)}function x(t){for(var e=t._particles,i=t._particlePool,a=t._billboardCollection,r=e.length,s=i.length,o=t._particleEstimate,n=s-Math.max(o-r-s,0),m=n;m<s;++m){var c=i[m];a.remove(c._billboard)}i.length=n}function j(t){Object(n["a"])(t._billboard)&&(t._billboard.show=!1)}function v(t,e){var i=e._billboard;Object(n["a"])(i)||(i=e._billboard=t._billboardCollection.add({image:e.image})),i.width=e.imageSize.x,i.height=e.imageSize.y,i.position=e.position,i.sizeInMeters=t.sizeInMeters,i.show=!0;var a=u["a"].lerp(e.startColor.red,e.endColor.red,e.normalizedAge),r=u["a"].lerp(e.startColor.green,e.endColor.green,e.normalizedAge),o=u["a"].lerp(e.startColor.blue,e.endColor.blue,e.normalizedAge),m=u["a"].lerp(e.startColor.alpha,e.endColor.alpha,e.normalizedAge);i.color=new s["a"](a,r,o,m),i.scale=u["a"].lerp(e.startScale,e.endScale,e.normalizedAge)}function C(t,e){e.startColor=s["a"].clone(t._startColor,e.startColor),e.endColor=s["a"].clone(t._endColor,e.endColor),e.startScale=t._startScale,e.endScale=t._endScale,e.image=t.image,e.life=u["a"].randomBetween(t._minimumParticleLife,t._maximumParticleLife),e.mass=u["a"].randomBetween(t._minimumMass,t._maximumMass),e.imageSize.x=u["a"].randomBetween(t._minimumImageSize.x,t._maximumImageSize.x),e.imageSize.y=u["a"].randomBetween(t._minimumImageSize.y,t._maximumImageSize.y),e._normalizedAge=0,e._age=0;var i=u["a"].randomBetween(t._minimumSpeed,t._maximumSpeed);r["a"].multiplyByScalar(e.velocity,i,e.velocity),t._particles.push(e)}function M(t,e){if(t._isComplete)return 0;e=u["a"].mod(e,t._lifetime);var i=e*t._emissionRate,a=Math.floor(i);if(t._carryOver+=i-a,t._carryOver>1&&(a++,t._carryOver-=1),Object(n["a"])(t.bursts))for(var r=t.bursts.length,s=0;s<r;s++){var o=t.bursts[s],m=t._currentTime;Object(n["a"])(o)&&!o._complete&&m>o.time&&(a+=u["a"].randomBetween(o.minimum,o.maximum),o._complete=!0)}return a}Object.defineProperties(b.prototype,{emitter:{get:function(){return this._emitter},set:function(t){this._emitter=t}},bursts:{get:function(){return this._bursts},set:function(t){this._bursts=t,this._updateParticlePool=!0}},modelMatrix:{get:function(){return this._modelMatrix},set:function(t){this._matrixDirty=this._matrixDirty||!h["a"].equals(this._modelMatrix,t),h["a"].clone(t,this._modelMatrix)}},emitterModelMatrix:{get:function(){return this._emitterModelMatrix},set:function(t){this._matrixDirty=this._matrixDirty||!h["a"].equals(this._emitterModelMatrix,t),h["a"].clone(t,this._emitterModelMatrix)}},startColor:{get:function(){return this._startColor},set:function(t){s["a"].clone(t,this._startColor)}},endColor:{get:function(){return this._endColor},set:function(t){s["a"].clone(t,this._endColor)}},startScale:{get:function(){return this._startScale},set:function(t){this._startScale=t}},endScale:{get:function(){return this._endScale},set:function(t){this._endScale=t}},emissionRate:{get:function(){return this._emissionRate},set:function(t){this._emissionRate=t,this._updateParticlePool=!0}},minimumSpeed:{get:function(){return this._minimumSpeed},set:function(t){this._minimumSpeed=t}},maximumSpeed:{get:function(){return this._maximumSpeed},set:function(t){this._maximumSpeed=t}},minimumParticleLife:{get:function(){return this._minimumParticleLife},set:function(t){this._minimumParticleLife=t}},maximumParticleLife:{get:function(){return this._maximumParticleLife},set:function(t){this._maximumParticleLife=t,this._updateParticlePool=!0}},minimumMass:{get:function(){return this._minimumMass},set:function(t){this._minimumMass=t}},maximumMass:{get:function(){return this._maximumMass},set:function(t){this._maximumMass=t}},minimumImageSize:{get:function(){return this._minimumImageSize},set:function(t){this._minimumImageSize=t}},maximumImageSize:{get:function(){return this._maximumImageSize},set:function(t){this._maximumImageSize=t}},sizeInMeters:{get:function(){return this._sizeInMeters},set:function(t){this._sizeInMeters=t}},lifetime:{get:function(){return this._lifetime},set:function(t){this._lifetime=t}},complete:{get:function(){return this._complete}},isComplete:{get:function(){return this._isComplete}}});var T=new r["a"];b.prototype.update=function(t){if(this.show){Object(n["a"])(this._billboardCollection)||(this._billboardCollection=new _["a"]),this._updateParticlePool&&(g(this),this._updateParticlePool=!1);var e=0;this._previousTime&&(e=l["a"].secondsDifference(t.time,this._previousTime)),e<0&&(e=0);var i,a,s=this._particles,o=this._emitter,m=this.updateCallback,c=s.length;for(i=0;i<c;++i)a=s[i],a.update(e,m)?v(this,a):(j(a),S(this,a),s[i]=s[c-1],--i,--c);s.length=c;var d=M(this,e);if(d>0&&Object(n["a"])(o)){this._matrixDirty&&(this._combinedMatrix=h["a"].multiply(this.modelMatrix,this.emitterModelMatrix,this._combinedMatrix),this._matrixDirty=!1);var p=this._combinedMatrix;for(i=0;i<d;i++)a=O(this),this._emitter.emit(a),r["a"].add(a.position,a.velocity,T),h["a"].multiplyByPoint(p,T,T),a.position=h["a"].multiplyByPoint(p,a.position,a.position),r["a"].subtract(T,a.position,a.velocity),r["a"].normalize(a.velocity,a.velocity),C(this,a),v(this,a)}if(this._billboardCollection.update(t),this._previousTime=l["a"].clone(t.time,this._previousTime),this._currentTime+=e,this._lifetime!==Number.MAX_VALUE&&this._currentTime>this._lifetime)if(this.loop){if(this._currentTime=u["a"].mod(this._currentTime,this._lifetime),this.bursts){var f=this.bursts.length;for(i=0;i<f;i++)this.bursts[i]._complete=!1}}else this._isComplete=!0,this._complete.raiseEvent(this);t.frameNumber%120===0&&x(this)}},b.prototype.isDestroyed=function(){return!1},b.prototype.destroy=function(){return this._billboardCollection=this._billboardCollection&&this._billboardCollection.destroy(),Object(m["a"])(this)},e["a"]=b},"8e1d":function(t,e,i){"use strict";var a=i("535a");function r(t){t=Object(a["a"])(t,a["a"].EMPTY_OBJECT),this.time=Object(a["a"])(t.time,0),this.minimum=Object(a["a"])(t.minimum,0),this.maximum=Object(a["a"])(t.maximum,50),this._complete=!1}Object.defineProperties(r.prototype,{complete:{get:function(){return this._complete}}}),e["a"]=r},bc20:function(t,e,i){"use strict";var a=i("670c"),r=i("be18"),s=i("bd8d"),o=i("535a"),n=i("2f63"),m=new a["a"](1,1);function c(t){t=Object(o["a"])(t,o["a"].EMPTY_OBJECT),this.mass=Object(o["a"])(t.mass,1),this.position=r["a"].clone(Object(o["a"])(t.position,r["a"].ZERO)),this.velocity=r["a"].clone(Object(o["a"])(t.velocity,r["a"].ZERO)),this.life=Object(o["a"])(t.life,Number.MAX_VALUE),this.image=t.image,this.startColor=s["a"].clone(Object(o["a"])(t.startColor,s["a"].WHITE)),this.endColor=s["a"].clone(Object(o["a"])(t.endColor,s["a"].WHITE)),this.startScale=Object(o["a"])(t.startScale,1),this.endScale=Object(o["a"])(t.endScale,1),this.imageSize=a["a"].clone(Object(o["a"])(t.imageSize,m)),this._age=0,this._normalizedAge=0,this._billboard=void 0}Object.defineProperties(c.prototype,{age:{get:function(){return this._age}},normalizedAge:{get:function(){return this._normalizedAge}}});var l=new r["a"];c.prototype.update=function(t,e){return r["a"].multiplyByScalar(this.velocity,t,l),r["a"].add(this.position,l,this.position),Object(n["a"])(e)&&e(this,t),this._age+=t,this.life===Number.MAX_VALUE?this._normalizedAge=0:this._normalizedAge=this._age/this.life,this._age<=this.life},e["a"]=c}}]);