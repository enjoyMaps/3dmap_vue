(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~435fd353"],{"59d5":function(a,i,t){"use strict";var e=t("670c"),o=t("be18"),n=t("a561"),r=t("bef8"),s=t("535a"),l=t("2f63"),c=t("7d62"),m=t("c52f"),d=t("8dd9"),_=t("5410"),u=t("c8ed"),g=t("93da"),h=t("df07"),v=t("52f0"),p=t("713f"),f=t("188e"),P=t("0260"),T=t("2ac3"),b=t("f806"),y=t("691b"),w=t("8909"),E=t("482f"),M=t("a307"),R=t("0c80"),O=t("619f");function x(a){this.enableInputs=!0,this.enableTranslate=!0,this.enableZoom=!0,this.enableRotate=!0,this.enableTilt=!0,this.enableLook=!0,this.inertiaSpin=.9,this.inertiaTranslate=.9,this.inertiaZoom=.8,this.maximumMovementRatio=.1,this.bounceAnimationTime=3,this.minimumZoomDistance=1,this.maximumZoomDistance=Number.POSITIVE_INFINITY,this.translateEventTypes=w["a"].LEFT_DRAG,this.zoomEventTypes=[w["a"].RIGHT_DRAG,w["a"].WHEEL,w["a"].PINCH],this.rotateEventTypes=w["a"].LEFT_DRAG,this.tiltEventTypes=[w["a"].MIDDLE_DRAG,w["a"].PINCH,{eventType:w["a"].LEFT_DRAG,modifier:u["a"].CTRL},{eventType:w["a"].RIGHT_DRAG,modifier:u["a"].CTRL}],this.lookEventTypes={eventType:w["a"].LEFT_DRAG,modifier:u["a"].SHIFT},this.minimumPickingTerrainHeight=15e4,this._minimumPickingTerrainHeight=this.minimumPickingTerrainHeight,this.minimumCollisionTerrainHeight=15e3,this._minimumCollisionTerrainHeight=this.minimumCollisionTerrainHeight,this.minimumTrackBallHeight=75e5,this._minimumTrackBallHeight=this.minimumTrackBallHeight,this.enableCollisionDetection=!0,this._scene=a,this._globe=void 0,this._ellipsoid=void 0,this._aggregator=new y["a"](a.canvas),this._lastInertiaSpinMovement=void 0,this._lastInertiaZoomMovement=void 0,this._lastInertiaTranslateMovement=void 0,this._lastInertiaTiltMovement=void 0,this._inertiaDisablers={_lastInertiaZoomMovement:["_lastInertiaSpinMovement","_lastInertiaTranslateMovement","_lastInertiaTiltMovement"],_lastInertiaTiltMovement:["_lastInertiaSpinMovement","_lastInertiaTranslateMovement"]},this._tweens=new O["a"],this._tween=void 0,this._horizontalRotationAxis=void 0,this._tiltCenterMousePosition=new e["a"](-1,-1),this._tiltCenter=new o["a"],this._rotateMousePosition=new e["a"](-1,-1),this._rotateStartPosition=new o["a"],this._strafeStartPosition=new o["a"],this._strafeMousePosition=new e["a"],this._strafeEndMousePosition=new e["a"],this._zoomMouseStart=new e["a"](-1,-1),this._zoomWorldPosition=new o["a"],this._useZoomWorldPosition=!1,this._tiltCVOffMap=!1,this._looking=!1,this._rotating=!1,this._strafing=!1,this._zoomingOnVector=!1,this._zoomingUnderground=!1,this._rotatingZoom=!1,this._adjustedHeightForTerrain=!1,this._cameraUnderground=!1;var i=a.mapProjection;this._maxCoord=i.project(new r["a"](Math.PI,g["a"].PI_OVER_TWO)),this._zoomFactor=5,this._rotateFactor=void 0,this._rotateRateRangeAdjustment=void 0,this._maximumRotateRate=1.77,this._minimumRotateRate=2e-4,this._minimumZoomRate=20,this._maximumZoomRate=5906376272e3,this._minimumUndergroundPickDistance=2e3,this._maximumUndergroundPickDistance=1e4}function I(a,i){if(a<0)return 0;var t=25*(1-i);return Math.exp(-t*a)}function C(a){return e["a"].equalsEpsilon(a.startPosition,a.endPosition,g["a"].EPSILON14)}var z=.4;function j(a,i,t,o,n,r,s){var c=r[s];Object(l["a"])(c)||(c=r[s]={startPosition:new e["a"],endPosition:new e["a"],motion:new e["a"],inertiaEnabled:!0});var m=a.getButtonPressTime(i,t),d=a.getButtonReleaseTime(i,t),_=m&&d&&(d.getTime()-m.getTime())/1e3,u=new Date,g=d&&(u.getTime()-d.getTime())/1e3;if(m&&d&&_<z){var h=I(g,o),v=a.getLastMovement(i,t);if(!Object(l["a"])(v)||C(v)||!c.inertiaEnabled)return;if(c.motion.x=.5*(v.endPosition.x-v.startPosition.x),c.motion.y=.5*(v.endPosition.y-v.startPosition.y),c.startPosition=e["a"].clone(v.startPosition,c.startPosition),c.endPosition=e["a"].multiplyByScalar(c.motion,h,c.endPosition),c.endPosition=e["a"].add(c.startPosition,c.endPosition,c.endPosition),isNaN(c.endPosition.x)||isNaN(c.endPosition.y)||e["a"].distance(c.startPosition,c.endPosition)<.5)return;if(!a.isButtonDown(i,t)){var p=a.getStartMousePosition(i,t);n(r,p,c)}}}function S(a,i){if(Object(l["a"])(i)){var t=a[i];Object(l["a"])(t)&&(t.inertiaEnabled=!0);var e=a._inertiaDisablers[i];if(Object(l["a"])(e))for(var o=e.length,n=0;n<o;++n)t=a[e[n]],Object(l["a"])(t)&&(t.inertiaEnabled=!1)}}var k=[];function N(a,i,t,e,o,n){if(Object(l["a"])(t)){var r=a._aggregator;Array.isArray(t)||(k[0]=t,t=k);for(var s=t.length,c=0;c<s;++c){var m=t[c],d=Object(l["a"])(m.eventType)?m.eventType:m,_=m.modifier,u=r.isMoving(d,_)&&r.getMovement(d,_),g=r.getStartMousePosition(d,_);a.enableInputs&&i&&(u?(e(a,g,u),S(a,n)):o<1&&j(r,d,_,o,e,a,n))}}}var U=new T["a"],H=new o["a"],A=new e["a"],W=new o["a"],D=new e["a"],Z=new o["a"],B=new o["a"],F=new o["a"],L=new o["a"],q=new o["a"],V=new o["a"],G=new o["a"],Y=new o["a"],X=new o["a"],J=new o["a"],Q=new o["a"],K=new o["a"],$=new o["a"],aa=new o["a"],ia=new o["a"],ta=new o["a"],ea=new o["a"],oa=new o["a"],na={orientation:new d["a"]};function ra(a,i,t,n,r,s){var c=1;Object(l["a"])(s)&&(c=g["a"].clamp(Math.abs(s),.25,1));var m=a.minimumZoomDistance*c,d=a.maximumZoomDistance,_=r-m,u=n*_;u=g["a"].clamp(u,a._minimumZoomRate,a._maximumZoomRate);var h=t.endPosition.y-t.startPosition.y,v=h/a._scene.canvas.clientHeight;v=Math.min(v,a.maximumMovementRatio);var f=u*v;if(a.enableCollisionDetection||0===a.minimumZoomDistance||!Object(l["a"])(a._globe)){if(f>0&&Math.abs(r-m)<1)return;if(f<0&&Math.abs(r-d)<1)return;r-f<m?f=r-m-1:r-f>d&&(f=r-d)}var P=a._scene,T=P.camera,b=P.mode,y=na.orientation;if(y.heading=T.heading,y.pitch=T.pitch,y.roll=T.roll,T.frustum instanceof p["a"])Math.abs(f)>0&&(T.zoomIn(f),T._adjustOrthographicFrustum());else{var w,E=e["a"].equals(i,a._zoomMouseStart),O=a._zoomingOnVector,x=a._rotatingZoom;if(E||(a._zoomMouseStart=e["a"].clone(i,a._zoomMouseStart),Object(l["a"])(a._globe)&&(b===M["a"].SCENE2D?(w=T.getPickRay(i,U).origin,w=o["a"].fromElements(w.y,w.z,w.x)):w=Ta(a,i,H)),Object(l["a"])(w)?(a._useZoomWorldPosition=!0,a._zoomWorldPosition=o["a"].clone(w,a._zoomWorldPosition)):a._useZoomWorldPosition=!1,O=a._zoomingOnVector=!1,x=a._rotatingZoom=!1,a._zoomingUnderground=a._cameraUnderground),a._useZoomWorldPosition){var I=b===M["a"].COLUMBUS_VIEW;if(T.positionCartographic.height<2e6&&(x=!0),!E||x){if(b===M["a"].SCENE2D){var C=a._zoomWorldPosition,z=T.position;if(!o["a"].equals(C,z)&&T.positionCartographic.height<2*a._maxCoord.x){var j=T.position.x,S=o["a"].subtract(C,z,W);o["a"].normalize(S,S);var k=o["a"].distance(C,z)*f/(.5*T.getMagnitude());T.move(S,.5*k),(T.position.x<0&&j>0||T.position.x>0&&j<0)&&(w=T.getPickRay(i,U).origin,w=o["a"].fromElements(w.y,w.z,w.x),a._zoomWorldPosition=o["a"].clone(w,a._zoomWorldPosition))}}else if(b===M["a"].SCENE3D){var N=o["a"].normalize(T.position,q);if(a._cameraUnderground||a._zoomingUnderground||T.positionCartographic.height<3e3&&Math.abs(o["a"].dot(T.direction,N))<.6)I=!0;else{var ra=P.canvas,sa=D;sa.x=ra.clientWidth/2,sa.y=ra.clientHeight/2;var la=Ta(a,sa,Z);if(Object(l["a"])(la))if(T.positionCartographic.height<1e6){if(!(o["a"].dot(T.direction,N)>=-.5)){var ca=G;o["a"].clone(T.position,ca);var ma=a._zoomWorldPosition,da=V;if(da=o["a"].normalize(ma,da),o["a"].dot(da,N)<0)return;var _a=ia,ua=J;o["a"].clone(T.direction,ua),o["a"].add(ca,o["a"].multiplyByScalar(ua,1e3,ta),_a);var ga=Q,ha=K;o["a"].subtract(ma,ca,ga),o["a"].normalize(ga,ha);var va=o["a"].dot(N,ha);if(va>=0)return void(a._zoomMouseStart.x=-1);var pa=Math.acos(-va),fa=o["a"].magnitude(ca),Pa=o["a"].magnitude(ma),ba=fa-f,ya=o["a"].magnitude(ga),wa=Math.asin(g["a"].clamp(ya/Pa*Math.sin(pa),-1,1)),Ea=Math.asin(g["a"].clamp(ba/Pa*Math.sin(pa),-1,1)),Ma=wa-Ea+pa,Ra=Y;o["a"].normalize(ca,Ra);var Oa=X;Oa=o["a"].cross(ha,Ra,Oa),Oa=o["a"].normalize(Oa,Oa),o["a"].normalize(o["a"].cross(Ra,Oa,ta),ua),o["a"].multiplyByScalar(o["a"].normalize(_a,ta),o["a"].magnitude(_a)-f,_a),o["a"].normalize(ca,ca),o["a"].multiplyByScalar(ca,ba,ca);var xa=$;o["a"].multiplyByScalar(o["a"].add(o["a"].multiplyByScalar(Ra,Math.cos(Ma)-1,ea),o["a"].multiplyByScalar(ua,Math.sin(Ma),oa),ta),ba,xa),o["a"].add(ca,xa,ca),o["a"].normalize(_a,Ra),o["a"].normalize(o["a"].cross(Ra,Oa,ta),ua);var Ia=aa;return o["a"].multiplyByScalar(o["a"].add(o["a"].multiplyByScalar(Ra,Math.cos(Ma)-1,ea),o["a"].multiplyByScalar(ua,Math.sin(Ma),oa),ta),o["a"].magnitude(_a),Ia),o["a"].add(_a,Ia,_a),o["a"].clone(ca,T.position),o["a"].normalize(o["a"].subtract(_a,ca,ta),T.direction),o["a"].clone(T.direction,T.direction),o["a"].cross(T.direction,T.up,T.right),o["a"].cross(T.right,T.direction,T.up),void T.setView(na)}I=!0}else{var Ca=o["a"].normalize(la,B),za=o["a"].normalize(a._zoomWorldPosition,F),ja=o["a"].dot(za,Ca);if(ja>0&&ja<1){var Sa=g["a"].acosClamped(ja),ka=o["a"].cross(za,Ca,L),Na=Math.abs(Sa)>g["a"].toRadians(20)?.75*T.positionCartographic.height:T.positionCartographic.height-f,Ua=f/Na;T.rotate(ka,Sa*Ua)}}else I=!0}}a._rotatingZoom=!I}if(!E&&I||O){var Ha,Aa=R["a"].wgs84ToWindowCoordinates(P,a._zoomWorldPosition,A);Ha=b!==M["a"].COLUMBUS_VIEW&&e["a"].equals(i,a._zoomMouseStart)&&Object(l["a"])(Aa)?T.getPickRay(Aa,U):T.getPickRay(i,U);var Wa=Ha.direction;b!==M["a"].COLUMBUS_VIEW&&b!==M["a"].SCENE2D||o["a"].fromElements(Wa.y,Wa.z,Wa.x,Wa),T.move(Wa,f),a._zoomingOnVector=!0}else T.zoomIn(f);a._cameraUnderground||T.setView(na)}else T.zoomIn(f)}}var sa=new T["a"],la=new T["a"],ca=new o["a"];function ma(a,i,t){var e=a._scene,n=e.camera,r=n.getPickRay(t.startPosition,sa).origin,s=n.getPickRay(t.endPosition,la).origin;r=o["a"].fromElements(r.y,r.z,r.x,r),s=o["a"].fromElements(s.y,s.z,s.x,s);var l=o["a"].subtract(r,s,ca),c=o["a"].magnitude(l);c>0&&(o["a"].normalize(l,l),n.move(l,c))}function da(a,i,t){Object(l["a"])(t.distance)&&(t=t.distance);var e=a._scene,o=e.camera;ra(a,i,t,a._zoomFactor,o.getMagnitude())}var _a=new e["a"],ua=new e["a"];function ga(a,i,t){if(Object(l["a"])(t.angleAndHeight))ha(a,i,t.angleAndHeight);else{var o=a._scene,n=o.camera,r=o.canvas,s=r.clientWidth,c=r.clientHeight,m=_a;m.x=2/s*t.startPosition.x-1,m.y=2/c*(c-t.startPosition.y)-1,m=e["a"].normalize(m,m);var d=ua;d.x=2/s*t.endPosition.x-1,d.y=2/c*(c-t.endPosition.y)-1,d=e["a"].normalize(d,d);var _=g["a"].acosClamped(m.x);m.y<0&&(_=g["a"].TWO_PI-_);var u=g["a"].acosClamped(d.x);d.y<0&&(u=g["a"].TWO_PI-u);var h=u-_;n.twistRight(h)}}function ha(a,i,t){var e=a._rotateFactor*a._rotateRateRangeAdjustment;e>a._maximumRotateRate&&(e=a._maximumRotateRate),e<a._minimumRotateRate&&(e=a._minimumRotateRate);var o=a._scene,n=o.camera,r=o.canvas,s=(t.endPosition.x-t.startPosition.x)/r.clientWidth;s=Math.min(s,a.maximumMovementRatio);var l=e*s*Math.PI*4;n.twistRight(l)}function va(a){var i=a._scene.mapMode2D===E["a"].ROTATE;v["a"].equals(v["a"].IDENTITY,a._scene.camera.transform)?(N(a,a.enableTranslate,a.translateEventTypes,ma,a.inertiaTranslate,"_lastInertiaTranslateMovement"),N(a,a.enableZoom,a.zoomEventTypes,da,a.inertiaZoom,"_lastInertiaZoomMovement"),i&&N(a,a.enableRotate,a.tiltEventTypes,ga,a.inertiaSpin,"_lastInertiaTiltMovement")):(N(a,a.enableZoom,a.zoomEventTypes,da,a.inertiaZoom,"_lastInertiaZoomMovement"),i&&N(a,a.enableRotate,a.translateEventTypes,ga,a.inertiaSpin,"_lastInertiaSpinMovement"))}var pa=new T["a"],fa=new o["a"],Pa=new o["a"];function Ta(a,i,t){var e=a._scene,n=a._globe,r=e.camera;if(Object(l["a"])(n)){var s,c=!a._cameraUnderground;e.pickPositionSupported&&(s=e.pickPositionWorldCoordinates(i,fa));var m=r.getPickRay(i,pa),d=n.pickWorldCoordinates(m,e,c,Pa),_=Object(l["a"])(s)?o["a"].distance(s,r.positionWC):Number.POSITIVE_INFINITY,u=Object(l["a"])(d)?o["a"].distance(d,r.positionWC):Number.POSITIVE_INFINITY;return _<u?o["a"].clone(s,t):o["a"].clone(d,t)}}var ba=new r["a"];function ya(a){var i=a._ellipsoid,t=a._scene,e=t.camera,o=t.mode,n=0;if(o===M["a"].SCENE3D){var r=i.cartesianToCartographic(e.position,ba);Object(l["a"])(r)&&(n=r.height)}else n=e.position.z;var c=Object(s["a"])(a._scene.globeHeight,0),m=Math.abs(c-n);return m}var wa=new o["a"];function Ea(a,i){var t=i.origin,e=i.direction,n=ya(a),r=o["a"].normalize(t,wa),s=Math.abs(o["a"].dot(r,e));return s=2*Math.max(s,.5),n*s}function Ma(a,i,t,e){var n=o["a"].distance(i.origin,t),r=ya(a),s=g["a"].clamp(5*r,a._minimumUndergroundPickDistance,a._maximumUndergroundPickDistance);return n>s&&(n=Math.min(n,r/5),n=Math.max(n,100)),T["a"].getPoint(i,n,e)}function Ra(a,i,t,e){var n;return Object(l["a"])(t)?(n=o["a"].distance(i.origin,t),n>a._maximumUndergroundPickDistance&&(n=ya(a))):n=ya(a),T["a"].getPoint(i,n,e)}var Oa=new e["a"];function xa(a,i){var t=i.endPosition,o=e["a"].subtract(i.endPosition,i.startPosition,Oa),n=a._strafeEndMousePosition;e["a"].add(n,o,n),i.endPosition=n,_i(a,i,a._strafeStartPosition),i.endPosition=t}var Ia=new T["a"],Ca=new T["a"],za=new o["a"],ja=new o["a"],Sa=new o["a"],ka=new o["a"],Na=new f["a"](o["a"].UNIT_X,0),Ua=new e["a"],Ha=new e["a"];function Aa(a,i,t){if(o["a"].equals(i,a._translateMousePosition)||(a._looking=!1),o["a"].equals(i,a._strafeMousePosition)||(a._strafing=!1),a._looking)at(a,i,t);else if(a._strafing)xa(a,t);else{var n,r=a._scene,s=r.camera,c=a._cameraUnderground,m=e["a"].clone(t.startPosition,Ua),d=e["a"].clone(t.endPosition,Ha),u=s.getPickRay(m,Ia),h=o["a"].clone(o["a"].ZERO,ka),v=o["a"].UNIT_X;if(s.position.z<a._minimumPickingTerrainHeight&&(n=Ta(a,m,za),Object(l["a"])(n)&&(h.x=n.x)),c||h.x>s.position.z&&Object(l["a"])(n)){var p=n;return c&&(p=Ra(a,u,n,za)),e["a"].clone(i,a._strafeMousePosition),e["a"].clone(i,a._strafeEndMousePosition),o["a"].clone(p,a._strafeStartPosition),a._strafing=!0,void _i(a,t,a._strafeStartPosition)}var P=f["a"].fromPointNormal(h,v,Na);u=s.getPickRay(m,Ia);var T=_["a"].rayPlane(u,P,za),b=s.getPickRay(d,Ca),y=_["a"].rayPlane(b,P,ja);if(!Object(l["a"])(T)||!Object(l["a"])(y))return a._looking=!0,at(a,i,t),void e["a"].clone(i,a._translateMousePosition);var w=o["a"].subtract(T,y,Sa),E=w.x;w.x=w.y,w.y=w.z,w.z=E;var M=o["a"].magnitude(w);M>g["a"].EPSILON6&&(o["a"].normalize(w,w),s.move(w,M))}}var Wa=new e["a"],Da=new T["a"],Za=new o["a"],Ba=new o["a"],Fa=new v["a"],La=new v["a"],qa=new o["a"],Va=new f["a"](o["a"].UNIT_X,0),Ga=new o["a"],Ya=new r["a"],Xa=new v["a"],Ja=new P["a"],Qa=new h["a"],Ka=new o["a"];function $a(a,i,t){if(Object(l["a"])(t.angleAndHeight)&&(t=t.angleAndHeight),e["a"].equals(i,a._tiltCenterMousePosition)||(a._tiltCVOffMap=!1,a._looking=!1),a._looking)at(a,i,t);else{var o=a._scene,n=o.camera;a._tiltCVOffMap||!a.onMap()||Math.abs(n.position.z)>a._minimumPickingTerrainHeight?(a._tiltCVOffMap=!0,ai(a,i,t)):ii(a,i,t)}}function ai(a,i,t){var n=a._scene,r=n.camera,s=n.canvas,c=Wa;c.x=s.clientWidth/2,c.y=s.clientHeight/2;var d,_=r.getPickRay(c,Da),u=o["a"].UNIT_X,h=_.origin,p=_.direction,f=o["a"].dot(u,p);if(Math.abs(f)>g["a"].EPSILON6&&(d=-o["a"].dot(u,h)/f),!Object(l["a"])(d)||d<=0)return a._looking=!0,at(a,i,t),void e["a"].clone(i,a._tiltCenterMousePosition);var P=o["a"].multiplyByScalar(p,d,Za);o["a"].add(h,P,P);var T=n.mapProjection,y=T.ellipsoid;o["a"].fromElements(P.y,P.z,P.x,P);var w=T.unproject(P,Ya);y.cartographicToCartesian(w,P);var E=b["a"].eastNorthUpToFixedFrame(P,y,Fa),M=a._globe,R=a._ellipsoid;a._globe=void 0,a._ellipsoid=m["a"].UNIT_SPHERE,a._rotateFactor=1,a._rotateRateRangeAdjustment=1;var O=v["a"].clone(r.transform,Xa);r._setTransform(E),Ti(a,i,t,o["a"].UNIT_Z),r._setTransform(O),a._globe=M,a._ellipsoid=R;var x=R.maximumRadius;a._rotateFactor=1/x,a._rotateRateRangeAdjustment=x}function ii(a,i,t){var n,r,s=a._scene,c=s.camera,d=a._cameraUnderground,u=o["a"].UNIT_X;if(e["a"].equals(i,a._tiltCenterMousePosition))n=o["a"].clone(a._tiltCenter,Za);else{if(c.position.z<a._minimumPickingTerrainHeight&&(n=Ta(a,i,Za)),!Object(l["a"])(n)){r=c.getPickRay(i,Da);var p,T=r.origin,y=r.direction,w=o["a"].dot(u,y);if(Math.abs(w)>g["a"].EPSILON6&&(p=-o["a"].dot(u,T)/w),!Object(l["a"])(p)||p<=0)return a._looking=!0,at(a,i,t),void e["a"].clone(i,a._tiltCenterMousePosition);n=o["a"].multiplyByScalar(y,p,Za),o["a"].add(T,n,n)}d&&(Object(l["a"])(r)||(r=c.getPickRay(i,Da)),Ma(a,r,n,n)),e["a"].clone(i,a._tiltCenterMousePosition),o["a"].clone(n,a._tiltCenter)}var E=s.canvas,M=Wa;M.x=E.clientWidth/2,M.y=a._tiltCenterMousePosition.y,r=c.getPickRay(M,Da);var R=o["a"].clone(o["a"].ZERO,qa);R.x=n.x;var O=f["a"].fromPointNormal(R,u,Va),x=_["a"].rayPlane(r,O,Ba),I=c._projection,C=I.ellipsoid;o["a"].fromElements(n.y,n.z,n.x,n);var z=I.unproject(n,Ya);C.cartographicToCartesian(z,n);var j,S=b["a"].eastNorthUpToFixedFrame(n,C,Fa);Object(l["a"])(x)?(o["a"].fromElements(x.y,x.z,x.x,x),z=I.unproject(x,Ya),C.cartographicToCartesian(z,x),j=b["a"].eastNorthUpToFixedFrame(x,C,La)):j=S;var k=a._globe,N=a._ellipsoid;a._globe=void 0,a._ellipsoid=m["a"].UNIT_SPHERE,a._rotateFactor=1,a._rotateRateRangeAdjustment=1;var U=o["a"].UNIT_Z,H=v["a"].clone(c.transform,Xa);c._setTransform(S);var A=o["a"].cross(o["a"].UNIT_Z,o["a"].normalize(c.position,Ga),Ga),W=o["a"].dot(c.right,A);if(Ti(a,i,t,U,!1,!0),c._setTransform(j),W<0){var D=t.startPosition.y-t.endPosition.y;(d&&D<0||!d&&D>0)&&(U=void 0);var Z=c.constrainedAxis;c.constrainedAxis=void 0,Ti(a,i,t,U,!0,!1),c.constrainedAxis=Z}else Ti(a,i,t,U,!0,!1);if(Object(l["a"])(c.constrainedAxis)){var B=o["a"].cross(c.direction,c.constrainedAxis,Ka);o["a"].equalsEpsilon(B,o["a"].ZERO,g["a"].EPSILON6)||(o["a"].dot(B,c.right)<0&&o["a"].negate(B,B),o["a"].cross(B,c.direction,c.up),o["a"].cross(c.direction,c.up,c.right),o["a"].normalize(c.up,c.up),o["a"].normalize(c.right,c.right))}c._setTransform(H),a._globe=k,a._ellipsoid=N;var F=N.maximumRadius;a._rotateFactor=1/F,a._rotateRateRangeAdjustment=F;var L=o["a"].clone(c.positionWC,Ga);if(a.enableCollisionDetection&&ot(a),!o["a"].equals(c.positionWC,L)){c._setTransform(j),c.worldToCameraCoordinatesPoint(L,L);var q=o["a"].magnitudeSquared(L);o["a"].magnitudeSquared(c.position)>q&&(o["a"].normalize(c.position,c.position),o["a"].multiplyByScalar(c.position,Math.sqrt(q),c.position));var V=o["a"].angleBetween(L,c.position),G=o["a"].cross(L,c.position,L);o["a"].normalize(G,G);var Y=P["a"].fromAxisAngle(G,V,Ja),X=h["a"].fromQuaternion(Y,Qa);h["a"].multiplyByVector(X,c.direction,c.direction),h["a"].multiplyByVector(X,c.up,c.up),o["a"].cross(c.direction,c.up,c.right),o["a"].cross(c.right,c.direction,c.up),c._setTransform(H)}}var ti=new e["a"],ei=new T["a"],oi=new o["a"];function ni(a,i,t){Object(l["a"])(t.distance)&&(t=t.distance);var e,n=a._scene,r=n.camera,s=n.canvas,c=a._cameraUnderground;c?e=i:(e=ti,e.x=s.clientWidth/2,e.y=s.clientHeight/2);var m,d,_=r.getPickRay(e,ei),u=_.origin,g=_.direction,h=r.position.z;if(h<a._minimumPickingTerrainHeight&&(m=Ta(a,e,oi)),Object(l["a"])(m)&&(d=o["a"].distance(u,m)),c){var v=Ea(a,_,h);d=Object(l["a"])(d)?Math.min(d,v):v}if(!Object(l["a"])(d)){var p=o["a"].UNIT_X;d=-o["a"].dot(p,u)/o["a"].dot(p,g)}ra(a,i,t,a._zoomFactor,d)}function ri(a){var i=a._scene,t=i.camera;if(v["a"].equals(v["a"].IDENTITY,t.transform)){var e=a._tweens;if(a._aggregator.anyButtonDown&&e.removeAll(),N(a,a.enableTilt,a.tiltEventTypes,$a,a.inertiaSpin,"_lastInertiaTiltMovement"),N(a,a.enableTranslate,a.translateEventTypes,Aa,a.inertiaTranslate,"_lastInertiaTranslateMovement"),N(a,a.enableZoom,a.zoomEventTypes,ni,a.inertiaZoom,"_lastInertiaZoomMovement"),N(a,a.enableLook,a.lookEventTypes,at),!a._aggregator.anyButtonDown&&!e.contains(a._tween)){var o=t.createCorrectPositionTween(a.bounceAnimationTime);Object(l["a"])(o)&&(a._tween=e.add(o))}e.update()}else N(a,a.enableRotate,a.rotateEventTypes,Ti,a.inertiaSpin,"_lastInertiaSpinMovement"),N(a,a.enableZoom,a.zoomEventTypes,ji,a.inertiaZoom,"_lastInertiaZoomMovement")}var si=new T["a"],li=new f["a"](o["a"].UNIT_X,0),ci=new o["a"],mi=new o["a"],di=new o["a"];function _i(a,i,t){var e=a._scene,n=e.camera,r=n.getPickRay(i.endPosition,si),s=o["a"].clone(n.direction,mi);e.mode===M["a"].COLUMBUS_VIEW&&o["a"].fromElements(s.z,s.x,s.y,s);var c=f["a"].fromPointNormal(t,s,li),m=_["a"].rayPlane(r,c,ci);Object(l["a"])(m)&&(s=o["a"].subtract(t,m,s),e.mode===M["a"].COLUMBUS_VIEW&&o["a"].fromElements(s.y,s.z,s.x,s),o["a"].add(n.position,s,n.position))}var ui=new o["a"],gi=new r["a"],hi=new o["a"],vi=new m["a"],pi=new o["a"],fi=new o["a"];function Pi(a,i,t){var n=a._scene,r=n.camera,s=a._cameraUnderground,c=a._ellipsoid;if(v["a"].equals(r.transform,v["a"].IDENTITY)){var d,_,u=c.geodeticSurfaceNormal(r.position,pi);if(e["a"].equals(i,a._rotateMousePosition))if(a._looking)at(a,i,t,u);else if(a._rotating)Ti(a,i,t);else if(a._strafing)xa(a,t);else{if(o["a"].magnitude(r.position)<o["a"].magnitude(a._rotateStartPosition))return;d=o["a"].magnitude(a._rotateStartPosition),_=hi,_.x=_.y=_.z=d,c=m["a"].fromCartesian3(_,vi),Ii(a,i,t,c)}else{a._looking=!1,a._rotating=!1,a._strafing=!1;var g=c.cartesianToCartographic(r.positionWC,gi).height,h=a._globe;if(Object(l["a"])(h)&&g<a._minimumPickingTerrainHeight){var p=Ta(a,t.startPosition,di);if(Object(l["a"])(p)){var f=!1,P=r.getPickRay(t.startPosition,pa);if(s)f=!0,Ra(a,P,p,p);else{var T=c.geodeticSurfaceNormal(p,fi),b=Math.abs(o["a"].dot(P.direction,T))<.05;f=!!b||o["a"].magnitude(r.position)<o["a"].magnitude(p)}f?(e["a"].clone(i,a._strafeEndMousePosition),o["a"].clone(p,a._strafeStartPosition),a._strafing=!0,_i(a,t,a._strafeStartPosition)):(d=o["a"].magnitude(p),_=hi,_.x=_.y=_.z=d,c=m["a"].fromCartesian3(_,vi),Ii(a,i,t,c),o["a"].clone(p,a._rotateStartPosition))}else a._looking=!0,at(a,i,t,u)}else Object(l["a"])(r.pickEllipsoid(t.startPosition,a._ellipsoid,ui))?(Ii(a,i,t,a._ellipsoid),o["a"].clone(ui,a._rotateStartPosition)):g>a._minimumTrackBallHeight?(a._rotating=!0,Ti(a,i,t)):(a._looking=!0,at(a,i,t,u));e["a"].clone(i,a._rotateMousePosition)}}else Ti(a,i,t)}function Ti(a,i,t,e,n,r){n=Object(s["a"])(n,!1),r=Object(s["a"])(r,!1);var c=a._scene,m=c.camera,d=c.canvas,_=m.constrainedAxis;Object(l["a"])(e)&&(m.constrainedAxis=e);var u=o["a"].magnitude(m.position),g=a._rotateFactor*(u-a._rotateRateRangeAdjustment);g>a._maximumRotateRate&&(g=a._maximumRotateRate),g<a._minimumRotateRate&&(g=a._minimumRotateRate);var h=(t.startPosition.x-t.endPosition.x)/d.clientWidth,v=(t.startPosition.y-t.endPosition.y)/d.clientHeight;h=Math.min(h,a.maximumMovementRatio),v=Math.min(v,a.maximumMovementRatio);var p=g*h*Math.PI*2,f=g*v*Math.PI;n||m.rotateRight(p),r||m.rotateUp(f),m.constrainedAxis=_}var bi=n["a"].clone(n["a"].UNIT_W),yi=n["a"].clone(n["a"].UNIT_W),wi=new o["a"],Ei=new o["a"],Mi=new o["a"],Ri=new o["a"],Oi=new e["a"],xi=new e["a"];function Ii(a,i,t,n){var r=a._scene,s=r.camera,c=e["a"].clone(t.startPosition,Oi),m=e["a"].clone(t.endPosition,xi),d=s.pickEllipsoid(c,n,bi),_=s.pickEllipsoid(m,n,yi);if(!Object(l["a"])(d)||!Object(l["a"])(_))return a._rotating=!0,void Ti(a,i,t);if(d=s.worldToCameraCoordinates(d,d),_=s.worldToCameraCoordinates(_,_),Object(l["a"])(s.constrainedAxis)){var u=s.constrainedAxis,h=o["a"].mostOrthogonalAxis(u,wi);o["a"].cross(h,u,h),o["a"].normalize(h,h);var v=o["a"].cross(u,h,Ei),p=o["a"].magnitude(d),f=o["a"].dot(u,d),P=Math.acos(f/p),T=o["a"].multiplyByScalar(u,f,Mi);o["a"].subtract(d,T,T),o["a"].normalize(T,T);var b=o["a"].magnitude(_),y=o["a"].dot(u,_),w=Math.acos(y/b),E=o["a"].multiplyByScalar(u,y,Ri);o["a"].subtract(_,E,E),o["a"].normalize(E,E);var M=Math.acos(o["a"].dot(T,h));o["a"].dot(T,v)<0&&(M=g["a"].TWO_PI-M);var R=Math.acos(o["a"].dot(E,h));o["a"].dot(E,v)<0&&(R=g["a"].TWO_PI-R);var O,x=M-R;O=o["a"].equalsEpsilon(u,s.position,g["a"].EPSILON2)?s.right:o["a"].cross(u,s.position,wi);var I,C=o["a"].cross(u,O,wi),z=o["a"].dot(C,o["a"].subtract(d,u,Ei)),j=o["a"].dot(C,o["a"].subtract(_,u,Ei));I=z>0&&j>0?w-P:z>0&&j<=0?o["a"].dot(s.position,u)>0?-P-w:P+w:P-w,s.rotateRight(x),s.rotateUp(I)}else{o["a"].normalize(d,d),o["a"].normalize(_,_);var S=o["a"].dot(d,_),k=o["a"].cross(d,_,wi);if(S<1&&!o["a"].equalsEpsilon(k,o["a"].ZERO,g["a"].EPSILON14)){var N=Math.acos(S);s.rotate(k,N)}}}var Ci=new o["a"],zi=new r["a"];function ji(a,i,t){Object(l["a"])(t.distance)&&(t=t.distance);var e,n=a._ellipsoid,r=a._scene,s=r.camera,c=r.canvas,m=a._cameraUnderground;m?e=i:(e=ti,e.x=c.clientWidth/2,e.y=c.clientHeight/2);var d,_,u=s.getPickRay(e,ei),g=n.cartesianToCartographic(s.position,zi).height;if(g<a._minimumPickingTerrainHeight&&(d=Ta(a,e,oi)),Object(l["a"])(d)&&(_=o["a"].distance(u.origin,d)),m){var h=Ea(a,u,g);_=Object(l["a"])(_)?Math.min(_,h):h}Object(l["a"])(_)||(_=g);var v=o["a"].normalize(s.position,Ci);ra(a,i,t,a._zoomFactor,_,o["a"].dot(v,s.direction))}var Si=new e["a"],ki=new T["a"],Ni=new o["a"],Ui=new o["a"],Hi=new v["a"],Ai=new v["a"],Wi=new v["a"],Di=new P["a"],Zi=new h["a"],Bi=new r["a"],Fi=new o["a"];function Li(a,i,t){var o=a._scene,n=o.camera;if(v["a"].equals(n.transform,v["a"].IDENTITY))if(Object(l["a"])(t.angleAndHeight)&&(t=t.angleAndHeight),e["a"].equals(i,a._tiltCenterMousePosition)||(a._tiltOnEllipsoid=!1,a._looking=!1),a._looking){var r=a._ellipsoid.geodeticSurfaceNormal(n.position,Fi);at(a,i,t,r)}else{var s=a._ellipsoid,c=s.cartesianToCartographic(n.position,Bi);a._tiltOnEllipsoid||c.height>a._minimumCollisionTerrainHeight?(a._tiltOnEllipsoid=!0,Vi(a,i,t)):Gi(a,i,t)}}var qi=new r["a"];function Vi(a,i,t){var n=a._ellipsoid,r=a._scene,s=r.camera,c=.25*a.minimumZoomDistance,d=n.cartesianToCartographic(s.positionWC,qi).height;if(!(d-c-1<g["a"].EPSILON3&&t.endPosition.y-t.startPosition.y<0)){var u=r.canvas,h=Si;h.x=u.clientWidth/2,h.y=u.clientHeight/2;var p,f=s.getPickRay(h,ki),P=_["a"].rayEllipsoid(f,n);if(Object(l["a"])(P))p=T["a"].getPoint(f,P.start,Ni);else{if(!(d>a._minimumTrackBallHeight)){a._looking=!0;var y=a._ellipsoid.geodeticSurfaceNormal(s.position,Fi);return at(a,i,t,y),void e["a"].clone(i,a._tiltCenterMousePosition)}var w=_["a"].grazingAltitudeLocation(f,n);if(!Object(l["a"])(w))return;var E=n.cartesianToCartographic(w,Bi);E.height=0,p=n.cartographicToCartesian(E,Ni)}var M=b["a"].eastNorthUpToFixedFrame(p,n,Hi),R=a._globe,O=a._ellipsoid;a._globe=void 0,a._ellipsoid=m["a"].UNIT_SPHERE,a._rotateFactor=1,a._rotateRateRangeAdjustment=1;var x=v["a"].clone(s.transform,Wi);s._setTransform(M),Ti(a,i,t,o["a"].UNIT_Z),s._setTransform(x),a._globe=R,a._ellipsoid=O;var I=O.maximumRadius;a._rotateFactor=1/I,a._rotateRateRangeAdjustment=I}}function Gi(a,i,t){var n,r,s,c=a._ellipsoid,d=a._scene,u=d.camera,p=a._cameraUnderground;if(e["a"].equals(i,a._tiltCenterMousePosition))n=o["a"].clone(a._tiltCenter,Ni);else{if(n=Ta(a,i,Ni),!Object(l["a"])(n)){if(r=u.getPickRay(i,ki),s=_["a"].rayEllipsoid(r,c),!Object(l["a"])(s)){var f=c.cartesianToCartographic(u.position,Bi);if(f.height<=a._minimumTrackBallHeight){a._looking=!0;var y=a._ellipsoid.geodeticSurfaceNormal(u.position,Fi);at(a,i,t,y),e["a"].clone(i,a._tiltCenterMousePosition)}return}n=T["a"].getPoint(r,s.start,Ni)}p&&(Object(l["a"])(r)||(r=u.getPickRay(i,ki)),Ma(a,r,n,n)),e["a"].clone(i,a._tiltCenterMousePosition),o["a"].clone(n,a._tiltCenter)}var w=d.canvas,E=Si;E.x=w.clientWidth/2,E.y=a._tiltCenterMousePosition.y,r=u.getPickRay(E,ki);var M=o["a"].magnitude(n),R=o["a"].fromElements(M,M,M,hi),O=m["a"].fromCartesian3(R,vi);if(s=_["a"].rayEllipsoid(r,O),Object(l["a"])(s)){var x=o["a"].magnitude(r.origin)>M?s.start:s.stop,I=T["a"].getPoint(r,x,Ui),C=b["a"].eastNorthUpToFixedFrame(n,c,Hi),z=b["a"].eastNorthUpToFixedFrame(I,O,Ai),j=a._globe,S=a._ellipsoid;a._globe=void 0,a._ellipsoid=m["a"].UNIT_SPHERE,a._rotateFactor=1,a._rotateRateRangeAdjustment=1;var k=o["a"].UNIT_Z,N=v["a"].clone(u.transform,Wi);u._setTransform(C);var U=o["a"].cross(I,u.positionWC,Ka),H=o["a"].dot(u.rightWC,U);if(Ti(a,i,t,k,!1,!0),u._setTransform(z),H<0){var A=t.startPosition.y-t.endPosition.y;(p&&A<0||!p&&A>0)&&(k=void 0);var W=u.constrainedAxis;u.constrainedAxis=void 0,Ti(a,i,t,k,!0,!1),u.constrainedAxis=W}else Ti(a,i,t,k,!0,!1);if(Object(l["a"])(u.constrainedAxis)){var D=o["a"].cross(u.direction,u.constrainedAxis,Ka);o["a"].equalsEpsilon(D,o["a"].ZERO,g["a"].EPSILON6)||(o["a"].dot(D,u.right)<0&&o["a"].negate(D,D),o["a"].cross(D,u.direction,u.up),o["a"].cross(u.direction,u.up,u.right),o["a"].normalize(u.up,u.up),o["a"].normalize(u.right,u.right))}u._setTransform(N),a._globe=j,a._ellipsoid=S;var Z=S.maximumRadius;a._rotateFactor=1/Z,a._rotateRateRangeAdjustment=Z;var B=o["a"].clone(u.positionWC,Ka);if(a.enableCollisionDetection&&ot(a),!o["a"].equals(u.positionWC,B)){u._setTransform(z),u.worldToCameraCoordinatesPoint(B,B);var F=o["a"].magnitudeSquared(B);o["a"].magnitudeSquared(u.position)>F&&(o["a"].normalize(u.position,u.position),o["a"].multiplyByScalar(u.position,Math.sqrt(F),u.position));var L=o["a"].angleBetween(B,u.position),q=o["a"].cross(B,u.position,B);o["a"].normalize(q,q);var V=P["a"].fromAxisAngle(q,L,Di),G=h["a"].fromQuaternion(V,Zi);h["a"].multiplyByVector(G,u.direction,u.direction),h["a"].multiplyByVector(G,u.up,u.up),o["a"].cross(u.direction,u.up,u.right),o["a"].cross(u.right,u.direction,u.up),u._setTransform(N)}}}var Yi=new e["a"],Xi=new e["a"],Ji=new T["a"],Qi=new T["a"],Ki=new o["a"],$i=new o["a"];function at(a,i,t,e){var n=a._scene,r=n.camera,c=Yi;c.x=t.startPosition.x,c.y=0;var m=Xi;m.x=t.endPosition.x,m.y=0;var d,_,u=r.getPickRay(c,Ji),h=r.getPickRay(m,Qi),v=0;r.frustum instanceof p["a"]?(d=u.origin,_=h.origin,o["a"].add(r.direction,d,d),o["a"].add(r.direction,_,_),o["a"].subtract(d,r.position,d),o["a"].subtract(_,r.position,_),o["a"].normalize(d,d),o["a"].normalize(_,_)):(d=u.direction,_=h.direction);var f=o["a"].dot(d,_);f<1&&(v=Math.acos(f)),v=t.startPosition.x>t.endPosition.x?-v:v;var P=a._horizontalRotationAxis;if(Object(l["a"])(e)?r.look(e,-v):Object(l["a"])(P)?r.look(P,-v):r.lookLeft(v),c.x=0,c.y=t.startPosition.y,m.x=0,m.y=t.endPosition.y,u=r.getPickRay(c,Ji),h=r.getPickRay(m,Qi),v=0,r.frustum instanceof p["a"]?(d=u.origin,_=h.origin,o["a"].add(r.direction,d,d),o["a"].add(r.direction,_,_),o["a"].subtract(d,r.position,d),o["a"].subtract(_,r.position,_),o["a"].normalize(d,d),o["a"].normalize(_,_)):(d=u.direction,_=h.direction),f=o["a"].dot(d,_),f<1&&(v=Math.acos(f)),v=t.startPosition.y>t.endPosition.y?-v:v,e=Object(s["a"])(e,P),Object(l["a"])(e)){var T=r.direction,b=o["a"].negate(e,Ki),y=o["a"].equalsEpsilon(T,e,g["a"].EPSILON2),w=o["a"].equalsEpsilon(T,b,g["a"].EPSILON2);if(y||w)(y&&v<0||w&&v>0)&&r.look(r.right,-v);else{f=o["a"].dot(T,e);var E=g["a"].acosClamped(f);v>0&&v>E&&(v=E-g["a"].EPSILON4),f=o["a"].dot(T,b),E=g["a"].acosClamped(f),v<0&&-v>E&&(v=-E+g["a"].EPSILON4);var M=o["a"].cross(e,T,$i);r.look(M,v)}}else r.lookUp(v)}function it(a){N(a,a.enableRotate,a.rotateEventTypes,Pi,a.inertiaSpin,"_lastInertiaSpinMovement"),N(a,a.enableZoom,a.zoomEventTypes,ji,a.inertiaZoom,"_lastInertiaZoomMovement"),N(a,a.enableTilt,a.tiltEventTypes,Li,a.inertiaSpin,"_lastInertiaTiltMovement"),N(a,a.enableLook,a.lookEventTypes,at)}var tt=new v["a"],et=new r["a"];function ot(a){a._adjustedHeightForTerrain=!0;var i=a._scene,t=i.mode,e=i.globe;if(Object(l["a"])(e)&&t!==M["a"].SCENE2D&&t!==M["a"].MORPHING){var n,r,s=i.camera,c=e.ellipsoid,m=i.mapProjection;v["a"].equals(s.transform,v["a"].IDENTITY)||(n=v["a"].clone(s.transform,tt),r=o["a"].magnitude(s.position),s._setTransform(v["a"].IDENTITY));var d=et;t===M["a"].SCENE3D?c.cartesianToCartographic(s.position,d):m.unproject(s.position,d);var _=!1;if(d.height<a._minimumCollisionTerrainHeight){var u=a._scene.globeHeight;if(Object(l["a"])(u)){var g=u+a.minimumZoomDistance;d.height<g&&(d.height=g,t===M["a"].SCENE3D?c.cartographicToCartesian(d,s.position):m.project(d,s.position),_=!0)}}Object(l["a"])(n)&&(s._setTransform(n),_&&(o["a"].normalize(s.position,s.position),o["a"].negate(s.position,s.direction),o["a"].multiplyByScalar(s.position,Math.max(r,a.minimumZoomDistance),s.position),o["a"].normalize(s.direction,s.direction),o["a"].cross(s.direction,s.up,s.right),o["a"].cross(s.right,s.direction,s.up)))}}x.prototype.onMap=function(){var a=this._scene,i=a.mode,t=a.camera;return i!==M["a"].COLUMBUS_VIEW||Math.abs(t.position.x)-this._maxCoord.x<0&&Math.abs(t.position.y)-this._maxCoord.y<0};var nt=new o["a"],rt=new o["a"];x.prototype.update=function(){var a=this._scene,i=a.camera,t=a.globe,e=a.mode;v["a"].equals(i.transform,v["a"].IDENTITY)?(this._globe=t,this._ellipsoid=Object(l["a"])(this._globe)?this._globe.ellipsoid:a.mapProjection.ellipsoid):(this._globe=void 0,this._ellipsoid=m["a"].UNIT_SPHERE),this._cameraUnderground=a.cameraUnderground&&Object(l["a"])(this._globe),this._minimumCollisionTerrainHeight=this.minimumCollisionTerrainHeight*a.terrainExaggeration,this._minimumPickingTerrainHeight=this.minimumPickingTerrainHeight*a.terrainExaggeration,this._minimumTrackBallHeight=this.minimumTrackBallHeight*a.terrainExaggeration;var n=this._ellipsoid.maximumRadius;this._rotateFactor=1/n,this._rotateRateRangeAdjustment=n,this._adjustedHeightForTerrain=!1;var r=o["a"].clone(i.positionWC,nt),s=o["a"].clone(i.directionWC,rt);if(e===M["a"].SCENE2D?va(this):e===M["a"].COLUMBUS_VIEW?(this._horizontalRotationAxis=o["a"].UNIT_Z,ri(this)):e===M["a"].SCENE3D&&(this._horizontalRotationAxis=void 0,it(this)),this.enableCollisionDetection&&!this._adjustedHeightForTerrain){var c=!o["a"].equals(r,i.positionWC)||!o["a"].equals(s,i.directionWC);c&&ot(this)}this._aggregator.reset()},x.prototype.isDestroyed=function(){return!1},x.prototype.destroy=function(){return this._tweens.removeAll(),this._aggregator=this._aggregator&&this._aggregator.destroy(),Object(c["a"])(this)},i["a"]=x}}]);