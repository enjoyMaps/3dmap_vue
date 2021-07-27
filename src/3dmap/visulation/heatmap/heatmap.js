import data  from './last-all-airbox.js'
import getCesiumHeat from './lib/CesiumHeat.js'

let heat;
export function addHeatmap(viewer) {
    const CesiumHeat = getCesiumHeat();
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
        [120.106188593, 21.9705713974, 121.951243931, 25.2954588893]
    );
    // destory | 销毁
    setTimeout(() => heat.destory(), 50 * 1000);
}
export function delHeatmap() {
    heat.destory();
}
