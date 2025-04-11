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
nameError.style.fontSize = "13px";
userName.insertAdjacentElement("afterend", nameError);

const emailError = document.createElement("p");
emailError.style.color = "red";
emailError.style.fontSize = "13px";
userEmail.insertAdjacentElement("afterend", emailError);

clearFormBtn.addEventListener(`click`, ()=>{form.reset()});


const modalSps = document.querySelector('.modal-sps'); 
const modalSpsContent = document.querySelector('.modal-content'); 
const closeSpsButton = document.querySelector('.icon-close-sps'); 

form.addEventListener(`submit`, submitForm);
function submitForm(event) {
  event.preventDefault();

  let isValid = true;

  if (userName.value.trim().length < 2) {
    nameError.textContent = "Enter your name";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(userEmail.value.trim())) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (!isValid) {
    return; 
  }

  isCloseWindow();
  form.reset();
  openModalSps();
}

function openModalSps() {
  modalSps.classList.add('is-open');
  document.body.classList.add('no-scroll');

  window.addEventListener('click', closeModalSpsOnBgClick);
  window.addEventListener('keydown', closeModalSpsOnEsc);
}

function closeModalSps() {
  modalSps.classList.remove('is-open');
  document.body.classList.remove('no-scroll');

  window.removeEventListener('click', closeModalSpsOnBgClick);
  window.removeEventListener('keydown', closeModalSpsOnEsc);
}

function closeModalSpsOnBgClick(event) {
  if (!modalSpsContent.contains(event.target)) {
    closeModalSps();
  }
}

function closeModalSpsOnEsc(event) {
  if (event.code === 'Escape') {
    closeModalSps();
  }
}

closeSpsButton.addEventListener('click', closeModalSps);

// ===================відкриття - закриття вікна =========================
const isOpenWindow = () => {
    modalWindow.classList.add(`is-open`);
    document.body.classList.add('no-scroll');

    window.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeFormByEsc);
};

const isCloseWindow = () => {
    modalWindow.classList.remove(`is-open`);
    document.body.classList.remove('no-scroll'); 

    window.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', closeFormByEsc);
};

send.addEventListener(`click`, isOpenWindow);
iconCloseButton.addEventListener(`click`, isCloseWindow);

//  ==============================закриття по кліку на сірий фон===========================

const closeModal = event => {
const isClickOutside = modalWindow.contains(event.target) && !form.contains(event.target);
  const isEscapeKey = event.code === 'Escape';

  if (isClickOutside || isEscapeKey) {
    isCloseWindow()}};

//  ==============================закриття форми вікон ескейпом ===========================

function closeFormByEsc (event) {
    if (event.code === 'Escape') {
      form.classList.remove(`is-open`), isCloseWindow()}}; 
        
//==================================== кнопка для прокрутки вікна===================

const scrollButton = document.querySelector('.icon-arrow');

function checkScrollPosition() {
    if (window.scrollY > 100) { 
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
}

window.addEventListener('scroll', checkScrollPosition);

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

