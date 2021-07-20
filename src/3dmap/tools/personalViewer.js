import {
    ScreenSpaceEventType,
    Cartesian3,
    ScreenSpaceEventHandler,
} from "cesium";

let pViewer;

export function personalViewer(viewer) {
    var startMousePosition;
    var mousePosition;
    var flags = {
        looking: false,
        moveForward: false,
        moveBackward: false,
        moveUp: false,
        moveDown: false,
        moveLeft: false,
        moveRight: false,
    };

    var handler = new ScreenSpaceEventHandler(viewer.canvas);

    handler.setInputAction(function (movement) {
        flags.looking = true;
        mousePosition = startMousePosition = Cartesian3.clone(
            movement.position
        );
    }, ScreenSpaceEventType.LEFT_DOWN);

    handler.setInputAction(function (movement) {
        mousePosition = movement.endPosition;
    }, ScreenSpaceEventType.MOUSE_MOVE);

    handler.setInputAction(function () {
        flags.looking = false;
    }, ScreenSpaceEventType.LEFT_UP);

    function getFlagForKeyCode(keyCode) {
        switch (keyCode) {
            case "W".charCodeAt(0):
                return "moveForward";
            case "S".charCodeAt(0):
                return "moveBackward";
            case "Q".charCodeAt(0):
                return "moveUp";
            case "E".charCodeAt(0):
                return "moveDown";
            case "D".charCodeAt(0):
                return "moveRight";
            case "A".charCodeAt(0):
                return "moveLeft";
            default:
                return undefined;
        }
    }

    document.addEventListener(
        "keydown",
        function (e) {
            var flagName = getFlagForKeyCode(e.keyCode);
            if (typeof flagName !== "undefined") {
                flags[flagName] = true;
            }
        },
        false
    );

    document.addEventListener(
        "keyup",
        function (e) {
            var flagName = getFlagForKeyCode(e.keyCode);
            if (typeof flagName !== "undefined") {
                flags[flagName] = false;
            }
        },
        false
    );
    pViewer = function () {
        var camera = viewer.camera;
        if (flags.looking) {
            var width = viewer.canvas.clientWidth;
            var height = viewer.canvas.clientHeight;
            var x = (mousePosition.x - startMousePosition.x) / width;
            var y = -(mousePosition.y - startMousePosition.y) / height;

            var lookFactor = 0.05;
            camera.lookRight(x * lookFactor);
            camera.lookUp(y * lookFactor);
        }

        var cameraHeight = viewer.scene.globe.ellipsoid.cartesianToCartographic(
            camera.position
        ).height;
        var moveRate = cameraHeight / 100.0;

        if (flags.moveForward) {
            camera.moveForward(moveRate);
        }
        if (flags.moveBackward) {
            camera.moveBackward(moveRate);
        }
        if (flags.moveUp) {
            camera.moveUp(moveRate);
        }
        if (flags.moveDown) {
            camera.moveDown(moveRate);
        }
        if (flags.moveLeft) {
            camera.moveLeft(moveRate);
        }
        if (flags.moveRight) {
            camera.moveRight(moveRate);
        }
    };
    viewer.clock.onTick.addEventListener(pViewer);
}

export function commonViewer(viewer) {
    viewer.clock.onTick.removeEventListener(pViewer);
}