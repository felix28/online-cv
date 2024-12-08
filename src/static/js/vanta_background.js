$(document).ready(function () {
    startVanta();
});

/**
 * Start VANTA background.
 */
function startVanta() {
    VANTA.WAVES({
        el: "#presentation",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x111111,
        shininess: 19.00,
        waveHeight: 24.00,
        waveSpeed: 0.35,
        zoom: 1.3
    })
}