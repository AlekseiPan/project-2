const form = document.querySelector(".feedback__form");
const popupFailure = document.querySelector(".modal--failure");
const popupSuccess = document.querySelector(".modal--success");

const fullName = form.querySelector(".form-group__input--full-name-necessary");
const contact = form.querySelector(".form-group__input--contact");

form.addEventListener("submit", function (evt) {
  if (fullName.value && contact.value) {
    evt.preventDefault();
    popupSuccess.classList.remove("modal--close");
  } else {
    evt.preventDefault();
    popupFailure.classList.remove("modal--close");
  }
});

const buttonFailure = popupFailure.querySelector(".button-failure");
const buttonSuccess = popupSuccess.querySelector(".button-success");

buttonFailure.addEventListener("click", function () {
  popupFailure.classList.add("modal--close");
});

buttonSuccess.addEventListener("click", function () {
  popupSuccess.classList.add("modal--close");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && !popupFailure.classList.contains("modal--close")) {
    popupFailure.classList.add("modal--close");
  }
  if (evt.keyCode === 27 && !popupSuccess.classList.contains("modal--close")) {
    popupSuccess.classList.add("modal--close");
  }
});
