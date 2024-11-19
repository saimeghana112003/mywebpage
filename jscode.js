function func() {
    let q1 = prompt("Have you danced Salsa before?");
    let q2 = prompt("What is your first name?");
    let q3 = prompt("What is your email?");
    alert("Thanks " + q2 + "! We'll be in touch soon with more details. Feel free to contact us if you have any questions hello@shecodes.io");
}
function func2() {
    let body = document.querySelector("body");
    if (change === "dark") {
        change = "temp";
        body.classList.add("temp", "important");
    }
    else {
        change = "dark";
        body.classList.remove("temp", "important");
    }

}
let change = "dark";
let b1 = document.querySelector(".b1");
b1.addEventListener('click', func2);

let button = document.querySelector(".b2");
button.addEventListener('click', func);