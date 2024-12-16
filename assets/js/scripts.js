import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "ar"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "ltr" : "rtl";
};
// -----------------------------------

let side =document.getElementById('side')
let hamb =document.getElementById('hamb')
let overlay = document.getElementsByClassName('overlay')[0]
let body = document.querySelector('body')

hamb.addEventListener('click',function(){
  side.classList.toggle('active')
  overlay.classList.toggle('showOverlay')
  body.classList.toggle('bodyOverFlow')
})

overlay.addEventListener('click',function(){
  side.classList.remove('active')
  overlay.classList.remove('showOverlay')
  body.classList.remove('bodyOverFlow')
})

// ---------------------------------
// let x = document.getElementById("ico")
// let y = document.getElementById("dropdown")
// // let overlay = document.getElementsByClassName('overlay')
// x.addEventListener("click", myFunction);

// function myFunction() {
//   if (y.style.display === "none") {
//     y.style.display = "flex";
//     // overlay.classList.toggle('overlay')
//   } else {
//     y.style.display = "none";
//   }
// }

