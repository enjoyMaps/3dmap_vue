import {
    Cartesian3,
    Color as cesiumColor,
    GeometryInstance,
    Primitive,
    Material,
    MaterialAppearance,
    CircleGeometry,
    ColorGeometryInstanceAttribute
} from "cesium";

import * as echarts from "echarts";

/* export function addCircleCharts() {
    let circle = new CircleGeometry({
        center: Cartesian3.fromDegrees(108.93202007493066,
            32.70144),
        radius: 5
    });
    let circleGeometry = CircleGeometry.createGeometry(circle);
    let circleGeometryInstance = new GeometryInstance({
        geometry: circleGeometry,
        attributes: {
            color: ColorGeometryInstanceAttribute.fromColor(cesiumColor.ORANGE)
        }
    });
    let criclePrimitive = new Primitive({
        geometryInstances: [
            circleGeometryInstance
        ],
        appearance: new MaterialAppearance({
            material:
                new Material({
                    fabric: {
                        type: 'Image',
                        uniforms: {
                            image: chart.getDataURL()
                        }
                    }
                })
        })
    })
    let canvasDom = document.createElement('canvas');
    canvasDom.width = 400;
    canvasDom.height = 400;
    let myChart = echarts.init(canvasDom);
    myChart.setOption(option);
    myChart.on('finished', () => {
        let criclePrimitive = getCriclePrimitive(myChart, { radius, lon, lat })
        window.viewer.scene.primitives.add(criclePrimitive)
        myChart.dispose();
        myChart = null;
        canvasDom = null;
    })

} */


export function addCircleChart() {
    
    let option = {
        series: [
            {
                name: '姓名',
                type: 'pie',
                radius: '100%',
                center: ['50%', '50%'],
                data: genData(50).seriesData,
                label: {        //展示文本设置 
                    normal: {
                        show: false,
                    }
                }
            }
        ]
    };
    drawPie(option, window.viewer, { lon: 116.19777, lat: 39.03883 })
    option = {
        series: [
            {
                name: '姓名',
                type: 'pie',
                radius: '100%',
                center: ['50%', '50%'],
                data: genData(50).seriesData,
                label: {        //展示文本设置 
                    normal: {
                        show: false,
                    }
                }
            }
        ]
    };
    drawPie(option, window.viewer, { lon: 102.19777, lat: 39.03883, radius: 200000.0 })
    window.viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(116.19777, 39.03883, 10000000.0)
    });
    function drawPie(dataOption, veiwer, { radius = 100000.0, lon, lat } = {}) {
        let canvasDom = document.createElement('canvas');
        canvasDom.width = 400;
        canvasDom.height = 400;
        let myChart = echarts.init(canvasDom);
        myChart.setOption(option);
        myChart.on('finished', () => {
            let criclePrimitive = getCriclePrimitive(myChart, { radius, lon, lat })
            window.viewer.scene.primitives.add(criclePrimitive)
            myChart.dispose();
            myChart = null;
            canvasDom = null;
        })
    }
    function getCriclePrimitive(chart, { radius = 100000.0, lon, lat } = {}) {
        let circle = new CircleGeometry({
            center: Cartesian3.fromDegrees(lon, lat),
            radius: radius
        });
        let circleGeometry = CircleGeometry.createGeometry(circle);
        let circleGeometryInstance = new GeometryInstance({
            geometry: circleGeometry,
            attributes: {
                color: ColorGeometryInstanceAttribute.fromColor(cesiumColor.ORANGE)
            }
        });
        let criclePrimitive = new Primitive({
            geometryInstances: [
                circleGeometryInstance
            ],
            appearance: new MaterialAppearance({
                material:
                    new Material({
                        fabric: {
                            type: 'Image',
                            uniforms: {
                                image: chart.getDataURL()
                            }
                        }
                    })
            })
        })
        return criclePrimitive;
    }
    function genData(count) {
        let nameList = [
            '赵', '钱', '孙'
        ];
        let seriesData = [];
        for (let i = 0; i < 3; i++) {
            name = nameList[i];
            seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
            });
        }
        return {
            seriesData: seriesData
        };
    }
}

