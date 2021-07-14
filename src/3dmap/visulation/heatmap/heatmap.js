import * as Cesium from 'cesium';

import data  from './last-all-airbox.js'
import getCesiumHeat from 'cesiumjs-heat'

let heat;
export function addHeatmap(viewer) {
    const CesiumHeat = getCesiumHeat(Cesium);
    heat = new CesiumHeat(
        viewer,
        // data list, each has x, y, and value | 数据数组，每个包含 x,y,value字段
        data.feeds.map(({ gps_lon, gps_lat, s_d0 }) => {
            return {
                x: gps_lon,
                y: gps_lat,
                value: s_d0,
            };
        }),
        // bbox for heatmap | 只在范围内显示热力图拉近会清晰些，默认整个地球但拉近后巨模糊
        [120.106188593, 21.9705713974, 121.951243931, 25.2954588893]
    );
    // destory | 销毁
    setTimeout(() => heat.destory(), 50 * 1000);
}
export function delHeatmap(viewer) {
    heat.destory();
}
