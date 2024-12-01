const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
document.querySelectorAll('.elem').forEach(elem => {
    let image = elem.querySelector('img');
    let tl = gsap.timeline();
    let xTransfrom = gsap.utils.random(-100, 100);

    tl.set(image, {
        transformOrigin: `${xTransfrom < 0 ? 0 : '100%'}`,
    }, "start");
    tl.to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
    }, "start");
    tl.to(elem, {
        xPercent: xTransfrom,
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    }, "start");
});

tl.from("logo1",{
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "none",
})