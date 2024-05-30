const animation = () => {
    window.addEventListener("wheel", (dets) => {
        if (dets.deltaY < 0) {
            gsap.to(".marque", {
                transform: 'translateX(100%)',
                duration: 5,
                ease: "none",
                repeat: -1,
            })
            gsap.to(".marque img", {
                rotate: 0,
            })
        }
        else if (dets.deltaY > 0) {
            gsap.to(".marque", {
                transform: 'translateX(-100%)',
                duration: 8,
                ease: "none",
                repeat: -1,
            })
            gsap.to(".marque img", {
                rotate: 180,
            })
        }
    })
}
animation();

