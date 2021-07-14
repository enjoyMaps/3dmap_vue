import * as Cesium from 'cesium'
import * as mapv from './mapv.js'



export function addradar(viewer) {
    console.log(mapv);

    //雷达的高度
    var length = 400000.0;
    //地面位置(垂直地面)
    var positionOnEllipsoid = Cesium.Cartesian3.fromDegrees(116.39, 39.9);
    //中心位置
    // var centerOnEllipsoid = Cesium.Cartesian3.fromDegrees(116.39, 39.9, length * 0.5);
    // // 顶部位置(卫星位置)
    // var topOnEllipsoid = Cesium.Cartesian3.fromDegrees(116.39, 39.9, length);
    //矩阵计算
    var modelMatrix = Cesium.Matrix4.multiplyByTranslation( //转换矩阵
        Cesium.Transforms.eastNorthUpToFixedFrame(positionOnEllipsoid), //矩阵
        new Cesium.Cartesian3(0.0, 0.0, length * 0.5), //要转换的笛卡尔坐标 
        new Cesium.Matrix4() //返回新的矩阵
    );



    // 1. 构造geometry
    var cylinderGeometry = new Cesium.CylinderGeometry({
        length: length,
        topRadius: 0.0,
        bottomRadius: length * 0.5,
        vertexFormat: Cesium.MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat
    });
    // 2. 创建GeometryInstance
    var redCone = new Cesium.GeometryInstance({
        geometry: cylinderGeometry, //geomtry类型
        modelMatrix: modelMatrix, //模型矩阵 调整矩阵的位置和方向
    });


    let source =
        //传入的动态数值
        `uniform vec4 color; 
 uniform float repeat; 
 uniform float offset; 
 uniform float thickness;

//设置图形外观材质
czm_material czm_getMaterial(czm_materialInput materialInput){
    czm_material material = czm_getDefaultMaterial(materialInput); //获取内置的默认材质
    float sp = 1.0/repeat; //重复贴图
    vec2 st = materialInput.st; //二维纹理坐标
    float dis = distance(st, vec2(0.5)); //计算距离
    float m = mod(dis + offset, sp); //间隔
    float a = step(sp*(1.0-thickness), m);//线条拼色 
	//修改材质
    material.diffuse = color.rgb;
    material.alpha = a * color.a;
	return material;
}`

    let material = new Cesium.Material({
        fabric: {
            type: 'VtxfShader1',
            uniforms: { //动态传递参数
                color: new Cesium.Color(0.2, 1.0, 0.0, 1.0),
                repeat: 30.0,
                offset: 0.0,
                thickness: 0.3,
            },
            source: source
        },
        translucent: false
    })


    let appearance = new Cesium.MaterialAppearance({
        material: material,//自定义的材质
        faceForward: false, // 当绘制的三角面片法向不能朝向视点时，自动翻转法向，					从而避免法向计算后发黑等问题
        closed: true // 是否为封闭体，实际上执行的是是否进行背面裁剪
    })

    //添加Primitive
    var radar = viewer.scene.primitives.add(
        new Cesium.Primitive({
            geometryInstances: [redCone],
            appearance: appearance
        }));

    //动态修改雷达材质中的offset变量，从而实现动态效果。
    viewer.scene.preUpdate.addEventListener(function () {
        var offset = radar.appearance.material.uniforms.offset;
        offset -= 0.001;
        if (offset > 1.0) {
            offset = 0.0;
        }
        radar.appearance.material.uniforms.offset = offset;
    })


}

export function delradar() {
}

export function drawWater(targetHeight, waterHeight) {   
    //targetHeight 目标高度   adapCoordi 范围坐标[109.2039, 35.6042, 0, 109.2774 ,35.6025, 0,109.2766,35.5738, 0]   waterHeight  当前水高度
    // let _data = this.insData();
    let entity;
    let adapCoordi = [
        108.93506297133978, 32.70761011895884, 264.22407320108823,
        108.93508319656291, 32.70768219696061, 264.2303234253651,
        108.92592796255724, 32.70946908246768, 266.83516011092473,
        108.92588078771945, 32.709338187077314, 266.9447029199429,
    ]
    var entities = window.viewer.entities;
    //方式1
    entity = entities.add({
        polygon: {
            hierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(adapCoordi)),
            perPositionHeight: true,
            extrudedHeight: new Cesium.CallbackProperty(function () {  //此处用属性回调函数，直接设置extrudedHeight会导致闪烁。
                waterHeight += 3;
                if (waterHeight > targetHeight) {
                    waterHeight = targetHeight;//给个最大值
                }
                return waterHeight
            }, false),
            material: new Cesium.Color.fromBytes(0, 191, 255, 100),
        }
    });
    //方式2  此方式会出现闪烁
    //                let entity = entities.add({
    //                    polygon : {
    //                    hierarchy : new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(adapCoordi)),
    //                        perPositionHeight: true,
    //                        extrudedHeight: waterHeight,
    //                        material : new Cesium.Color.fromBytes(0,191,255,100),
    //                }
    //            });
    //                this.timer = setInterval(() => {
    //                    let incre = 3;
    //                    if (waterHeight < targetHeight) {
    //                        waterHeight += incre;
    /* let tempEntity = entities.add({
        polygon : {
            hierarchy : new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(adapCoordi)),
            perPositionHeight: true,
            extrudedHeight: waterHeight,
            material : new Cesium.Color.fromBytes(0,191,255,50)
        }
    }); */
    //                    if (waterHeight > targetHeight) {
    //                        waterHeight = targetHeight
    //                    }
    //                    entity.polygon.extrudedHeight.setValue(waterHeight)
    //                    }
    //                }, 250)

}
