import * as Cesium from 'cesium';

export function addPolygon() {
    viewer.camera.setView({
        destination: new Cesium.Cartesian3(-2644963.9889313546, 5763731.142118295, 2199400.7089496767), //世界坐标系下的一个坐标点
        orientation: {//旋转角度
            heading: 6.075,
            pitch: -0.727,
            roll: 6.283
        }
    });

    const extrudedPolygon = new Cesium.PolygonGeometry({
        polygonHierarchy: new Cesium.PolygonHierarchy(
            Cesium.Cartesian3.fromDegreesArray([
                112.41726298378288, 23.290411251106182,
                113.67072522399741, 23.560312361463682,
                114.09370956893551, 22.590768298743153,
                112.83803246418894, 22.285610818885644
            ])
        ),
        extrudedHeight: 30000
    });

    const instance = new Cesium.GeometryInstance({
        geometry: extrudedPolygon,
        id: 'box with height'
    });

    const m = new Cesium.Material({
        // fabric: {
            /*  source: `czm_material czm_getMaterial(czm_materialInput materialInput)
           {
             czm_material material = czm_getDefaultMaterial(materialInput);
             material.diffuse = vec3(0.24313725490196078, 0.7372549019607844, 0.9333333333333333);
             material.specular = 0.5;
             material.shininess = 0.8;
             material.emission = vec3(0.0, 0.66666666, 0.0);
             return material;
           }` */
            /* type: 'Color',
            uniforms: {
              color: new Cesium.Color(216 / 255.0, 170 / 255.0, 208 / 255.0).withAlpha(0.618),
            }, */
        // }
        fabric : {
            /* uniforms : {
                'normalSampler': { value: null },
                'mirrorSampler': { value: null },
                'alpha': { value: 1.0 },
                'time': { value: 0.0 },
                'size': { value: 1.0 },
                'distortionScale': { value: 20.0 },
                'textureMatrix': { value: new Matrix4() },
                'sunColor': { value: new Color( 0x7F7F7F ) },
                'sunDirection': { value: new Vector3( 0.70707, 0.70707, 0 ) },
                'eye': { value: new Vector3() },
                'waterColor': { value: new Color( 0x555555 ) }
            } */
        }
    });

    /*     const aper = new Cesium.MaterialAppearance({
            //   material : m,
            fragmentShaderSource:
                ` varying vec3 v_positionEC;
                varying vec3 v_normalEC;
                varying vec2 v_st;
    
                void main()
                {
                    vec3 positionToEyeEC = -v_positionEC;
    
                    vec3 normalEC = normalize(v_normalEC);
                #ifdef FACE_FORWARD
                    normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
                #endif
    
                    czm_materialInput materialInput;
                    materialInput.normalEC = normalEC;
                    materialInput.positionToEyeEC = positionToEyeEC;
                    materialInput.st = v_st;
                    czm_material material = czm_getMaterial(materialInput);
    
                #ifdef FLAT
                    gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);
                #else
                    gl_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);
                #endif
                }
               `
        }); */


    /*   const aper =  new Cesium.MaterialAppearance({
          fragmentShaderSource: 
          ` varying vec3 v_positionEC;
            varying vec3 v_normalEC;
            varying vec2 v_st;
        
            void main()
            {
                vec3 positionToEyeEC = -v_positionEC;
        
                vec3 normalEC = normalize(v_normalEC);
            #ifdef FACE_FORWARD
                normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
            #endif
        
                czm_materialInput materialInput;
                materialInput.normalEC = normalEC;
                materialInput.positionToEyeEC = positionToEyeEC;
                materialInput.st = v_st;
                czm_material material = czm_getMaterial(materialInput);
                        material.diffuse = vec3(0.24313725490196078, 0.7372549019607844, 0.9333333333333333);
                      material.emission = vec3(0.0, 0.66666666, 0.0);
                material.specular = 0.5;
                material.shininess = 0.8;
        
            #ifdef FLAT
                gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);
            #else
                gl_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);
            #endif
            }
           `
        }); */
    /*    const aper =  new Cesium.MaterialAppearance({
         fragmentShaderSource: `varying vec3 v_positionMC;
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
                     }`
       }); */


       var f = [
        'uniform sampler2D tReflectionMap;',
        'uniform sampler2D tRefractionMap;',
        'uniform sampler2D tNormalMap0;',
        'uniform sampler2D tNormalMap1;',
        'uniform sampler2D tFlowMap;',
        
        'uniform vec3 color;',
        'uniform float reflectivity;',
        'uniform vec4 config;',
    
        'varying vec4 vCoord;',
        'varying vec2 vUv;',
        'varying vec3 vToEye;',
    
        'void main() {',
        '	float flowMapOffset0 = config.x;',
        '	float flowMapOffset1 = config.y;',
        '	float halfCycle = config.z;',
        '	float scale = config.w;',
    
        '	vec3 toEye = normalize( vToEye );',
    
        // determine flow direction
        '	vec2 flow;',
        //'	#ifdef USE_FLOWMAP',
        //'		flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;',
        '		flow = texture2D( tFlowMap, vUv ).rg;',
        //'	#else',
        //'		flow = flowDirection;',
        //'	#endif',
        //'	flow.x *= - 1.0;',
    
        // sample normal maps (distort uvs with flowdata)
        '	vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );',
        '	vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );',
    
        '	float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;',
        '	vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );',
    
        '	vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );',
    
        // calculate the fresnel term to blend reflection and refraction maps
        '	float theta = max( dot( toEye, normal ), 0.0 );',
        '	float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );',
    
        // calculate final uv coords
        '	vec3 coord = vCoord.xyz / vCoord.w;',
        '   vec2 coord1 = gl_FragCoord.xy / czm_viewport.zw;',
        '	vec2 uv = coord1.xy + coord.z * normal.xz * 0.05;',
    
        '	vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );',
        '	vec4 refractColor = texture2D( tRefractionMap, uv );',
    
        '	gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );',
        'gl_FragColor = refractColor;',
        '}'
    ].join('\n');



    const aper = new Cesium.MaterialAppearance({
        // material : m,
        vertexShaderSource: 'attribute vec3 position;' +
        'attribute vec2 st;' +
        'uniform mat4 u_modelViewMatrix;' +
        'uniform mat4 u_invWorldViewMatrix;' +
        //'uniform vec2 u_texCoordOffset;' +
        //'uniform vec2 u_texCoordScale;' +
        //'uniform float u_frameTime;' +
        'uniform int u_clampToGroud;' +
        'uniform vec3 u_camPos;' +
        'uniform vec3 u_scale;' +
        
            //'varying vec3 eyeDir;' +
            'varying vec3 vToEye;' +
            //'varying vec2 texCoord;' +
            'varying vec2 vUv;' +
            //'varying float myTime;' +
            //'varying vec4 projectionCoord;' +
            'varying vec4 vCoord;' +
        
            'void main(void)' +
            '{' +
            //gl_Position = ftransform();
            'vec4 positionW = u_modelViewMatrix * vec4(position.xyz, 1.0);' +
            'vec4 eyep = czm_modelView * positionW;' +
            'gl_Position = czm_projection * eyep; ' +
            'if (u_clampToGroud == 1)' +
            '{' +
            //'eyeDir = (u_camPos - position.xyz) * u_scale;' +vToEye
            'vToEye = (u_camPos - position.xyz) * u_scale;' +
            '} else {' +
            'vec4 pos = u_modelViewMatrix * vec4(position.xyz,1.0);' +
            //'eyeDir = vec3(u_invWorldViewMatrix*vec4(pos.xyz,0.0));' +
            'vToEye = vec3(u_invWorldViewMatrix*vec4(pos.xyz,0.0));' +
            //'projectionCoord = gl_Position;' +
            'vCoord = gl_Position;' +
            '}' +
            //'texCoord = (st+u_texCoordOffset)*u_texCoordScale;' +
            //'vUv = (st+u_texCoordOffset)*u_texCoordScale;' +
            'vUv = st;' +
            //'myTime = 0.01 * u_frameTime;' +
            '}',
        fragmentShaderSource: f
        /* `uniform sampler2D mirrorSampler;
        uniform float alpha;
        uniform float time;
        uniform float size;
        uniform float distortionScale;
        uniform sampler2D normalSampler;
        uniform vec3 sunColor;
        uniform vec3 sunDirection;
        uniform vec3 eye;
        uniform vec3 waterColor;

        varying vec4 mirrorCoord;
        varying vec4 worldPosition;

        vec4 getNoise( vec2 uv ) {
            vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
            vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
            vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
            vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
            vec4 noise = texture2D( normalSampler, uv0 ) +
                texture2D( normalSampler, uv1 ) +
                texture2D( normalSampler, uv2 ) +
                texture2D( normalSampler, uv3 );
            return noise * 0.5 - 1.0;
        }

        void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
            vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
            float direction = max( 0.0, dot( eyeDirection, reflection ) );
            specularColor += pow( direction, shiny ) * sunColor * spec;
            diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
        }

        void main() {

            vec4 noise = getNoise( worldPosition.xz * size );
            vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

            vec3 diffuseLight = vec3(0.0);
            vec3 specularLight = vec3(0.0);

            vec3 worldToEye = eye-worldPosition.xyz;
            vec3 eyeDirection = normalize( worldToEye );
            sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

            float distance = length(worldToEye);

            vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
            vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

            float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
            float rf0 = 0.3;
            float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
            vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
            vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
            vec3 outgoingLight = albedo;
            gl_FragColor = vec4( outgoingLight, alpha );

        }` */
    });

    var p = viewer.scene.primitives.add(new Cesium.Primitive({
        geometryInstances: instance,
        appearance: aper,
        releaseGeometryInstances: false,
        compressVertices: false,
    }));

    // p.readyPromise.then(v => console.log(v));

    const vs = aper.vertexShaderSource;
    const fs = aper.fragmentShaderSource;
    const fs2 = aper.getFragmentShaderSource();
}