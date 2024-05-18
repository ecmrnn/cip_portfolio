let images = [
    {
        image: "image-1.jpg",
        title: "Group Classes",
        subtitle:
            "Be more productive and enjoy working out with other members of the community!",
        highlight: "Participate on a very proactice group classes!",
    },
    {
        image: "image-2.jpg",
        title: "Premium Gym Equipment",
        subtitle:
            "Our high quality equipment will ensure safe and effective workout experience.",
        highlight: "Enjoy our premium and high quality weights!",
    },
    {
        image: "image-3.jpg",
        title: "Personalized Assessment",
        subtitle:
            "Your experience throughout your workout journey is our number one priority.",
        highlight: "Track your progress with our personalized assessments!",
    },
];

document.querySelector("#prev").addEventListener("click", () => {
    let first = document.querySelectorAll(".images")[0];
    let second = document.querySelectorAll(".images")[1];
    let third = document.querySelectorAll(".images")[2];
    let firstIndex = first.getAttribute("data-index");
    let secondIndex = second.getAttribute("data-index");
    let thirdIndex = third.getAttribute("data-index");
    let title = document.querySelector(".gallery--title");
    let subtitle = document.querySelector(".gallery--subtitle");
    let highlight = document.querySelector("#highlight--hover");

    first.setAttribute(
        "style",
        `background-image: url("assets/images/gallery/${
            images[second.getAttribute("data-index")].image
        }")`
    );

    second.setAttribute(
        "style",
        `background-image: url("assets/images/gallery/${
            images[third.getAttribute("data-index")].image
        }")`
    );

    third.setAttribute(
        "style",
        `background-image: url("assets/images/gallery/${
            images[first.getAttribute("data-index")].image
        }")`
    );

    third.setAttribute("data-index", firstIndex);
    second.setAttribute("data-index", thirdIndex);
    first.setAttribute("data-index", secondIndex);

    title.innerHTML = images[second.getAttribute("data-index")].title;
    subtitle.innerHTML = images[second.getAttribute("data-index")].subtitle;
    highlight.innerHTML = images[second.getAttribute("data-index")].highlight;
});

document.querySelector("#next").addEventListener("click", () => {
    let first = document.querySelectorAll(".images")[0];
    let second = document.querySelectorAll(".images")[1];
    let third = document.querySelectorAll(".images")[2];
    let firstIndex = first.getAttribute("data-index");
    let secondIndex = second.getAttribute("data-index");
    let thirdIndex = third.getAttribute("data-index");
    let title = document.querySelector(".gallery--title");
    let subtitle = document.querySelector(".gallery--subtitle");
    let highlight = document.querySelector("#highlight--hover");

    first.setAttribute(
        "style",
        `background-image: url("assets/images/gallery/${
            images[third.getAttribute("data-index")].image
        }")`
    );

    second.setAttribute(
        "style",
        `background-image: url("assets/images/gallery/${
            images[first.getAttribute("data-index")].image
        }")`
    );

    third.setAttribute(
        "style",
        `background-image: url("assets/images/gallery/${
            images[second.getAttribute("data-index")].image
        }")`
    );

    third.setAttribute("data-index", secondIndex);
    second.setAttribute("data-index", firstIndex);
    first.setAttribute("data-index", thirdIndex);

    title.innerHTML = images[second.getAttribute("data-index")].title;
    subtitle.innerHTML = images[second.getAttribute("data-index")].subtitle;
    highlight.innerHTML = images[second.getAttribute("data-index")].highlight;
});

function showImage() {
    for (let counter = 0; counter < images.length; counter++) {
        document
            .querySelectorAll(".images")
            [counter].setAttribute(
                "style",
                `background-image: url("assets/images/gallery/${images[counter].image}")`
            );
        document
            .querySelectorAll(".images")
            [counter].setAttribute("data-index", counter);
    }

    document.querySelector(".gallery--title").innerHTML = images[1].title;
    document.querySelector(".gallery--subtitle").innerHTML = images[1].subtitle;
    document.querySelector("#highlight--hover").innerHTML = images[1].highlight;
}

showImage();
