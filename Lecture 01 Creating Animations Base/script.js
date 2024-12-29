let timeLine = gsap.timeline();

timeLine.from("h2", {
    y: -30,
    opacity : 0,
    duration : 1,
    delay: .5,
    stagger : 0.3,
})
timeLine.from("h4", {
    y: -30,
    opacity : 0,
    duration : 1,
    delay: .5,
    stagger : 0.3,
})