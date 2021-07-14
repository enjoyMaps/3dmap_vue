(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~7978149b"],{"1ac2":function(e,t,a){"use strict";var i=a("2c34"),n=a("cef5"),r=a("be18"),o=a("abab"),s=a("535a"),u=a("2f63"),c=a("cfdc"),l=a("c52f"),d=a("d2c7"),f=a("81d7"),h=a("473c"),m=a("0276"),_=a("0123"),p=a("93da"),y=a("1b8d"),g=new r["a"],O=new r["a"];function v(e){var t=e.center;O=r["a"].multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,O),e.height,O),O=r["a"].add(t,O,O);for(var a=new n["a"](O,e.semiMajorAxis),i=c["a"].computeEllipsePositions(e,!1,!0).outerPositions,s=new h["a"]({position:new f["a"]({componentDatatype:o["a"].DOUBLE,componentsPerAttribute:3,values:c["a"].raisePositionsToHeight(i,e,!1)})}),u=i.length/3,l=_["a"].createTypedArray(u,2*u),d=0,m=0;m<u;++m)l[d++]=m,l[d++]=(m+1)%u;return{boundingSphere:a,attributes:s,indices:l}}var x=new n["a"],b=new n["a"];function A(e){var t=e.center,a=e.ellipsoid,l=e.semiMajorAxis,d=r["a"].multiplyByScalar(a.geodeticSurfaceNormal(t,g),e.height,g);x.center=r["a"].add(t,d,x.center),x.radius=l,d=r["a"].multiplyByScalar(a.geodeticSurfaceNormal(t,d),e.extrudedHeight,d),b.center=r["a"].add(t,d,b.center),b.radius=l;var y=c["a"].computeEllipsePositions(e,!1,!0).outerPositions,O=new h["a"]({position:new f["a"]({componentDatatype:o["a"].DOUBLE,componentsPerAttribute:3,values:c["a"].raisePositionsToHeight(y,e,!0)})});y=O.position.values;var v=n["a"].union(x,b),A=y.length/3;if(Object(u["a"])(e.offsetAttribute)){var E=new Uint8Array(A);if(e.offsetAttribute===m["a"].TOP)E=Object(i["a"])(E,1,0,A/2);else{var I=e.offsetAttribute===m["a"].NONE?0:1;E=Object(i["a"])(E,I)}O.applyOffset=new f["a"]({componentDatatype:o["a"].UNSIGNED_BYTE,componentsPerAttribute:1,values:E})}var P=Object(s["a"])(e.numberOfVerticalLines,16);P=p["a"].clamp(P,0,A/2);var w=_["a"].createTypedArray(A,2*A+2*P);A/=2;var N,T,j=0;for(N=0;N<A;++N)w[j++]=N,w[j++]=(N+1)%A,w[j++]=N+A,w[j++]=(N+1)%A+A;if(P>0){var M=Math.min(P,A);T=Math.round(A/M);var C=Math.min(T*P,A);for(N=0;N<C;N+=T)w[j++]=N,w[j++]=N+A}return{boundingSphere:v,attributes:O,indices:w}}function E(e){e=Object(s["a"])(e,s["a"].EMPTY_OBJECT);var t=e.center,a=Object(s["a"])(e.ellipsoid,l["a"].WGS84),i=e.semiMajorAxis,n=e.semiMinorAxis,o=Object(s["a"])(e.granularity,p["a"].RADIANS_PER_DEGREE),u=Object(s["a"])(e.height,0),c=Object(s["a"])(e.extrudedHeight,u);this._center=r["a"].clone(t),this._semiMajorAxis=i,this._semiMinorAxis=n,this._ellipsoid=l["a"].clone(a),this._rotation=Object(s["a"])(e.rotation,0),this._height=Math.max(c,u),this._granularity=o,this._extrudedHeight=Math.min(c,u),this._numberOfVerticalLines=Math.max(Object(s["a"])(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}E.packedLength=r["a"].packedLength+l["a"].packedLength+8,E.pack=function(e,t,a){return a=Object(s["a"])(a,0),r["a"].pack(e._center,t,a),a+=r["a"].packedLength,l["a"].pack(e._ellipsoid,t,a),a+=l["a"].packedLength,t[a++]=e._semiMajorAxis,t[a++]=e._semiMinorAxis,t[a++]=e._rotation,t[a++]=e._height,t[a++]=e._granularity,t[a++]=e._extrudedHeight,t[a++]=e._numberOfVerticalLines,t[a]=Object(s["a"])(e._offsetAttribute,-1),t};var I=new r["a"],P=new l["a"],w={center:I,ellipsoid:P,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};E.unpack=function(e,t,a){t=Object(s["a"])(t,0);var i=r["a"].unpack(e,t,I);t+=r["a"].packedLength;var n=l["a"].unpack(e,t,P);t+=l["a"].packedLength;var o=e[t++],c=e[t++],d=e[t++],f=e[t++],h=e[t++],m=e[t++],_=e[t++],p=e[t];return Object(u["a"])(a)?(a._center=r["a"].clone(i,a._center),a._ellipsoid=l["a"].clone(n,a._ellipsoid),a._semiMajorAxis=o,a._semiMinorAxis=c,a._rotation=d,a._height=f,a._granularity=h,a._extrudedHeight=m,a._numberOfVerticalLines=_,a._offsetAttribute=-1===p?void 0:p,a):(w.height=f,w.extrudedHeight=m,w.granularity=h,w.rotation=d,w.semiMajorAxis=o,w.semiMinorAxis=c,w.numberOfVerticalLines=_,w.offsetAttribute=-1===p?void 0:p,new E(w))},E.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var t=e._height,a=e._extrudedHeight,n=!p["a"].equalsEpsilon(t,a,0,p["a"].EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var r,s={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};if(n)s.extrudedHeight=a,s.offsetAttribute=e._offsetAttribute,r=A(s);else if(r=v(s),Object(u["a"])(e._offsetAttribute)){var c=r.attributes.position.values.length,l=new Uint8Array(c/3),h=e._offsetAttribute===m["a"].NONE?0:1;Object(i["a"])(l,h),r.attributes.applyOffset=new f["a"]({componentDatatype:o["a"].UNSIGNED_BYTE,componentsPerAttribute:1,values:l})}return new d["a"]({attributes:r.attributes,indices:r.indices,primitiveType:y["a"].LINES,boundingSphere:r.boundingSphere,offsetAttribute:e._offsetAttribute})}},t["a"]=E},"4f04":function(e,t,a){"use strict";var i=a("2f63");function n(e){var t;this.name="DeveloperError",this.message=e;try{throw new Error}catch(a){t=a.stack}this.stack=t}Object(i["a"])(Object.create)&&(n.prototype=Object.create(Error.prototype),n.prototype.constructor=n),n.prototype.toString=function(){var e=this.name+": "+this.message;return Object(i["a"])(this.stack)&&(e+="\n"+this.stack.toString()),e},n.throwInstantiationError=function(){throw new n("This function defines an interface and should not be called directly.")},t["a"]=n},"4fde":function(e,t,a){"use strict";var i=a("93da"),n=a("2f63");function r(e){this._comparator=e.comparator,this._maximumLength=e.maximumLength,this._array=Object(n["a"])(e.maximumLength)?new Array(e.maximumLength):[],this._length=0}function o(e,t,a){var i=e._array,n=i[t];i[t]=i[a],i[a]=n}function s(e,t,a){return e._comparator(e._array[t],e._array[a])<0}function u(e,t,a){return e._comparator(e._array[t],e._array[a])>0}function c(e,t){if(0!==t){var a=Math.floor(i["a"].log2(t+1))%2===0,n=Math.floor((t-1)/2),r=s(e,t,n);r!==a&&(o(e,t,n),t=n);while(t>=3){var u=Math.floor((t-3)/4);if(s(e,t,u)!==r)break;o(e,t,u),t=u}}}function l(e,t){var a,n=e._length,r=Math.floor(i["a"].log2(t+1))%2===0;while((a=2*t+1)<n){var c=a,l=a+1;if(l<n){s(e,l,c)===r&&(c=l);for(var d=2*a+1,f=Math.max(Math.min(n-d,4),0),h=0;h<f;h++){var m=d+h;s(e,m,c)===r&&(c=m)}}if(s(e,c,t)===r&&(o(e,c,t),c!==a&&c!==l)){var _=Math.floor((c-1)/2);u(e,c,_)===r&&o(e,c,_)}t=c}}Object.defineProperties(r.prototype,{length:{get:function(){return this._length}},maximumLength:{get:function(){return this._maximumLength},set:function(e){if(Object(n["a"])(e)){while(this._length>e)this.removeMinimum();this._array.length=e}this._maximumLength=e}},internalArray:{get:function(){return this._array}},comparator:{get:function(){return this._comparator}}}),r.prototype.clone=function(){var e=this._maximumLength,t=this._comparator,a=this._array,i=this._length,n=new r({comparator:t,maximumLength:e});n._length=i;for(var o=0;o<i;o++)n._array[o]=a[o];return n},r.prototype.reset=function(){this._length=0;var e=this._maximumLength;if(Object(n["a"])(e))for(var t=0;t<e;t++)this._array[t]=void 0;else this._array.length=0},r.prototype.resort=function(){for(var e=this._length,t=0;t<e;t++)c(this,t)},r.prototype.insert=function(e){var t,a=this._maximumLength;if(Object(n["a"])(a)){if(0===a)return;if(this._length===a){var i=this._array[0];if(this._comparator(e,i)<=0)return e;t=this.removeMinimum()}}var r=this._length;return this._array[r]=e,this._length++,c(this,r),t},r.prototype.removeMinimum=function(){var e=this._length;if(0!==e){this._length--;var t=this._array[0];return e>=2&&(this._array[0]=this._array[e-1],l(this,0)),this._array[e-1]=void 0,t}},r.prototype.removeMaximum=function(){var e=this._length;if(0!==e){var t;if(this._length--,e<=2)t=this._array[e-1];else{var a=u(this,1,2)?1:2;t=this._array[a],this._array[a]=this._array[e-1],e>=4&&l(this,a)}return this._array[e-1]=void 0,t}},r.prototype.getMinimum=function(){var e=this._length;if(0!==e)return this._array[0]},r.prototype.getMaximum=function(){var e=this._length;if(0!==e)return e<=2?this._array[e-1]:this._array[u(this,1,2)?1:2]},t["a"]=r},"55f9":function(e,t,a){"use strict";var i=a("fa1c"),n={LINEAR_NONE:i["a"].Easing.Linear.None,QUADRATIC_IN:i["a"].Easing.Quadratic.In,QUADRATIC_OUT:i["a"].Easing.Quadratic.Out,QUADRATIC_IN_OUT:i["a"].Easing.Quadratic.InOut,CUBIC_IN:i["a"].Easing.Cubic.In,CUBIC_OUT:i["a"].Easing.Cubic.Out,CUBIC_IN_OUT:i["a"].Easing.Cubic.InOut,QUARTIC_IN:i["a"].Easing.Quartic.In,QUARTIC_OUT:i["a"].Easing.Quartic.Out,QUARTIC_IN_OUT:i["a"].Easing.Quartic.InOut,QUINTIC_IN:i["a"].Easing.Quintic.In,QUINTIC_OUT:i["a"].Easing.Quintic.Out,QUINTIC_IN_OUT:i["a"].Easing.Quintic.InOut,SINUSOIDAL_IN:i["a"].Easing.Sinusoidal.In,SINUSOIDAL_OUT:i["a"].Easing.Sinusoidal.Out,SINUSOIDAL_IN_OUT:i["a"].Easing.Sinusoidal.InOut,EXPONENTIAL_IN:i["a"].Easing.Exponential.In,EXPONENTIAL_OUT:i["a"].Easing.Exponential.Out,EXPONENTIAL_IN_OUT:i["a"].Easing.Exponential.InOut,CIRCULAR_IN:i["a"].Easing.Circular.In,CIRCULAR_OUT:i["a"].Easing.Circular.Out,CIRCULAR_IN_OUT:i["a"].Easing.Circular.InOut,ELASTIC_IN:i["a"].Easing.Elastic.In,ELASTIC_OUT:i["a"].Easing.Elastic.Out,ELASTIC_IN_OUT:i["a"].Easing.Elastic.InOut,BACK_IN:i["a"].Easing.Back.In,BACK_OUT:i["a"].Easing.Back.Out,BACK_IN_OUT:i["a"].Easing.Back.InOut,BOUNCE_IN:i["a"].Easing.Bounce.In,BOUNCE_OUT:i["a"].Easing.Bounce.Out,BOUNCE_IN_OUT:i["a"].Easing.Bounce.InOut};t["a"]=Object.freeze(n)},5752:function(e,t,a){"use strict";function i(e,t,a,i,n){this.xPoleWander=e,this.yPoleWander=t,this.xPoleOffset=a,this.yPoleOffset=i,this.ut1MinusUtc=n}t["a"]=i},7261:function(e,t,a){"use strict";var i=a("a58e"),n=a("e438"),r=a("535a"),o=a("2f63"),s=a("5752"),u=a("5ed2"),c=a("a4d9"),l=a("d4ed"),d=a("283e"),f=a("dd17"),h=a("2b8c");function m(e){if(e=Object(r["a"])(e,r["a"].EMPTY_OBJECT),this._dates=void 0,this._samples=void 0,this._dateColumn=-1,this._xPoleWanderRadiansColumn=-1,this._yPoleWanderRadiansColumn=-1,this._ut1MinusUtcSecondsColumn=-1,this._xCelestialPoleOffsetRadiansColumn=-1,this._yCelestialPoleOffsetRadiansColumn=-1,this._taiMinusUtcSecondsColumn=-1,this._columnCount=0,this._lastIndex=-1,this._downloadPromise=void 0,this._dataError=void 0,this._addNewLeapSeconds=Object(r["a"])(e.addNewLeapSeconds,!0),Object(o["a"])(e.data))p(this,e.data);else if(Object(o["a"])(e.url)){var t=l["a"].createIfNeeded(e.url),a=this;this._downloadPromise=t.fetchJson().then((function(e){p(a,e)})).otherwise((function(){a._dataError="An error occurred while retrieving the EOP data from the URL "+t.url+"."}))}else p(this,{columnNames:["dateIso8601","modifiedJulianDateUtc","xPoleWanderRadians","yPoleWanderRadians","ut1MinusUtcSeconds","lengthOfDayCorrectionSeconds","xCelestialPoleOffsetRadians","yCelestialPoleOffsetRadians","taiMinusUtcSeconds"],samples:[]})}function _(e,t){return u["a"].compare(e.julianDate,t)}function p(e,t){if(Object(o["a"])(t.columnNames))if(Object(o["a"])(t.samples)){var a=t.columnNames.indexOf("modifiedJulianDateUtc"),i=t.columnNames.indexOf("xPoleWanderRadians"),r=t.columnNames.indexOf("yPoleWanderRadians"),s=t.columnNames.indexOf("ut1MinusUtcSeconds"),l=t.columnNames.indexOf("xCelestialPoleOffsetRadians"),d=t.columnNames.indexOf("yCelestialPoleOffsetRadians"),m=t.columnNames.indexOf("taiMinusUtcSeconds");if(a<0||i<0||r<0||s<0||l<0||d<0||m<0)e._dataError="Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns";else{var p,y=e._samples=t.samples,g=e._dates=[];e._dateColumn=a,e._xPoleWanderRadiansColumn=i,e._yPoleWanderRadiansColumn=r,e._ut1MinusUtcSecondsColumn=s,e._xCelestialPoleOffsetRadiansColumn=l,e._yCelestialPoleOffsetRadiansColumn=d,e._taiMinusUtcSecondsColumn=m,e._columnCount=t.columnNames.length,e._lastIndex=void 0;for(var O=e._addNewLeapSeconds,v=0,x=y.length;v<x;v+=e._columnCount){var b=y[v+a],A=y[v+m],E=b+f["a"].MODIFIED_JULIAN_DATE_DIFFERENCE,I=new u["a"](E,A,h["a"].TAI);if(g.push(I),O){if(A!==p&&Object(o["a"])(p)){var P=u["a"].leapSeconds,w=Object(n["a"])(P,I,_);if(w<0){var N=new c["a"](I,A);P.splice(~w,0,N)}}p=A}}}}else e._dataError="Error in loaded EOP data: The samples property is required.";else e._dataError="Error in loaded EOP data: The columnNames property is required."}function y(e,t,a,i,n){var r=a*i;n.xPoleWander=t[r+e._xPoleWanderRadiansColumn],n.yPoleWander=t[r+e._yPoleWanderRadiansColumn],n.xPoleOffset=t[r+e._xCelestialPoleOffsetRadiansColumn],n.yPoleOffset=t[r+e._yCelestialPoleOffsetRadiansColumn],n.ut1MinusUtc=t[r+e._ut1MinusUtcSecondsColumn]}function g(e,t,a){return t+e*(a-t)}function O(e,t,a,i,n,r,o){var s=e._columnCount;if(r>t.length-1)return o.xPoleWander=0,o.yPoleWander=0,o.xPoleOffset=0,o.yPoleOffset=0,o.ut1MinusUtc=0,o;var c=t[n],l=t[r];if(c.equals(l)||i.equals(c))return y(e,a,n,s,o),o;if(i.equals(l))return y(e,a,r,s,o),o;var d=u["a"].secondsDifference(i,c)/u["a"].secondsDifference(l,c),f=n*s,h=r*s,m=a[f+e._ut1MinusUtcSecondsColumn],_=a[h+e._ut1MinusUtcSecondsColumn],p=_-m;if(p>.5||p<-.5){var O=a[f+e._taiMinusUtcSecondsColumn],v=a[h+e._taiMinusUtcSecondsColumn];O!==v&&(l.equals(i)?m=_:_-=v-O)}return o.xPoleWander=g(d,a[f+e._xPoleWanderRadiansColumn],a[h+e._xPoleWanderRadiansColumn]),o.yPoleWander=g(d,a[f+e._yPoleWanderRadiansColumn],a[h+e._yPoleWanderRadiansColumn]),o.xPoleOffset=g(d,a[f+e._xCelestialPoleOffsetRadiansColumn],a[h+e._xCelestialPoleOffsetRadiansColumn]),o.yPoleOffset=g(d,a[f+e._yCelestialPoleOffsetRadiansColumn],a[h+e._yCelestialPoleOffsetRadiansColumn]),o.ut1MinusUtc=g(d,m,_),o}m.NONE=Object.freeze({getPromiseToLoad:function(){return i["a"].resolve()},compute:function(e,t){return Object(o["a"])(t)?(t.xPoleWander=0,t.yPoleWander=0,t.xPoleOffset=0,t.yPoleOffset=0,t.ut1MinusUtc=0):t=new s["a"](0,0,0,0,0),t}}),m.prototype.getPromiseToLoad=function(){return Object(i["a"])(this._downloadPromise)},m.prototype.compute=function(e,t){if(Object(o["a"])(this._samples)){if(Object(o["a"])(t)||(t=new s["a"](0,0,0,0,0)),0===this._samples.length)return t.xPoleWander=0,t.yPoleWander=0,t.xPoleOffset=0,t.yPoleOffset=0,t.ut1MinusUtc=0,t;var a=this._dates,i=this._lastIndex,r=0,c=0;if(Object(o["a"])(i)){var l=a[i],f=a[i+1],h=u["a"].lessThanOrEquals(l,e),m=!Object(o["a"])(f),_=m||u["a"].greaterThanOrEquals(f,e);if(h&&_)return r=i,!m&&f.equals(e)&&++r,c=r+1,O(this,a,this._samples,e,r,c,t),t}var p=Object(n["a"])(a,e,u["a"].compare,this._dateColumn);return p>=0?(p<a.length-1&&a[p+1].equals(e)&&++p,r=p,c=p):(c=~p,r=c-1,r<0&&(r=0)),this._lastIndex=r,O(this,a,this._samples,e,r,c,t),t}if(Object(o["a"])(this._dataError))throw new d["a"](this._dataError)},t["a"]=m},"77bc":function(e,t,a){"use strict";var i=a("abab"),n=a("535a"),r=a("2f63");function o(e,t){e=Object(n["a"])(e,0),t=Object(n["a"])(t,Number.MAX_VALUE),this.value=new Float32Array([e,t])}Object.defineProperties(o.prototype,{componentDatatype:{get:function(){return i["a"].FLOAT}},componentsPerAttribute:{get:function(){return 2}},normalize:{get:function(){return!1}}}),o.fromDistanceDisplayCondition=function(e){return new o(e.near,e.far)},o.toValue=function(e,t){return Object(r["a"])(t)?(t[0]=e.near,t[1]=e.far,t):new Float32Array([e.near,e.far])},t["a"]=o},"8f14":function(e,t,a){"use strict";var i=a("2f63");function n(){this.head=void 0,this.tail=void 0,this._length=0}function r(e,t,a){this.item=e,this.previous=t,this.next=a}function o(e,t){Object(i["a"])(t.previous)&&Object(i["a"])(t.next)?(t.previous.next=t.next,t.next.previous=t.previous):Object(i["a"])(t.previous)?(t.previous.next=void 0,e.tail=t.previous):Object(i["a"])(t.next)?(t.next.previous=void 0,e.head=t.next):(e.head=void 0,e.tail=void 0),t.next=void 0,t.previous=void 0}Object.defineProperties(n.prototype,{length:{get:function(){return this._length}}}),n.prototype.add=function(e){var t=new r(e,this.tail,void 0);return Object(i["a"])(this.tail)?(this.tail.next=t,this.tail=t):(this.head=t,this.tail=t),++this._length,t},n.prototype.remove=function(e){Object(i["a"])(e)&&(o(this,e),--this._length)},n.prototype.splice=function(e,t){if(e!==t){o(this,t);var a=e.next;e.next=t,this.tail===e?this.tail=t:a.previous=t,t.next=a,t.previous=e}},t["a"]=n},a6ac:function(e,t,a){"use strict";var i=a("2c34"),n=a("cef5"),r=a("670c"),o=a("be18"),s=a("bef8"),u=a("abab"),c=a("535a"),l=a("2f63"),d=a("cfdc"),f=a("c52f"),h=a("3d7f"),m=a("d2c7"),_=a("81d7"),p=a("473c"),y=a("d9403"),g=a("0276"),O=a("c1e2"),v=a("0123"),x=a("93da"),b=a("df07"),A=a("1b8d"),E=a("0260"),I=a("eace"),P=a("0541"),w=new o["a"],N=new o["a"],T=new o["a"],j=new o["a"],M=new r["a"],C=new b["a"],S=new b["a"],R=new E["a"],L=new o["a"],U=new o["a"],D=new o["a"],F=new s["a"],k=new o["a"],V=new r["a"],B=new r["a"];function z(e,t,a){var n=t.vertexFormat,s=t.center,c=t.semiMajorAxis,f=t.semiMinorAxis,m=t.ellipsoid,y=t.stRotation,O=a?e.length/3*2:e.length/3,v=t.shadowVolume,x=n.st?new Float32Array(2*O):void 0,A=n.normal?new Float32Array(3*O):void 0,I=n.tangent?new Float32Array(3*O):void 0,P=n.bitangent?new Float32Array(3*O):void 0,j=v?new Float32Array(3*O):void 0,z=0,W=L,G=U,H=D,Q=new h["a"](m),Y=Q.project(m.cartesianToCartographic(s,F),k),q=m.scaleToGeodeticSurface(s,w);m.geodeticSurfaceNormal(q,q);var J=C,X=S;if(0!==y){var K=E["a"].fromAxisAngle(q,y,R);J=b["a"].fromQuaternion(K,J),K=E["a"].fromAxisAngle(q,-y,R),X=b["a"].fromQuaternion(K,X)}else J=b["a"].clone(b["a"].IDENTITY,J),X=b["a"].clone(b["a"].IDENTITY,X);for(var Z=r["a"].fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,V),$=r["a"].fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,B),ee=e.length,te=a?ee:0,ae=te/3*2,ie=0;ie<ee;ie+=3){var ne=ie+1,re=ie+2,oe=o["a"].fromArray(e,ie,w);if(n.st){var se=b["a"].multiplyByVector(J,oe,N),ue=Q.project(m.cartesianToCartographic(se,F),T);o["a"].subtract(ue,Y,ue),M.x=(ue.x+c)/(2*c),M.y=(ue.y+f)/(2*f),Z.x=Math.min(M.x,Z.x),Z.y=Math.min(M.y,Z.y),$.x=Math.max(M.x,$.x),$.y=Math.max(M.y,$.y),a&&(x[z+ae]=M.x,x[z+1+ae]=M.y),x[z++]=M.x,x[z++]=M.y}(n.normal||n.tangent||n.bitangent||v)&&(W=m.geodeticSurfaceNormal(oe,W),v&&(j[ie+te]=-W.x,j[ne+te]=-W.y,j[re+te]=-W.z),(n.normal||n.tangent||n.bitangent)&&((n.tangent||n.bitangent)&&(G=o["a"].normalize(o["a"].cross(o["a"].UNIT_Z,W,G),G),b["a"].multiplyByVector(X,G,G)),n.normal&&(A[ie]=W.x,A[ne]=W.y,A[re]=W.z,a&&(A[ie+te]=-W.x,A[ne+te]=-W.y,A[re+te]=-W.z)),n.tangent&&(I[ie]=G.x,I[ne]=G.y,I[re]=G.z,a&&(I[ie+te]=-G.x,I[ne+te]=-G.y,I[re+te]=-G.z)),n.bitangent&&(H=o["a"].normalize(o["a"].cross(W,G,H),H),P[ie]=H.x,P[ne]=H.y,P[re]=H.z,a&&(P[ie+te]=H.x,P[ne+te]=H.y,P[re+te]=H.z))))}if(n.st){ee=x.length;for(var ce=0;ce<ee;ce+=2)x[ce]=(x[ce]-Z.x)/($.x-Z.x),x[ce+1]=(x[ce+1]-Z.y)/($.y-Z.y)}var le=new p["a"];if(n.position){var de=d["a"].raisePositionsToHeight(e,t,a);le.position=new _["a"]({componentDatatype:u["a"].DOUBLE,componentsPerAttribute:3,values:de})}if(n.st&&(le.st=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:2,values:x})),n.normal&&(le.normal=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:A})),n.tangent&&(le.tangent=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:I})),n.bitangent&&(le.bitangent=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:P})),v&&(le.extrudeDirection=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:j})),a&&Object(l["a"])(t.offsetAttribute)){var fe=new Uint8Array(O);if(t.offsetAttribute===g["a"].TOP)fe=Object(i["a"])(fe,1,0,O/2);else{var he=t.offsetAttribute===g["a"].NONE?0:1;fe=Object(i["a"])(fe,he)}le.applyOffset=new _["a"]({componentDatatype:u["a"].UNSIGNED_BYTE,componentsPerAttribute:1,values:fe})}return le}function W(e){var t,a,i,n,r,o=new Array(e*(e+1)*12-6),s=0;for(t=0,i=1,n=0;n<3;n++)o[s++]=i++,o[s++]=t,o[s++]=i;for(n=2;n<e+1;++n){for(i=n*(n+1)-1,t=(n-1)*n-1,o[s++]=i++,o[s++]=t,o[s++]=i,a=2*n,r=0;r<a-1;++r)o[s++]=i,o[s++]=t++,o[s++]=t,o[s++]=i++,o[s++]=t,o[s++]=i;o[s++]=i++,o[s++]=t,o[s++]=i}for(a=2*e,++i,++t,n=0;n<a-1;++n)o[s++]=i,o[s++]=t++,o[s++]=t,o[s++]=i++,o[s++]=t,o[s++]=i;for(o[s++]=i,o[s++]=t++,o[s++]=t,o[s++]=i++,o[s++]=t++,o[s++]=t,++t,n=e-1;n>1;--n){for(o[s++]=t++,o[s++]=t,o[s++]=i,a=2*n,r=0;r<a-1;++r)o[s++]=i,o[s++]=t++,o[s++]=t,o[s++]=i++,o[s++]=t,o[s++]=i;o[s++]=t++,o[s++]=t++,o[s++]=i++}for(n=0;n<3;n++)o[s++]=t++,o[s++]=t,o[s++]=i;return o}var G=new o["a"];function H(e){var t=e.center;G=o["a"].multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,G),e.height,G),G=o["a"].add(t,G,G);var a=new n["a"](G,e.semiMajorAxis),i=d["a"].computeEllipsePositions(e,!0,!1),r=i.positions,s=i.numPts,u=z(r,e,!1),c=W(s);return c=v["a"].createTypedArray(r.length/3,c),{boundingSphere:a,attributes:u,indices:c}}function Q(e,t){var a=t.vertexFormat,n=t.center,s=t.semiMajorAxis,c=t.semiMinorAxis,d=t.ellipsoid,f=t.height,m=t.extrudedHeight,y=t.stRotation,O=e.length/3*2,v=new Float64Array(3*O),x=a.st?new Float32Array(2*O):void 0,A=a.normal?new Float32Array(3*O):void 0,I=a.tangent?new Float32Array(3*O):void 0,P=a.bitangent?new Float32Array(3*O):void 0,S=t.shadowVolume,z=S?new Float32Array(3*O):void 0,W=0,G=L,H=U,Q=D,Y=new h["a"](d),q=Y.project(d.cartesianToCartographic(n,F),k),J=d.scaleToGeodeticSurface(n,w);d.geodeticSurfaceNormal(J,J);for(var X=E["a"].fromAxisAngle(J,y,R),K=b["a"].fromQuaternion(X,C),Z=r["a"].fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,V),$=r["a"].fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,B),ee=e.length,te=ee/3*2,ae=0;ae<ee;ae+=3){var ie,ne=ae+1,re=ae+2,oe=o["a"].fromArray(e,ae,w);if(a.st){var se=b["a"].multiplyByVector(K,oe,N),ue=Y.project(d.cartesianToCartographic(se,F),T);o["a"].subtract(ue,q,ue),M.x=(ue.x+s)/(2*s),M.y=(ue.y+c)/(2*c),Z.x=Math.min(M.x,Z.x),Z.y=Math.min(M.y,Z.y),$.x=Math.max(M.x,$.x),$.y=Math.max(M.y,$.y),x[W+te]=M.x,x[W+1+te]=M.y,x[W++]=M.x,x[W++]=M.y}oe=d.scaleToGeodeticSurface(oe,oe),ie=o["a"].clone(oe,N),G=d.geodeticSurfaceNormal(oe,G),S&&(z[ae+ee]=-G.x,z[ne+ee]=-G.y,z[re+ee]=-G.z);var ce=o["a"].multiplyByScalar(G,f,j);if(oe=o["a"].add(oe,ce,oe),ce=o["a"].multiplyByScalar(G,m,ce),ie=o["a"].add(ie,ce,ie),a.position&&(v[ae+ee]=ie.x,v[ne+ee]=ie.y,v[re+ee]=ie.z,v[ae]=oe.x,v[ne]=oe.y,v[re]=oe.z),a.normal||a.tangent||a.bitangent){Q=o["a"].clone(G,Q);var le=o["a"].fromArray(e,(ae+3)%ee,j);o["a"].subtract(le,oe,le);var de=o["a"].subtract(ie,oe,T);G=o["a"].normalize(o["a"].cross(de,le,G),G),a.normal&&(A[ae]=G.x,A[ne]=G.y,A[re]=G.z,A[ae+ee]=G.x,A[ne+ee]=G.y,A[re+ee]=G.z),a.tangent&&(H=o["a"].normalize(o["a"].cross(Q,G,H),H),I[ae]=H.x,I[ne]=H.y,I[re]=H.z,I[ae+ee]=H.x,I[ae+1+ee]=H.y,I[ae+2+ee]=H.z),a.bitangent&&(P[ae]=Q.x,P[ne]=Q.y,P[re]=Q.z,P[ae+ee]=Q.x,P[ne+ee]=Q.y,P[re+ee]=Q.z)}}if(a.st){ee=x.length;for(var fe=0;fe<ee;fe+=2)x[fe]=(x[fe]-Z.x)/($.x-Z.x),x[fe+1]=(x[fe+1]-Z.y)/($.y-Z.y)}var he=new p["a"];if(a.position&&(he.position=new _["a"]({componentDatatype:u["a"].DOUBLE,componentsPerAttribute:3,values:v})),a.st&&(he.st=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:2,values:x})),a.normal&&(he.normal=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:A})),a.tangent&&(he.tangent=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:I})),a.bitangent&&(he.bitangent=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:P})),S&&(he.extrudeDirection=new _["a"]({componentDatatype:u["a"].FLOAT,componentsPerAttribute:3,values:z})),Object(l["a"])(t.offsetAttribute)){var me=new Uint8Array(O);if(t.offsetAttribute===g["a"].TOP)me=Object(i["a"])(me,1,0,O/2);else{var _e=t.offsetAttribute===g["a"].NONE?0:1;me=Object(i["a"])(me,_e)}he.applyOffset=new _["a"]({componentDatatype:u["a"].UNSIGNED_BYTE,componentsPerAttribute:1,values:me})}return he}function Y(e){for(var t=e.length/3,a=v["a"].createTypedArray(t,6*t),i=0,n=0;n<t;n++){var r=n,o=n+t,s=(r+1)%t,u=s+t;a[i++]=r,a[i++]=o,a[i++]=s,a[i++]=s,a[i++]=o,a[i++]=u}return a}var q=new n["a"],J=new n["a"];function X(e){var t=e.center,a=e.ellipsoid,i=e.semiMajorAxis,r=o["a"].multiplyByScalar(a.geodeticSurfaceNormal(t,w),e.height,w);q.center=o["a"].add(t,r,q.center),q.radius=i,r=o["a"].multiplyByScalar(a.geodeticSurfaceNormal(t,r),e.extrudedHeight,r),J.center=o["a"].add(t,r,J.center),J.radius=i;var s=d["a"].computeEllipsePositions(e,!0,!0),u=s.positions,c=s.numPts,l=s.outerPositions,f=n["a"].union(q,J),h=z(u,e,!0),_=W(c),p=_.length;_.length=2*p;for(var g=u.length/3,x=0;x<p;x+=3)_[x+p]=_[x+2]+g,_[x+1+p]=_[x+1]+g,_[x+2+p]=_[x]+g;var b=v["a"].createTypedArray(2*g/3,_),E=new m["a"]({attributes:h,indices:b,primitiveType:A["a"].TRIANGLES}),I=Q(l,e);_=Y(l);var P=v["a"].createTypedArray(2*l.length/3,_),N=new m["a"]({attributes:I,indices:P,primitiveType:A["a"].TRIANGLES}),T=O["a"].combineInstances([new y["a"]({geometry:E}),new y["a"]({geometry:N})]);return{boundingSphere:f,attributes:T[0].attributes,indices:T[0].indices}}function K(e,t,a,i,n,r,s){for(var u=d["a"].computeEllipsePositions({center:e,semiMajorAxis:t,semiMinorAxis:a,rotation:i,granularity:n},!1,!0),c=u.outerPositions,l=c.length/3,f=new Array(l),h=0;h<l;++h)f[h]=o["a"].fromArray(c,3*h);var m=I["a"].fromCartesianArray(f,r,s);return m.width>x["a"].PI&&(m.north=m.north>0?x["a"].PI_OVER_TWO-x["a"].EPSILON7:m.north,m.south=m.south<0?x["a"].EPSILON7-x["a"].PI_OVER_TWO:m.south,m.east=x["a"].PI,m.west=-x["a"].PI),m}function Z(e){e=Object(c["a"])(e,c["a"].EMPTY_OBJECT);var t=e.center,a=Object(c["a"])(e.ellipsoid,f["a"].WGS84),i=e.semiMajorAxis,n=e.semiMinorAxis,r=Object(c["a"])(e.granularity,x["a"].RADIANS_PER_DEGREE),s=Object(c["a"])(e.vertexFormat,P["a"].DEFAULT),u=Object(c["a"])(e.height,0),l=Object(c["a"])(e.extrudedHeight,u);this._center=o["a"].clone(t),this._semiMajorAxis=i,this._semiMinorAxis=n,this._ellipsoid=f["a"].clone(a),this._rotation=Object(c["a"])(e.rotation,0),this._stRotation=Object(c["a"])(e.stRotation,0),this._height=Math.max(l,u),this._granularity=r,this._vertexFormat=P["a"].clone(s),this._extrudedHeight=Math.min(l,u),this._shadowVolume=Object(c["a"])(e.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=e.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0}Z.packedLength=o["a"].packedLength+f["a"].packedLength+P["a"].packedLength+9,Z.pack=function(e,t,a){return a=Object(c["a"])(a,0),o["a"].pack(e._center,t,a),a+=o["a"].packedLength,f["a"].pack(e._ellipsoid,t,a),a+=f["a"].packedLength,P["a"].pack(e._vertexFormat,t,a),a+=P["a"].packedLength,t[a++]=e._semiMajorAxis,t[a++]=e._semiMinorAxis,t[a++]=e._rotation,t[a++]=e._stRotation,t[a++]=e._height,t[a++]=e._granularity,t[a++]=e._extrudedHeight,t[a++]=e._shadowVolume?1:0,t[a]=Object(c["a"])(e._offsetAttribute,-1),t};var $=new o["a"],ee=new f["a"],te=new P["a"],ae={center:$,ellipsoid:ee,vertexFormat:te,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};function ie(e){var t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];for(var a=d["a"].computeEllipsePositions({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,rotation:e._rotation,granularity:e._granularity},!1,!0),i=a.outerPositions,n=i.length/3,r=new Array(n),s=0;s<n;++s)r[s]=o["a"].fromArray(i,3*s);var u=e._ellipsoid,c=e.rectangle;return m["a"]._textureCoordinateRotationPoints(r,t,u,c)}Z.unpack=function(e,t,a){t=Object(c["a"])(t,0);var i=o["a"].unpack(e,t,$);t+=o["a"].packedLength;var n=f["a"].unpack(e,t,ee);t+=f["a"].packedLength;var r=P["a"].unpack(e,t,te);t+=P["a"].packedLength;var s=e[t++],u=e[t++],d=e[t++],h=e[t++],m=e[t++],_=e[t++],p=e[t++],y=1===e[t++],g=e[t];return Object(l["a"])(a)?(a._center=o["a"].clone(i,a._center),a._ellipsoid=f["a"].clone(n,a._ellipsoid),a._vertexFormat=P["a"].clone(r,a._vertexFormat),a._semiMajorAxis=s,a._semiMinorAxis=u,a._rotation=d,a._stRotation=h,a._height=m,a._granularity=_,a._extrudedHeight=p,a._shadowVolume=y,a._offsetAttribute=-1===g?void 0:g,a):(ae.height=m,ae.extrudedHeight=p,ae.granularity=_,ae.stRotation=h,ae.rotation=d,ae.semiMajorAxis=s,ae.semiMinorAxis=u,ae.shadowVolume=y,ae.offsetAttribute=-1===g?void 0:g,new Z(ae))},Z.computeRectangle=function(e,t){e=Object(c["a"])(e,c["a"].EMPTY_OBJECT);var a=e.center,i=Object(c["a"])(e.ellipsoid,f["a"].WGS84),n=e.semiMajorAxis,r=e.semiMinorAxis,o=Object(c["a"])(e.granularity,x["a"].RADIANS_PER_DEGREE),s=Object(c["a"])(e.rotation,0);return K(a,n,r,s,o,i,t)},Z.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var t=e._height,a=e._extrudedHeight,n=!x["a"].equalsEpsilon(t,a,0,x["a"].EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var r,o={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,vertexFormat:e._vertexFormat,stRotation:e._stRotation};if(n)o.extrudedHeight=a,o.shadowVolume=e._shadowVolume,o.offsetAttribute=e._offsetAttribute,r=X(o);else if(r=H(o),Object(l["a"])(e._offsetAttribute)){var s=r.attributes.position.values.length,c=new Uint8Array(s/3),d=e._offsetAttribute===g["a"].NONE?0:1;Object(i["a"])(c,d),r.attributes.applyOffset=new _["a"]({componentDatatype:u["a"].UNSIGNED_BYTE,componentsPerAttribute:1,values:c})}return new m["a"]({attributes:r.attributes,indices:r.indices,primitiveType:A["a"].TRIANGLES,boundingSphere:r.boundingSphere,offsetAttribute:e._offsetAttribute})}},Z.createShadowVolume=function(e,t,a){var i=e._granularity,n=e._ellipsoid,r=t(i,n),o=a(i,n);return new Z({center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:n,rotation:e._rotation,stRotation:e._stRotation,granularity:i,extrudedHeight:r,height:o,vertexFormat:P["a"].POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(Z.prototype,{rectangle:{get:function(){return Object(l["a"])(this._rectangle)||(this._rectangle=K(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return Object(l["a"])(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=ie(this)),this._textureCoordinateRotationPoints}}}),t["a"]=Z},aee6:function(e,t,a){"use strict";var i=a("535a"),n=a("2f63");function r(e,t){e=Object(i["a"])(e,0),this._near=e,t=Object(i["a"])(t,Number.MAX_VALUE),this._far=t}Object.defineProperties(r.prototype,{near:{get:function(){return this._near},set:function(e){this._near=e}},far:{get:function(){return this._far},set:function(e){this._far=e}}}),r.packedLength=2,r.pack=function(e,t,a){return a=Object(i["a"])(a,0),t[a++]=e.near,t[a]=e.far,t},r.unpack=function(e,t,a){return t=Object(i["a"])(t,0),Object(n["a"])(a)||(a=new r),a.near=e[t++],a.far=e[t],a},r.equals=function(e,t){return e===t||Object(n["a"])(e)&&Object(n["a"])(t)&&e.near===t.near&&e.far===t.far},r.clone=function(e,t){if(Object(n["a"])(e))return Object(n["a"])(t)||(t=new r),t.near=e.near,t.far=e.far,t},r.prototype.clone=function(e){return r.clone(this,e)},r.prototype.equals=function(e){return r.equals(this,e)},t["a"]=r},cfdc:function(e,t,a){"use strict";var i=a("be18"),n=a("93da"),r=a("df07"),o=a("0260"),s={},u=new i["a"],c=new i["a"],l=new o["a"],d=new r["a"];function f(e,t,a,n,s,f,h,m,_,p){var y=e+t;i["a"].multiplyByScalar(n,Math.cos(y),u),i["a"].multiplyByScalar(a,Math.sin(y),c),i["a"].add(u,c,u);var g=Math.cos(e);g*=g;var O=Math.sin(e);O*=O;var v=f/Math.sqrt(h*g+s*O),x=v/m;return o["a"].fromAxisAngle(u,x,l),r["a"].fromQuaternion(l,d),r["a"].multiplyByVector(d,_,p),i["a"].normalize(p,p),i["a"].multiplyByScalar(p,m,p),p}var h=new i["a"],m=new i["a"],_=new i["a"],p=new i["a"];s.raisePositionsToHeight=function(e,t,a){for(var n=t.ellipsoid,r=t.height,o=t.extrudedHeight,s=a?e.length/3*2:e.length/3,u=new Float64Array(3*s),c=e.length,l=a?c:0,d=0;d<c;d+=3){var f=d+1,y=d+2,g=i["a"].fromArray(e,d,h);n.scaleToGeodeticSurface(g,g);var O=i["a"].clone(g,m),v=n.geodeticSurfaceNormal(g,p),x=i["a"].multiplyByScalar(v,r,_);i["a"].add(g,x,g),a&&(i["a"].multiplyByScalar(v,o,x),i["a"].add(O,x,O),u[d+l]=O.x,u[f+l]=O.y,u[y+l]=O.z),u[d]=g.x,u[f]=g.y,u[y]=g.z}return u};var y=new i["a"],g=new i["a"],O=new i["a"];s.computeEllipsePositions=function(e,t,a){var r=e.semiMinorAxis,o=e.semiMajorAxis,s=e.rotation,u=e.center,c=8*e.granularity,l=r*r,d=o*o,p=o*r,v=i["a"].magnitude(u),x=i["a"].normalize(u,y),b=i["a"].cross(i["a"].UNIT_Z,u,g);b=i["a"].normalize(b,b);var A=i["a"].cross(x,b,O),E=1+Math.ceil(n["a"].PI_OVER_TWO/c),I=n["a"].PI_OVER_TWO/(E-1),P=n["a"].PI_OVER_TWO-E*I;P<0&&(E-=Math.ceil(Math.abs(P)/I));var w,N,T,j,M,C=E*(E+2)*2,S=t?new Array(3*C):void 0,R=0,L=h,U=m,D=4*E*3,F=D-1,k=0,V=a?new Array(D):void 0;for(P=n["a"].PI_OVER_TWO,L=f(P,s,A,b,l,p,d,v,x,L),t&&(S[R++]=L.x,S[R++]=L.y,S[R++]=L.z),a&&(V[F--]=L.z,V[F--]=L.y,V[F--]=L.x),P=n["a"].PI_OVER_TWO-I,w=1;w<E+1;++w){if(L=f(P,s,A,b,l,p,d,v,x,L),U=f(Math.PI-P,s,A,b,l,p,d,v,x,U),t){for(S[R++]=L.x,S[R++]=L.y,S[R++]=L.z,T=2*w+2,N=1;N<T-1;++N)j=N/(T-1),M=i["a"].lerp(L,U,j,_),S[R++]=M.x,S[R++]=M.y,S[R++]=M.z;S[R++]=U.x,S[R++]=U.y,S[R++]=U.z}a&&(V[F--]=L.z,V[F--]=L.y,V[F--]=L.x,V[k++]=U.x,V[k++]=U.y,V[k++]=U.z),P=n["a"].PI_OVER_TWO-(w+1)*I}for(w=E;w>1;--w){if(P=n["a"].PI_OVER_TWO-(w-1)*I,L=f(-P,s,A,b,l,p,d,v,x,L),U=f(P+Math.PI,s,A,b,l,p,d,v,x,U),t){for(S[R++]=L.x,S[R++]=L.y,S[R++]=L.z,T=2*(w-1)+2,N=1;N<T-1;++N)j=N/(T-1),M=i["a"].lerp(L,U,j,_),S[R++]=M.x,S[R++]=M.y,S[R++]=M.z;S[R++]=U.x,S[R++]=U.y,S[R++]=U.z}a&&(V[F--]=L.z,V[F--]=L.y,V[F--]=L.x,V[k++]=U.x,V[k++]=U.y,V[k++]=U.z)}P=n["a"].PI_OVER_TWO,L=f(-P,s,A,b,l,p,d,v,x,L);var B={};return t&&(S[R++]=L.x,S[R++]=L.y,S[R++]=L.z,B.positions=S,B.numPts=E),a&&(V[F--]=L.z,V[F--]=L.y,V[F--]=L.x,B.outerPositions=V),B},t["a"]=s}}]);