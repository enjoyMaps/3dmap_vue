(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44e53bec"],{"75b0":function(e,t,a){},a451:function(e,t,a){"use strict";a("75b0")},a5f1:function(e,t,a){"use strict";a("f83f")},bb51:function(e,t,a){"use strict";a.r(t);var i,n,o,c,s,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"toolbar"}),e._m(0),a("Ripple",{directives:[{name:"show",rawName:"v-show",value:e.showRipple,expression:"showRipple"}],attrs:{id:"ripple"}}),a("Track",{directives:[{name:"show",rawName:"v-show",value:e.showTrack,expression:"showTrack"}],attrs:{id:"track"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"panel"},[a("h3",[e._v("功能清单")]),a("ul",{staticClass:"list"},[a("li",{on:{click:function(t){e.marker=!e.marker}}},[e._v("添加标注")]),a("li",{on:{click:function(t){e.particleSystem=!e.particleSystem}}},[e._v("添加粒子效果")]),a("li",{on:{click:function(t){e.draw=!e.draw}}},[e._v("绘制图形")]),a("li",{on:{click:function(t){e.measure=!e.measure}}},[e._v("测量工具")]),a("li",{on:{click:function(t){e.perViewer=!e.perViewer}}},[e._v("第一人称视角")]),a("li",{on:{click:e.addVideos}},[e._v("添加视频贴图")]),a("li",{on:{click:function(t){e.guiji=!e.guiji}}},[e._v("轨迹漫游")]),a("li",{on:{click:function(t){e.changjing=!e.changjing}}},[e._v("场景")]),a("li",{on:{click:function(t){e.visulation=!e.visulation}}},[e._v("可视化专题图")]),a("li",{on:{click:function(t){e.shader=!e.shader}}},[e._v("shader特效")]),a("li",{on:{click:function(t){e.czml=!e.czml}}},[e._v("CZML")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.czml,expression:"czml"}],staticClass:"loadmap"},[a("el-button",{on:{click:function(t){return e.addCzml("globeFly")}}},[e._v("全球轨迹线")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.shader,expression:"shader"}],staticClass:"loadmap"},[a("el-button",{on:{click:e.addradars}},[e._v("加载雷达特效")]),a("el-button",{on:{click:e.addPolygons}},[e._v("加载自定义材质")]),a("el-button",{on:{click:e.addWaters}},[e._v("加载水面")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.visulation,expression:"visulation"}],staticClass:"loadmap"},[a("el-button",{on:{click:e.addPopulation}},[e._v("加载人口专题图")]),a("el-button",{on:{click:e.delPopulation}},[e._v("去除人口专题图")]),a("el-button",{on:{click:e.addSTD}},[e._v("加载迁徙图")]),a("el-button",{on:{click:e.delSTD}},[e._v("去除迁徙图")]),a("el-button",{on:{click:e.addHeat}},[e._v("添加热力图")]),a("el-button",{on:{click:e.addEchart}},[e._v("添加echarts图层")]),a("el-button",{on:{click:e.delEchart}},[e._v("去除echarts图层")]),a("el-button",{on:{click:e.addCircleCharts}},[e._v("添加饼图")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.perViewer,expression:"perViewer"}],staticClass:"loadmap"},[a("el-button",{on:{click:e.pViewer}},[e._v("进入第一人称视角")]),a("el-button",{on:{click:e.cViewer}},[e._v("退出第一人称视角")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.measure,expression:"measure"}],staticClass:"loadmap"},[a("el-button",{on:{click:e.measureDistance}},[e._v("测距")]),a("el-button",{on:{click:e.measureArea}},[e._v("测量面")]),a("el-button",{on:{click:e.measureNone}},[e._v("清除")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.draw,expression:"draw"}],staticClass:"loadmap"},[a("el-button",{on:{click:function(t){return e.draws("billboard")}}},[e._v("绘制点")]),a("el-button",{on:{click:function(t){return e.draws("polyline")}}},[e._v("绘制线")]),a("el-button",{on:{click:function(t){return e.draws("polygon")}}},[e._v("绘制多边形")]),a("el-button",{on:{click:function(t){return e.draws("circle")}}},[e._v("绘制圆")]),a("el-button",{on:{click:function(t){return e.draws("rectangle")}}},[e._v("绘制矩形")]),a("el-button",{on:{click:function(t){return e.draws("destroy")}}},[e._v("清除绘制")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.marker,expression:"marker"}],staticClass:"loadmap"},[a("el-button",{on:{click:function(t){return e.addMarker("shanshuo")}}},[e._v("闪烁点")]),a("el-button",{on:{click:function(t){return e.addMarker("bigdata")}}},[e._v("大量点")]),a("el-button",{on:{click:function(t){return e.addMarker("addImgBillboard")}}},[e._v("图片标注")]),a("el-button",{on:{click:function(t){return e.addMarker("addGifBillboard")}}},[e._v("gif标注")]),a("el-button",{on:{click:function(t){return e.addMarker("addTextBillboard")}}},[e._v("文字标注")]),a("el-button",{on:{click:function(t){return e.addMarker("addCanvasBillboard")}}},[e._v("canvas标注")]),a("el-button",{on:{click:function(t){return e.addMarker("delBillboard")}}},[e._v("去除标注")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.particleSystem,expression:"particleSystem"}],staticClass:"loadmap"},[a("el-button",{on:{click:e.addSnowParticle}},[e._v("加载雪花")]),a("el-button",{on:{click:e.addRaindelParticle}},[e._v("加载雨水")]),a("el-button",{on:{click:e.delParticle}},[e._v("去除粒子效果")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.guiji,expression:"guiji"}],staticClass:"loadmap"},[a("el-button",{on:{click:function(t){return e.backsee()}}},[e._v("轨迹回放")]),a("el-button",{on:{click:function(t){return e.backsee(1)}}},[e._v("跟随视角")]),a("el-button",{on:{click:function(t){return e.backsee(2)}}},[e._v("上帝视角")]),a("el-button",{on:{click:function(t){return e.delbacksee()}}},[e._v("去除轨迹回放")]),a("el-button",{on:{click:function(t){return e.addTrack()}}},[e._v("加载第一视角轨迹")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.changjing,expression:"changjing"}],staticClass:"loadmap"},[a("el-button",{on:{click:e.around}},[e._v("旋转地球")]),a("el-button",{on:{click:e.skybox}},[e._v("自定义天空盒")])],1),e._m(1)])],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"cesiumContainer"}},[a("div",{attrs:{id:"info"}}),a("div",{staticClass:"measure-mouse-tip",staticStyle:{display:"none",color:"#fff",border:"1px solid rgb(236, 159, 30)",position:"absolute","font-size":"12px"},attrs:{id:"toolTip"}},[e._v(" 单击开始，双击结束 ")]),a("div",{staticClass:"cesium_toolbar",attrs:{id:"toolbar"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("video",{staticStyle:{display:"none"},attrs:{id:"trailer",autoplay:"",loop:"",crossorigin:"",controls:""}},[i("source",{attrs:{src:a("098d"),type:"video/mp4"}})])}],d=(a("caad6"),a("2532"),a("b0c0"),a("5ed2")),u=a("bd8d"),m=a("a098"),h=a("be18"),v=a("cb75"),p=a("026b"),f=a("ea72"),k=a("80c1"),g=a("b14a"),b=a("4f77"),w=a("93da"),y=a("2198"),_=a("1863"),x=a("2f63"),E=a("bef8"),T=a("670c"),C=a("2f48"),O=a("3d28"),S=a("52f0"),j=a("0238"),P=a("1697"),I=a("eff4"),R=a("cb1b"),z=a("f640"),L=a("801b"),M=a("d5a5"),D=a("2e62"),B=a("dbe8"),N=a("fc14"),A=a("7a32"),V=a("0fa8"),F=a("0158"),U=a("472c"),W=a("fa22"),H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ripple"},[a("div",{staticClass:"box-a"}),a("div",{staticClass:"box-b"}),a("div",{staticClass:"box-c"})])}],Y={name:"Ripple",data:function(){return{}},methods:{}},$=Y,K=(a("a451"),a("2877")),Z=Object(K["a"])($,H,G,!1,null,"1c6ab0b6",null),J=Z.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.startFly}},[e._v("开始飞行")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.stopFly}},[e._v("暂停飞行")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.continueFly}},[e._v("继续飞行")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.exitFly}},[e._v("退出飞行")])],1),a("div",{attrs:{id:"CesiumContainer"}})])},q=[],Q=a("b85c"),ee=a("ade3"),te=(a("b64b"),a("05c2")),ae=a("2d36"),ie={name:"Track",data:function(){return Object(ee["a"])({marks:[{lng:108.93031186469224,lat:32.708351161723705,height:320,flytime:5},{lng:108.93561033824412,lat:32.70743384796378,height:320,flytime:5},{lng:108.93593381166,lat:32.70842795152455,height:320,flytime:5},{lng:108.93282958786008,lat:32.708961324956476,height:320,flytime:5},{lng:108.93304577623404,lat:32.709793161019114,height:320,flytime:5},{lng:108.93025301402719,lat:32.710043730127076,height:320,flytime:5}],marksIndex:1,pitchValue:-20,changeCameraTime:3,flytime:5,Exection:{},handler:{},activeShapePoints:[],floatingPoint:void 0,activeShape:void 0,drawingMode:"line"},"Exection",{})},mounted:function(){},methods:{flyExtent:function(){i=window.viewer,this.handler=new _["a"](i.canvas);var e=this.marks,t=this.pitchValue,a=this,n=w["a"].toRadians(t);this.setExtentTime(e[this.marksIndex].flytime),this.Exection=function(){var t=a.marksIndex-1;0==a.marksIndex&&(t=e.length-1);var o=a.bearing(e[t].lat,e[t].lng,e[a.marksIndex].lat,e[a.marksIndex].lng);o=w["a"].toRadians(o);var c=d["a"].secondsDifference(i.clock.currentTime,i.clock.startTime),s=0==a.marksIndex?e[e.length-1].lat:e[a.marksIndex-1].lat,r=0==a.marksIndex?e[e.length-1].lng:e[a.marksIndex-1].lng,l=h["a"].fromDegrees(r+(e[a.marksIndex].lng-r)/e[a.marksIndex].flytime*c,s+(e[a.marksIndex].lat-s)/e[a.marksIndex].flytime*c,e[a.marksIndex].height);i.scene.camera.setView({destination:l,orientation:{heading:o,pitch:n}}),d["a"].compare(i.clock.currentTime,i.clock.stopTime)>=0&&(i.clock.onTick.removeEventListener(a.Exection),a.changeCameraHeading())},i.clock.onTick.addEventListener(a.Exection)},changeCameraHeading:function(){var e=this.marks,t=this.pitchValue,a=this.changeCameraTime,n=this,o=this.marksIndex,c=this.marksIndex+1;o==e.length-1&&(c=0);var s=this.bearing(e[o].lat,e[o].lng,e[c].lat,e[c].lng),r=w["a"].toRadians(t),l=(s-w["a"].toDegrees(i.camera.heading))/a;5*l<-180?l+=60:5*l>180&&(l-=60),this.setExtentTime(a);var u=i.camera.heading;this.Exection=function(){var t=d["a"].secondsDifference(i.clock.currentTime,i.clock.startTime),a=w["a"].toRadians(t*l)+u;i.scene.camera.setView({orientation:{heading:a,pitch:r}}),d["a"].compare(i.clock.currentTime,i.clock.stopTime)>=0&&(i.clock.onTick.removeEventListener(n.Exection),n.marksIndex=++n.marksIndex>=e.length?0:n.marksIndex,0!=n.marksIndex&&n.flyExtent())},i.clock.onTick.addEventListener(n.Exection)},setExtentTime:function(e){var t=d["a"].fromDate(new Date),a=d["a"].addSeconds(t,e,new d["a"]);i.clock.startTime=t.clone(),i.clock.stopTime=a.clone(),i.clock.currentTime=t.clone(),i.clock.clockRange=v["a"].CLAMPED,i.clock.clockStep=te["a"].SYSTEM_CLOCK},toRadians:function(e){return e*Math.PI/180},toDegrees:function(e){return 180*e/Math.PI},bearing:function(e,t,a,i){e=this.toRadians(e),t=this.toRadians(t),a=this.toRadians(a),i=this.toRadians(i);var n=Math.sin(i-t)*Math.cos(a),o=Math.cos(e)*Math.sin(a)-Math.sin(e)*Math.cos(a)*Math.cos(i-t),c=Math.atan2(n,o),s=this.toDegrees(c);return s>180&&(s=360-s),(s+360)%360},drawLineRoad:function(){var e=this.handler,t=this.activeShapePoints,a=this;e.setInputAction((function(e){var n=i.scene.pickPosition(e.position);if(Object(x["a"])(n)){if(0===t.length){a.floatingPoint=a.createPoint(n),t.push(n);var o=new ae["a"]((function(){return t}),!1);a.activeShape=a.drawShape(o)}t.push(n),a.createPoint(n)}}),C["a"].LEFT_CLICK),e.setInputAction((function(e){if(Object(x["a"])(a.floatingPoint)){var n=i.scene.pickPosition(e.endPosition);Object(x["a"])(n)&&(a.floatingPoint.position.setValue(n),t.pop(),t.push(n))}}),C["a"].MOUSE_MOVE),e.setInputAction((function(){a.terminateShape()}),C["a"].RIGHT_CLICK)},terminateShape:function(){var e=this.activeShapePoints,t=this.flytime;if(e.pop(),e.length){this.marks=[];var a,n=Object(Q["a"])(e);try{for(n.s();!(a=n.n()).done;){var o=a.value,c=this.toDegrees(E["a"].fromCartesian(o).latitude),s=this.toDegrees(E["a"].fromCartesian(o).longitude);this.marks.push({lat:c,lng:s,flytime:t,height:1e3})}}catch(r){n.e(r)}finally{n.f()}this.drawShape(e)}i.entities.remove(this.floatingPoint),i.entities.remove(this.activeShape),this.floatingPoint=void 0,this.activeShape=void 0,this.activeShapePoints=[]},createPoint:function(e){var t=i.entities.add({position:e,point:{color:u["a"].WHITE,pixelSize:1,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}});return t},drawShape:function(e){var t,a=this.drawingMode;return"line"===a&&(t=i.entities.add({polyline:{positions:e,clampToGround:!0,width:3}})),t},startFly:function(){var e=this.Exection;Object.keys(e).length>0&&this.exitFly(),this.flyExtent()},stopFly:function(){i.clock.shouldAnimate=!1},continueFly:function(){i.clock.shouldAnimate=!0},exitFly:function(){var e=this.Exection,t=this.marks,a=this.pitchValue;i.clock.onTick.removeEventListener(e);var n=w["a"].toRadians(a),o=1,c=o-1,s=this.bearing(t[c].lat,t[c].lng,t[o].lat,t[o].lng);s=w["a"].toRadians(s);var r=h["a"].fromDegrees(t[0].lng,t[0].lat,t[0].height);i.scene.camera.setView({destination:r,orientation:{heading:s,pitch:n}})}},created:function(){}},ne=ie,oe=(a("e2fc"),Object(K["a"])(ne,X,q,!1,null,"690702ae",null)),ce=oe.exports,se=a("763e"),re=a("e67a"),le=a("b375"),de=a("5cac"),ue=a("1798"),me=a("f43c"),he=d["a"].fromDate(new Date(2017,7,11)),ve=d["a"].addSeconds(he,360,new d["a"]),pe={name:"Home",data:function(){return{czml:!1,cesiumWidget:null,clampToGround:null,terrainProvider:null,drawLayer:null,showRipple:!1,mapdata:0,point:!1,guiji:!1,marker:!1,particleSystem:!1,draw:!1,measure:!1,perViewer:!1,visulation:!1,shader:!1,style:{text:"美丽华夏大数据研究院",fontsize:6,color:u["a"].RED,stRotation:5},showTrack:!1,changjing:!1,imags:["./static/images/markers/1.png","./static/images/markers/2.png","./static/images/markers/3.png","./static/images/markers/4.png","./static/images/markers/5.png","./static/images/markers/6.png","./static/images/markers/7.png","./static/images/markers/8.png","./static/images/markers/5.png","./static/images/markers/6.png"],model:[{id:"model0",name:"木塔",url:"./model/Wood_Tower.gltf"},{id:"model1",name:"人",url:"./model/Cesium_Man.gltf"}],msd:{},msa:{}}},destroyed:function(){s&&(s.dataSources.removeAll(!0),s.destroy()),s=null},components:{Ripple:J,Track:ce},mounted:function(){Object(P["a"])(),s=window.viewer,c=new I["a"]({viewer:s,hasEdit:!0})},methods:{addWaters:function(){Object(ue["a"])()},addPolygons:function(){Object(de["a"])()},addCzml:function(e){"globeFly"==e&&Object(me["a"])()},addCircleCharts:function(){Object(W["a"])()},delCircleCharts:function(){},addEchart:function(){Object(N["a"])(s)},delEchart:function(){Object(N["b"])(s)},skybox:function(){s.scene.skyBox=new m["a"]({sources:{positiveX:"./images/sky.png",negativeX:"./images/sky.png",positiveY:"./images/sky.png",negativeY:"./images/sky.png",positiveZ:"./images/sky.png",negativeZ:"./images/sky.png"}})},around:function(){s.clock.multiplier=300,s.clock.shouldAnimate=!0;var e=s.clock.currentTime.secondsOfDay,t=function(){var t=1,a=s.clock.currentTime.secondsOfDay,i=(a-e)/1e3;e=a,s.scene.camera.rotate(h["a"].UNIT_Z,-t*i)};s.clock.onTick.addEventListener(t)},backsee:function(e){s.clock.startTime=he.clone(),s.clock.currentTime=he.clone(),s.clock.stopTime=ve.clone(),s.clock.multiplier=10,s.timeline.zoomTo(he,ve),s.clock.clockRange=v["a"].LOOP_STOP;var t=this.computeFlight(108.92222326466175,32.710008819689094,.1),a=s.entities.add({availability:new p["a"]([new f["a"]({start:he,stop:ve})]),position:t,orientation:new k["a"](t),model:{uri:"./Cesium_Air.glb",minimumPixelSize:150},path:{resolution:1,material:new g["a"]({glowPower:.1,color:u["a"].YELLOW}),width:10}});1==e?s.trackedEntity=a:2==e?(s.trackedEntity=void 0,s.zoomTo(s.entities,new b["a"](0,w["a"].toRadians(-90)))):3==e&&s.camera.lookAtTransform(transform,new h["a"](-100,0,50))},computeFlight:function(e,t,a){for(var i=new y["a"],n=0;n<=360;n+=45){var o=w["a"].toRadians(n),c=d["a"].addSeconds(he,n,new d["a"]),r=h["a"].fromDegrees(e+1.5*a*Math.cos(o),t+a*Math.sin(o),500*w["a"].nextRandomNumber()+1750);i.addSample(c,r),s.entities.add({position:r,point:{pixelSize:8,color:u["a"].TRANSPARENT,outlineColor:u["a"].YELLOW,outlineWidth:3}})}return i},delbacksee:function(){s.entities.removeAll()},addEvent:function(e){var t=this,a=new _["a"](s.scene.canvas);a.setInputAction((function(a){var i=s.scene.pick(a.endPosition);if(Object(x["a"])(i)&&e.includes(i.id)){var n=E["a"].fromCartesian(i.primitive._actualPosition),o=w["a"].toDegrees(n.longitude),c=w["a"].toDegrees(n.latitude),r=n.height,l=new T["a"],d=s.scene.cartesianToCanvasCoordinates(h["a"].fromDegrees(o,c,r),l),u=document.getElementById("ripple");"camera"===i.id.name&&(u.style.top=d.y-40+"px",u.style.left=d.x-40+"px",t.showRipple=!0)}else t.showRipple=!1}),C["a"].MOUSE_MOVE)},addMarker:function(e){if("bigdata"==e)Object(se["e"])(s);else if("shanshuo"==e)Object(se["g"])(s);else if("addImgBillboard"==e){var t=Object(se["c"])(s);this.addEvent(t)}else"addGifBillboard"==e?Object(se["b"])(s):"addTextBillboard"==e?Object(se["d"])(s):"addCanvasBillboard"==e?Object(se["a"])(s):"delBillboard"==e&&Object(se["f"])(s)},addSnowParticle:function(){var e=12,t=1e5,a=new T["a"](e,e),i=new T["a"](2*e,2*e),n=new h["a"],c=function(e){n=h["a"].normalize(e.position,n),h["a"].multiplyByScalar(n,w["a"].randomBetween(-30,-300),n),e.velocity=h["a"].add(e.velocity,n,e.velocity);var a=h["a"].distance(s.scene.camera.position,e.position);e.endColor.alpha=a>t?0:o.endColor.alpha/(a/t+.1)};o=new O["a"]({modelMatrix:new S["a"].fromTranslation(s.scene.camera.position),minimumSpeed:-1,maximumSpeed:0,lifetime:15,emitter:new j["a"](t),startScale:.5,endScale:1,image:"./images/cesium/snowflake_particle.png",emissionRate:7e3,startColor:u["a"].WHITE.withAlpha(0),endColor:u["a"].WHITE.withAlpha(1),minimumImageSize:a,maximumImageSize:i,updateCallback:c}),s.scene.primitives.add(o)},addRaindelParticle:function(){s.scene.skyAtmosphere.hueShift=-.97,s.scene.skyAtmosphere.saturationShift=.25,s.scene.skyAtmosphere.brightnessShift=-.4,s.scene.fog.density=25e-5,s.scene.fog.minimumBrightness=.01;var e=15,t=1e5,a=new T["a"](e,2*e),i=new h["a"],o=function(e){i=h["a"].normalize(e.position,i),i=h["a"].multiplyByScalar(i,-1050,i),e.position=h["a"].add(e.position,i,e.position);var a=h["a"].distance(s.scene.camera.position,e.position);e.endColor.alpha=a>t?0:n.endColor.alpha/(a/t+.1)};n=new O["a"]({modelMatrix:new S["a"].fromTranslation(s.scene.camera.position),speed:-1,lifetime:15,emitter:new j["a"](t),startScale:1,endScale:0,image:"./images/cesium/circular_particle.png",emissionRate:9e3,startColor:new u["a"](.27,.5,.7,0),endColor:new u["a"](.27,.5,.7,.98),imageSize:a,updateCallback:o}),s.scene.primitives.add(n)},delParticle:function(){o.destroy(),n.destroy()},draws:function(e){"destroy"==e?c.destroy():c.startDraw({type:e,style:{material:u["a"].YELLOW,clampToGround:!0},success:function(){}})},pViewer:function(){Object(L["b"])(window.viewer)},cViewer:function(){Object(L["a"])(window.viewer)},measureDistance:function(){this.msd=new z["b"](s,{}),this.msd.start()},measureArea:function(){this.msa=new z["a"](s,{}),this.msa.start()},measureHeight:function(){Object(z["c"])(s)},measureNone:function(){this.msd.clear(),this.msa.clear()},addHeat:function(){Object(M["a"])(s)},addVideos:function(){Object(R["a"])()},addPopulation:function(){Object(B["a"])(s)},delPopulation:function(){Object(B["b"])(s)},addSTD:function(){Object(D["b"])(s)},delSTD:function(){Object(D["a"])(s)},addFlowLine:function(){Object(A["a"])(s)},addMPoint:function(){Object(V["a"])(s)},addTrack:function(){this.showTrack=!this.showTrack},delTrack:function(){},addqianxi:function(){Object(F["a"])(s)},addMapV:function(){Object(re["a"])(s)},addFlyLines:function(){var e={center:{id:0,lon:114.302312702,lat:30.598026044,size:20,color:u["a"].PURPLE},points:[{id:1,lon:115.028495718,lat:30.200814617,color:u["a"].YELLOW,size:15},{id:2,lon:110.795000473,lat:32.638540762,color:u["a"].RED,size:15},{id:3,lon:111.267729446,lat:30.698151246,color:u["a"].BLUE,size:15},{id:4,lon:112.126643144,lat:32.058588576,color:u["a"].GREEN,size:15},{id:5,lon:114.885884938,lat:30.395401912,color:u["a"].BLUE,size:15},{id:6,lon:112.190419415,lat:31.043949588,color:u["a"].BLUE,size:15},{id:7,lon:113.903569642,lat:30.93205405,color:u["a"].BLUE,size:15},{id:8,lon:112.226648859,lat:30.367904255,color:u["a"].BLUE,size:15},{id:9,lon:114.86171677,lat:30.468634833,color:u["a"].BLUE,size:15},{id:10,lon:114.317846048,lat:29.848946148,color:u["a"].BLUE,size:15},{id:11,lon:113.371985426,lat:31.70498833,color:u["a"].BLUE,size:15},{id:12,lon:109.468884533,lat:30.289012191,color:u["a"].BLUE,size:15},{id:13,lon:113.414585069,lat:30.368350431,color:u["a"].SALMON,size:15},{id:14,lon:112.892742589,lat:30.409306203,color:u["a"].WHITE,size:15},{id:15,lon:113.16085371,lat:30.667483468,color:u["a"].SALMON,size:15},{id:16,lon:110.670643354,lat:31.74854078,color:u["a"].PINK,size:15}],options:{name:"",polyline:{width:2,material:[u["a"].GREEN,3e3]}}};Object(U["createFlyLines"])(s,e)},addradars:function(){Object(le["a"])(s)}}},fe=pe,ke=(a("a5f1"),Object(K["a"])(fe,r,l,!1,null,"431c5bab",null));t["default"]=ke.exports},d849:function(e,t,a){},e2fc:function(e,t,a){"use strict";a("d849")},f83f:function(e,t,a){}}]);