"use strict";

const id = document.querySelector("#ID");
const password = document.querySelector("#PW");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };
}
