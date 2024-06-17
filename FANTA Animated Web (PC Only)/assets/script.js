let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: 2,
    }
});
tl.to(".fanta", {
    top: "110%",
    left: "1%",
}, "a")
tl.to(".orange-cut", {
    top: "155%",
    left: "23%",
}, "a")
tl.to(".orange", {
    scale: "0.8",
    top: "155%",
    right: "10%",
}, "a")
tl.to("#leaf", {
    top: "90%",
    rotate: "180deg",
    left: "75%",
}, "a")
tl.to("#leaf2", {
    top: "100%",
    rotate: "180deg",
    left: "0%",
    rotate: "160deg"
}, "a")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "50% 50%",
        scrub: 1,
    }
});
tl2.to(".fanta", {
    top: "205%",
    left: "30%",
    scale: "0.8",
}, "b")
tl2.to(".orange-cut", {
    top: "207%",
    left: "42%",
    scale: "1.2"
}, "b")

document.querySelector("#openMe").addEventListener("click", () => {
    let tl3 = gsap.timeline()
    tl3.to(".open", {
        transform: "translate(0%)",
        duration: 0.8,
    })
    tl3.from(".options a", {
        opacity: 0,
        x: 300,
        duration: 0.5,
        stagger: 0.2,
    })
})
document.querySelector(".cross img").addEventListener("click", () => {
    let tl3 = gsap.timeline()
    tl3.to(".open", {
        transform: "translate(500%)",
        duration: 1,
    })
})
