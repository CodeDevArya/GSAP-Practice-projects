let tl = gsap.timeline();
tl.to("#open", {
    right: 0,
    duration: 0.4,
})
tl.from("#open h4", {
    opacity: 0,
    x: 100,
    duration: 0.5,
    stagger: 0.1,
})
tl.from("#open img", {
    opacity: 0,
})

tl.pause();

document.querySelector("nav>img").addEventListener("click", () => {
    tl.play();
})
document.querySelector("#open>img").addEventListener("click", () => {
    tl.reverse();
})