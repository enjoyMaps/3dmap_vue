import {
    Cartesian3,
    PolygonHierarchy,
    ClassificationType,
    VideoSynchronizer,
} from "cesium";
export function addVideo() {
    var videoElement = document.getElementById("trailer");
    var video = viewer.entities.add({
        polygon: {
            /*hierarchy: new PolygonHierarchy(
                Cartesian3.fromDegreesArray([
                    108.93513157533125,
                    32.709571191693975,
                    108.93534185110941,
                    32.709558658009335,
                    108.93530503636097 ,
                    32.70956697222442,
                    108.93513084930134,
                    32.70957962171966,
                ])
            ), */
            hierarchy: new PolygonHierarchy(
                Cartesian3.fromDegreesArray([
                    108.93456287429599,
                    32.70944634587841,
                    108.93487366932715,
                    32.709390453247536,
                    108.93481269689903,
                    32.70918075356655,
                    108.93450813178055,
                    32.709239016587865,
                ])
            ),
            classificationType: ClassificationType.BOTH,
            //material: videoElement
        },
    });

    var videoElement = document.getElementById("trailer");
    video.polygon.material = videoElement;

    // viewer.zoomTo(video);
    // 设置与时钟同步
    var synchronizer = new VideoSynchronizer({
        clock: viewer.clock,
        element: videoElement,
    });
    
}

