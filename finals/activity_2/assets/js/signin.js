document.querySelector("#togglePassword").addEventListener("click", () => {
    let password = document.querySelector("#password");
    let type = password.getAttribute("type");

    if (type == "password") {
        document.querySelector("#togglePassword").innerHTML = "Hide password";
        password.setAttribute("type", "text");
    } else {
        document.querySelector("#togglePassword").innerHTML = "Show password";
        password.setAttribute("type", "password");
    }
});
