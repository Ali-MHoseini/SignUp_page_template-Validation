const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const email = document.getElementById("userEmail");
const password = document.getElementById("password");
const rePass = document.getElementById("rePassword");
const inpBox = document.getElementById("email_box");
const passbox = document.getElementById("pass-box");
const rePassbox = document.getElementById("rePass-box");

email.addEventListener("input", () => {
    if (emailRegex.test(email.value)) {
        inpBox.style.border = "1px solid green";
    } else {
        inpBox.style.border = "1px solid red";
    }
})

rePass.addEventListener("input", () => {
    if (password.value == rePass.value) {
        passbox.style.border = "1px solid green";
        rePassbox.style.border = "1px solid green";
    } else {
        passbox.style.border = "1px solid red";
        rePassbox.style.border = "1px solid red";
    }
})