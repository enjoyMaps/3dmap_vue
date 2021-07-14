import {
    Cartesian3,
    defined,
    Color,
    JulianDate,
    Resource,
    DeveloperError,
} from "cesium";

let entity;
let resource;

export function MPoint(viewer) {
    resource = Resource.createIfNeeded('./config/json/weibo.json');
    resource.fetchJson().then(function(rs) {
        let animationObj = {
            stepsRange: {
                start: 0,
                end: 10
            },
            trails: 1,
            duration: 6
        };
        let _range = animationObj.stepsRange.end - animationObj.stepsRange.start;
        let isAvailable = function isAvailable(currentTime) {
            if (!defined(currentTime)) {
                throw new DeveloperError('time is required.');
            }

            let nMS = JulianDate.toDate(currentTime).getTime()/animationObj.duration;
            let time = (nMS%_range + animationObj.stepsRange.start);

            let trails = trails || 10;
            if (time && this.nameID > time - trails && this.nameID < time) {
                return true;
            } else {
                return false;
            }
        };
        /////////////////////////////////////////////////////
        let height = 0;
        let heightDynamic = 1;
        let color1 = new Color(200/255, 200/255, 0/255, 0.8);
        for (let j = 0; j < rs[0].length; j=j+2) {
            entity = viewer.entities.add({
                position : Cartesian3.fromDegrees(rs[0][j].geoCoord[0],rs[0][j].geoCoord[1],height),
                point : {
                    show : true,
                    color : color1,
                    pixelSize : 0.7
                }
            });
        }

        let color2 = new Color(255/255, 250/255, 0/255, 0.8);
        let color2D = new Color(255/255, 250/255, 0/255, 0.9);
        for (let i = 0; i < rs[1].length; i=i+1) {
            viewer.entities.add({
                position : Cartesian3.fromDegrees(rs[1][i].geoCoord[0],rs[1][i].geoCoord[1],height),
                point : {
                    show : true,
                    color : color2,
                    pixelSize : 0.7
                }
            });

            entity = viewer.entities.add({
                position : Cartesian3.fromDegrees(rs[1][i].geoCoord[0],rs[1][i].geoCoord[1],heightDynamic),
                nameID:Math.random() * 10,
                point : {
                    show : true,
                    color : color2D,
                    pixelSize : 1.618
                }
            });
            entity.isAvailable = isAvailable;
        }

        let color3 = new Color(255/255, 250/255, 250/255, 0.6);
        for (let i = 0; i < rs[2].length; i=i+2) {
            viewer.entities.add({
                position : Cartesian3.fromDegrees(rs[2][i].geoCoord[0],rs[2][i].geoCoord[1],height),
                point : {
                    show : true,
                    color : color3,
                    pixelSize : 0.7
                }
            });
        }

        viewer.zoomTo(viewer.entities);
        // viewer.scene.camera.setView({
        //     //将经度、纬度、高度的坐标转换为笛卡尔坐标
        //     destination : Cesium.Cartesian3.fromDegrees(114.2827, 30.4434,126468)
        // });
    }).otherwise(function(error) {
        console.log(error);
    });
}
export function delPoint(viewer) {
    viewer.entities.removeAll();
}