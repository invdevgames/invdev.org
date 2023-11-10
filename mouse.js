var parallax = $(".mouse-parallax");
var cursor = $(".cursor");

document.addEventListener("mousemove", (event) => {
    cursor.show();
    posX = event.clientX - window.innerWidth / 2;
    posY = event.clientY - window.innerHeight / 2;

    parallax.each((i, elem) => {
        var index = parallax.index(elem);
        $(elem).css(
            "transform",
            "translate(" +
                posX * index * 0.001 +
                "%, " +
                posY * index * 0.001 +
                "%)"
        );
    });

    cursor.css({ top: event.pageY, left: event.pageX });
});
