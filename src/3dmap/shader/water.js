import {
    Cartesian3,
    HeadingPitchRoll,
    Matrix4,
    buildModuleUrl,
    PolygonHierarchy,
    CallbackProperty,
    Color as cesiumColor,
    GeometryInstance,
    Primitive,
    EllipsoidSurfaceAppearance,
    Material,
    PolygonGeometry,
} from "cesium";

export function drawWater(targetHeight, waterHeight) {
    let entity;
    let adapCoordi = [
        109.1593320736039 ,32.992497345180624 ,268.6358833514805,
        109.15987514903935 ,32.99134707022507 ,270.91140210833515,
        109.1608589958126 ,32.99045224080631 ,260.8714269261232,
        109.16206418757648 ,32.99052126533841 ,259.36284869661034,
        109.16050646727479 ,32.99248862737635 ,258.12724383032145
    ]

    var initialPosition = Cartesian3.fromDegrees(
        109.1593320736039 ,32.992497345180624,
        1000
    );

    var initialOrientation = new HeadingPitchRoll.fromDegrees(
        6.33,
        -31.987223091598949054,
        0
    );
    window.viewer.scene.camera.setView({
        destination: initialPosition,
        orientation: initialOrientation,
        endTransform: Matrix4.IDENTITY,
    });
    
    var entities = window.viewer.entities;
    //方式1
    entity = entities.add({
        polygon: {
            hierarchy: new PolygonHierarchy(Cartesian3.fromDegreesArrayHeights(adapCoordi)),
            perPositionHeight: true,
            extrudedHeight: new CallbackProperty(function () {  //此处用属性回调函数，直接设置extrudedHeight会导致闪烁。
                waterHeight += 3;
                if (waterHeight > targetHeight) {
                    waterHeight = targetHeight;//给个最大值
                }
                return waterHeight
            }, false),
            material: new cesiumColor.fromBytes(0, 191, 255, 100),
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

export function addWater() {
    // let adapCoordi = [
    //     108.53324658842635 ,32.954722692346564,
    //     108.58349154962004 ,33.08221558832655,
    //     108.46264664948612 ,33.11351275222309,
    //     108.36961732354374 ,33.024137827601066,
    // ]
    let adapCoordi = [
        109.1593320736039 ,32.992497345180624 ,268.6358833514805,
        109.15987514903935 ,32.99134707022507 ,270.91140210833515,
        109.1608589958126 ,32.99045224080631 ,260.8714269261232,
        109.16206418757648 ,32.99052126533841 ,259.36284869661034,
        109.16050646727479 ,32.99248862737635 ,258.12724383032145
    ]

    var initialPosition = Cartesian3.fromDegrees(
        109.1593320736039 ,32.992497345180624,
        1000
    );

    var initialOrientation = new HeadingPitchRoll.fromDegrees(
        6.33,
        -31.987223091598949054,
        0
    );
    window.viewer.scene.camera.setView({
        destination: initialPosition,
        orientation: initialOrientation,
        endTransform: Matrix4.IDENTITY,
    });
    /* var primitives = window.viewer.scene.primitives.add(
        new Primitive({
            geometryInstances: GeometryInstance({
                geometry: PolygonGeometry({
                    polygonHierarchy: new PolygonHierarchy(
                        Cartesian3.fromDegreesArray(adapCoordi)
                    ),
                    height: 300,
                    vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT
                })
            }),
            appearance: new EllipsoidSurfaceAppearance({
                aboveGround: true,
            }),
            show: true
        })
    ); */
    let primitives = 
        new Primitive({
          show:true,// 默认隐藏
    // allowPicking:false,
          geometryInstances: new GeometryInstance({
            geometry: new PolygonGeometry({
              polygonHierarchy: new PolygonHierarchy(
                Cartesian3.fromDegreesArrayHeights(adapCoordi)
              ),
              height: 270,
              // material: "Assets/Textures/waterNormals.jpg",
              vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT
            })
          }),

          appearance: new EllipsoidSurfaceAppearance({
            aboveGround: true,
            material: new Material({
                fabric: {
                    type: "Water",
                    uniforms: {
                        specularMap: "Assets/Textures/earthspec1k.jpg",
                        // specularMap: "./img/earthspec1k.jpg",
                        normalMap: buildModuleUrl(
                            "Assets/Textures/waterNormals.jpg"
                        ),
                        frequency: 1000.0,
                        animationSpeed: 0.01,
                        amplitude: 1.0
                    }
                }
            }),
            fragmentShaderSource:`varying vec3 v_positionMC;
                                 varying vec3 v_positionEC;
                                 varying vec2 v_st;
                                 void main()
                                 {
                                 czm_materialInput materialInput;
                                 vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));
                                 #ifdef FACE_FORWARD
                                 normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
                                #endif
                                materialInput.s = v_st.s;
                                materialInput.st = v_st;
                                materialInput.str = vec3(v_st, 0.0);
                                materialInput.normalEC = normalEC;
                                materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);
                                vec3 positionToEyeEC = -v_positionEC;
                                materialInput.positionToEyeEC = positionToEyeEC;
                               czm_material material = czm_getMaterial(materialInput);
                                #ifdef FLAT
                                gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);
                                #else
                                gl_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);
                                gl_FragColor.a=0.85;
                             #endif
                                }`//重写shader，修改水面的透明度
            
          }),
        //   classificationType : ClassificationType.BOTH,	// 支持类型： 地形、3DTile、或者在地面上
        //   show: true,
       
        })
        window.viewer.scene.primitives.add(primitives);
    
}
