let inputs = document.querySelectorAll(".input");

for (let index = 0; index < inputs.length; index++) {
    let label = inputs[index].children[0];

    inputs[index].children[1].addEventListener("focus", () => {
        label.classList.add("focused");
    });

    inputs[index].children[1].addEventListener("blur", () => {
        if (inputs[index].children[1].value == "") {
            label.classList.remove("focused");
        }
    });
}
