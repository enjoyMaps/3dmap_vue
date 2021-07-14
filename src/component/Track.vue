<template>
    <div>
        <div class="container">
            <!-- <el-button
        type="primary"
        size='mini'
        @click="drawLineRoad"
      >绘制路线</el-button> -->
            <el-button type="primary" size="mini" @click="startFly"
                >开始飞行</el-button
            >
            <el-button type="primary" size="mini" @click="stopFly"
                >暂停飞行</el-button
            >
            <el-button type="primary" size="mini" @click="continueFly"
                >继续飞行</el-button
            >
            <el-button type="primary" size="mini" @click="exitFly"
                >退出飞行</el-button
            >
        </div>
        <div id="CesiumContainer"></div>
    </div>
</template>
<script>
import {
    ScreenSpaceEventType,
    Cartesian3,
    ClockRange,
    ScreenSpaceEventHandler,
    Math as cesiumMath,
    Cartographic,
    defined,
    Color,
    CallbackProperty,
    JulianDate,
    ClockStep,
} from "cesium";

let viewer;
export default {
    name: "Track",
    data() {
        return {
            marks: [
                {
                    lng: 108.93031186469224,
                    lat: 32.708351161723705,
                    height: 320,
                    flytime: 5,
                },
                {
                    lng: 108.93561033824412,
                    lat: 32.70743384796378,
                    height: 320,
                    flytime: 5,
                },
                // height:相机高度(单位米) flytime:相机两个标注点飞行时间(单位秒)
                {
                    lng: 108.93593381166,
                    lat: 32.70842795152455,
                    height: 320,
                    flytime: 5,
                },
                {
                    lng: 108.93282958786008,
                    lat: 32.708961324956476,
                    height: 320,
                    flytime: 5,
                },
                {
                    lng: 108.93304577623404,
                    lat: 32.709793161019114,
                    height: 320,
                    flytime: 5,
                },
                {
                    lng: 108.93025301402719,
                    lat: 32.710043730127076,
                    height: 320,
                    flytime: 5,
                },
            ],
            marksIndex: 1,
            pitchValue: -20,
            changeCameraTime: 3,
            flytime: 5,
            Exection: {},
            handler: {},
            activeShapePoints: [],
            floatingPoint: undefined,
            activeShape: undefined,
            drawingMode: "line",
            Exection: {},
        };
    },
    mounted() {},

    methods: {
        flyExtent() {
            viewer = window.viewer;
            this.handler = new ScreenSpaceEventHandler(viewer.canvas);
            const { marks, pitchValue } = this;
            const self = this;
            // 相机看点的角度，如果大于0那么则是从地底往上看，所以要为负值
            const pitch = cesiumMath.toRadians(pitchValue);
            // 时间间隔2秒钟
            this.setExtentTime(marks[this.marksIndex].flytime);
            this.Exection = function TimeExecution() {
                let preIndex = self.marksIndex - 1;
                if (self.marksIndex == 0) {
                    preIndex = marks.length - 1;
                }
                //计算俯仰角
                let heading = self.bearing(
                    marks[preIndex].lat,
                    marks[preIndex].lng,
                    marks[self.marksIndex].lat,
                    marks[self.marksIndex].lng
                );
                heading = cesiumMath.toRadians(heading);
                // 当前已经过去的时间，单位s
                const delTime = JulianDate.secondsDifference(
                    viewer.clock.currentTime,
                    viewer.clock.startTime
                );
                const originLat =
                    self.marksIndex == 0
                        ? marks[marks.length - 1].lat
                        : marks[self.marksIndex - 1].lat;
                const originLng =
                    self.marksIndex == 0
                        ? marks[marks.length - 1].lng
                        : marks[self.marksIndex - 1].lng;
                const endPosition = Cartesian3.fromDegrees(
                    originLng +
                        ((marks[self.marksIndex].lng - originLng) /
                            marks[self.marksIndex].flytime) *
                            delTime,
                    originLat +
                        ((marks[self.marksIndex].lat - originLat) /
                            marks[self.marksIndex].flytime) *
                            delTime,
                    marks[self.marksIndex].height
                );
                viewer.scene.camera.setView({
                    destination: endPosition,
                    orientation: {
                        heading: heading,
                        pitch: pitch,
                    },
                });
                if (
                    JulianDate.compare(
                        viewer.clock.currentTime,
                        viewer.clock.stopTime
                    ) >= 0
                ) {
                    viewer.clock.onTick.removeEventListener(self.Exection);
                    //有个转向的功能
                    self.changeCameraHeading();
                }
            };
            viewer.clock.onTick.addEventListener(self.Exection);
        },
        // 相机原地定点转向
        changeCameraHeading() {
            const { marks, pitchValue, changeCameraTime } = this;
            const self = this;
            let { marksIndex } = this;

            let nextIndex = this.marksIndex + 1;
            if (marksIndex == marks.length - 1) {
                nextIndex = 0;
            }
            // 计算两点之间的方向
            let heading = this.bearing(
                marks[marksIndex].lat,
                marks[marksIndex].lng,
                marks[nextIndex].lat,
                marks[nextIndex].lng
            );
            // console.log(heading);
            /* if (heading > 180) {
                heading = heading - 180;
            }else if (heading < -180) {
                heading = heading + 180;
            } */

            // 相机看点的角度，如果大于0那么则是从地底往上看，所以要为负值
            const pitch = cesiumMath.toRadians(pitchValue);
            // 给定飞行一周所需时间，现在统一设置的是3s, 那么每秒转动度数
            // console.log(heading);
            let angle =
                (heading - cesiumMath.toDegrees(viewer.camera.heading)) /
                changeCameraTime; 
            // console.log(angle);
            if (angle * 5 < -180) {
                console.log(angle,"111");
                angle += 60;
            } else if (angle * 5 > 180) {
                console.log(angle,"222");
                angle -= 60;
            }
            
            // if (angle > 45) {
            //     angle = 90 - angle;
            // } else if (angle < -45) {
            //     angle = 90 + angle;
            // }

            // 时间间隔2秒钟
            this.setExtentTime(changeCameraTime);
            // 相机的当前heading
            const initialHeading = viewer.camera.heading;
            this.Exection = function TimeExecution() {
                // 当前已经过去的时间，单位s
                const delTime = JulianDate.secondsDifference(
                    viewer.clock.currentTime,
                    viewer.clock.startTime
                );
                const heading =
                    cesiumMath.toRadians(delTime * angle) + initialHeading;
                viewer.scene.camera.setView({
                    orientation: {
                        heading: heading,
                        pitch: pitch,
                    },
                });
                if (
                    JulianDate.compare(
                        viewer.clock.currentTime,
                        viewer.clock.stopTime
                    ) >= 0
                ) {
                    viewer.clock.onTick.removeEventListener(self.Exection);
                    self.marksIndex =
                        ++self.marksIndex >= marks.length ? 0 : self.marksIndex;
                    if (self.marksIndex != 0) {
                        self.flyExtent();
                    }
                }
            };
            viewer.clock.onTick.addEventListener(self.Exection);
        },

        // 设置飞行的时间到viewer的时钟里
        setExtentTime(time) {
            //   const { viewer } = this;
            const startTime = JulianDate.fromDate(new Date());
            const stopTime = JulianDate.addSeconds(
                startTime,
                time,
                new JulianDate()
            );
            viewer.clock.startTime = startTime.clone(); // 开始时间
            viewer.clock.stopTime = stopTime.clone(); // 结速时间
            viewer.clock.currentTime = startTime.clone(); // 当前时间
            viewer.clock.clockRange = ClockRange.CLAMPED; // 行为方式-达到终止时间后停止
            viewer.clock.clockStep = ClockStep.SYSTEM_CLOCK; // 时钟设置为当前系统时间; 忽略所有其他设置。
        },
        /** 相机视角飞行 结束 **/
        /** 飞行时 camera的方向调整(heading) 开始 **/
        // 角度转弧度
        toRadians(degrees) {
            return (degrees * Math.PI) / 180;
        },
        // 弧度转角度
        toDegrees(radians) {
            return (radians * 180) / Math.PI;
        },
        // 计算俯仰角
        bearing(startLat, startLng, destLat, destLng) {
            startLat = this.toRadians(startLat);
            startLng = this.toRadians(startLng);
            destLat = this.toRadians(destLat);
            destLng = this.toRadians(destLng);

            let y = Math.sin(destLng - startLng) * Math.cos(destLat);
            let x =
                Math.cos(startLat) * Math.sin(destLat) -
                Math.sin(startLat) *
                    Math.cos(destLat) *
                    Math.cos(destLng - startLng);
            let brng = Math.atan2(y, x);
            let brngDgr = this.toDegrees(brng);
            if (brngDgr > 180) {
                brngDgr = 360 - brngDgr;
            }
            // console.log(brngDgr);
            return (brngDgr + 360) % 360;
        },
        /** 飞行时 camera的方向调整(heading) 结束 **/
        /**绘制路线*/
        drawLineRoad() {
            const { handler, activeShapePoints } = this;
            const self = this;
            //鼠标左键
            handler.setInputAction(function (event) {
                var earthPosition = viewer.scene.pickPosition(event.position);
                if (defined(earthPosition)) {
                    if (activeShapePoints.length === 0) {
                        self.floatingPoint = self.createPoint(earthPosition);
                        activeShapePoints.push(earthPosition);
                        var dynamicPositions = new CallbackProperty(
                            function () {
                                return activeShapePoints;
                            },
                            false
                        );
                        self.activeShape = self.drawShape(dynamicPositions); //绘制动态图
                    }
                    activeShapePoints.push(earthPosition);
                    self.createPoint(earthPosition);
                }
            }, ScreenSpaceEventType.LEFT_CLICK);
            //鼠标移动
            handler.setInputAction(function (event) {
                if (defined(self.floatingPoint)) {
                    var newPosition = viewer.scene.pickPosition(
                        event.endPosition
                    );
                    if (defined(newPosition)) {
                        self.floatingPoint.position.setValue(newPosition);
                        activeShapePoints.pop();
                        activeShapePoints.push(newPosition);
                    }
                }
            }, ScreenSpaceEventType.MOUSE_MOVE);
            handler.setInputAction(function () {
                self.terminateShape();
            }, ScreenSpaceEventType.RIGHT_CLICK);
        },
        // Redraw the shape so it's not dynamic and remove the dynamic shape.
        terminateShape() {
            const { activeShapePoints, flytime } = this;
            activeShapePoints.pop(); //去除最后一个动态点
            if (activeShapePoints.length) {
                this.marks = [];
                for (const position of activeShapePoints) {
                    const latitude = this.toDegrees(
                        Cartographic.fromCartesian(position).latitude
                    );
                    const longitude = this.toDegrees(
                        Cartographic.fromCartesian(position).longitude
                    );
                    this.marks.push({
                        lat: latitude,
                        lng: longitude,
                        flytime,
                        height: 1000,
                    });
                }
                this.drawShape(activeShapePoints); //绘制最终图
            }
            viewer.entities.remove(this.floatingPoint); //去除动态点图形（当前鼠标点）
            viewer.entities.remove(this.activeShape); //去除动态图形
            this.floatingPoint = undefined;
            this.activeShape = undefined;
            this.activeShapePoints = [];
        },
        //绘制点
        createPoint(worldPosition) {
            var point = viewer.entities.add({
                position: worldPosition,
                point: {
                    color: Color.WHITE,
                    pixelSize: 1,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                },
            });
            return point;
        },
        //初始化为线
        drawShape(positionData) {
            const { drawingMode } = this;
            var shape;
            if (drawingMode === "line") {
                shape = viewer.entities.add({
                    polyline: {
                        positions: positionData,
                        clampToGround: true,
                        width: 3,
                    },
                });
            }
            return shape;
        },
        //开始飞行
        startFly() {
            const { Exection } = this;
            if (Object.keys(Exection).length > 0) {
                this.exitFly();
            }
            this.flyExtent();
        },
        //停止飞行
        stopFly() {
            viewer.clock.shouldAnimate = false;
        },
        //继续飞行
        continueFly() {
            viewer.clock.shouldAnimate = true;
        },
        //退出飞行
        exitFly() {
            const { Exection, marks, pitchValue } = this;
            viewer.clock.onTick.removeEventListener(Exection);
            // 相机看点的角度，如果大于0那么则是从地底往上看，所以要为负值
            const pitch = cesiumMath.toRadians(pitchValue);
            const marksIndex = 1;
            let preIndex = marksIndex - 1;
            //计算俯仰角
            let heading = this.bearing(
                marks[preIndex].lat,
                marks[preIndex].lng,
                marks[marksIndex].lat,
                marks[marksIndex].lng
            );
            heading = cesiumMath.toRadians(heading);
            const endPosition = Cartesian3.fromDegrees(
                marks[0].lng,
                marks[0].lat,
                marks[0].height
            );
            viewer.scene.camera.setView({
                destination: endPosition,
                orientation: {
                    heading: heading,
                    pitch: pitch,
                },
            });
        },
    },
    created() {},
};
</script>
<style  lang="scss" scoped >
.container {
    position: fixed;
    top: 50px;
    left: 20px;
    z-index: 9999;
}
</style>
