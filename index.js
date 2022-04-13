//For the sidebar
const sideBar = document.querySelector(".sideBar");
const btn = document.getElementById("btn");
const content = document.querySelector("main");

//For the slides
const btnNumberOne = document.getElementById("slide1");
const btnNumberTwo = document.getElementById("slide2");
const btnNumberThree = document.getElementById("slide3");
const btnNumberFour = document.getElementById("slide4");
const sliderForTranslateOnX = document.querySelector(".sliders");
let largeur = window.innerWidth;
let playOnce = true;

//sidebar Logic
btn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
});
content.addEventListener("click", () => {
    sideBar.classList.remove("active");
});

btnNumberOne.addEventListener("click", () => {
    if (largeur >= 1116) {
        sliderForTranslateOnX.style.transform = "translateX(" + 420 + "px)";
    } else if (largeur <= 1115) {
        sliderForTranslateOnX.style.transform = "translateX(" + 0 + "px)";
    }
});
btnNumberTwo.addEventListener("click", () => {
    if (largeur >= 1116) {
        sliderForTranslateOnX.style.transform = "translateX(" + -150 + "px)";
    } else if (largeur <= 1115) {
        sliderForTranslateOnX.style.transform = "translateX(" + -380 + "px)";
    }
});
btnNumberThree.addEventListener("click", () => {
    if (largeur >= 1116) {
        sliderForTranslateOnX.style.transform = "translateX(" + -710 + "px)";
    } else if (largeur <= 1115) {
        sliderForTranslateOnX.style.transform = "translateX(" + -750 + "px)";
    }
});
btnNumberFour.addEventListener("click", () => {
    if (largeur >= 1116) {
        sliderForTranslateOnX.style.transform = "translateX(" + -1300 + "px)";
    } else if (largeur <= 1115) {
        sliderForTranslateOnX.style.transform = "translateX(" + -1140 + "px)";
    }
});
