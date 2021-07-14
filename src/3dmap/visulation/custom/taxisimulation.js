import {
    Cartesian3,
    defined,
    JulianDate,
    Color,
    DeveloperError,
    PolylineOutlineMaterialProperty,
    Clock,
    ClockViewModel,
    Math as cesiumMath
} from "cesium";

import trafficPoints from "./traffic.js";
import { getCurvePoints } from "./curve.js";

var center = [106.540545, 29.531714];
var height = 2 * 15;
function getCurveDynamicPointsAndLine(center, endPoints) {
    if (center && (center instanceof Array) && endPoints && (endPoints instanceof Array)) {
        var timeData = [];
        var lineData = [];
        endPoints.map(function (data) {
            var coords = data.geometry && data.geometry.coordinates;
            var toCenter = { lng: coords[0], lat: coords[1] };
            var fromCenter = { lng: center[0], lat: center[1] };
            var cv = getCurvePoints([fromCenter, toCenter]);
            var pointArray = [];
            for (var j = 0; j < cv.length; j++) {
                timeData.push({
                    geometry: {
                        type: 'Point',
                        coordinates: cv[j]
                    },
                    time: j
                });
                pointArray.push(cv[j][0]);
                pointArray.push(cv[j][1]);
                pointArray.push(height);
            }

            lineData.push({
                geometry: {
                    type: 'LineString',
                    coordinates: pointArray
                }
            });
        });
        return { point: timeData, line: lineData };
    }
}

export function onloadtaxi(viewer) {
    viewer.scene.camera.flyTo({
        destination: Cartesian3.fromDegrees(
            106.540545, 29.531714,
            500
        ),
        orientation: {
            heading: cesiumMath.toRadians(327.95),
            pitch: cesiumMath.toRadians(-30.39),
            roll: 0,
        },
    });
    let clock = new Clock();
    clock.shouldAnimate = true;
    let vmClock = new ClockViewModel(clock);

    var center = [106.540545, 29.531714];
    console.log(trafficPoints);
    var pResult = getCurveDynamicPointsAndLine(center, trafficPoints);
    var lineResult = pResult.line;
    var pointResult = pResult.point;

    ///////////////////////////////////////////////////
    var curLineArray = [];
    var linecolor = new Color(32 / 255, 228 / 255, 243 / 255, 0.8);
    var l2 = new Color(65 / 255, 105 / 255, 225 / 255, 0.8);
    for (var i = 0; i < lineResult.length; ++i) {
        curLineArray[i] = viewer.entities.add({
            polyline: {
                positions: Cartesian3.fromDegreesArrayHeights(lineResult[i].geometry.coordinates),
                width: 1,
                material: new PolylineOutlineMaterialProperty({
                    color: linecolor,
                    outlineWidth: 0.1,
                    outlineColor: l2
                }),
                depthFailMaterial: new PolylineOutlineMaterialProperty({
                    color: linecolor,
                    outlineWidth: 0.1,
                    outlineColor: l2
                })
            }
        });
    }

    var color = new Color(243 / 255, 242 / 255, 249 / 255, 0.8);
    var endPointArray = [];
    for (var i = 0; i < trafficPoints.length; ++i) {
        endPointArray[i] = viewer.entities.add({
            position: Cartesian3.fromDegrees(trafficPoints[i].geometry.coordinates[0], trafficPoints[i].geometry.coordinates[1], height),
            billboard: {
                image: './images/c2.png',
                width: 8,
                height: 8,
                color: color
            }
        });
    }
    ///////////////////////////////////////////////////   
    var animationObj = {
        stepsRange: {
            start: 0,
            end: 50
        },
        trails: 10,
        duration: 85
    };

    var _range = animationObj.stepsRange.end - animationObj.stepsRange.start;

    var isAvailable = function isAvailable(currentTime) {
        if (!defined(currentTime)) {
            throw new DeveloperError('time is required.');
        }

        var nMS = JulianDate.toDate(currentTime).getTime() / animationObj.duration;
        var time = (nMS % _range + animationObj.stepsRange.start);

        var trails = trails || 10;
        if (time && this.nameID > time - trails && this.nameID < time) {
            return true;
        } else {
            return false;
        }
    };

    var pointLineArray = [];
    var entityArray = [];
    //pointResult.length = 0;
    for (var i = 0; i < pointResult.length; ++i) {
        var lon = pointResult[i].geometry.coordinates[0];
        var lat = pointResult[i].geometry.coordinates[1];
        entityArray[i] = viewer.entities.add({
            position: Cartesian3.fromDegrees(lon, lat, height),
            nameID: pointResult[i].time,
            billboard: {
                image: './images/c2.png',
                width: 5,
                height: 5,
                color: color
            }
        });
        entityArray[i].isAvailable = isAvailable;
    }

    var colorC = new Color(192 / 255, 16 / 255, 26 / 255, 0.8);
    endPointArray[i] = viewer.entities.add({
        position: Cartesian3.fromDegrees(center[0], center[1], height),
        point: {
            show: true, // default
            color: colorC,//Cesium.Color.RED, // default: WHITE
            pixelSize: 24 // default: 1              
        }
    });
}

export function deltaxi(viewer) {
    viewer.entities.removeAll();
}