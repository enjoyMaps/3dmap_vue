import {
    Ion,
    TileMapServiceImageryProvider,
    ScreenSpaceEventType,
    Cartesian3,
    HeadingPitchRoll,
    Matrix4,
    ScreenSpaceEventHandler,
    Math as cesiumMath,
    buildModuleUrl,
    Cesium3DTileset,
    Rectangle,
    SceneMode,
    CircleGeometry,
    createWorldTerrain,
    CesiumTerrainProvider,
    GoogleEarthEnterpriseMetadata,
    GoogleEarthEnterpriseTerrainProvider,
    CzmlDataSource
} from "cesium";


export function addGlobeFly() {
    window.viewer.dataSources.add(
        CzmlDataSource.load("./config/data/czml/simple.czml")
    );

    window.viewer.camera.flyHome(0);

    window.viewer.dataSources.add(
        CzmlDataSource.load("./config/data/czml/Vehicle.czml")
    );

    window.viewer.scene.camera.setView({
        destination: Cartesian3.fromDegrees(-116.52, 35.02, 95000),
        orientation: {
            heading: 6,
        },
    });
}
export function delGlobeFly() {
    window.viewer.dataSources.removeAll();
}
