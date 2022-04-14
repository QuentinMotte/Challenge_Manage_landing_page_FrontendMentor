//For the sidebar
const sideBar = document.querySelector(".sideBar");
const btn = document.getElementById("btn");
const hamburger = document.querySelector(".side-bar");
const content = document.querySelector("main");

//For the slides
const btnNumberOne = document.getElementById("slide1");
const btnNumberTwo = document.getElementById("slide2");
const btnNumberThree = document.getElementById("slide3");
const btnNumberFour = document.getElementById("slide4");
const sliderForTranslateOnX = document.querySelector(".sliders");

//slider when u arrive on the page

newWidth = window.innerWidth;

function widthTranslate(translate1, translate2) {
    if (newWidth >= 1116) {
        sliderForTranslateOnX.style.transform =
            "translateX(" + translate1 + "px)";
    } else if (newWidth <= 1115) {
        sliderForTranslateOnX.style.transform =
            "translateX(" + translate2 + "px)";
    }
}
btnNumberOne.addEventListener("click", () => {
    widthTranslate(420, 0);
});
btnNumberTwo.addEventListener("click", () => {
    widthTranslate(-150, -380);
});
btnNumberThree.addEventListener("click", () => {
    widthTranslate(-710, -750);
});
btnNumberFour.addEventListener("click", () => {
    widthTranslate(-1300, -1140);
});
// This is for when u change the witdh

window.addEventListener("resize", function (event) {
    var newWidth = window.innerWidth;
    function widthTranslate(translate1, translate2) {
        if (newWidth >= 1116) {
            sliderForTranslateOnX.style.transform =
                "translateX(" + translate1 + "px)";
        } else if (newWidth <= 1115) {
            sliderForTranslateOnX.style.transform =
                "translateX(" + translate2 + "px)";
        }
    }
    console.log(newWidth);
    btnNumberOne.addEventListener("click", () => {
        widthTranslate(420, 0);
    });
    btnNumberTwo.addEventListener("click", () => {
        widthTranslate(-150, -380);
    });
    btnNumberThree.addEventListener("click", () => {
        widthTranslate(-710, -750);
    });
    btnNumberFour.addEventListener("click", () => {
        widthTranslate(-1300, -1140);
    });
});

// sidebar Logic
btn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    hamburger.classList.toggle("active");
});
// content.addEventListener("click", () => {
//     sideBar.classList.remove("active");
// });
