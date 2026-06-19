const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll(".nav nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

let bars = document.getElementById("bars");
let cancel = document.getElementById("cancel");
let right = document.getElementById("nav")

bars.addEventListener("click", ()=>{
    if(!right.classList.contains("shows")){
        right.classList.add("shows");
        bars.classList.add("hide");
    }
})

cancel.addEventListener('click', ()=>{
    if(right.classList.contains("shows")){
      right.classList.remove("shows");
      bars.classList.remove("hide");
    }
})