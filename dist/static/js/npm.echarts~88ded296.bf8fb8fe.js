(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.echarts~88ded296"],{"01ef":function(e,n){function t(e,n,t){var r=e.target,o=r.position;o[0]+=n,o[1]+=t,r.dirty()}function r(e,n,t,r){var o=e.target,i=e.zoomLimit,a=o.position,s=o.scale,u=e.zoom=e.zoom||1;if(u*=n,i){var c=i.min||0,l=i.max||1/0;u=Math.max(Math.min(l,u),c)}var h=u/e.zoom;e.zoom=u,a[0]-=(t-a[0])*(h-1),a[1]-=(r-a[1])*(h-1),s[0]*=h,s[1]*=h,o.dirty()}n.updateViewOnPan=t,n.updateViewOnZoom=r},"0c41":function(e,n,t){var r=t("6d8b"),o=t("4a01"),i=t("01ef"),a=t("c526"),s=a.onIrrelevantElement,u=t("2306"),c=t("5b87"),l=t("8918"),h=l.getUID,f=t("0cde");function g(e){var n=e.getItemStyle(),t=e.get("areaColor");return null!=t&&(n.fill=t),n}function d(e,n,t,o,i){t.off("click"),t.off("mousedown"),n.get("selectedMode")&&(t.on("mousedown",(function(){e._mouseDownFlag=!0})),t.on("click",(function(a){if(e._mouseDownFlag){e._mouseDownFlag=!1;var s=a.target;while(!s.__regions)s=s.parent;if(s){var u={type:("geo"===n.mainType?"geo":"map")+"ToggleSelect",batch:r.map(s.__regions,(function(e){return{name:e.name,from:i.uid}}))};u[n.mainType+"Id"]=n.id,o.dispatchAction(u),p(n,t)}}})))}function p(e,n){n.eachChild((function(n){r.each(n.__regions,(function(t){n.trigger(e.isSelected(t.name)?"emphasis":"normal")}))}))}function m(e,n){var t=new u.Group;this.uid=h("ec_map_draw"),this._controller=new o(e.getZr()),this._controllerHost={target:n?t:null},this.group=t,this._updateGroup=n,this._mouseDownFlag,this._mapName,this._initialized,t.add(this._regionsGroup=new u.Group),t.add(this._backgroundGroup=new u.Group)}m.prototype={constructor:m,draw:function(e,n,t,o,i){var a="geo"===e.mainType,s=e.getData&&e.getData();a&&n.eachComponent({mainType:"series",subType:"map"},(function(n){s||n.getHostGeoModel()!==e||(s=n.getData())}));var c=e.coordinateSystem;this._updateBackground(c);var l,h=this._regionsGroup,m=this.group,v=c.getTransformInfo(),_=!h.childAt(0)||i;if(_)m.transform=v.roamTransform,m.decomposeTransform(),m.dirty();else{var y=new f;y.transform=v.roamTransform,y.decomposeTransform();var b={scale:y.scale,position:y.position};l=y.scale,u.updateProps(m,b,e)}var x=v.rawScale,M=v.rawPosition;h.removeAll();var w=["itemStyle"],T=["emphasis","itemStyle"],C=["label"],O=["emphasis","label"],S=r.createHashMap();r.each(c.regions,(function(n){var t=S.get(n.name)||S.set(n.name,new u.Group),o=new u.CompoundPath({segmentIgnoreThreshold:1,shape:{paths:[]}});t.add(o);var i,c=e.getRegionModel(n.name)||e,f=c.getModel(w),d=c.getModel(T),p=g(f),v=g(d),y=c.getModel(C),b=c.getModel(O);if(s){i=s.indexOfName(n.name);var k=s.getItemVisual(i,"color",!0);k&&(p.fill=k)}var I=function(e){return[e[0]*x[0]+M[0],e[1]*x[1]+M[1]]};r.each(n.geometries,(function(e){if("polygon"===e.type){for(var n=[],t=0;t<e.exterior.length;++t)n.push(I(e.exterior[t]));o.shape.paths.push(new u.Polygon({segmentIgnoreThreshold:1,shape:{points:n}}));for(t=0;t<(e.interiors?e.interiors.length:0);++t){for(var r=e.interiors[t],i=(n=[],0);i<r.length;++i)n.push(I(r[i]));o.shape.paths.push(new u.Polygon({segmentIgnoreThreshold:1,shape:{points:n}}))}}})),o.setStyle(p),o.style.strokeNoScale=!0,o.culling=!0;var P=y.get("show"),z=b.get("show"),R=s&&isNaN(s.get(s.mapDimension("value"),i)),A=s&&s.getItemLayout(i);if(a||R&&(P||z)||A&&A.showLabel){var D,L=a?n.name:i;(!s||i>=0)&&(D=e);var G=new u.Text({position:I(n.center.slice()),scale:[1/m.scale[0],1/m.scale[1]],z2:10,silent:!0});if(u.setLabelStyle(G.style,G.hoverStyle={},y,b,{labelFetcher:D,labelDataIndex:L,defaultText:n.name,useInsideStyle:!1},{textAlign:"center",textVerticalAlign:"middle"}),!_){var N=[1/l[0],1/l[1]];u.updateProps(G,{scale:N},e)}t.add(G)}if(s)s.setItemGraphicEl(i,t);else{c=e.getRegionModel(n.name);o.eventData={componentType:"geo",componentIndex:e.componentIndex,geoIndex:e.componentIndex,name:n.name,region:c&&c.option||{}}}var B=t.__regions||(t.__regions=[]);B.push(n),t.highDownSilentOnTouch=!!e.get("selectedMode"),u.setHoverStyle(t,v),h.add(t)})),this._updateController(e,n,t),d(this,e,h,t,o),p(e,h)},remove:function(){this._regionsGroup.removeAll(),this._backgroundGroup.removeAll(),this._controller.dispose(),this._mapName&&c.removeGraphic(this._mapName,this.uid),this._mapName=null,this._controllerHost={}},_updateBackground:function(e){var n=e.map;this._mapName!==n&&r.each(c.makeGraphic(n,this.uid),(function(e){this._backgroundGroup.add(e)}),this),this._mapName=n},_updateController:function(e,n,t){var o=e.coordinateSystem,a=this._controller,u=this._controllerHost;u.zoomLimit=e.get("scaleLimit"),u.zoom=o.getZoom(),a.enable(e.get("roam")||!1);var c=e.mainType;function l(){var n={type:"geoRoam",componentType:c};return n[c+"Id"]=e.id,n}a.off("pan").on("pan",(function(e){this._mouseDownFlag=!1,i.updateViewOnPan(u,e.dx,e.dy),t.dispatchAction(r.extend(l(),{dx:e.dx,dy:e.dy}))}),this),a.off("zoom").on("zoom",(function(e){if(this._mouseDownFlag=!1,i.updateViewOnZoom(u,e.scale,e.originX,e.originY),t.dispatchAction(r.extend(l(),{zoom:e.scale,originX:e.originX,originY:e.originY})),this._updateGroup){var n=this.group.scale;this._regionsGroup.traverse((function(e){"text"===e.type&&e.attr("scale",[1/n[0],1/n[1]])}))}}),this),a.setPointerChecker((function(n,r,i){return o.getViewRectAfterRoam().contain(r,i)&&!s(n,t,e)}))}};var v=m;e.exports=v},"4a01":function(e,n,t){var r=t("6d8b"),o=t("1fab"),i=t("607d"),a=t("a4fe9");function s(e){this.pointerChecker,this._zr=e,this._opt={};var n=r.bind,t=n(u,this),i=n(c,this),a=n(l,this),s=n(h,this),g=n(f,this);o.call(this),this.setPointerChecker=function(e){this.pointerChecker=e},this.enable=function(n,o){this.disable(),this._opt=r.defaults(r.clone(o)||{},{zoomOnMouseWheel:!0,moveOnMouseMove:!0,moveOnMouseWheel:!1,preventDefaultMouseMove:!0}),null==n&&(n=!0),!0!==n&&"move"!==n&&"pan"!==n||(e.on("mousedown",t),e.on("mousemove",i),e.on("mouseup",a)),!0!==n&&"scale"!==n&&"zoom"!==n||(e.on("mousewheel",s),e.on("pinch",g))},this.disable=function(){e.off("mousedown",t),e.off("mousemove",i),e.off("mouseup",a),e.off("mousewheel",s),e.off("pinch",g)},this.dispose=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}function u(e){if(!(i.isMiddleOrRightButtonOnMouseUpDown(e)||e.target&&e.target.draggable)){var n=e.offsetX,t=e.offsetY;this.pointerChecker&&this.pointerChecker(e,n,t)&&(this._x=n,this._y=t,this._dragging=!0)}}function c(e){if(this._dragging&&p("moveOnMouseMove",e,this._opt)&&"pinch"!==e.gestureEvent&&!a.isTaken(this._zr,"globalPan")){var n=e.offsetX,t=e.offsetY,r=this._x,o=this._y,s=n-r,u=t-o;this._x=n,this._y=t,this._opt.preventDefaultMouseMove&&i.stop(e.event),d(this,"pan","moveOnMouseMove",e,{dx:s,dy:u,oldX:r,oldY:o,newX:n,newY:t})}}function l(e){i.isMiddleOrRightButtonOnMouseUpDown(e)||(this._dragging=!1)}function h(e){var n=p("zoomOnMouseWheel",e,this._opt),t=p("moveOnMouseWheel",e,this._opt),r=e.wheelDelta,o=Math.abs(r),i=e.offsetX,a=e.offsetY;if(0!==r&&(n||t)){if(n){var s=o>3?1.4:o>1?1.2:1.1,u=r>0?s:1/s;g(this,"zoom","zoomOnMouseWheel",e,{scale:u,originX:i,originY:a})}if(t){var c=Math.abs(r),l=(r>0?1:-1)*(c>3?.4:c>1?.15:.05);g(this,"scrollMove","moveOnMouseWheel",e,{scrollDelta:l,originX:i,originY:a})}}}function f(e){if(!a.isTaken(this._zr,"globalPan")){var n=e.pinchScale>1?1.1:1/1.1;g(this,"zoom",null,e,{scale:n,originX:e.pinchX,originY:e.pinchY})}}function g(e,n,t,r,o){e.pointerChecker&&e.pointerChecker(r,o.originX,o.originY)&&(i.stop(r.event),d(e,n,t,r,o))}function d(e,n,t,o,i){i.isAvailableBehavior=r.bind(p,null,t,o),e.trigger(n,i)}function p(e,n,t){var o=t[e];return!e||o&&(!r.isString(o)||n.event[o+"Key"])}r.mixin(s,o);var m=s;e.exports=m},7023:function(e,n,t){var r=t("6d8b"),o={updateSelectedMap:function(e){this._targetList=r.isArray(e)?e.slice():[],this._selectTargetMap=r.reduce(e||[],(function(e,n){return e.set(n.name,n),e}),r.createHashMap())},select:function(e,n){var t=null!=n?this._targetList[n]:this._selectTargetMap.get(e),r=this.get("selectedMode");"single"===r&&this._selectTargetMap.each((function(e){e.selected=!1})),t&&(t.selected=!0)},unSelect:function(e,n){var t=null!=n?this._targetList[n]:this._selectTargetMap.get(e);t&&(t.selected=!1)},toggleSelected:function(e,n){var t=null!=n?this._targetList[n]:this._selectTargetMap.get(e);if(null!=t)return this[t.selected?"unSelect":"select"](e,n),t.selected},isSelected:function(e,n){var t=null!=n?this._targetList[n]:this._selectTargetMap.get(e);return t&&t.selected}};e.exports=o},7919:function(e,n,t){var r=t("f934"),o=r.getLayoutRect,i=r.box,a=r.positionElement,s=t("eda2"),u=t("2306");function c(e,n,t){var r=n.getBoxLayoutParams(),s=n.get("padding"),u={width:t.getWidth(),height:t.getHeight()},c=o(r,u,s);i(n.get("orient"),e,n.get("itemGap"),c.width,c.height),a(e,r,u,s)}function l(e,n){var t=s.normalizeCssArray(n.get("padding")),r=n.getItemStyle(["color","opacity"]);r.fill=n.get("backgroundColor");e=new u.Rect({shape:{x:e.x-t[3],y:e.y-t[0],width:e.width+t[1]+t[3],height:e.height+t[0]+t[2],r:n.get("borderRadius")},style:r,silent:!0,z2:-1});return e}n.layout=c,n.makeBackground=l},a4fe9:function(e,n,t){var r=t("3eba"),o="\0_ec_interaction_mutex";function i(e,n,t){var r=u(e);r[n]=t}function a(e,n,t){var r=u(e),o=r[n];o===t&&(r[n]=null)}function s(e,n){return!!u(e)[n]}function u(e){return e[o]||(e[o]={})}r.registerAction({type:"takeGlobalCursor",event:"globalCursorTaken",update:"update"},(function(){})),n.take=i,n.release=a,n.isTaken=s},bd9e:function(e,n,t){var r=t("4e08"),o=(r.__DEV__,t("6d8b")),i=t("2306"),a=t("e0d3"),s=t("f4a2"),u=o.each,c=o.indexOf,l=o.curry,h=["dataToPoint","pointToData"],f=["grid","xAxis","yAxis","geo","graph","polar","radiusAxis","angleAxis","bmap"];function g(e,n,t){var r=this._targetInfoList=[],o={},i=m(n,e);u(v,(function(e,n){(!t||!t.include||c(t.include,n)>=0)&&e(i,r,o)}))}var d=g.prototype;function p(e){return e[0]>e[1]&&e.reverse(),e}function m(e,n){return a.parseFinder(e,n,{includeMainTypes:f})}d.setOutputRanges=function(e,n){this.matchOutputRanges(e,n,(function(e,n,t){if((e.coordRanges||(e.coordRanges=[])).push(n),!e.coordRange){e.coordRange=n;var r=b[e.brushType](0,t,n);e.__rangeOffset={offset:M[e.brushType](r.values,e.range,[1,1]),xyMinMax:r.xyMinMax}}}))},d.matchOutputRanges=function(e,n,t){u(e,(function(e){var r=this.findTargetInfo(e,n);r&&!0!==r&&o.each(r.coordSyses,(function(r){var o=b[e.brushType](1,r,e.range);t(e,o.values,r,n)}))}),this)},d.setInputRanges=function(e,n){u(e,(function(e){var t=this.findTargetInfo(e,n);if(e.range=e.range||[],t&&!0!==t){e.panelId=t.panelId;var r=b[e.brushType](0,t.coordSys,e.coordRange),o=e.__rangeOffset;e.range=o?M[e.brushType](r.values,o.offset,T(r.xyMinMax,o.xyMinMax)):r.values}}),this)},d.makePanelOpts=function(e,n){return o.map(this._targetInfoList,(function(t){var r=t.getPanelRect();return{panelId:t.panelId,defaultBrushType:n&&n(t),clipPath:s.makeRectPanelClipPath(r),isTargetByCursor:s.makeRectIsTargetByCursor(r,e,t.coordSysModel),getLinearBrushOtherExtent:s.makeLinearBrushOtherExtent(r)}}))},d.controlSeries=function(e,n,t){var r=this.findTargetInfo(e,t);return!0===r||r&&c(r.coordSyses,n.coordinateSystem)>=0},d.findTargetInfo=function(e,n){for(var t=this._targetInfoList,r=m(n,e),o=0;o<t.length;o++){var i=t[o],a=e.panelId;if(a){if(i.panelId===a)return i}else for(o=0;o<_.length;o++)if(_[o](r,i))return i}return!0};var v={grid:function(e,n){var t=e.xAxisModels,r=e.yAxisModels,i=e.gridModels,a=o.createHashMap(),s={},l={};(t||r||i)&&(u(t,(function(e){var n=e.axis.grid.model;a.set(n.id,n),s[n.id]=!0})),u(r,(function(e){var n=e.axis.grid.model;a.set(n.id,n),l[n.id]=!0})),u(i,(function(e){a.set(e.id,e),s[e.id]=!0,l[e.id]=!0})),a.each((function(e){var o=e.coordinateSystem,i=[];u(o.getCartesians(),(function(e,n){(c(t,e.getAxis("x").model)>=0||c(r,e.getAxis("y").model)>=0)&&i.push(e)})),n.push({panelId:"grid--"+e.id,gridModel:e,coordSysModel:e,coordSys:i[0],coordSyses:i,getPanelRect:y.grid,xAxisDeclared:s[e.id],yAxisDeclared:l[e.id]})})))},geo:function(e,n){u(e.geoModels,(function(e){var t=e.coordinateSystem;n.push({panelId:"geo--"+e.id,geoModel:e,coordSysModel:e,coordSys:t,coordSyses:[t],getPanelRect:y.geo})}))}},_=[function(e,n){var t=e.xAxisModel,r=e.yAxisModel,o=e.gridModel;return!o&&t&&(o=t.axis.grid.model),!o&&r&&(o=r.axis.grid.model),o&&o===n.gridModel},function(e,n){var t=e.geoModel;return t&&t===n.geoModel}],y={grid:function(){return this.coordSys.grid.getRect().clone()},geo:function(){var e=this.coordSys,n=e.getBoundingRect().clone();return n.applyTransform(i.getTransform(e)),n}},b={lineX:l(x,0),lineY:l(x,1),rect:function(e,n,t){var r=n[h[e]]([t[0][0],t[1][0]]),o=n[h[e]]([t[0][1],t[1][1]]),i=[p([r[0],o[0]]),p([r[1],o[1]])];return{values:i,xyMinMax:i}},polygon:function(e,n,t){var r=[[1/0,-1/0],[1/0,-1/0]],i=o.map(t,(function(t){var o=n[h[e]](t);return r[0][0]=Math.min(r[0][0],o[0]),r[1][0]=Math.min(r[1][0],o[1]),r[0][1]=Math.max(r[0][1],o[0]),r[1][1]=Math.max(r[1][1],o[1]),o}));return{values:i,xyMinMax:r}}};function x(e,n,t,r){var i=t.getAxis(["x","y"][e]),a=p(o.map([0,1],(function(e){return n?i.coordToData(i.toLocalCoord(r[e])):i.toGlobalCoord(i.dataToCoord(r[e]))}))),s=[];return s[e]=a,s[1-e]=[NaN,NaN],{values:a,xyMinMax:s}}var M={lineX:l(w,0),lineY:l(w,1),rect:function(e,n,t){return[[e[0][0]-t[0]*n[0][0],e[0][1]-t[0]*n[0][1]],[e[1][0]-t[1]*n[1][0],e[1][1]-t[1]*n[1][1]]]},polygon:function(e,n,t){return o.map(e,(function(e,r){return[e[0]-t[0]*n[r][0],e[1]-t[1]*n[r][1]]}))}};function w(e,n,t,r){return[n[0]-r[e]*t[0],n[1]-r[e]*t[1]]}function T(e,n){var t=C(e),r=C(n),o=[t[0]/r[0],t[1]/r[1]];return isNaN(o[0])&&(o[0]=1),isNaN(o[1])&&(o[1]=1),o}function C(e){return e?[e[0][1]-e[0][0],e[1][1]-e[1][0]]:[NaN,NaN]}var O=g;e.exports=O},c526:function(e,n){var t={axisPointer:1,tooltip:1,brush:1};function r(e,n,r){var o=n.getComponentByElement(e.topTarget),i=o&&o.coordinateSystem;return o&&o!==r&&!t[o.mainType]&&i&&i.model!==r}n.onIrrelevantElement=r},ef6a:function(e,n){function t(e,n,t,i,a,s){e=e||0;var u=t[1]-t[0];if(null!=a&&(a=o(a,[0,u])),null!=s&&(s=Math.max(s,null!=a?a:0)),"all"===i){var c=Math.abs(n[1]-n[0]);c=o(c,[0,u]),a=s=o(c,[a,s]),i=0}n[0]=o(n[0],t),n[1]=o(n[1],t);var l=r(n,i);n[i]+=e;var h=a||0,f=t.slice();l.sign<0?f[0]+=h:f[1]-=h,n[i]=o(n[i],f);var g=r(n,i);null!=a&&(g.sign!==l.sign||g.span<a)&&(n[1-i]=n[i]+l.sign*a);g=r(n,i);return null!=s&&g.span>s&&(n[1-i]=n[i]+g.sign*s),n}function r(e,n){var t=e[n]-e[1-n];return{span:Math.abs(t),sign:t>0?-1:t<0?1:n?-1:1}}function o(e,n){return Math.min(null!=n[1]?n[1]:1/0,Math.max(null!=n[0]?n[0]:-1/0,e))}e.exports=t},f4a2:function(e,n,t){var r=t("9850"),o=t("c526"),i=o.onIrrelevantElement,a=t("2306");function s(e){return e=l(e),function(n,t){return a.clipPointsByRect(n,e)}}function u(e,n){return e=l(e),function(t){var r=null!=n?n:t,o=r?e.width:e.height,i=r?e.x:e.y;return[i,i+(o||0)]}}function c(e,n,t){return e=l(e),function(r,o,a){return e.contain(o[0],o[1])&&!i(r,n,t)}}function l(e){return r.create(e)}n.makeRectPanelClipPath=s,n.makeLinearBrushOtherExtent=u,n.makeRectIsTargetByCursor=c},fc82:function(e,n,t){var r=t("4e08"),o=(r.__DEV__,t("6d8b")),i=t("1fab"),a=t("2306"),s=t("a4fe9"),u=t("80f0"),c=o.curry,l=o.each,h=o.map,f=Math.min,g=Math.max,d=Math.pow,p=1e4,m=6,v=6,_="globalPan",y={w:[0,0],e:[0,1],n:[1,0],s:[1,1]},b={w:"ew",e:"ew",n:"ns",s:"ns",ne:"nesw",sw:"nesw",nw:"nwse",se:"nwse"},x={brushStyle:{lineWidth:2,stroke:"rgba(0,0,0,0.3)",fill:"rgba(0,0,0,0.1)"},transformable:!0,brushMode:"single",removeOnClick:!1},M=0;function w(e){i.call(this),this._zr=e,this.group=new a.Group,this._brushType,this._brushOption,this._panels,this._track=[],this._dragging,this._covers=[],this._creatingCover,this._creatingPanel,this._enableGlobalPan,this._uid="brushController_"+M++,this._handlers={},l(oe,(function(e,n){this._handlers[n]=o.bind(e,this)}),this)}function T(e,n){var t=e._zr;e._enableGlobalPan||s.take(t,_,e._uid),O(t,e._handlers),e._brushType=n.brushType,e._brushOption=o.merge(o.clone(x),n,!0)}function C(e){var n=e._zr;s.release(n,_,e._uid),S(n,e._handlers),e._brushType=e._brushOption=null}function O(e,n){l(n,(function(n,t){e.on(t,n)}))}function S(e,n){l(n,(function(n,t){e.off(t,n)}))}function k(e,n){var t=se[n.brushType].createCover(e,n);return t.__brushOption=n,z(t,n),e.group.add(t),t}function I(e,n){var t=A(n);return t.endCreating&&(t.endCreating(e,n),z(n,n.__brushOption)),n}function P(e,n){var t=n.__brushOption;A(n).updateCoverShape(e,n,t.range,t)}function z(e,n){var t=n.z;null==t&&(t=p),e.traverse((function(e){e.z=t,e.z2=t}))}function R(e,n){A(n).updateCommon(e,n),P(e,n)}function A(e){return se[e.__brushOption.brushType]}function D(e,n,t){var r,o=e._panels;if(!o)return!0;var i=e._transform;return l(o,(function(e){e.isTargetByCursor(n,t,i)&&(r=e)})),r}function L(e,n){var t=e._panels;if(!t)return!0;var r=n.__brushOption.panelId;return null==r||t[r]}function G(e){var n=e._covers,t=n.length;return l(n,(function(n){e.group.remove(n)}),e),n.length=0,!!t}function N(e,n){var t=h(e._covers,(function(e){var n=e.__brushOption,t=o.clone(n.range);return{brushType:n.brushType,panelId:n.panelId,range:t}}));e.trigger("brush",t,{isEnd:!!n.isEnd,removeOnClick:!!n.removeOnClick})}function B(e){var n=e._track;if(!n.length)return!1;var t=n[n.length-1],r=n[0],o=t[0]-r[0],i=t[1]-r[1],a=d(o*o+i*i,.5);return a>m}function E(e){var n=e.length-1;return n<0&&(n=0),[e[0],e[n]]}function X(e,n,t,r){var o=new a.Group;return o.add(new a.Rect({name:"main",style:V(t),silent:!0,draggable:!0,cursor:"move",drift:c(e,n,o,"nswe"),ondragend:c(N,n,{isEnd:!0})})),l(r,(function(t){o.add(new a.Rect({name:t,style:{opacity:0},draggable:!0,silent:!0,invisible:!0,drift:c(e,n,o,t),ondragend:c(N,n,{isEnd:!0})}))})),o}function Y(e,n,t,r){var o=r.brushStyle.lineWidth||0,i=g(o,v),a=t[0][0],s=t[1][0],u=a-o/2,c=s-o/2,l=t[0][1],h=t[1][1],f=l-i+o/2,d=h-i+o/2,p=l-a,m=h-s,_=p+o,y=m+o;W(e,n,"main",a,s,p,m),r.transformable&&(W(e,n,"w",u,c,i,y),W(e,n,"e",f,c,i,y),W(e,n,"n",u,c,_,i),W(e,n,"s",u,d,_,i),W(e,n,"nw",u,c,i,i),W(e,n,"ne",f,c,i,i),W(e,n,"sw",u,d,i,i),W(e,n,"se",f,d,i,i))}function H(e,n){var t=n.__brushOption,r=t.transformable,o=n.childAt(0);o.useStyle(V(t)),o.attr({silent:!r,cursor:r?"move":"default"}),l(["w","e","n","s","se","sw","ne","nw"],(function(t){var o=n.childOfName(t),i=U(e,t);o&&o.attr({silent:!r,invisible:!r,cursor:r?b[i]+"-resize":null})}))}function W(e,n,t,r,o,i,a){var s=n.childOfName(t);s&&s.setShape(Q(q(e,n,[[r,o],[r+i,o+a]])))}function V(e){return o.defaults({strokeNoScale:!0},e.brushStyle)}function F(e,n,t,r){var o=[f(e,t),f(n,r)],i=[g(e,t),g(n,r)];return[[o[0],i[0]],[o[1],i[1]]]}function Z(e){return a.getTransform(e.group)}function U(e,n){if(n.length>1){n=n.split("");var t=[U(e,n[0]),U(e,n[1])];return("e"===t[0]||"w"===t[0])&&t.reverse(),t.join("")}var r={w:"left",e:"right",n:"top",s:"bottom"},o={left:"w",right:"e",top:"n",bottom:"s"};t=a.transformDirection(r[n],Z(e));return o[t]}function J(e,n,t,r,o,i,a,s){var u=r.__brushOption,c=e(u.range),h=K(t,i,a);l(o.split(""),(function(e){var n=y[e];c[n[0]][n[1]]+=h[n[0]]})),u.range=n(F(c[0][0],c[1][0],c[0][1],c[1][1])),R(t,r),N(t,{isEnd:!1})}function j(e,n,t,r,o){var i=n.__brushOption.range,a=K(e,t,r);l(i,(function(e){e[0]+=a[0],e[1]+=a[1]})),R(e,n),N(e,{isEnd:!1})}function K(e,n,t){var r=e.group,o=r.transformCoordToLocal(n,t),i=r.transformCoordToLocal(0,0);return[o[0]-i[0],o[1]-i[1]]}function q(e,n,t){var r=L(e,n);return r&&!0!==r?r.clipPath(t,e._transform):o.clone(t)}function Q(e){var n=f(e[0][0],e[1][0]),t=f(e[0][1],e[1][1]),r=g(e[0][0],e[1][0]),o=g(e[0][1],e[1][1]);return{x:n,y:t,width:r-n,height:o-t}}function $(e,n,t){if(e._brushType&&!ae(e,n)){var r=e._zr,o=e._covers,i=D(e,n,t);if(!e._dragging)for(var a=0;a<o.length;a++){var s=o[a].__brushOption;if(i&&(!0===i||s.panelId===i.panelId)&&se[s.brushType].contain(o[a],t[0],t[1]))return}i&&r.setCursorStyle("crosshair")}}function ee(e){var n=e.event;n.preventDefault&&n.preventDefault()}function ne(e,n,t){return e.childOfName("main").contain(n,t)}function te(e,n,t,r){var i,a=e._creatingCover,s=e._creatingPanel,u=e._brushOption;if(e._track.push(t.slice()),B(e)||a){if(s&&!a){"single"===u.brushMode&&G(e);var c=o.clone(u);c.brushType=re(c.brushType,s),c.panelId=!0===s?null:s.panelId,a=e._creatingCover=k(e,c),e._covers.push(a)}if(a){var l=se[re(e._brushType,s)],h=a.__brushOption;h.range=l.getCreatingRange(q(e,a,e._track)),r&&(I(e,a),l.updateCommon(e,a)),P(e,a),i={isEnd:r}}}else r&&"single"===u.brushMode&&u.removeOnClick&&D(e,n,t)&&G(e)&&(i={isEnd:r,removeOnClick:!0});return i}function re(e,n){return"auto"===e?n.defaultBrushType:e}w.prototype={constructor:w,enableBrush:function(e){return this._brushType&&C(this),e.brushType&&T(this,e),this},setPanels:function(e){if(e&&e.length){var n=this._panels={};o.each(e,(function(e){n[e.panelId]=o.clone(e)}))}else this._panels=null;return this},mount:function(e){e=e||{},this._enableGlobalPan=e.enableGlobalPan;var n=this.group;return this._zr.add(n),n.attr({position:e.position||[0,0],rotation:e.rotation||0,scale:e.scale||[1,1]}),this._transform=n.getLocalTransform(),this},eachCover:function(e,n){l(this._covers,e,n)},updateCovers:function(e){e=o.map(e,(function(e){return o.merge(o.clone(x),e,!0)}));var n="\0-brush-index-",t=this._covers,r=this._covers=[],i=this,a=this._creatingCover;return new u(t,e,c,s).add(l).update(l).remove(h).execute(),this;function s(e,t){return(null!=e.id?e.id:n+t)+"-"+e.brushType}function c(e,n){return s(e.__brushOption,n)}function l(n,o){var s=e[n];if(null!=o&&t[o]===a)r[n]=t[o];else{var u=r[n]=null!=o?(t[o].__brushOption=s,t[o]):I(i,k(i,s));R(i,u)}}function h(e){t[e]!==a&&i.group.remove(t[e])}},unmount:function(){return this.enableBrush(!1),G(this),this._zr.remove(this.group),this},dispose:function(){this.unmount(),this.off()}},o.mixin(w,i);var oe={mousedown:function(e){if(this._dragging)ie(this,e);else if(!e.target||!e.target.draggable){ee(e);var n=this.group.transformCoordToLocal(e.offsetX,e.offsetY);this._creatingCover=null;var t=this._creatingPanel=D(this,e,n);t&&(this._dragging=!0,this._track=[n.slice()])}},mousemove:function(e){var n=e.offsetX,t=e.offsetY,r=this.group.transformCoordToLocal(n,t);if($(this,e,r),this._dragging){ee(e);var o=te(this,e,r,!1);o&&N(this,o)}},mouseup:function(e){ie(this,e)}};function ie(e,n){if(e._dragging){ee(n);var t=n.offsetX,r=n.offsetY,o=e.group.transformCoordToLocal(t,r),i=te(e,n,o,!0);e._dragging=!1,e._track=[],e._creatingCover=null,i&&N(e,i)}}function ae(e,n,t){var r=e._zr;return n<0||n>r.getWidth()||t<0||t>r.getHeight()}var se={lineX:ue(0),lineY:ue(1),rect:{createCover:function(e,n){return X(c(J,(function(e){return e}),(function(e){return e})),e,n,["w","e","n","s","se","sw","ne","nw"])},getCreatingRange:function(e){var n=E(e);return F(n[1][0],n[1][1],n[0][0],n[0][1])},updateCoverShape:function(e,n,t,r){Y(e,n,t,r)},updateCommon:H,contain:ne},polygon:{createCover:function(e,n){var t=new a.Group;return t.add(new a.Polyline({name:"main",style:V(n),silent:!0})),t},getCreatingRange:function(e){return e},endCreating:function(e,n){n.remove(n.childAt(0)),n.add(new a.Polygon({name:"main",draggable:!0,drift:c(j,e,n),ondragend:c(N,e,{isEnd:!0})}))},updateCoverShape:function(e,n,t,r){n.childAt(0).setShape({points:q(e,n,t)})},updateCommon:H,contain:ne}};function ue(e){return{createCover:function(n,t){return X(c(J,(function(n){var t=[n,[0,100]];return e&&t.reverse(),t}),(function(n){return n[e]})),n,t,[["w","e"],["n","s"]][e])},getCreatingRange:function(n){var t=E(n),r=f(t[0][e],t[1][e]),o=g(t[0][e],t[1][e]);return[r,o]},updateCoverShape:function(n,t,r,o){var i,a=L(n,t);if(!0!==a&&a.getLinearBrushOtherExtent)i=a.getLinearBrushOtherExtent(e,n._transform);else{var s=n._zr;i=[0,[s.getWidth(),s.getHeight()][1-e]]}var u=[r,i];e&&u.reverse(),Y(n,t,u,o)},updateCommon:H,contain:ne}}var ce=w;e.exports=ce}}]);