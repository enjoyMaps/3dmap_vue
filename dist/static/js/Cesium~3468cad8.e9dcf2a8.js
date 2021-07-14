(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~3468cad8"],{"1fe7":function(t,a,e){"use strict";var r=e("4f04"),n={packedLength:void 0,pack:r["a"].throwInstantiationError,unpack:r["a"].throwInstantiationError};a["a"]=n},"4dc8":function(t,a,e){"use strict";var r=e("be18"),n=e("a561"),o=e("2384"),i=e("535a"),s=e("2f63"),c=e("93da"),u=e("52f0");function f(t){t=Object(i["a"])(t,i["a"].EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=Object(i["a"])(t.near,1),this._near=this.near,this.far=Object(i["a"])(t.far,5e8),this._far=this.far,this._cullingVolume=new o["a"],this._perspectiveMatrix=new u["a"],this._infinitePerspective=new u["a"]}function h(t){var a=t.top,e=t.bottom,r=t.right,n=t.left,o=t.near,i=t.far;a===t._top&&e===t._bottom&&n===t._left&&r===t._right&&o===t._near&&i===t._far||(t._left=n,t._right=r,t._top=a,t._bottom=e,t._near=o,t._far=i,t._perspectiveMatrix=u["a"].computePerspectiveOffCenter(n,r,e,a,o,i,t._perspectiveMatrix),t._infinitePerspective=u["a"].computeInfinitePerspectiveOffCenter(n,r,e,a,o,t._infinitePerspective))}Object.defineProperties(f.prototype,{projectionMatrix:{get:function(){return h(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return h(this),this._infinitePerspective}}});var l=new r["a"],p=new r["a"],d=new r["a"],m=new r["a"];f.prototype.computeCullingVolume=function(t,a,e){var o=this._cullingVolume.planes,i=this.top,c=this.bottom,u=this.right,f=this.left,h=this.near,b=this.far,y=r["a"].cross(a,e,l),_=p;r["a"].multiplyByScalar(a,h,_),r["a"].add(t,_,_);var g=d;r["a"].multiplyByScalar(a,b,g),r["a"].add(t,g,g);var v=m;r["a"].multiplyByScalar(y,f,v),r["a"].add(_,v,v),r["a"].subtract(v,t,v),r["a"].normalize(v,v),r["a"].cross(v,e,v),r["a"].normalize(v,v);var O=o[0];return Object(s["a"])(O)||(O=o[0]=new n["a"]),O.x=v.x,O.y=v.y,O.z=v.z,O.w=-r["a"].dot(v,t),r["a"].multiplyByScalar(y,u,v),r["a"].add(_,v,v),r["a"].subtract(v,t,v),r["a"].cross(e,v,v),r["a"].normalize(v,v),O=o[1],Object(s["a"])(O)||(O=o[1]=new n["a"]),O.x=v.x,O.y=v.y,O.z=v.z,O.w=-r["a"].dot(v,t),r["a"].multiplyByScalar(e,c,v),r["a"].add(_,v,v),r["a"].subtract(v,t,v),r["a"].cross(y,v,v),r["a"].normalize(v,v),O=o[2],Object(s["a"])(O)||(O=o[2]=new n["a"]),O.x=v.x,O.y=v.y,O.z=v.z,O.w=-r["a"].dot(v,t),r["a"].multiplyByScalar(e,i,v),r["a"].add(_,v,v),r["a"].subtract(v,t,v),r["a"].cross(v,y,v),r["a"].normalize(v,v),O=o[3],Object(s["a"])(O)||(O=o[3]=new n["a"]),O.x=v.x,O.y=v.y,O.z=v.z,O.w=-r["a"].dot(v,t),O=o[4],Object(s["a"])(O)||(O=o[4]=new n["a"]),O.x=a.x,O.y=a.y,O.z=a.z,O.w=-r["a"].dot(a,_),r["a"].negate(a,v),O=o[5],Object(s["a"])(O)||(O=o[5]=new n["a"]),O.x=v.x,O.y=v.y,O.z=v.z,O.w=-r["a"].dot(v,g),this._cullingVolume},f.prototype.getPixelDimensions=function(t,a,e,r,n){h(this);var o=1/this.near,i=this.top*o,s=2*r*e*i/a;i=this.right*o;var c=2*r*e*i/t;return n.x=c,n.y=s,n},f.prototype.clone=function(t){return Object(s["a"])(t)||(t=new f),t.right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},f.prototype.equals=function(t){return Object(s["a"])(t)&&t instanceof f&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},f.prototype.equalsEpsilon=function(t,a,e){return t===this||Object(s["a"])(t)&&t instanceof f&&c["a"].equalsEpsilon(this.right,t.right,a,e)&&c["a"].equalsEpsilon(this.left,t.left,a,e)&&c["a"].equalsEpsilon(this.top,t.top,a,e)&&c["a"].equalsEpsilon(this.bottom,t.bottom,a,e)&&c["a"].equalsEpsilon(this.near,t.near,a,e)&&c["a"].equalsEpsilon(this.far,t.far,a,e)},a["a"]=f},"4e1a":function(t,a,e){"use strict";var r=e("535a"),n=e("2f63"),o=e("93da"),i=e("4dc8");function s(t){t=Object(r["a"])(t,r["a"].EMPTY_OBJECT),this._offCenterFrustum=new i["a"],this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=Object(r["a"])(t.near,1),this._near=this.near,this.far=Object(r["a"])(t.far,5e8),this._far=this.far,this.xOffset=Object(r["a"])(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=Object(r["a"])(t.yOffset,0),this._yOffset=this.yOffset}function c(t){var a=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,a.top=t.near*Math.tan(.5*t._fovy),a.bottom=-a.top,a.right=t.aspectRatio*a.top,a.left=-a.right,a.near=t.near,a.far=t.far,a.right+=t.xOffset,a.left+=t.xOffset,a.top+=t.yOffset,a.bottom+=t.yOffset)}s.packedLength=6,s.pack=function(t,a,e){return e=Object(r["a"])(e,0),a[e++]=t.fov,a[e++]=t.aspectRatio,a[e++]=t.near,a[e++]=t.far,a[e++]=t.xOffset,a[e]=t.yOffset,a},s.unpack=function(t,a,e){return a=Object(r["a"])(a,0),Object(n["a"])(e)||(e=new s),e.fov=t[a++],e.aspectRatio=t[a++],e.near=t[a++],e.far=t[a++],e.xOffset=t[a++],e.yOffset=t[a],e},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return c(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return c(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return c(this),this._fovy}},sseDenominator:{get:function(){return c(this),this._sseDenominator}}}),s.prototype.computeCullingVolume=function(t,a,e){return c(this),this._offCenterFrustum.computeCullingVolume(t,a,e)},s.prototype.getPixelDimensions=function(t,a,e,r,n){return c(this),this._offCenterFrustum.getPixelDimensions(t,a,e,r,n)},s.prototype.clone=function(t){return Object(n["a"])(t)||(t=new s),t.aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},s.prototype.equals=function(t){return!!(Object(n["a"])(t)&&t instanceof s)&&(c(this),c(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},s.prototype.equalsEpsilon=function(t,a,e){return!!(Object(n["a"])(t)&&t instanceof s)&&(c(this),c(t),o["a"].equalsEpsilon(this.fov,t.fov,a,e)&&o["a"].equalsEpsilon(this.aspectRatio,t.aspectRatio,a,e)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,a,e))},a["a"]=s},"713f":function(t,a,e){"use strict";var r=e("535a"),n=e("2f63"),o=e("93da"),i=e("c34a");function s(t){t=Object(r["a"])(t,r["a"].EMPTY_OBJECT),this._offCenterFrustum=new i["a"],this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=Object(r["a"])(t.near,1),this._near=this.near,this.far=Object(r["a"])(t.far,5e8),this._far=this.far}function c(t){var a=t._offCenterFrustum;if(t.width!==t._width||t.aspectRatio!==t._aspectRatio||t.near!==t._near||t.far!==t._far){t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far;var e=1/t.aspectRatio;a.right=.5*t.width,a.left=-a.right,a.top=e*a.right,a.bottom=-a.top,a.near=t.near,a.far=t.far}}s.packedLength=4,s.pack=function(t,a,e){return e=Object(r["a"])(e,0),a[e++]=t.width,a[e++]=t.aspectRatio,a[e++]=t.near,a[e]=t.far,a},s.unpack=function(t,a,e){return a=Object(r["a"])(a,0),Object(n["a"])(e)||(e=new s),e.width=t[a++],e.aspectRatio=t[a++],e.near=t[a++],e.far=t[a],e},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return c(this),this._offCenterFrustum.projectionMatrix}}}),s.prototype.computeCullingVolume=function(t,a,e){return c(this),this._offCenterFrustum.computeCullingVolume(t,a,e)},s.prototype.getPixelDimensions=function(t,a,e,r,n){return c(this),this._offCenterFrustum.getPixelDimensions(t,a,e,r,n)},s.prototype.clone=function(t){return Object(n["a"])(t)||(t=new s),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},s.prototype.equals=function(t){return!!(Object(n["a"])(t)&&t instanceof s)&&(c(this),c(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},s.prototype.equalsEpsilon=function(t,a,e){return!!(Object(n["a"])(t)&&t instanceof s)&&(c(this),c(t),o["a"].equalsEpsilon(this.width,t.width,a,e)&&o["a"].equalsEpsilon(this.aspectRatio,t.aspectRatio,a,e)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,a,e))},a["a"]=s},"78e5":function(t,a,e){"use strict";var r=e("cef5"),n=e("670c"),o=e("be18"),i=e("bef8"),s=e("535a"),c=e("2f63"),u=e("c52f"),f=e("a3bd"),h=e("66bf"),l=e("017a"),p=e("93da"),d=e("df07"),m=e("188e"),b=e("eace");function y(t,a){this.center=o["a"].clone(Object(s["a"])(t,o["a"].ZERO)),this.halfAxes=d["a"].clone(Object(s["a"])(a,d["a"].ZERO))}y.packedLength=o["a"].packedLength+d["a"].packedLength,y.pack=function(t,a,e){return e=Object(s["a"])(e,0),o["a"].pack(t.center,a,e),d["a"].pack(t.halfAxes,a,e+o["a"].packedLength),a},y.unpack=function(t,a,e){return a=Object(s["a"])(a,0),Object(c["a"])(e)||(e=new y),o["a"].unpack(t,a,e.center),d["a"].unpack(t,a+o["a"].packedLength,e.halfAxes),e};var _=new o["a"],g=new o["a"],v=new o["a"],O=new o["a"],w=new o["a"],x=new o["a"],j=new d["a"],C={unitary:new d["a"],diagonal:new d["a"]};y.fromPoints=function(t,a){if(Object(c["a"])(a)||(a=new y),!Object(c["a"])(t)||0===t.length)return a.halfAxes=d["a"].ZERO,a.center=o["a"].ZERO,a;var e,r=t.length,n=o["a"].clone(t[0],_);for(e=1;e<r;e++)o["a"].add(n,t[e],n);var i=1/r;o["a"].multiplyByScalar(n,i,n);var s,u=0,f=0,h=0,l=0,p=0,m=0;for(e=0;e<r;e++)s=o["a"].subtract(t[e],n,g),u+=s.x*s.x,f+=s.x*s.y,h+=s.x*s.z,l+=s.y*s.y,p+=s.y*s.z,m+=s.z*s.z;u*=i,f*=i,h*=i,l*=i,p*=i,m*=i;var b=j;b[0]=u,b[1]=f,b[2]=h,b[3]=f,b[4]=l,b[5]=p,b[6]=h,b[7]=p,b[8]=m;var M=d["a"].computeEigenDecomposition(b,C),R=d["a"].clone(M.unitary,a.halfAxes),P=d["a"].getColumn(R,0,O),z=d["a"].getColumn(R,1,w),E=d["a"].getColumn(R,2,x),T=-Number.MAX_VALUE,I=-Number.MAX_VALUE,N=-Number.MAX_VALUE,A=Number.MAX_VALUE,S=Number.MAX_VALUE,q=Number.MAX_VALUE;for(e=0;e<r;e++)s=t[e],T=Math.max(o["a"].dot(P,s),T),I=Math.max(o["a"].dot(z,s),I),N=Math.max(o["a"].dot(E,s),N),A=Math.min(o["a"].dot(P,s),A),S=Math.min(o["a"].dot(z,s),S),q=Math.min(o["a"].dot(E,s),q);P=o["a"].multiplyByScalar(P,.5*(A+T),P),z=o["a"].multiplyByScalar(z,.5*(S+I),z),E=o["a"].multiplyByScalar(E,.5*(q+N),E);var F=o["a"].add(P,z,a.center);o["a"].add(F,E,F);var k=v;return k.x=T-A,k.y=I-S,k.z=N-q,o["a"].multiplyByScalar(k,.5,k),d["a"].multiplyByScale(a.halfAxes,k,a.halfAxes),a};var M=new o["a"],R=new o["a"];function P(t,a,e,r,n,i,s,u,f,h,l){Object(c["a"])(l)||(l=new y);var p=l.halfAxes;d["a"].setColumn(p,0,a,p),d["a"].setColumn(p,1,e,p),d["a"].setColumn(p,2,r,p);var m=M;m.x=(n+i)/2,m.y=(s+u)/2,m.z=(f+h)/2;var b=R;b.x=(i-n)/2,b.y=(u-s)/2,b.z=(h-f)/2;var _=l.center;return m=d["a"].multiplyByVector(p,m,m),o["a"].add(t,m,_),d["a"].multiplyByScale(p,b,p),l}var z=new i["a"],E=new o["a"],T=new i["a"],I=new i["a"],N=new i["a"],A=new i["a"],S=new i["a"],q=new o["a"],F=new o["a"],k=new o["a"],L=new o["a"],B=new o["a"],D=new n["a"],V=new n["a"],U=new n["a"],W=new n["a"],J=new n["a"],X=new o["a"],Y=new o["a"],Z=new o["a"],G=new o["a"],H=new n["a"],K=new o["a"],Q=new o["a"],$=new o["a"],tt=new m["a"](o["a"].UNIT_X,0);y.fromRectangle=function(t,a,e,r,n){var c,h,l,d,y,_,g;if(a=Object(s["a"])(a,0),e=Object(s["a"])(e,0),r=Object(s["a"])(r,u["a"].WGS84),t.width<=p["a"].PI){var v=b["a"].center(t,z),O=r.cartographicToCartesian(v,E),w=new f["a"](O,r);g=w.plane;var x=v.longitude,j=t.south<0&&t.north>0?0:v.latitude,C=i["a"].fromRadians(x,t.north,e,T),M=i["a"].fromRadians(t.west,t.north,e,I),R=i["a"].fromRadians(t.west,j,e,N),at=i["a"].fromRadians(t.west,t.south,e,A),et=i["a"].fromRadians(x,t.south,e,S),rt=r.cartographicToCartesian(C,q),nt=r.cartographicToCartesian(M,F),ot=r.cartographicToCartesian(R,k),it=r.cartographicToCartesian(at,L),st=r.cartographicToCartesian(et,B),ct=w.projectPointToNearestOnPlane(rt,D),ut=w.projectPointToNearestOnPlane(nt,V),ft=w.projectPointToNearestOnPlane(ot,U),ht=w.projectPointToNearestOnPlane(it,W),lt=w.projectPointToNearestOnPlane(st,J);return c=Math.min(ut.x,ft.x,ht.x),h=-c,d=Math.max(ut.y,ct.y),l=Math.min(ht.y,lt.y),M.height=at.height=a,nt=r.cartographicToCartesian(M,F),it=r.cartographicToCartesian(at,L),y=Math.min(m["a"].getPointDistance(g,nt),m["a"].getPointDistance(g,it)),_=e,P(w.origin,w.xAxis,w.yAxis,w.zAxis,c,h,l,d,y,_,n)}var pt=t.south>0,dt=t.north<0,mt=pt?t.south:dt?t.north:0,bt=b["a"].center(t,z).longitude,yt=o["a"].fromRadians(bt,mt,e,r,X);yt.z=0;var _t=Math.abs(yt.x)<p["a"].EPSILON10&&Math.abs(yt.y)<p["a"].EPSILON10,gt=_t?o["a"].UNIT_X:o["a"].normalize(yt,Y),vt=o["a"].UNIT_Z,Ot=o["a"].cross(gt,vt,Z);g=m["a"].fromPointNormal(yt,gt,tt);var wt=o["a"].fromRadians(bt+p["a"].PI_OVER_TWO,mt,e,r,G);h=o["a"].dot(m["a"].projectPointOntoPlane(g,wt,H),Ot),c=-h,d=o["a"].fromRadians(0,t.north,dt?a:e,r,K).z,l=o["a"].fromRadians(0,t.south,pt?a:e,r,Q).z;var xt=o["a"].fromRadians(t.east,mt,e,r,$);return y=m["a"].getPointDistance(g,xt),_=0,P(yt,Ot,vt,gt,c,h,l,d,y,_,n)},y.clone=function(t,a){if(Object(c["a"])(t))return Object(c["a"])(a)?(o["a"].clone(t.center,a.center),d["a"].clone(t.halfAxes,a.halfAxes),a):new y(t.center,t.halfAxes)},y.intersectPlane=function(t,a){var e=t.center,r=a.normal,n=t.halfAxes,i=r.x,s=r.y,c=r.z,u=Math.abs(i*n[d["a"].COLUMN0ROW0]+s*n[d["a"].COLUMN0ROW1]+c*n[d["a"].COLUMN0ROW2])+Math.abs(i*n[d["a"].COLUMN1ROW0]+s*n[d["a"].COLUMN1ROW1]+c*n[d["a"].COLUMN1ROW2])+Math.abs(i*n[d["a"].COLUMN2ROW0]+s*n[d["a"].COLUMN2ROW1]+c*n[d["a"].COLUMN2ROW2]),f=o["a"].dot(r,e)+a.distance;return f<=-u?h["a"].OUTSIDE:f>=u?h["a"].INSIDE:h["a"].INTERSECTING};var at=new o["a"],et=new o["a"],rt=new o["a"],nt=new o["a"];y.distanceSquaredTo=function(t,a){var e=o["a"].subtract(a,t.center,M),r=t.halfAxes,n=d["a"].getColumn(r,0,at),i=d["a"].getColumn(r,1,et),s=d["a"].getColumn(r,2,rt),c=o["a"].magnitude(n),u=o["a"].magnitude(i),f=o["a"].magnitude(s);o["a"].normalize(n,n),o["a"].normalize(i,i),o["a"].normalize(s,s);var h=nt;h.x=o["a"].dot(e,n),h.y=o["a"].dot(e,i),h.z=o["a"].dot(e,s);var l,p=0;return h.x<-c?(l=h.x+c,p+=l*l):h.x>c&&(l=h.x-c,p+=l*l),h.y<-u?(l=h.y+u,p+=l*l):h.y>u&&(l=h.y-u,p+=l*l),h.z<-f?(l=h.z+f,p+=l*l):h.z>f&&(l=h.z-f,p+=l*l),p};var ot=new o["a"],it=new o["a"];y.computePlaneDistances=function(t,a,e,r){Object(c["a"])(r)||(r=new l["a"]);var n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=t.center,u=t.halfAxes,f=d["a"].getColumn(u,0,at),h=d["a"].getColumn(u,1,et),p=d["a"].getColumn(u,2,rt),m=o["a"].add(f,h,ot);o["a"].add(m,p,m),o["a"].add(m,s,m);var b=o["a"].subtract(m,a,it),y=o["a"].dot(e,b);return n=Math.min(y,n),i=Math.max(y,i),o["a"].add(s,f,m),o["a"].add(m,h,m),o["a"].subtract(m,p,m),o["a"].subtract(m,a,b),y=o["a"].dot(e,b),n=Math.min(y,n),i=Math.max(y,i),o["a"].add(s,f,m),o["a"].subtract(m,h,m),o["a"].add(m,p,m),o["a"].subtract(m,a,b),y=o["a"].dot(e,b),n=Math.min(y,n),i=Math.max(y,i),o["a"].add(s,f,m),o["a"].subtract(m,h,m),o["a"].subtract(m,p,m),o["a"].subtract(m,a,b),y=o["a"].dot(e,b),n=Math.min(y,n),i=Math.max(y,i),o["a"].subtract(s,f,m),o["a"].add(m,h,m),o["a"].add(m,p,m),o["a"].subtract(m,a,b),y=o["a"].dot(e,b),n=Math.min(y,n),i=Math.max(y,i),o["a"].subtract(s,f,m),o["a"].add(m,h,m),o["a"].subtract(m,p,m),o["a"].subtract(m,a,b),y=o["a"].dot(e,b),n=Math.min(y,n),i=Math.max(y,i),o["a"].subtract(s,f,m),o["a"].subtract(m,h,m),o["a"].add(m,p,m),o["a"].subtract(m,a,b),y=o["a"].dot(e,b),n=Math.min(y,n),i=Math.max(y,i),o["a"].subtract(s,f,m),o["a"].subtract(m,h,m),o["a"].subtract(m,p,m),o["a"].subtract(m,a,b),y=o["a"].dot(e,b),n=Math.min(y,n),i=Math.max(y,i),r.start=n,r.stop=i,r};var st=new r["a"];y.isOccluded=function(t,a){var e=r["a"].fromOrientedBoundingBox(t,st);return!a.isBoundingSphereVisible(e)},y.prototype.intersectPlane=function(t){return y.intersectPlane(this,t)},y.prototype.distanceSquaredTo=function(t){return y.distanceSquaredTo(this,t)},y.prototype.computePlaneDistances=function(t,a,e){return y.computePlaneDistances(this,t,a,e)},y.prototype.isOccluded=function(t){return y.isOccluded(this,t)},y.equals=function(t,a){return t===a||Object(c["a"])(t)&&Object(c["a"])(a)&&o["a"].equals(t.center,a.center)&&d["a"].equals(t.halfAxes,a.halfAxes)},y.prototype.clone=function(t){return y.clone(this,t)},y.prototype.equals=function(t){return y.equals(this,t)},a["a"]=y},9856:function(t,a,e){"use strict";var r=e("be18"),n=e("2bb9"),o=e("535a"),i=e("2f63"),s=e("eace"),c=e("d4ed");function u(t,a,e){t=c["a"].createIfNeeded(t),t.appendForwardSlash(),t.setQueryParameters({key:a}),this._url=t,this._params=Object(o["a"])(e,{})}Object.defineProperties(u.prototype,{url:{get:function(){return this._url}},params:{get:function(){return this._params}}}),u.prototype.geocode=function(t){var a=this._url.getDerivedResource({url:"json",queryParameters:Object(n["a"])(this._params,{q:t})});return a.fetchJson().then((function(t){return t.results.map((function(t){var a,e=t.bounds;if(Object(i["a"])(e))a=s["a"].fromDegrees(e.southwest.lng,e.southwest.lat,e.northeast.lng,e.northeast.lat);else{var n=t.geometry.lat,o=t.geometry.lng;a=r["a"].fromDegrees(n,o)}return{displayName:t.formatted,destination:a}}))}))},a["a"]=u},c2eb:function(t,a,e){"use strict";var r=e("abab"),n=e("535a"),o=e("2f63");function i(t,a,e){t=Object(n["a"])(t,0),a=Object(n["a"])(a,0),e=Object(n["a"])(e,0),this.value=new Float32Array([t,a,e])}Object.defineProperties(i.prototype,{componentDatatype:{get:function(){return r["a"].FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),i.fromCartesian3=function(t){return new i(t.x,t.y,t.z)},i.toValue=function(t,a){return Object(o["a"])(a)||(a=new Float32Array([t.x,t.y,t.z])),a[0]=t.x,a[1]=t.y,a[2]=t.z,a},a["a"]=i},c34a:function(t,a,e){"use strict";var r=e("be18"),n=e("a561"),o=e("2384"),i=e("535a"),s=e("2f63"),c=e("93da"),u=e("52f0");function f(t){t=Object(i["a"])(t,i["a"].EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=Object(i["a"])(t.near,1),this._near=this.near,this.far=Object(i["a"])(t.far,5e8),this._far=this.far,this._cullingVolume=new o["a"],this._orthographicMatrix=new u["a"]}function h(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=u["a"].computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}Object.defineProperties(f.prototype,{projectionMatrix:{get:function(){return h(this),this._orthographicMatrix}}});var l=new r["a"],p=new r["a"],d=new r["a"],m=new r["a"];f.prototype.computeCullingVolume=function(t,a,e){var o=this._cullingVolume.planes,i=this.top,c=this.bottom,u=this.right,f=this.left,h=this.near,b=this.far,y=r["a"].cross(a,e,l);r["a"].normalize(y,y);var _=p;r["a"].multiplyByScalar(a,h,_),r["a"].add(t,_,_);var g=d;r["a"].multiplyByScalar(y,f,g),r["a"].add(_,g,g);var v=o[0];return Object(s["a"])(v)||(v=o[0]=new n["a"]),v.x=y.x,v.y=y.y,v.z=y.z,v.w=-r["a"].dot(y,g),r["a"].multiplyByScalar(y,u,g),r["a"].add(_,g,g),v=o[1],Object(s["a"])(v)||(v=o[1]=new n["a"]),v.x=-y.x,v.y=-y.y,v.z=-y.z,v.w=-r["a"].dot(r["a"].negate(y,m),g),r["a"].multiplyByScalar(e,c,g),r["a"].add(_,g,g),v=o[2],Object(s["a"])(v)||(v=o[2]=new n["a"]),v.x=e.x,v.y=e.y,v.z=e.z,v.w=-r["a"].dot(e,g),r["a"].multiplyByScalar(e,i,g),r["a"].add(_,g,g),v=o[3],Object(s["a"])(v)||(v=o[3]=new n["a"]),v.x=-e.x,v.y=-e.y,v.z=-e.z,v.w=-r["a"].dot(r["a"].negate(e,m),g),v=o[4],Object(s["a"])(v)||(v=o[4]=new n["a"]),v.x=a.x,v.y=a.y,v.z=a.z,v.w=-r["a"].dot(a,_),r["a"].multiplyByScalar(a,b,g),r["a"].add(t,g,g),v=o[5],Object(s["a"])(v)||(v=o[5]=new n["a"]),v.x=-a.x,v.y=-a.y,v.z=-a.z,v.w=-r["a"].dot(r["a"].negate(a,m),g),this._cullingVolume},f.prototype.getPixelDimensions=function(t,a,e,r,n){h(this);var o=this.right-this.left,i=this.top-this.bottom,s=r*o/t,c=r*i/a;return n.x=s,n.y=c,n},f.prototype.clone=function(t){return Object(s["a"])(t)||(t=new f),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},f.prototype.equals=function(t){return Object(s["a"])(t)&&t instanceof f&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},f.prototype.equalsEpsilon=function(t,a,e){return t===this||Object(s["a"])(t)&&t instanceof f&&c["a"].equalsEpsilon(this.right,t.right,a,e)&&c["a"].equalsEpsilon(this.left,t.left,a,e)&&c["a"].equalsEpsilon(this.top,t.top,a,e)&&c["a"].equalsEpsilon(this.bottom,t.bottom,a,e)&&c["a"].equalsEpsilon(this.near,t.near,a,e)&&c["a"].equalsEpsilon(this.far,t.far,a,e)},a["a"]=f},c630:function(t,a,e){"use strict";var r=e("be18"),n=e("2f63"),o=e("ee94"),i=e("eace"),s=e("d4ed");function c(t){this._url=s["a"].createIfNeeded(t),this._url.appendForwardSlash()}Object.defineProperties(c.prototype,{url:{get:function(){return this._url}}}),c.prototype.geocode=function(t,a){var e=this._url.getDerivedResource({url:a===o["a"].AUTOCOMPLETE?"autocomplete":"search",queryParameters:{text:t}});return e.fetchJson().then((function(t){return t.features.map((function(t){var a,e=t.bbox;if(Object(n["a"])(e))a=i["a"].fromDegrees(e[0],e[1],e[2],e[3]);else{var o=t.geometry.coordinates[0],s=t.geometry.coordinates[1];a=r["a"].fromDegrees(o,s)}return{displayName:t.properties.label,destination:a}}))}))},a["a"]=c},ee11:function(t,a,e){"use strict";var r=e("7229"),n=e("bd8d"),o=e("2f63"),i=e("d4ed"),s=e("2812");function c(){this._cache={}}c.prototype.fromColor=function(t,a){return p(void 0,void 0,t,a,this._cache)},c.prototype.fromUrl=function(t,a,e){return p(t,void 0,a,e,this._cache)},c.prototype.fromMakiIconId=function(t,a,e){return p(Object(r["a"])("Assets/Textures/maki/"+encodeURIComponent(t)+".png"),void 0,a,e,this._cache)},c.prototype.fromText=function(t,a,e){return p(void 0,t,a,e,this._cache)};var u=new n["a"];function f(t,a,e){t.save(),t.scale(e/24,e/24),t.fillStyle=a.toCssColorString(),t.strokeStyle=a.brighten(.6,u).toCssColorString(),t.lineWidth=.846,t.beginPath(),t.moveTo(6.72,.422),t.lineTo(17.28,.422),t.bezierCurveTo(18.553,.422,19.577,1.758,19.577,3.415),t.lineTo(19.577,10.973),t.bezierCurveTo(19.577,12.63,18.553,13.966,17.282,13.966),t.lineTo(14.386,14.008),t.lineTo(11.826,23.578),t.lineTo(9.614,14.008),t.lineTo(6.719,13.965),t.bezierCurveTo(5.446,13.983,4.422,12.629,4.422,10.972),t.lineTo(4.422,3.416),t.bezierCurveTo(4.423,1.76,5.447,.423,6.718,.423),t.closePath(),t.fill(),t.stroke(),t.restore()}function h(t,a,e){var r=e/2.5,o=r,i=r;a.width>a.height?i=r*(a.height/a.width):a.width<a.height&&(o=r*(a.width/a.height));var s=Math.round((e-o)/2),c=Math.round(7/24*e-i/2);t.globalCompositeOperation="destination-out",t.drawImage(a,s-1,c,o,i),t.drawImage(a,s,c-1,o,i),t.drawImage(a,s+1,c,o,i),t.drawImage(a,s,c+1,o,i),t.globalCompositeOperation="destination-over",t.fillStyle=n["a"].BLACK.toCssColorString(),t.fillRect(s-1,c-1,o+2,i+2),t.globalCompositeOperation="destination-out",t.drawImage(a,s,c,o,i),t.globalCompositeOperation="destination-over",t.fillStyle=n["a"].WHITE.toCssColorString(),t.fillRect(s-1,c-2,o+2,i+2)}var l=new Array(4);function p(t,a,e,r,n){l[0]=t,l[1]=a,l[2]=e,l[3]=r;var c=JSON.stringify(l),u=n[c];if(Object(o["a"])(u))return u;var p=document.createElement("canvas");p.width=r,p.height=r;var d=p.getContext("2d");if(f(d,e,r),Object(o["a"])(t)){var m=i["a"].createIfNeeded(t),b=m.fetchImage().then((function(t){return h(d,t,r),n[c]=p,p}));return n[c]=b,b}if(Object(o["a"])(a)){var y=Object(s["a"])(a,{font:"bold "+r+"px sans-serif"});h(d,y,r)}return n[c]=p,p}a["a"]=c},f324:function(t,a,e){"use strict";var r=e("4f04"),n={packedInterpolationLength:void 0,convertPackedArrayForInterpolation:r["a"].throwInstantiationError,unpackInterpolationResult:r["a"].throwInstantiationError};a["a"]=n}}]);