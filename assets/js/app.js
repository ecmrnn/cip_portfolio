function handleMouseover(id) {
    let el = document.querySelector(`#${id}`);
    el.classList.add("text-white");
    el.classList.add("bg-dark");
}

function handleMouseout(id) {
    let el = document.querySelector(`#${id}`);
    el.classList.remove("text-white")
    el.classList.remove("bg-dark")
}