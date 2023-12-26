document.addEventListener("DOMContentLoaded", function () {
    //document.querySelector('*').style.cursor = 'none';
    var splash = document.getElementById("splash");
    var mouseShadowY = document.getElementById("mouseShadowY");
    var mouseShadowX = document.getElementById("mouseShadowX");
    document.addEventListener("mousemove", function (event) {
        splash.style.transform =
            "translate(" +
            ((event.clientX - screen.width / 2) / screen.width) * 20 +
            "px, " +
            ((event.clientY - screen.height / 2) / screen.height) * 20 +
            "px)";
        mouseShadowY.style.top = event.clientY - 50 + "px";
        mouseShadowX.style.left =
            Math.max(0, Math.min(event.clientX - 50, screen.width - 100)) +
            "px";
    });
});
