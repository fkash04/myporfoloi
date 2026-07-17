// Typed.js

new Typed("#element", {
    strings: [
        "Video Editor",
        "Graphic Designer",
        "Content Writer",
        "Script Writer",
        "Creative Designer"
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1200,
    loop: true
});

// Navbar background on scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(10,15,35,.92)";
        nav.style.boxShadow = "0 15px 40px rgba(0,0,0,.4)";

    } else {

        nav.style.background = "rgba(255,255,255,.08)";
        nav.style.boxShadow = "none";

    }

});
