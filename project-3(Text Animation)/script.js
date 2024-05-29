const breakText = () => {
    let h1 = document.querySelector("h1");
    let h1Text = document.querySelector("h1").textContent;
    let splittedText = h1Text.split("");
    let clutter = "";
    splittedText.forEach((e, index) => {
        if (index <= 5) {
            clutter += `<span class="a">${e}</span>`;
        }
        else {
            clutter += `<span class="b">${e}</span>`;
        }
    })
    h1.innerHTML = clutter;
}
breakText();

gsap.from("h1 .a", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    stagger: 0.2,
})
gsap.from("h1 .b", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    stagger: -0.2,
})
