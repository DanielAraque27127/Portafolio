function circlle(el) {
    $(el)
        .circleProgress({
            fill: {
                color: "#000000"
            }
        })
        .on("circle-animation-progress", function (
            event,
            progress,
            stepValue
        ) {
            $(this)
                .find("strong")
                .text(String(stepValue.toFixed(2)).substr(2) + "%");
        });
}
circlle(".round");