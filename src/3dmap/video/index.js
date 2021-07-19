import {
    Cartesian3,
    PolygonHierarchy,
    ClassificationType,
} from "cesium";
export function addVideo() {
    var videoElement = document.getElementById("trailer");
    var video = viewer.entities.add({
        polygon: {
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
        },
    });

    var videoElement = document.getElementById("trailer");
    video.polygon.material = videoElement;

    viewer.zoomTo(video);
    // 设置与时钟同步
    /* var synchronizer = new VideoSynchronizer({
        clock: viewer.clock,
        element: videoElement,
    }); */

}

