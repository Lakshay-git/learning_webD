document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("input").forEach(function (radioInput) {
        radioInput.addEventListener("change", function (event) {
            document.querySelector(".container").style.setProperty("--col-track-size", event.target.value);
        });
    });
});
