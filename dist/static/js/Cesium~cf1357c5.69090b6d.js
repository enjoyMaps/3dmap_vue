(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~cf1357c5"],{"2d19":function(e,i,t){"use strict";var s={DONE:0,PENDING:1,FAILED:2};i["a"]=Object.freeze(s)},"448f":function(e,i,t){"use strict";var s=t("933b"),o=t("77af"),n=t("670c"),a=t("be18"),r=t("bd8d"),c=t("2f63"),h=t("7d62"),l=t("aee6"),d=t("6dfc"),f=t("2d75"),u=t("f61d"),p=t("05e5"),O=t("2d19"),b=t("ea07"),_=r["a"].WHITE,g=a["a"].ZERO,y=f["a"].NONE,v=n["a"].ZERO,D=1,m=0,j=a["a"].ZERO,w=u["a"].CENTER,C=p["a"].CENTER,S=!1,x=new a["a"],R=new r["a"],V=new a["a"],B=new n["a"],E=new d["a"],P=new d["a"],A=new d["a"],M=new o["a"],z=new l["a"];function I(e){this.entity=e,this.billboard=void 0,this.textureValue=void 0}function N(e,i){i.collectionChanged.addEventListener(N.prototype._onCollectionChanged,this),this._cluster=e,this._entityCollection=i,this._items=new s["a"],this._onCollectionChanged(i,i.values,[],[])}function T(e,i,t){Object(c["a"])(e)&&(e.billboard=void 0,t.removeBillboard(i))}N.prototype.update=function(e){for(var i=this._items.values,t=this._cluster,s=0,o=i.length;s<o;s++){var n,a,r=i[s],h=r.entity,l=h._billboard,d=r.billboard,f=h.isShowing&&h.isAvailable(e)&&b["a"].getValueOrDefault(l._show,e,!0);if(f&&(a=b["a"].getValueOrUndefined(h._position,e,x),n=b["a"].getValueOrUndefined(l._image,e),f=Object(c["a"])(a)&&Object(c["a"])(n)),f){b["a"].isConstant(h._position)||(t._clusterDirty=!0),Object(c["a"])(d)||(d=t.getBillboard(h),d.id=h,d.image=void 0,r.billboard=d),d.show=f,Object(c["a"])(d.image)&&r.textureValue===n||(d.image=n,r.textureValue=n),d.position=a,d.color=b["a"].getValueOrDefault(l._color,e,_,R),d.eyeOffset=b["a"].getValueOrDefault(l._eyeOffset,e,g,V),d.heightReference=b["a"].getValueOrDefault(l._heightReference,e,y),d.pixelOffset=b["a"].getValueOrDefault(l._pixelOffset,e,v,B),d.scale=b["a"].getValueOrDefault(l._scale,e,D),d.rotation=b["a"].getValueOrDefault(l._rotation,e,m),d.alignedAxis=b["a"].getValueOrDefault(l._alignedAxis,e,j),d.horizontalOrigin=b["a"].getValueOrDefault(l._horizontalOrigin,e,w),d.verticalOrigin=b["a"].getValueOrDefault(l._verticalOrigin,e,C),d.width=b["a"].getValueOrUndefined(l._width,e),d.height=b["a"].getValueOrUndefined(l._height,e),d.scaleByDistance=b["a"].getValueOrUndefined(l._scaleByDistance,e,E),d.translucencyByDistance=b["a"].getValueOrUndefined(l._translucencyByDistance,e,P),d.pixelOffsetScaleByDistance=b["a"].getValueOrUndefined(l._pixelOffsetScaleByDistance,e,A),d.sizeInMeters=b["a"].getValueOrDefault(l._sizeInMeters,e,S),d.distanceDisplayCondition=b["a"].getValueOrUndefined(l._distanceDisplayCondition,e,z),d.disableDepthTestDistance=b["a"].getValueOrUndefined(l._disableDepthTestDistance,e);var u=b["a"].getValueOrUndefined(l._imageSubRegion,e,M);Object(c["a"])(u)&&d.setImageSubRegion(d._imageId,u)}else T(r,h,t)}return!0},N.prototype.getBoundingSphere=function(e,i){var t=this._items.get(e.id);if(!Object(c["a"])(t)||!Object(c["a"])(t.billboard))return O["a"].FAILED;var s=t.billboard;if(s.heightReference===f["a"].NONE)i.center=a["a"].clone(s.position,i.center);else{if(!Object(c["a"])(s._clampedPosition))return O["a"].PENDING;i.center=a["a"].clone(s._clampedPosition,i.center)}return i.radius=0,O["a"].DONE},N.prototype.isDestroyed=function(){return!1},N.prototype.destroy=function(){this._entityCollection.collectionChanged.removeEventListener(N.prototype._onCollectionChanged,this);for(var e=this._entityCollection.values,i=0;i<e.length;i++)this._cluster.removeBillboard(e[i]);return Object(h["a"])(this)},N.prototype._onCollectionChanged=function(e,i,t,s){var o,n,a=this._items,r=this._cluster;for(o=i.length-1;o>-1;o--)n=i[o],Object(c["a"])(n._billboard)&&Object(c["a"])(n._position)&&a.set(n.id,new I(n));for(o=s.length-1;o>-1;o--)n=s[o],Object(c["a"])(n._billboard)&&Object(c["a"])(n._position)?a.contains(n.id)||a.set(n.id,new I(n)):(T(a.get(n.id),n,r),a.remove(n.id));for(o=t.length-1;o>-1;o--)n=t[o],T(a.get(n.id),n,r),a.remove(n.id)},i["a"]=N},4997:function(e,i,t){"use strict";var s=t("b482"),o=t("b081"),n=t("be18"),a=t("bd8d"),r=t("9541"),c=t("2f63"),h=t("77bc"),l=t("d9403"),d=t("0276"),f=t("452d"),u=t("c2eb"),p=t("ac9c"),O=t("2d75"),b=t("d6db"),_=t("3a8e"),g=t("b83c"),y=t("9171"),v=t("3ba2"),D=t("6fa2"),m=t("ea07"),j=n["a"].ZERO,w=new n["a"],C=new n["a"],S=new a["a"];function x(e){this.id=e,this.vertexFormat=void 0,this.dimensions=void 0,this.offsetAttribute=void 0}function R(e,i){v["a"].call(this,{entity:e,scene:i,geometryOptions:new x(e),geometryPropertyName:"box",observedPropertyNames:["availability","position","orientation","box"]}),this._onEntityPropertyChanged(e,"box",e.box,void 0)}function V(e,i,t){y["a"].call(this,e,i,t)}Object(c["a"])(Object.create)&&(R.prototype=Object.create(v["a"].prototype),R.prototype.constructor=R),Object.defineProperties(R.prototype,{terrainOffsetProperty:{get:function(){return this._terrainOffsetProperty}}}),R.prototype.createFillGeometryInstance=function(e){var i,t=this._entity,o=t.isAvailable(e),n=new p["a"](o&&t.isShowing&&this._showProperty.getValue(e)&&this._fillProperty.getValue(e)),d=this._distanceDisplayConditionProperty.getValue(e),f=h["a"].fromDistanceDisplayCondition(d),O={show:n,distanceDisplayCondition:f,color:void 0,offset:void 0};this._materialProperty instanceof g["a"]&&(Object(c["a"])(this._materialProperty.color)&&(this._materialProperty.color.isConstant||o)&&(i=this._materialProperty.color.getValue(e,S)),Object(c["a"])(i)||(i=a["a"].WHITE),O.color=r["a"].fromColor(i));return Object(c["a"])(this._options.offsetAttribute)&&(O.offset=u["a"].fromCartesian3(m["a"].getValueOrDefault(this._terrainOffsetProperty,e,j,w))),new l["a"]({id:t,geometry:s["a"].fromDimensions(this._options),modelMatrix:t.computeModelMatrixForHeightReference(e,t.box.heightReference,.5*this._options.dimensions.z,this._scene.mapProjection.ellipsoid),attributes:O})},R.prototype.createOutlineGeometryInstance=function(e){var i=this._entity,t=i.isAvailable(e),s=m["a"].getValueOrDefault(this._outlineColorProperty,e,a["a"].BLACK,S),n=this._distanceDisplayConditionProperty.getValue(e),d={show:new p["a"](t&&i.isShowing&&this._showProperty.getValue(e)&&this._showOutlineProperty.getValue(e)),color:r["a"].fromColor(s),distanceDisplayCondition:h["a"].fromDistanceDisplayCondition(n),offset:void 0};return Object(c["a"])(this._options.offsetAttribute)&&(d.offset=u["a"].fromCartesian3(m["a"].getValueOrDefault(this._terrainOffsetProperty,e,j,w))),new l["a"]({id:i,geometry:o["a"].fromDimensions(this._options),modelMatrix:i.computeModelMatrixForHeightReference(e,i.box.heightReference,.5*this._options.dimensions.z,this._scene.mapProjection.ellipsoid),attributes:d})},R.prototype._computeCenter=function(e,i){return m["a"].getValueOrUndefined(this._entity.position,e,i)},R.prototype._isHidden=function(e,i){return!Object(c["a"])(i.dimensions)||!Object(c["a"])(e.position)||v["a"].prototype._isHidden.call(this,e,i)},R.prototype._isDynamic=function(e,i){return!e.position.isConstant||!m["a"].isConstant(e.orientation)||!i.dimensions.isConstant||!m["a"].isConstant(i.outlineWidth)},R.prototype._setStaticOptions=function(e,i){var t=m["a"].getValueOrDefault(i.heightReference,f["a"].MINIMUM_VALUE,O["a"].NONE),s=this._options;s.vertexFormat=this._materialProperty instanceof g["a"]?_["a"].VERTEX_FORMAT:b["a"].MaterialSupport.TEXTURED.vertexFormat,s.dimensions=i.dimensions.getValue(f["a"].MINIMUM_VALUE,s.dimensions),s.offsetAttribute=t!==O["a"].NONE?d["a"].ALL:void 0},R.prototype._onEntityPropertyChanged=D["a"],R.DynamicGeometryUpdater=V,Object(c["a"])(Object.create)&&(V.prototype=Object.create(y["a"].prototype),V.prototype.constructor=V),V.prototype._isHidden=function(e,i,t){var s=m["a"].getValueOrUndefined(e.position,t,C),o=this._options.dimensions;return!Object(c["a"])(s)||!Object(c["a"])(o)||y["a"].prototype._isHidden.call(this,e,i,t)},V.prototype._setOptions=function(e,i,t){var s=m["a"].getValueOrDefault(i.heightReference,t,O["a"].NONE),o=this._options;o.dimensions=m["a"].getValueOrUndefined(i.dimensions,t,o.dimensions),o.offsetAttribute=s!==O["a"].NONE?d["a"].ALL:void 0},i["a"]=R},"4b92":function(e,i,t){"use strict";var s=t("535a"),o=t("2f63"),n=t("21d7"),a=t("dde7"),r=t("0a43");function c(e){this._definitionChanged=new n["a"],this._show=void 0,this._showSubscription=void 0,this._dimensions=void 0,this._dimensionsSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(Object(s["a"])(e,s["a"].EMPTY_OBJECT))}Object.defineProperties(c.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(r["a"])("show"),dimensions:Object(r["a"])("dimensions"),heightReference:Object(r["a"])("heightReference"),fill:Object(r["a"])("fill"),material:Object(a["a"])("material"),outline:Object(r["a"])("outline"),outlineColor:Object(r["a"])("outlineColor"),outlineWidth:Object(r["a"])("outlineWidth"),shadows:Object(r["a"])("shadows"),distanceDisplayCondition:Object(r["a"])("distanceDisplayCondition")}),c.prototype.clone=function(e){return Object(o["a"])(e)?(e.show=this.show,e.dimensions=this.dimensions,e.heightReference=this.heightReference,e.fill=this.fill,e.material=this.material,e.outline=this.outline,e.outlineColor=this.outlineColor,e.outlineWidth=this.outlineWidth,e.shadows=this.shadows,e.distanceDisplayCondition=this.distanceDisplayCondition,e):new c(this)},c.prototype.merge=function(e){this.show=Object(s["a"])(this.show,e.show),this.dimensions=Object(s["a"])(this.dimensions,e.dimensions),this.heightReference=Object(s["a"])(this.heightReference,e.heightReference),this.fill=Object(s["a"])(this.fill,e.fill),this.material=Object(s["a"])(this.material,e.material),this.outline=Object(s["a"])(this.outline,e.outline),this.outlineColor=Object(s["a"])(this.outlineColor,e.outlineColor),this.outlineWidth=Object(s["a"])(this.outlineWidth,e.outlineWidth),this.shadows=Object(s["a"])(this.shadows,e.shadows),this.distanceDisplayCondition=Object(s["a"])(this.distanceDisplayCondition,e.distanceDisplayCondition)},i["a"]=c},"99f6":function(e,i,t){"use strict";var s=t("535a"),o=t("2f63"),n=t("21d7"),a=t("0a43");function r(e){this._definitionChanged=new n["a"],this._show=void 0,this._showSubscription=void 0,this._image=void 0,this._imageSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this._pixelOffset=void 0,this._pixelOffsetSubscription=void 0,this._eyeOffset=void 0,this._eyeOffsetSubscription=void 0,this._horizontalOrigin=void 0,this._horizontalOriginSubscription=void 0,this._verticalOrigin=void 0,this._verticalOriginSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._color=void 0,this._colorSubscription=void 0,this._rotation=void 0,this._rotationSubscription=void 0,this._alignedAxis=void 0,this._alignedAxisSubscription=void 0,this._sizeInMeters=void 0,this._sizeInMetersSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._scaleByDistance=void 0,this._scaleByDistanceSubscription=void 0,this._translucencyByDistance=void 0,this._translucencyByDistanceSubscription=void 0,this._pixelOffsetScaleByDistance=void 0,this._pixelOffsetScaleByDistanceSubscription=void 0,this._imageSubRegion=void 0,this._imageSubRegionSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._disableDepthTestDistance=void 0,this._disableDepthTestDistanceSubscription=void 0,this.merge(Object(s["a"])(e,s["a"].EMPTY_OBJECT))}Object.defineProperties(r.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:Object(a["a"])("show"),image:Object(a["a"])("image"),scale:Object(a["a"])("scale"),pixelOffset:Object(a["a"])("pixelOffset"),eyeOffset:Object(a["a"])("eyeOffset"),horizontalOrigin:Object(a["a"])("horizontalOrigin"),verticalOrigin:Object(a["a"])("verticalOrigin"),heightReference:Object(a["a"])("heightReference"),color:Object(a["a"])("color"),rotation:Object(a["a"])("rotation"),alignedAxis:Object(a["a"])("alignedAxis"),sizeInMeters:Object(a["a"])("sizeInMeters"),width:Object(a["a"])("width"),height:Object(a["a"])("height"),scaleByDistance:Object(a["a"])("scaleByDistance"),translucencyByDistance:Object(a["a"])("translucencyByDistance"),pixelOffsetScaleByDistance:Object(a["a"])("pixelOffsetScaleByDistance"),imageSubRegion:Object(a["a"])("imageSubRegion"),distanceDisplayCondition:Object(a["a"])("distanceDisplayCondition"),disableDepthTestDistance:Object(a["a"])("disableDepthTestDistance")}),r.prototype.clone=function(e){return Object(o["a"])(e)?(e.show=this._show,e.image=this._image,e.scale=this._scale,e.pixelOffset=this._pixelOffset,e.eyeOffset=this._eyeOffset,e.horizontalOrigin=this._horizontalOrigin,e.verticalOrigin=this._verticalOrigin,e.heightReference=this._heightReference,e.color=this._color,e.rotation=this._rotation,e.alignedAxis=this._alignedAxis,e.sizeInMeters=this._sizeInMeters,e.width=this._width,e.height=this._height,e.scaleByDistance=this._scaleByDistance,e.translucencyByDistance=this._translucencyByDistance,e.pixelOffsetScaleByDistance=this._pixelOffsetScaleByDistance,e.imageSubRegion=this._imageSubRegion,e.distanceDisplayCondition=this._distanceDisplayCondition,e.disableDepthTestDistance=this._disableDepthTestDistance,e):new r(this)},r.prototype.merge=function(e){this.show=Object(s["a"])(this._show,e.show),this.image=Object(s["a"])(this._image,e.image),this.scale=Object(s["a"])(this._scale,e.scale),this.pixelOffset=Object(s["a"])(this._pixelOffset,e.pixelOffset),this.eyeOffset=Object(s["a"])(this._eyeOffset,e.eyeOffset),this.horizontalOrigin=Object(s["a"])(this._horizontalOrigin,e.horizontalOrigin),this.verticalOrigin=Object(s["a"])(this._verticalOrigin,e.verticalOrigin),this.heightReference=Object(s["a"])(this._heightReference,e.heightReference),this.color=Object(s["a"])(this._color,e.color),this.rotation=Object(s["a"])(this._rotation,e.rotation),this.alignedAxis=Object(s["a"])(this._alignedAxis,e.alignedAxis),this.sizeInMeters=Object(s["a"])(this._sizeInMeters,e.sizeInMeters),this.width=Object(s["a"])(this._width,e.width),this.height=Object(s["a"])(this._height,e.height),this.scaleByDistance=Object(s["a"])(this._scaleByDistance,e.scaleByDistance),this.translucencyByDistance=Object(s["a"])(this._translucencyByDistance,e.translucencyByDistance),this.pixelOffsetScaleByDistance=Object(s["a"])(this._pixelOffsetScaleByDistance,e.pixelOffsetScaleByDistance),this.imageSubRegion=Object(s["a"])(this._imageSubRegion,e.imageSubRegion),this.distanceDisplayCondition=Object(s["a"])(this._distanceDisplayCondition,e.distanceDisplayCondition),this.disableDepthTestDistance=Object(s["a"])(this._disableDepthTestDistance,e.disableDepthTestDistance)},i["a"]=r}}]);