// import {
//     defaultValue,
//     Event,
//     defineProperties,
//     createPropertyDescriptor,
//     defined,
//     Property,
//     TileMapServiceImageryProvider,
//     ScreenSpaceEventType,
//     Viewer,
//     Cartesian3,
//     Cesium3DTileset,
//     HeadingPitchRoll,
//     Matrix4,
//     ScreenSpaceEventHandler,
//     Math as cesiumMath,
//     CesiumTerrainProvider,
//     PolygonHierarchy,
//     Material,
//     Primitive,
//     GeometryInstance,
//     PolylineMaterialAppearance,
//     PolylineGeometry,
//     PolygonGeometry,
//     Color,
//     EllipsoidSurfaceAppearance,
//     SunLight,
//     Cesium3DTileStyle,
//     buildModuleUrl,
//     PolylineTrailMaterialProperty as cesiumPolylineTrailMaterialProperty
// } from "cesium";

// export class PolylineTrailMaterialProperty {

//     constructor(options) {
//         options = defaultValue(options, defaultValue.EMPTY_OBJECT);
//         this._definitionChanged = new Event();
//         this._color = undefined;
//         this._colorSubscription = undefined;
//         this.color = options.color;
//         this.duration = options.duration;
//         this.trailImage = options.trailImage;
//         this._time = performance.now();
//     }

// }

// defineProperties(PolylineTrailMaterialProperty.prototype, {

//     isConstant: {

//         get: function () {

//             return false;

//         }

//     },

//     definitionChanged: {

//         get: function () {

//             return this._definitionChanged;

//         }

//     },

//     color: createPropertyDescriptor('color')

// });

// PolylineTrailMaterialProperty.prototype.getType = function (time) {

//     return 'PolylineTrail';

// }

// PolylineTrailMaterialProperty.prototype.getValue = function (time, result) {

//     if (!defined(result)) {

//         result = {};

//     }

//     result.color = Property.getValueOrClonedDefault(this._color, time, Color.WHITE, result.color);

//     //result.image = Material.PolylineTrailImage;

//     result.image = this.trailImage;

//     result.time = ((performance.now() - this._time) % this.duration) / this.duration;

//     return result;

// }

// PolylineTrailMaterialProperty.prototype.equals = function (other) {

//     return this === other ||

//         (other instanceof PolylineTrailMaterialProperty &&

//             Property.equals(this._color, other._color))

// }

// Material.PolylineTrailType = 'PolylineTrail';

// Material.PolylineTrailImage = "images/colors.png";

// Material.PolylineTrailSource = "czm_material czm_getMaterial(czm_materialInput materialInput)\n\
// {\n\
// czm_material material = czm_getDefaultMaterial(materialInput); \n\
// vec2 st = materialInput.st; \n\
// vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t)); \n\
// material.alpha = colorImage.a * color.a; \n\
// material.diffuse = (colorImage.rgb + color.rgb) / 2.0; \n\
// return material; \n\
// }";

// Material._materialCache.addMaterial(Material.PolylineTrailType, {

//     fabric: {

//         type: Material.PolylineTrailType,

//         uniforms: {

//             color: new Color(1.0, 0.0, 0.0, 0.5),

//             image: Material.PolylineTrailImage,

//             time: 0

//         },

//         source: Material.PolylineTrailSource

//     },

//     translucent: function (material) {

//         return true;

//     }

// });

// cesiumPolylineTrailMaterialProperty = PolylineTrailMaterialProperty;




// //   createFlyLines(data);


// export function createFlyLines(viewer, data) {
//     viewer = viewer;
//     const center = data.center;

//     const cities = data.points;

//     const startPoint = Cartesian3.fromDegrees(

//         center.lon,

//         center.lat,

//         0

//     );

//     //中心点

//     viewer.entities.add({

//         position: startPoint,

//         point: {

//             pixelSize: center.size,

//             color: center.color

//         }

//     });

//     //大批量操作时，临时禁用事件可以提高性能

//     viewer.entities.suspendEvents();

//     //散点

//     cities.map(city => {

//         let material = new PolylineTrailMaterialProperty({

//             color: Color.GREEN,

//             duration: 3000,

//             trailImage: "images/colors1.png"

//         });

//         const endPoint = Cartesian3.fromDegrees(city.lon, city.lat, 0);

//         viewer.entities.add({

//             position: endPoint,

//             point: {

//                 pixelSize: city.size - 10,

//                 color: city.color

//             }

//         });

//         viewer.entities.add({

//             polyline: {

//                 positions: this.generateCurve(startPoint, endPoint),

//                 width: 2,

//                 material: material

//             }

//         });

//     });

//     viewer.entities.resumeEvents();

//     viewer.flyTo(viewer.entities);

// }

// /**

// * 生成流动曲线

// * @param startPoint 起点

// * @param endPoint 终点

// * @returns {Array}

// */

// function generateCurve(startPoint, endPoint) {

//     let addPointCartesian = new Cartesian3();

//     Cartesian3.add(startPoint, endPoint, addPointCartesian);

//     let midPointCartesian = new Cartesian3();

//     Cartesian3.divideByScalar(addPointCartesian, 2, midPointCartesian);

//     let midPointCartographic = Cartographic.fromCartesian(

//         midPointCartesian

//     );

//     midPointCartographic.height =

//         Cartesian3.distance(startPoint, endPoint) / 5;

//     let midPoint = new Cartesian3();

//     Ellipsoid.WGS84.cartographicToCartesian(

//         midPointCartographic,

//         midPoint

//     );

//     let spline = new CatmullRomSpline({

//         times: [0.0, 0.5, 1.0],

//         points: [startPoint, midPoint, endPoint]

//     });

//     let curvePoints = [];

//     for (let i = 0, len = 200; i < len; i++) {

//         curvePoints.push(spline.evaluate(i / len));

//     }

//     return curvePoints;

// }
