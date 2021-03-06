document.addEventListener("DOMContentLoaded", function() {

    let btnOpen = document.querySelector('.popup-open');
    let btnClose = document.querySelector('.popup__btn-close');

    let windowClose = document.querySelector('.popup__bg');
    let popup = document.querySelector('.popup');

    btnOpen.addEventListener('click', openBtnFunc);
    function openBtnFunc () {
        popup.classList.remove('hide');
        popup.classList.add('show');
    }
    windowClose.addEventListener('click', closeBtnFunc);
    btnClose.addEventListener('click', closeBtnFunc);
    function closeBtnFunc () {
        popup.classList.remove('show');
        popup.classList.add('hide');
    }
});


const form = document.getElementById("form");
const username = document.getElementById("username");
const tel = document.getElementById("tel");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector(".small");
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `Надсилайте заявку і ми зв’яжемось з вами. `);

        } else {
            showSuccess(input);
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, tel]);
})
