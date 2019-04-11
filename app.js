const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 300, y:  10 },
        { x: 400, y: 50 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: -250 },
    ]
}

const tween = new TimelineLite()

tween.add(
    TweenMax.to(".paper-plane", 5, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
)