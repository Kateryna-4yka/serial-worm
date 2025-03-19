const send = document.querySelector(`.btn-open-form`);
const modalWindow = document.querySelector(`.modal-overlay`);
const iconCloseButton = document.querySelector(`.icon-close-button`);
const submitFormBtn = document.querySelector(`.submit-form`);
const clearFormBtn = document.querySelector(`.clear-form`);
const form = document.querySelector(`.form`);
const userName = document.querySelector(`#user-name`);
const userEmail = document.querySelector(`#user-email`);
const nameError = document.createElement("p");
nameError.style.color = "red";
nameError.style.fontSize = "10px";
userName.insertAdjacentElement("afterend", nameError);

submitFormBtn.disabled = true;

const validateForm = () => {
    if (userName.value.trim().length <= 2) {
        nameError.textContent = "Ім'я повинно містити більше 2 літер.";
    } else {
        nameError.textContent = "";
    }

    if (userName.value.trim().length > 2 && userEmail.value.trim() !== "") {
        submitFormBtn.disabled = false;
    } else {
        submitFormBtn.disabled = true;
    }
};

userName.addEventListener("input", validateForm);
userEmail.addEventListener("input", validateForm);

const submitForm = (event) => {
    event.preventDefault();
    if (userName.value.trim().length <= 2 || userEmail.value.trim() === "") {
        alert("Будь ласка, заповніть всі обов'язкові поля. Ім'я повинно містити більше 2 літер.");
        return;
    }
    form.reset();
    validateForm();
};

const clearForm = () => {
    form.reset();
    validateForm();
};

const isOpenWindow = () => {
    modalWindow.classList.add(`is-open`);
};

const isCloseWindow = () => {
    modalWindow.classList.remove(`is-open`);
};

send.addEventListener(`click`, isOpenWindow);
iconCloseButton.addEventListener(`click`, isCloseWindow);
form.addEventListener(`submit`, submitForm);
clearFormBtn.addEventListener(`click`, clearForm);
