import { ScreenSpaceEventType, Cartesian2, Cartesian3, Entity, Color, NearFarScalar, CallbackProperty, LabelStyle, Cartographic, EllipsoidGeodesic, Math as cesiumMath, PolygonHierarchy, ClassificationType, defined, DeveloperError, BillboardCollection, VerticalOrigin, ScreenSpaceEventHandler, LabelCollection, Ellipsoid, HorizontalOrigin, HeightReference, Matrix4, PolygonGraphics, SceneMode } from 'cesium'
import { MovePrompt } from './drawtools/prompt/movePrompt.js'

/* import { point, polygon, featureCollection } from '@turf/helpers'
import { center as centerTurf } from '@turf/center'
import { area as areaTurf } from '@turf/area' */
import { point, polygon as polygonTurf, featureCollection } from '@turf/turf'
import { center as centerTurf } from '@turf/turf'
import { area as areaTurf } from '@turf/turf'


// import { point, polygon as turfPolygon,featureCollection } from '@turf/helpers'
// import {center as turfCenter} from '@turf/center'
// import { area as turfArea } from '@turf/area'
// import {turf} from '../../../public/turf.min.js'


//空间距离量算js
var MeasureSpaceDistance = function (viewer, opt) {
    this.objId = Number((new Date()).getTime() + "" + Number(Math.random() * 1000).toFixed(0));
    this.viewer = viewer;
    this.handler = new ScreenSpaceEventHandler(this.viewer.scene.canvas);
    this.ts_handler = new ScreenSpaceEventHandler(this.viewer.scene.canvas);
    //线
    this.polyline = null;
    //线坐标
    this.positions = [];
    //标签数组
    this.labels = [];
    this.floatLable = null;
    this.lastCartesian = null;
    this.allDistance = 0;
    var that = this;
}
MeasureSpaceDistance.prototype = {
    //开始测量
    start: function () {
        var that = this;
        this.handler.setInputAction(function (evt) { //单机开始绘制
            var cartesian = that.getCatesian3FromPX(evt.position, that.viewer, [that.polyline, that.floatLable]);
            if (!cartesian) return;
            if (that.positions.length == 0) {
                var label = that.createLabel(cartesian, "起点");
                that.labels.push(label);
                that.floatLable = that.createLabel(cartesian, "");
                that.floatLable.show = false;
                that.positions.push(cartesian);
                that.positions.push(cartesian.clone());
                that.lastCartesian = cartesian;
            } else {
                that.floatLable.show = false;
                that.positions.push(cartesian);
                if (!that.lastCartesian) return;
                var distance = that.getLength(cartesian, that.lastCartesian);
                that.allDistance += distance;
                var text = that.formatLength(distance);
                var label = that.createLabel(cartesian, text);
                that.labels.push(label);
            }
            that.lastCartesian = cartesian;
        }, ScreenSpaceEventType.LEFT_CLICK);
        this.handler.setInputAction(function (evt) {
            if (that.positions.length < 1) return;
            that.floatLable.show = true;
            var cartesian = that.getCatesian3FromPX(evt.endPosition, that.viewer, [that.polyline, that.floatLable]);
            if (!cartesian) return;
            if (that.positions.length == 2) {
                if (!defined(that.polyline)) {
                    that.polyline = that.createLine();
                }
            }
            if (that.polyline) {
                that.positions.pop();
                that.positions.push(cartesian);
                if (!that.lastCartesian) return;
                var distance = that.getLength(cartesian, that.lastCartesian);
                that.floatLable.show = true;
                that.floatLable.label.text = that.formatLength(distance);
                that.floatLable.position.setValue(cartesian);
            }
        }, ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.setInputAction(function (evt) {
            if (!that.polyline) return;
            that.floatLable.show = false;
            that.viewer.scene.camera.lookAtTransform(Matrix4.IDENTITY);
            that.viewer.trackedEntity = undefined;

            var cartesian = that.getCatesian3FromPX(evt.position, that.viewer, [that.polyline, that.floatLable]);
            var distanceLast = that.getLength(cartesian, that.lastCartesian);
            that.allDistance += distanceLast;
            var allDistance = that.formatLength(that.allDistance);


            var label = that.createLabel(cartesian, "");
            if (!cartesian) return;
            that.labels.push(label);
            that.labels[that.labels.length - 1].label.text = "总长：" + allDistance;
            if (that.handler) {
                that.handler.destroy();
                that.handler = null;
            }
            if (that.tsLabel) {
                that.viewer.entities.remove(that.tsLabel);
            }
            if (that.ts_handler) {
                that.ts_handler.destroy();
                that.ts_handler = null;
            }
        }, ScreenSpaceEventType.RIGHT_CLICK);
    },
    //清除测量结果
    clear: function () {
        if (this.polyline) {
            this.viewer.entities.remove(this.polyline);
            this.polyline = null;
        }
        for (var i = 0; i < this.labels.length; i++) {
            this.viewer.entities.remove(this.labels[i]);
        }
        this.labels = [];
        if (this.floatLable) {
            this.viewer.entities.remove(this.floatLable);
            this.floatLable = null;
        }
        this.floatLable = null;
    },
    createLine: function () {
        var that = this;
        var polyline = this.viewer.entities.add({
            polyline: {
                positions: new CallbackProperty(function () {
                    return that.positions
                }, false),
                show: true,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                material: Color.YELLOW,
                width: 3,
                clampToGround: true,
            }
        });
        polyline.objId = this.objId;
        return polyline;
    },
    createLabel: function (c, text) {
        if (!c) return;
        var label = this.viewer.entities.add({
            position: c,
            label: {
                text: text || "",
                font: '24px Helvetica',
                fillColor: Color.SKYBLUE,
                outlineColor: Color.BLACK,
                outlineWidth: 2,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                style: LabelStyle.FILL_AND_OUTLINE,
                horizontalOrigin: HorizontalOrigin.RIGHT,
                verticalOrigin: VerticalOrigin.BOTTOM
            }
        });

        return label;
    },
    getLength: function (c1, c2) {
        if (!c1 || !c2) return 0;
        return Cartesian3.distance(c1, c2);
    },
    formatLength: function (num, dw) {
        if (!num) return;
        var res = null;
        if (!dw) {
            dw = "米";
            var n = Number(num).toFixed(2);
            res = n + dw;
        }
        if (dw == "千米" || dw == "公里") {
            var n = (Number(num) / 1000).toFixed(2);
            res = n + dw;
        }
        return res;
    },
    //兼容模型和地形上坐标拾取
    getCatesian3FromPX: function (px, viewer, noPickEntityArr) {
        var picks = viewer.scene.drillPick(px);
        viewer.render();
        var getOnModel = false;
        var that = this;
        var cartesian;
        if (viewer.scene.pickPositionSupported) { //检测是否支持拾取坐标
            for (var i = 0; i < picks.length; i++) {
                var pickedObject = picks[i];
                for (var j = 0; j < noPickEntityArr.length; j++) {
                    var noPickEntity = noPickEntityArr[j];
                    if (that.hasPickedModel(pickedObject, noPickEntity)) {
                        getOnModel = true;
                    }
                }
            }
        }
        if (getOnModel) {
            cartesian = viewer.scene.pickPosition(px);
        } else {
            var ray = viewer.camera.getPickRay(px);
            if (!ray) return null;
            cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        }
        return cartesian;
    },
    //过滤拾取 屏蔽对某个entity的拾取
    hasPickedModel: function (pickedObject, noPickEntity) {
        if (!noPickEntity) return true;
        if (defined(pickedObject.id)) {
            var entity = pickedObject.id;
            if (noPickEntity && entity == noPickEntity) return false;
        }

        if (defined(pickedObject.primitive)) {
            var primitive = pickedObject.primitive;
            if (noPickEntity && primitive == noPickEntity) return false;
        }
        return true;
    }
}

//空间面积测量js

var MeasureSpaceArea = function (viewer, opt) {
    this.objId = Number((new Date()).getTime() + "" + Number(Math.random() * 1000).toFixed(0));
    this.viewer = viewer;
    this.handler = new ScreenSpaceEventHandler(this.viewer.scene.canvas);

    //线
    this.polyline = null;
    //面
    this.polygon = null;
    //面积标签
    this.floatLabel = null;
    this.positions = [];
    this.movePush = false;
    this.prompt = new MovePrompt(viewer, {});
}
MeasureSpaceArea.prototype = {

    //开始测量
    start: function () {
        var that = this;
        this.handler.setInputAction(function (evt) {
            // start
            var pickedO = that.viewer.scene.pick(evt.position);
            console.log(pickedO);
            let Rectangle = that.viewer.camera.computeViewRectangle();
            // console.log(Rectangle);
            // var pickedObjectC = viewer.scene.pick(e.endPosition);
            // console.log("左键单击事件：", e.position);
            //这里处理单击事件代码ee
            var position = that.viewer.scene.pickPosition(evt.position);
            var wgs84 = that.viewer.scene.globe.ellipsoid.cartesianToCartographic(
                position
            );
            var lng = cesiumMath.toDegrees(wgs84.longitude);
            var lat = cesiumMath.toDegrees(wgs84.latitude);
            var hgt = wgs84.height;
            // end
            var cartesian = that.getCatesian3FromPX(evt.position, that.viewer, [that.polygon, that.polyline]);
            console.log(cartesian);
            if (!cartesian) return;
            if (that.movePush) {
                that.positions.pop();
                that.movePush = false;
            }
            that.positions.push(cartesian);
            // that.floatLabel.position.setValue([lng, lat, hgt]);
        }, ScreenSpaceEventType.LEFT_CLICK);
        this.handler.setInputAction(function (evt) {
            if (that.positions.length < 1) {
                that.prompt.updatePrompt(evt.endPosition, "单击开始绘制");
                return;
            }
            that.prompt.updatePrompt(evt.endPosition, "右键结束");
            var cartesian = that.getCatesian3FromPX(evt.endPosition, that.viewer, [that.polygon, that.polyline]);

            if (that.positions.length >= 2) {
                if (!that.movePush) {
                    that.positions.push(cartesian);
                    that.movePush = true;
                } else {
                    that.positions[that.positions.length - 1] = cartesian;
                }
                if (that.positions.length == 2) {
                    if (!defined(that.polyline)) {
                        that.polyline = that.createPolyline();
                    }
                }
                if (that.positions.length == 3) {
                    if (!defined(that.polygon)) {
                        that.polygon = that.createPolygon(that.style);
                        that.polygon.isFilter = true;
                        that.polygon.objId = that.objId;
                    }
                    if (!that.floatLabel) that.floatLabel = that.createLabel(cartesian, "");
                }
                if (that.polygon) {
                    var area = that.getAreaAndCenter(that.positions).area;
                    var center = that.getAreaAndCenter(that.positions).center;
                    var text = that.formatArea(area);
                    that.floatLabel.label.text = "面积：" + text;
                    console.log(text);
                    if (center) that.floatLabel.position.setValue(center);
                }
            }
        }, ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.setInputAction(function (evt) {
            if (!that.polygon) return;
            that.viewer.scene.camera.lookAtTransform(Matrix4.IDENTITY);
            that.viewer.trackedEntity = undefined;
            if (!that.polygon) return;
            var cartesian = that.getCatesian3FromPX(evt.position, that.viewer, [that.polygon, that.polyline]);
            that.positions.push(cartesian);
            if (that.polygon) {
                var area = that.getAreaAndCenter(that.positions).area;
                var center = that.getAreaAndCenter(that.positions).center;
                var text = that.formatArea(area);
                that.floatLabel.label.text = "面积：" + text;
                if (center) that.floatLabel.position.setValue(center);
            }
            that.handler.destroy();
            if (that.movePush) {
                that.positions.pop();
                that.movePush = false;
            }
            if (that.prompt) {
                that.prompt.destroy();
                that.prompt = null;
            }
        }, ScreenSpaceEventType.RIGHT_CLICK);
    },
    //清除测量结果
    clear: function () {
        if (this.polyline) {
            this.viewer.entities.remove(this.polyline);
            this.polyline = null;
        }
        if (this.polygon) {
            this.viewer.entities.remove(this.polygon);
            this.polygon = null;
        }
        if (this.floatLabel) {
            this.viewer.entities.remove(this.floatLabel);
            this.floatLabel = null;
        }
        this.floatLable = null;
    },
    createPolyline: function () {
        var that = this;
        var polyline = that.viewer.entities.add({
            polyline: {
                positions: new CallbackProperty(function () {
                    return that.positions
                }, false),
                show: true,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                material: Color.YELLOW,
                width: 3
            }
        });
        return polyline;
    },
    createPolygon: function () {
        var that = this;
        var polygon = that.viewer.entities.add({
            polygon: new PolygonGraphics({
                hierarchy: new CallbackProperty(function () {
                    return new PolygonHierarchy(that.positions);
                }, false),
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                material: Color.YELLOW,
                show: true,
                fill: true
            })
        });
        return polygon;
    },
    createLabel: function (c, text) {
        if (!c) return;
        var label = this.viewer.entities.add({
            position: c,
            label: {
                text: text || "",
                font: '24px Helvetica',
                fillColor: Color.SKYBLUE,
                outlineColor: Color.BLACK,
                outlineWidth: 2,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                style: LabelStyle.FILL_AND_OUTLINE,
                heightReference: HeightReference.CLAMP_TO_GROUND
            }
        });
        return label;
    },
    //调用第三方插件计算面积 turf
    getAreaAndCenter: function (positions) {
        if (!positions || positions.length < 1) return;
        var cartographics = [];
        var turfPoints = [];
        for (var i = 0; i < positions.length; i++) {
            var cartesian3 = positions[i];
            var cartographic = Cartographic.fromCartesian(cartesian3);
            cartographics.push([cesiumMath.toDegrees(cartographic.longitude), cesiumMath.toDegrees(cartographic.latitude)]);
            turfPoints.push(point([cesiumMath.toDegrees(cartographic.longitude), cesiumMath.toDegrees(cartographic.latitude)]));
        }
        if (!cartographics.length) return;
        cartographics = cartographics.concat([cartographics[0]]);
        var polygon = polygonTurf([cartographics]);
        var area = areaTurf(polygon);

        //获取当前范围的中心点
        var features = featureCollection(turfPoints);
        var turfCenter = centerTurf(features);
        var center = turfCenter.geometry.coordinates;

        return {
            area: area,
            center: Cartesian3.fromDegrees(center[0], center[1], 300)
        };
    },
    formatArea: function (num, dw) {
        if (!num) return;
        var res = null;
        if (!dw) {
            dw = "平方米";
            var n = Number(num).toFixed(2);
            res = n + dw;
        }
        if (dw == "平方千米" || dw == "平方公里") {
            var n = (Number(num) / 1000000).toFixed(2);
            res = n + dw;
        }
        return res;
    },
    //兼容模型和地形上坐标拾取
    getCatesian3FromPX: function (px, viewer, entitys) {
        var picks = viewer.scene.drillPick(px);
        this.viewer.scene.render();
        var cartesian;
        var isOn3dtiles = false;
        for (var i = 0; i < picks.length; i++) {
            var isContinue = false;
            for (var step = 0; step < entitys.length; step++) {
                if (entitys[step] && picks[i].id && entitys[step].objId == picks[i].id.objId) {
                    isContinue = true;
                    break;
                }
            }
            if (isContinue) continue;
            if ((picks[i] && picks[i].primitive) || picks[i] instanceof Cesium3DTileFeature) { //模型上拾取
                isOn3dtiles = true;
            }
        }
        if (isOn3dtiles) {
            cartesian = viewer.scene.pickPosition(px);
        } else {
            var ray = viewer.camera.getPickRay(px);
            if (!ray) return null;
            cartesian = viewer.scene.globe.pick(ray, viewer.scene);
        }
        return cartesian;
    }
}

// 高度测量
export function measureHgt(viewer) {
    const scene = viewer.scene;
    const handler = new ScreenSpaceEventHandler(scene.canvas);
    let previousPickedEntity = undefined;
    var labelEntity = viewer.entities.add({
        label: {
            show: false,
            showBackground: true,
            font: '12px monospace',
            horizontalOrigin: HorizontalOrigin.LEFT,
            verticalOrigin: VerticalOrigin.TOP,
            pixelOffset: new Cartesian2(15, 0)
        }
    });
    handler.setInputAction(function (movement) {
        const modelEntity = scene.pick(movement.endPosition);
        var foundPosition = false;
        if (scene.mode !== SceneMode.MORPHING) {
            var pickedObject = scene.pick(movement.endPosition);
            if (scene.pickPositionSupported && defined(pickedObject)) {
                var cartesian = scene.pickPosition(movement.endPosition);
                if (defined(cartesian)) {
                    var cartographic = Cartographic.fromCartesian(cartesian);
                    var longitudeString = cesiumMath.toDegrees(cartographic.longitude);
                    var latitudeString = cesiumMath.toDegrees(cartographic.latitude);
                    var heightString = cartographic.height.toFixed(2);
                    labelEntity.position = cartesian;
                    labelEntity.label.show = true;
                    labelEntity.label.text =
                        'Lon: ' + ('   ' + longitudeString) + '\u00B0' +
                        '\nLat: ' + ('   ' + latitudeString) + '\u00B0' +
                        '\nAlt: ' + ('   ' + heightString) + 'm';
                    labelEntity.label.eyeOffset = new Cartesian3(0.0, 0.0, -cartographic.height * (scene.mode === SceneMode.SCENE2D ? 1.5 : 1.0));
                    foundPosition = true;
                }
            }
        }
        if (!foundPosition) {
            labelEntity.label.show = false;
        }
    }, ScreenSpaceEventType.MOUSE_MOVE);
}


/**
 * 用海伦公式获取传入坐标的构成的多边形的面积。
* @param {Array.Cartesian}
* @returns {Number} 返回面积数值。
*/
export function getSurfaceArea (positions) {
 if (positions.length < 3) {
   return 0
 }
 const { Cartesian3, EllipsoidTangentPlane, Ellipsoid, Math: CesiumMath, PolygonGeometryLibrary, PolygonHierarchy, VertexFormat } = Cesium
 const perPositionHeight = true
 // 获取组成多边形的三角形。
 const tangentPlane = EllipsoidTangentPlane.fromPoints(
   positions,
   Ellipsoid.WGS84
 )
 const polygons = PolygonGeometryLibrary.polygonsFromHierarchy(
   new PolygonHierarchy(positions),
   tangentPlane.projectPointsOntoPlane.bind(tangentPlane),
   !perPositionHeight,
   Ellipsoid.WGS84
 )

 const geom = PolygonGeometryLibrary.createGeometryFromPositions(
   Ellipsoid.WGS84,
   polygons.polygons[0],
   CesiumMath.RADIANS_PER_DEGREE,
   perPositionHeight,
   VertexFormat.POSITION_ONLY
 )

 if (geom.indices.length % 3 !== 0 || geom.attributes.position.values.length % 3 !== 0) {
   // 不是三角形，无法计算。
   return 0
 }
 const coords = []
 for (let i = 0; i < geom.attributes.position.values.length; i += 3) {
   coords.push(
     new Cartesian3(
       geom.attributes.position.values[i],
       geom.attributes.position.values[i + 1],
       geom.attributes.position.values[i + 2]
     )
   )
 }
 let area = 0
 for (let i = 0; i < geom.indices.length; i += 3) {
   const ind1 = geom.indices[i]
   const ind2 = geom.indices[i + 1]
   const ind3 = geom.indices[i + 2]

   const a = Cartesian3.distance(coords[ind1], coords[ind2])
   const b = Cartesian3.distance(coords[ind2], coords[ind3])
   const c = Cartesian3.distance(coords[ind3], coords[ind1])

   // 海伦公式
   const s = (a + b + c) / 2.0
   area += Math.sqrt(s * (s - a) * (s - b) * (s - c))
 }
 return area
}




// export { MeasureSpaceDistance, MeasureSpaceArea };
export { MeasureSpaceDistance, MeasureSpaceArea };
