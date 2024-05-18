let times = document.querySelectorAll(".time");
let dates = document.querySelectorAll(".date");

for (let index = 0; index < times.length; index++) {
    let time = times[index];

    time.addEventListener("click", () => {
        for (let index = 0; index < times.length; index++) {
            times[index].classList.remove("selected");
        }

        time.classList.add("selected");
        return;
    });
}

for (let index = 0; index < dates.length; index++) {
    let date = dates[index];

    date.addEventListener("click", () => {
        for (let index = 0; index < dates.length; index++) {
            dates[index].classList.remove("selected");
        }

        date.classList.add("selected");
        return;
    });
}
