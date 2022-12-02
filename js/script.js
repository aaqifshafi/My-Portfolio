const sidemen = document.getElementById('togglebar');
function openMenu() {
    sidemen.style.right = "0px";
}
function closeMenu() {
    sidemen.style.right = "-200px";
}


window.addEventListener('scroll', () => {
    const sectionPos = skill.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos > screenPos) {
        showProgress();
    }
    else {
    }
});
// ---------Typing effect---------
var typed = new Typed(".typing", {
    strings: ["", "Student", "Web-Developer", "Freelancer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});