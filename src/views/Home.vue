<template>
    <div class="home">
        <div class="toolbar"></div>
        <div id="cesiumContainer">
            <div id="info"></div>
            <div
                id="toolTip"
                class="measure-mouse-tip"
                style="
                    display: none;
                    color: rgb(236, 159, 30);
                    border: 1px solid rgb(236, 159, 30);
                    position: absolute;
                    font-size: 12px;
                    color: #fff;
                "
            >
                单击开始，双击结束
            </div>
            <div id="toolbar" class="cesium_toolbar"></div>
        </div>
        <Ripple id="ripple" v-show="showRipple"></Ripple>
        <Track id="track" v-show="showTrack"></Track>

        <div class="panel" v-show="true">
            <h3>功能清单</h3>
            <ul class="list">
                <li @click="marker = !marker">添加标注</li>
                <li @click="particleSystem = !particleSystem">添加粒子效果</li>
                <li @click="draw = !draw">绘制图形</li>
                <li @click="measure = !measure">测量工具</li>
                <li @click="perViewer = !perViewer">第一人称视角</li>
                <li @click="addVideos">添加视频贴图</li>
                <!-- <li @click="point = !point">点状对象</li> -->
                <li @click="guiji = !guiji">轨迹漫游</li>
                <li @click="changjing = !changjing">场景</li>
                <li @click="visulation = !visulation">可视化专题图</li>
                <li @click="shader = !shader">shader特效</li>
                <li @click="czml = !czml">CZML</li>
            </ul>
            <div class="loadmap" v-show="czml">
                <el-button @click="addCzml('globeFly')">全球轨迹线</el-button>
            </div>
            <div class="loadmap" v-show="shader">
                <el-button @click="addradars">加载雷达特效</el-button>
                <el-button @click="addPolygons">加载自定义材质</el-button>
                <el-button @click="addWaters">加载水面</el-button>
            </div>
            <div class="loadmap" v-show="visulation">
                <el-button @click="addPopulation">加载人口专题图</el-button>
                <el-button @click="delPopulation">去除人口专题图</el-button>

                <el-button @click="addSTD">加载迁徙图</el-button>
                <el-button @click="delSTD">去除迁徙图</el-button>

                <el-button @click="addHeat">添加热力图</el-button>
                <el-button @click="addEchart">添加echarts图层</el-button>
                <el-button @click="delEchart">去除echarts图层</el-button>
                <el-button @click="addCircleCharts">添加饼图</el-button>
                <!-- <el-button @click="delCircleCharts">去除饼图</el-button>
                <el-button @click="addFlowLine">添加流动线</el-button>
                <el-button @click="addMPoint">添加微博签到图</el-button>
                <el-button @click="addMapV">添加wwwwwwwww</el-button>
                <el-button @click="addFlyLines">shader流动线</el-button> -->
            </div>
            <div class="loadmap" v-show="perViewer">
                <el-button @click="pViewer">进入第一人称视角</el-button>
                <el-button @click="cViewer">退出第一人称视角</el-button>
            </div>
            <div class="loadmap" v-show="measure">
                <el-button @click="measureDistance">测距</el-button>
                <!-- <el-button @click="measureHeight">测量高度</el-button> -->
                <el-button @click="measureArea">测量面</el-button>
                <el-button @click="measureNone">清除</el-button>
            </div>

            <div class="loadmap" v-show="draw">
                <el-button @click="draws('billboard')">绘制点</el-button>
                <el-button @click="draws('polyline')">绘制线</el-button>
                <el-button @click="draws('polygon')">绘制多边形</el-button>
                <el-button @click="draws('circle')">绘制圆</el-button>
                <el-button @click="draws('rectangle')">绘制矩形</el-button>
                <el-button @click="draws('destroy')">清除绘制</el-button>
            </div>
            <div class="loadmap" v-show="marker">
                <el-button @click="addMarker('shanshuo')">闪烁点</el-button>
                <el-button @click="addMarker('bigdata')">大量点</el-button>
                <el-button @click="addMarker('addImgBillboard')"
                    >图片标注</el-button
                >
                <el-button @click="addMarker('addGifBillboard')"
                    >gif标注</el-button
                >
                <el-button @click="addMarker('addTextBillboard')"
                    >文字标注</el-button
                >
                <el-button @click="addMarker('addCanvasBillboard')"
                    >canvas标注</el-button
                >
                <el-button @click="addMarker('delBillboard')"
                    >去除标注</el-button
                >
            </div>
            <div class="loadmap" v-show="particleSystem">
                <el-button @click="addSnowParticle">加载雪花</el-button>
                <el-button @click="addRaindelParticle">加载雨水</el-button>
                <el-button @click="delParticle">去除粒子效果</el-button>
            </div>
            <div class="loadmap" v-show="guiji">
                <el-button @click="backsee()">轨迹回放</el-button>
                <el-button @click="backsee(1)">跟随视角</el-button>
                <el-button @click="backsee(2)">上帝视角</el-button>
                <el-button @click="delbacksee()">去除轨迹回放</el-button>
                <el-button @click="addTrack()">加载第一视角轨迹</el-button>
                <!-- <el-button @click="deltTrack()">加载第一视角轨迹</el-button> -->
            </div>
            <div class="loadmap" v-show="changjing">
                <el-button @click="around">旋转地球</el-button>
                <el-button @click="skybox">自定义天空盒</el-button>
            </div>
            <video
                id="trailer"
                autoplay
                loop
                crossorigin
                controls
                style="display: none"
            >
                <source
                    src="../../public/big-buck-bunny_trailer.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    </div>
</template>

<script>
import {
    ScreenSpaceEventType,
    Cartesian3,
    Matrix4,
    ScreenSpaceEventHandler,
    Math as cesiumMath,
    Cartographic,
    defined,
    Cartesian2,
    Color,
    ParticleSystem,
    SphereEmitter,
    JulianDate,
    SampledPositionProperty,
    TimeIntervalCollection,
    TimeInterval,
    VelocityOrientationProperty,
    ClockRange,
    PolylineGlowMaterialProperty,
    HeadingPitchRange,
    SkyBox,
} from "cesium";

// 起始时间
let start = JulianDate.fromDate(new Date(2017, 7, 11));
// 结束时间
let stop = JulianDate.addSeconds(start, 360, new JulianDate());

let rainParticleSystem, snowParticleSystem;
let drawTool;
// 定义第一人称视角
let viewer;

// import Cesium from "cesium";
import { init3dmap } from "../3dmap/3dmaps.js";

import { DrawTool } from "../3dmap/tools/drawtools/drawTool.js";

import { addVideo } from "../3dmap/video/index.js";
import {
    MeasureSpaceDistance,
    MeasureSpaceArea,
    measureHgt,
} from "../3dmap/tools/measure.js";

import { personalViewer, commonViewer } from "../3dmap/tools/personalViewer.js";
// 可视化专题图
import { addHeatmap } from "../3dmap/visulation/heatmap/heatmap.js";
import {
    onloadtaxi,
    deltaxi,
} from "../3dmap/visulation/custom/taxisimulation.js";
import {
    addPopulationMap,
    delPopulationMap,
} from "../3dmap/visulation/thematicMap/population.js";
import { addEcharts, delEcharts } from "../3dmap/visulation/echarts/index.js";
import { flowLine } from "../3dmap/visulation/custom/flowLine/index.js";
import { MPoint } from "../3dmap/visulation/custom/MPoint/index.js";
import { addMapvHeatmap } from "../3dmap/visulation/custom/qianxi/qianxi.js";
// import { track,deltrack } from "../3dmap/tools/track.js";
import { createFlyLines } from "../3dmap/shader/flowLine.js";

import { addCircleChart } from "../3dmap/visulation/echarts/circleCharts.js";

import Ripple from "./marker/Ripple.vue";
import Track from "@/component/Track.vue";

import {
    bigdata,
    shanshuo,
    addImgBillboard,
    addGifBillboard,
    addTextBillboard,
    addCanvasBillboard,
    delBillboard,
} from "../3dmap/marker/marker.js";

import { currentMap } from "../3dmap/visulation/mapv/index.js";

// shader编程部分
import { addradar, delradar } from "../3dmap/shader/radar.js";
import { addPolygon } from "../3dmap/shader/polygon.js";
import { addWater } from "../3dmap/shader/water.js";

// czml编程部分
import {addGlobeFly,delGlobeFly} from "../3dmap/czml/globeFly.js"


export default {
    name: "Home",
    data() {
        return {
            czml: false,
            cesiumWidget: null,
            clampToGround: null,
            terrainProvider: null,
            drawLayer: null,
            showRipple: false,
            mapdata: 0,
            point: false,
            guiji: false,
            marker: false,
            particleSystem: false,
            draw: false,
            measure: false,
            perViewer: false,
            visulation: false,
            shader: false,
            style: {
                text: "美丽华夏大数据研究院",
                fontsize: 6,
                color: Color.RED,
                stRotation: 5,
            },
            showTrack: false,
            changjing: false,
            imags: [
                "./static/images/markers/1.png",
                "./static/images/markers/2.png",
                "./static/images/markers/3.png",
                "./static/images/markers/4.png",
                "./static/images/markers/5.png",
                "./static/images/markers/6.png",
                "./static/images/markers/7.png",
                "./static/images/markers/8.png",
                "./static/images/markers/5.png",
                "./static/images/markers/6.png",
            ],
            model: [
                {
                    id: "model0",
                    name: "木塔",
                    url: "./model/Wood_Tower.gltf",
                },
                {
                    id: "model1",
                    name: "人",
                    url: "./model/Cesium_Man.gltf",
                },
            ],
            msd: {},
            msa: {},
        };
    },
    destroyed() {
        if (viewer) {
            viewer.dataSources.removeAll(true);
            viewer.destroy();
        }
        viewer = null;
    },
    components: {
        Ripple,
        Track,
    },
    mounted: function () {
        init3dmap();
        viewer = window.viewer;
        //绘制工具初始化
        drawTool = new DrawTool({
            viewer: viewer,
            hasEdit: true,
        });
    },
    methods: {
        addWaters() {
            addWater();
        },
        addPolygons() {
            addPolygon()
        },
        addCzml(type) {
            if (type == 'globeFly') {
                addGlobeFly()
            }
        },
        addCircleCharts() {
            addCircleChart();
        },
        delCircleCharts() {},
        addEchart() {
            addEcharts(viewer);
        },
        delEchart() {
            delEcharts(viewer);
        },
        //自定义天空盒
        skybox() {
            viewer.scene.skyBox = new SkyBox({
                sources: {
                    positiveX: "./images/sky.png",
                    negativeX: "./images/sky.png",
                    positiveY: "./images/sky.png",
                    negativeY: "./images/sky.png",
                    positiveZ: "./images/sky.png",
                    negativeZ: "./images/sky.png",
                },
            });
        },
        //旋转地球
        around() {
            viewer.clock.multiplier = 300; //速度
            viewer.clock.shouldAnimate = true;
            let previousTime = viewer.clock.currentTime.secondsOfDay;
            const onTickCallback = () => {
                let spinRate = 1;
                let currentTime = viewer.clock.currentTime.secondsOfDay;
                let delta = (currentTime - previousTime) / 1000;
                previousTime = currentTime;
                viewer.scene.camera.rotate(
                    Cartesian3.UNIT_Z,
                    -spinRate * delta
                );
            };
            // 开启地图自转效果
            viewer.clock.onTick.addEventListener(onTickCallback);
        },
        //轨迹回放
        backsee(num) {
            // 设置始时钟始时间
            viewer.clock.startTime = start.clone();
            // 设置时钟当前时间
            viewer.clock.currentTime = start.clone();
            // 设置始终中止时间
            viewer.clock.stopTime = stop.clone();
            // 时间速率，数字越大时间过的越快
            viewer.clock.multiplier = 10;
            // 时间轴
            viewer.timeline.zoomTo(start, stop);
            // 循环执行,即为2，到达终止时间，从新从起点时间开始
            viewer.clock.clockRange = ClockRange.LOOP_STOP;

            // viewer.camera.flyTo({
            //     destination:Cartesian3.fromDegrees(116.405419,32.073514,20000)
            // })
            // for(let j=0; j<data.length; j++){
            let property = this.computeFlight(
                108.92222326466175,
                32.710008819689094,
                0.1
            );
            //console.log(property)
            // 添加模型
            let planeModel = viewer.entities.add({
                // 和时间轴关联
                availability: new TimeIntervalCollection([
                    new TimeInterval({
                        start: start,
                        stop: stop,
                    }),
                ]),
                position: property,
                // 根据所提供的速度计算模型的朝向
                orientation: new VelocityOrientationProperty(property),
                // 模型数据
                model: {
                    uri: "./Cesium_Air.glb",
                    minimumPixelSize: 150,
                },
                path: {
                    resolution: 1,
                    material: new PolylineGlowMaterialProperty({
                        glowPower: 0.1,
                        color: Color.YELLOW,
                    }),
                    width: 10,
                },
                // point:{
                //     show:true,
                //     pixelSize: 50,
                //     color: Color.BLUE.withAlpha(0.6),
                // }
            });
            if (num == 1) {
                viewer.trackedEntity = planeModel;
            } else if (num == 2) {
                viewer.trackedEntity = undefined;
                viewer.zoomTo(
                    viewer.entities,
                    new HeadingPitchRange(0, cesiumMath.toRadians(-90))
                );
            } else if (num == 3) {
                viewer.camera.lookAtTransform(
                    transform,
                    new Cartesian3(-100, 0, 50)
                );
            }

            // }
        },
        computeFlight(lon, lat, radius) {
            var property = new SampledPositionProperty();
            for (var i = 0; i <= 360; i += 45) {
                var radians = cesiumMath.toRadians(i);
                var time = JulianDate.addSeconds(start, i, new JulianDate());
                var position = Cartesian3.fromDegrees(
                    lon + radius * 1.5 * Math.cos(radians),
                    lat + radius * Math.sin(radians),
                    cesiumMath.nextRandomNumber() * 500 + 1750
                );
                property.addSample(time, position);

                //为我们设置的每个样本生成一个点
                viewer.entities.add({
                    position: position,
                    point: {
                        pixelSize: 8,
                        color: Color.TRANSPARENT,
                        outlineColor: Color.YELLOW,
                        outlineWidth: 3,
                    },
                });
            }
            return property;
        },
        delbacksee() {
            viewer.entities.removeAll();
        },
        addEvent(billboards) {
            var $this = this;
            var handler = new ScreenSpaceEventHandler(viewer.scene.canvas);
            handler.setInputAction(function (movement) {
                var pickedObject = viewer.scene.pick(movement.endPosition);
                if (
                    defined(pickedObject) &&
                    billboards.includes(pickedObject.id)
                ) {
                    var cartographic = Cartographic.fromCartesian(
                        pickedObject.primitive._actualPosition
                    );
                    var lon = cesiumMath.toDegrees(cartographic.longitude);
                    var lat = cesiumMath.toDegrees(cartographic.latitude);
                    var elev = cartographic.height;
                    var scratch = new Cartesian2();
                    var canvasPosition =
                        viewer.scene.cartesianToCanvasCoordinates(
                            Cartesian3.fromDegrees(lon, lat, elev),
                            scratch
                        );
                    var ripple = document.getElementById("ripple");
                    if (pickedObject.id.name === "camera") {
                        // 调整水纹偏移量
                        ripple.style.top = canvasPosition.y - 40 + "px";
                        ripple.style.left = canvasPosition.x - 40 + "px";
                        $this.showRipple = true;
                    }
                } else {
                    $this.showRipple = false;
                }
            }, ScreenSpaceEventType.MOUSE_MOVE);
        },
        // 加载marker
        addMarker(type) {
            if (type == "bigdata") {
                bigdata(viewer);
            } else if (type == "shanshuo") {
                shanshuo(viewer);
            } else if (type == "addImgBillboard") {
                let billboards = addImgBillboard(viewer);
                this.addEvent(billboards);
            } else if (type == "addGifBillboard") {
                addGifBillboard(viewer);
            } else if (type == "addTextBillboard") {
                addTextBillboard(viewer);
            } else if (type == "addCanvasBillboard") {
                addCanvasBillboard(viewer);
            } else if (type == "delBillboard") {
                delBillboard(viewer);
            }
        },
        //  添加相应的粒子效果
        // 添加雪花粒子效果
        addSnowParticle: function () {
            // snow
            var snowParticleSize = 12.0;
            var snowRadius = 100000.0;
            var minimumSnowImageSize = new Cartesian2(
                snowParticleSize,
                snowParticleSize
            );
            var maximumSnowImageSize = new Cartesian2(
                snowParticleSize * 2.0,
                snowParticleSize * 2.0
            );

            var snowGravityScratch = new Cartesian3();
            var snowUpdate = function (particle) {
                snowGravityScratch = Cartesian3.normalize(
                    particle.position,
                    snowGravityScratch
                );
                Cartesian3.multiplyByScalar(
                    snowGravityScratch,
                    cesiumMath.randomBetween(-30.0, -300.0),
                    snowGravityScratch
                );
                particle.velocity = Cartesian3.add(
                    particle.velocity,
                    snowGravityScratch,
                    particle.velocity
                );

                var distance = Cartesian3.distance(
                    viewer.scene.camera.position,
                    particle.position
                );
                if (distance > snowRadius) {
                    particle.endColor.alpha = 0.0;
                } else {
                    particle.endColor.alpha =
                        snowParticleSystem.endColor.alpha /
                        (distance / snowRadius + 0.1);
                }
            };
            snowParticleSystem = new ParticleSystem({
                modelMatrix: new Matrix4.fromTranslation(
                    viewer.scene.camera.position
                ),
                minimumSpeed: -1.0,
                maximumSpeed: 0.0,
                lifetime: 15.0,
                emitter: new SphereEmitter(snowRadius),
                startScale: 0.5,
                endScale: 1.0,
                image: "./images/cesium/snowflake_particle.png",
                emissionRate: 7000.0,
                startColor: Color.WHITE.withAlpha(0.0),
                endColor: Color.WHITE.withAlpha(1.0),
                minimumImageSize: minimumSnowImageSize,
                maximumImageSize: maximumSnowImageSize,
                updateCallback: snowUpdate,
            });
            viewer.scene.primitives.add(snowParticleSystem);
            // 加载下雪粒子效果end
        },
        // 添加雨粒子效果
        addRaindelParticle: function () {
            viewer.scene.skyAtmosphere.hueShift = -0.97;
            viewer.scene.skyAtmosphere.saturationShift = 0.25;
            viewer.scene.skyAtmosphere.brightnessShift = -0.4;
            viewer.scene.fog.density = 0.00025;
            viewer.scene.fog.minimumBrightness = 0.01;
            // rain
            var rainParticleSize = 15.0;
            var rainRadius = 100000.0;
            var rainImageSize = new Cartesian2(
                rainParticleSize,
                rainParticleSize * 2.0
            );

            // var rainSystem;

            var rainGravityScratch = new Cartesian3();
            var rainUpdate = function (particle) {
                rainGravityScratch = Cartesian3.normalize(
                    particle.position,
                    rainGravityScratch
                );
                rainGravityScratch = Cartesian3.multiplyByScalar(
                    rainGravityScratch,
                    -1050.0,
                    rainGravityScratch
                );

                particle.position = Cartesian3.add(
                    particle.position,
                    rainGravityScratch,
                    particle.position
                );

                var distance = Cartesian3.distance(
                    viewer.scene.camera.position,
                    particle.position
                );
                if (distance > rainRadius) {
                    particle.endColor.alpha = 0.0;
                } else {
                    particle.endColor.alpha =
                        rainParticleSystem.endColor.alpha /
                        (distance / rainRadius + 0.1);
                }
            };

            rainParticleSystem = new ParticleSystem({
                modelMatrix: new Matrix4.fromTranslation(
                    viewer.scene.camera.position
                ),
                speed: -1.0,
                lifetime: 15.0,
                emitter: new SphereEmitter(rainRadius),
                startScale: 1.0,
                endScale: 0.0,
                image: "./images/cesium/circular_particle.png",
                emissionRate: 9000.0,
                startColor: new Color(0.27, 0.5, 0.7, 0.0),
                endColor: new Color(0.27, 0.5, 0.7, 0.98),
                imageSize: rainImageSize,
                updateCallback: rainUpdate,
            });
            viewer.scene.primitives.add(rainParticleSystem);
        },
        delParticle: function () {
            snowParticleSystem.destroy();
            rainParticleSystem.destroy();
        },

        // 绘制图形模块
        draws(type) {
            if (type == "destroy") {
                console.log("2222");
                drawTool.destroy();
            } else {
                drawTool.startDraw({
                    type: type,
                    style: {
                        material: Color.YELLOW,
                        clampToGround: true,
                    },
                    success: function () {},
                });
            }
        },
        // 进入第一人称视角start
        pViewer: function () {
            personalViewer(window.viewer);
        },
        cViewer: function () {
            commonViewer(window.viewer);
        },
        // 进入第一人称视角end
        // 测量工具start
        measureDistance: function () {
            this.msd = new MeasureSpaceDistance(viewer, {});
            this.msd.start();
        },
        measureArea: function () {
            this.msa = new MeasureSpaceArea(viewer, {});
            this.msa.start();
        },
        measureHeight: function () {
            measureHgt(viewer);
        },
        measureNone: function () {
            this.msd.clear();
            this.msa.clear();
        },
        // 测量工具end

        // 添加热力图
        addHeat: function () {
            addHeatmap(viewer);
        },
        // 添加地图贴图
        addVideos: function () {
            addVideo();
        },
        // 添加全球人口专题图
        addPopulation: function () {
            addPopulationMap(viewer);
        },
        // 删除全球人口专题图
        delPopulation: function () {
            delPopulationMap(viewer);
        },
        // 添加迁徙图效果
        addSTD: function () {
            onloadtaxi(viewer);
        },
        // 删除迁徙图效果
        delSTD: function () {
            deltaxi(viewer);
        },
        addFlowLine: function () {
            flowLine(viewer);
        },
        addMPoint: function () {
            MPoint(viewer);
        },
        // 加载第一视角轨迹回放start
        addTrack: function () {
            this.showTrack = !this.showTrack;
            console.log(11111);
        },
        delTrack: function () {},
        // 加载第一视角轨迹回放end
        addqianxi: function () {
            addMapvHeatmap(viewer);
        },
        addMapV: function () {
            currentMap(viewer);
        },
        addFlyLines: function () {
            //创建射线

            var data = {
                center: {
                    id: 0,

                    lon: 114.302312702,

                    lat: 30.598026044,

                    size: 20,

                    color: Color.PURPLE,
                },

                points: [
                    {
                        id: 1,

                        lon: 115.028495718,

                        lat: 30.200814617,

                        color: Color.YELLOW,

                        size: 15,
                    },

                    {
                        id: 2,

                        lon: 110.795000473,

                        lat: 32.638540762,

                        color: Color.RED,

                        size: 15,
                    },

                    {
                        id: 3,

                        lon: 111.267729446,

                        lat: 30.698151246,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 4,

                        lon: 112.126643144,

                        lat: 32.058588576,

                        color: Color.GREEN,

                        size: 15,
                    },

                    {
                        id: 5,

                        lon: 114.885884938,

                        lat: 30.395401912,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 6,

                        lon: 112.190419415,

                        lat: 31.043949588,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 7,

                        lon: 113.903569642,

                        lat: 30.93205405,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 8,

                        lon: 112.226648859,

                        lat: 30.367904255,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 9,

                        lon: 114.86171677,

                        lat: 30.468634833,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 10,

                        lon: 114.317846048,

                        lat: 29.848946148,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 11,

                        lon: 113.371985426,

                        lat: 31.70498833,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 12,

                        lon: 109.468884533,

                        lat: 30.289012191,

                        color: Color.BLUE,

                        size: 15,
                    },

                    {
                        id: 13,

                        lon: 113.414585069,

                        lat: 30.368350431,

                        color: Color.SALMON,

                        size: 15,
                    },

                    {
                        id: 14,

                        lon: 112.892742589,

                        lat: 30.409306203,

                        color: Color.WHITE,

                        size: 15,
                    },

                    {
                        id: 15,

                        lon: 113.16085371,

                        lat: 30.667483468,

                        color: Color.SALMON,

                        size: 15,
                    },

                    {
                        id: 16,

                        lon: 110.670643354,

                        lat: 31.74854078,

                        color: Color.PINK,

                        size: 15,
                    },
                ],

                options: {
                    name: "",

                    polyline: {
                        width: 2,

                        material: [Color.GREEN, 3000],
                    },
                },
            };
            createFlyLines(viewer, data);
        },

        addradars: function () {
            addradar(viewer);
        },
    },
};
// import "cesium/Build/Cesium/Widgets/widgets.css";
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    #cesiumContainer {
        width: 100%;
        height: 100%;
        #info {
            position: absolute;
            width: 100px;
            height: 100px;
            z-index: 1000;
            display: none;
            background: rgba(255, 255, 255, 0.5);
            border: 2px solid greenyellow;
            border-radius: 4px;
        }
        .compass {
            position: absolute;
            left: 0;
            top: 100px;
        }
        /*绘制工具Draw样式*/
        .cesium_toolbar {
            position: absolute;
            bottom: 145px;
            left: 25px;
            display: inline;
            background: #0f161c;
            z-index: 999;
        }
    }

    .panel {
        width: 300px;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        h3 {
            text-align: center;
            font-size: 25px;
            color: #fff;
        }
        .list {
            li {
                padding-left: 30px;
                color: #fff;
                cursor: pointer;
                line-height: 30px;
                &:hover {
                    color: skyblue;
                }
            }
        }
    }
    .loadmap {
        width: 800px;
        position: absolute;
        right: 320px;
        top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    #toolbars {
        position: absolute;
        right: 320px;
        top: 20px;
        background: rgba(42, 42, 42, 0.8);
        padding: 4px;
        border-radius: 4px;
        color: white;
    }
    #toolbars input {
        vertical-align: middle;
        padding-top: 2px;
        padding-bottom: 2px;
    }
}
</style>
