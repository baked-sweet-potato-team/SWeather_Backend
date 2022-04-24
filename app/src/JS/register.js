"use strict";

const id = document.querySelector("#ID");
const password = document.querySelector("#password");
const name = document.querySelector("#name");
const confirmPW = document.querySelector("#confirmPW");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        confirmPW : confirmPW.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res,msg);
        }
    }).catch((err) => {
        console.log(new Error("register error"));
    });
}
