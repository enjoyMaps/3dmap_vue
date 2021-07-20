window.CESIUM_BASE_URL = '/';
import "cesium/Build/Cesium/Widgets/widgets.css";
import {
    Ion,
    ScreenSpaceEventType,
    Viewer,
    Cartesian3,
    ScreenSpaceEventHandler,
    Math as cesiumMath,
    Color as cesiumColor,
    SceneMode,
    createWorldTerrain,
} from "cesium";

import { TDT_IMG, TDT_CIA, } from "./utils/layers.js"

let billboards = [];
export function init3dmap() {
    let viewer;
    Ion.defaultAccessToken =
        "填上自己的Token";
    /* eslint no-new: */
    viewer = new Viewer("cesiumContainer", {
        useDefaultRenderLoop: true,
        animation: false, //是否创建动画小器件，左下角仪表 
        timeline: false, //是否显示时间轴
        sceneModePicker: false, //是否显示3D/2D选择器  
        geocoder: false, //是否显示geocoder小器件，右上角查询按钮
        sceneMode: SceneMode.SCENE3D,
        scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源 
        navigationHelpButton: false, //是否显示右上角的帮助按钮
        homeButton: false, //是否显示Home按钮
        infoBox: false, //是否显示信息框 
        showRenderLoopErrors: false, //如果设为true，将在一个HTML面板中显示错误信息
        shouldAnimate: true, //是否启动动画
        selectionIndicator: false, //是否启用双击追踪效果
        navigationInstructionsInitiallyVisible: false,
        baseLayerPicker: false, //右上角 地形
        fullscreenButton: false, //右下角,全屏控件
        vrButton: false, // 如果设置为true,将创建VRButton小部件。
        lightColor: new Cartesian3(100.0, 100.0, 100.0),
        imageryProvider: TDT_IMG,
        orderIndependentTranslucency: false,
        contextOptions: {
            webgl: {
                alpha: true,
            }
        },
    });
    viewer.scene.skyBox.show = false;
viewer.scene.backgroundColor = new cesiumColor(0.0, 0.0, 0.0, 0.0);

    //去cesium logo水印或css
    viewer.cesiumWidget.creditContainer.style.display = "none";
    viewer.scene.globe.depthTestAgainstTerrain = true;
    // 添加天地图中文注记服务
    viewer.imageryLayers.addImageryProvider(TDT_CIA);

    // 添加cesium框架自带的地形数据
    var terrain = new createWorldTerrain({
        requestWaterMask: true,
        requestVertexNormals: true
    });
    viewer.terrainProvider = terrain;//加入世界地形图 

    // 默认加载鼠标左键采集坐标
    var handler = new ScreenSpaceEventHandler(viewer.scene.canvas);

    handler.setInputAction(function (e) {
        // 采集模型上的点位
        var pickedO = viewer.scene.pick(e.position);
        let Rectangle = viewer.camera.computeViewRectangle();
        Rectangle = [cesiumMath.toDegrees(Rectangle.west), cesiumMath.toDegrees(Rectangle.south), cesiumMath.toDegrees(Rectangle.east), cesiumMath.toDegrees(Rectangle.north)]
        //这里处理单击事件代码ee
        var position = viewer.scene.pickPosition(e.position);
        var wgs84 = viewer.scene.globe.ellipsoid.cartesianToCartographic(
            position
        );
        var lng = cesiumMath.toDegrees(wgs84.longitude);
        var lat = cesiumMath.toDegrees(wgs84.latitude);
        var hgt = wgs84.height;
        console.log("x:", lng, ",y:", lat, ",z:", hgt);
        if (pickedO) {
            if (
                billboards.includes(pickedO.id) &&
                pickedO.id.name === "camera"
            ) {
                let index = pickedO.id.id;
                console.log(index);
            }
        }
    }, ScreenSpaceEventType.LEFT_CLICK);

    // 添加入场动画
    let options1 = {
        destination: Cartesian3.fromDegrees(108.0001, 33.0001, 20000000),
        duration: 5,
        complete: function () {
            let options2 = {
                destination: Cartesian3.fromDegrees(108.0001, 33.0001, 3000000),
                duration: 2
            };
            viewer.camera.flyTo(options2);
        }
    };
    // 启动动画
    viewer.camera.flyTo(options1);

    window.viewer = viewer;
}

