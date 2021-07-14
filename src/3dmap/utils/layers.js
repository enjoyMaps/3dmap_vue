import { WebMapTileServiceImageryProvider,GeographicTilingScheme ,WebMapServiceImageryProvider} from "cesium";

// 天地图影像地址
let TDT_IMG_URL = "http://{s}.tianditu.gov.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=img&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default&format=tiles&tk=1a0240d9ef8a332d18e4ed6d10cabfe0";
// 天地图影像中文注记服务地址
let TDT_CIA_URL = "http://{s}.tianditu.gov.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default&format=tiles&tk=1a0240d9ef8a332d18e4ed6d10cabfe0";

// 天地图矢量地址
let TDT_VEC_URL = "http://{s}.tianditu.gov.cn/vec_c/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=vec&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default&format=tiles&tk=1a0240d9ef8a332d18e4ed6d10cabfe0";
// 天地图矢量中文注记服务地址
let TDT_CVA_URL = "http://{s}.tianditu.gov.cn/cva_c/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=cva&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default&format=tiles&tk=1a0240d9ef8a332d18e4ed6d10cabfe0";

// 天地图影像
let TDT_IMG = new WebMapTileServiceImageryProvider({
    url: TDT_IMG_URL,
    layer: "tdtImg_c",
    style: "default",
    format: "tiles",
    tileMatrixSetID: "c",
    subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    tilingScheme: new GeographicTilingScheme(),
    tileMatrixLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", ],
    maximumLevel: 50,
    show: false
});

// 天地图影像中文注记服务
let TDT_CIA = new WebMapTileServiceImageryProvider({
    url: TDT_CIA_URL,
    layer: "tdtImg_Anno",
    style: "default",
    format: "tiles",
    tileMatrixSetID: "c",
    subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    tilingScheme: new GeographicTilingScheme(),
    tileMatrixLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
    maximumLevel: 50,
    show: false
});

// 天地图矢量
let TDT_VEC = new WebMapTileServiceImageryProvider({
    url: TDT_VEC_URL,
    layer: "tdtVec_c",
    style: "default",
    format: "tiles",
    tileMatrixSetID: "c",
    subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    tilingScheme: new GeographicTilingScheme(),
    tileMatrixLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", ],
    maximumLevel: 50,
    show: false
});

// 天地图矢量中文注记服务
let TDT_CVA = new WebMapTileServiceImageryProvider({
    url: TDT_CVA_URL,
    layer: "tdtVec_Anno",
    style: "default",
    format: "tiles",
    tileMatrixSetID: "c",
    subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    tilingScheme: new GeographicTilingScheme(),
    tileMatrixLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", ],
    maximumLevel: 50,
    show: false
});

export { TDT_IMG,TDT_CIA,TDT_VEC,TDT_CVA }
