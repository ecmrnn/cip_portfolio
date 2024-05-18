document.querySelector("#toggleNav").addEventListener("click", () => {
    let dropdown = document
        .querySelector("#dropdown")
        .getAttribute("data-dropdown");

    if (dropdown == "true") {
        document.querySelector("#dropdown").style.display = "none";
        document
            .querySelector("#dropdown")
            .setAttribute("data-dropdown", "false");
    } else {
        document.querySelector("#dropdown").style.display = "block";
        document
            .querySelector("#dropdown")
            .setAttribute("data-dropdown", "true");
    }
});
