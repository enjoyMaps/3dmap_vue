import {
    Cartesian3,
    Cartographic,
    defined,
    Color,
    JulianDate,
    Resource,
    WebMercatorProjection,
    DeveloperError,
    Math as cesiumMath,
    PolylineOutlineMaterialProperty
} from "cesium";

import GPS from "./gps.js"

export function flowLine(viewer) {

    viewer.scene.camera.flyTo({
        destination: Cartesian3.fromDegrees(
            114.2827, 30.4434,
            500
        ),
        orientation: {
            heading: cesiumMath.toRadians(327.95),
            pitch: cesiumMath.toRadians(-30.39),
            roll: 0,
        },
    });

    let resource = Resource.createIfNeeded('./data/wuhan-car');
    resource.fetchText().then(function(rs) {
        let animationObj = {
        stepsRange: {
                start: 0,
                end: 50
            },
            trails: 20,
            duration: 75
        };

        let _range = animationObj.stepsRange.end - animationObj.stepsRange.start;
        let entityArray = [];
        let curLineArray = [];

        let linecolor = new Color(53/255,57/255,255/255,0.8);
        let outline = new Color(65/255,105/255,225/255, 0.8);
        let color = new Color(255/255, 250/255, 250/255, 0.2);

        rs = rs.split("\n");
        console.log(rs.length);
        let maxLength = 0;

        let proj = new WebMercatorProjection();
        let fRatio = 180 / Math.PI;
        let height = 0;

        for (let i = 0; i < rs.length; i++) {
            let item = rs[i].split(',');
            let coordinates = [];
            if (item.length > maxLength) {
                maxLength = item.length;
            }

            let linePos = [];
            for (let j = 0; j < item.length; j += 2) {
                coordinates.push([item[j], item[j + 1]]);
                let latlon = new Cartographic();
                let pos = new Cartesian3(item[j], item[j + 1],0);
                proj.unproject(pos,latlon);

                let lat = latlon.latitude * fRatio;
                let lon = latlon.longitude * fRatio;

                let posGps = GPS.bd_decrypt(lat, lon);
                let posReal = GPS.gcj_decrypt(posGps.lat, posGps.lon);
                linePos.push(posReal.lon);
                linePos.push(posReal.lat);
                linePos.push(height);

                let entity = viewer.entities.add({
                    position : Cartesian3.fromDegrees(posReal.lon,posReal.lat,height),
                    nameID:j,
                    billboard :{
                        image : './images/c2.png',
                        width:5,
                        height:5,
                        color : color
                    }
                });
                entity.isAvailable = function(obj){
                    return function(currentTime){
                        if (!defined(currentTime)) {
                            throw new DeveloperError('time is required.');
                        }

                        let nMS = JulianDate.toDate(currentTime).getTime()/animationObj.duration;
                        let time = (nMS%_range + animationObj.stepsRange.start);

                        let trails = trails || 10;
                        if (time && obj.nameID > time - trails && obj.nameID < time) {
                            obj.billboard.color._value.alpha = 0.8*(obj.nameID - time + trails)/trails;
                            return true;
                        } else {
                            return false;
                        }
                    }
                }(entity);
                entityArray.push(entity);
            }
            
            curLineArray[i] = viewer.entities.add({
            polyline : {
                positions : Cartesian3.fromDegreesArrayHeights(linePos),
                width : 2,
                material : new PolylineOutlineMaterialProperty({
                    color : linecolor,
                    outlineWidth : 0.1,
                    outlineColor : outline
                })
            }
        });
        }

        viewer.scene.camera.setView({
            //将经度、纬度、高度的坐标转换为笛卡尔坐标
            destination : Cartesian3.fromDegrees(114.2827, 30.4434,126468)
        });
    }).otherwise(function(error) {
        console.log(error);
    });
}
