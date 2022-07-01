let imageLinks = Array.from(document.querySelectorAll('.image__link-in'));
let image = document.querySelector('.image__bg');
let vector = Array.from(document.querySelectorAll('.vector-outer img'))
let cursor = document.querySelector('.cursor');
let imageTitle = document.querySelector('.image__title');

let tl = gsap.timeline({})
let tl2 = gsap.timeline({})
tl.fromTo(image, {opacity:0}, {opacity: 1})
imageLinks.map(item => {
    tl.fromTo(item, {height: 0}, {height: '100%', duration: 0.5}, '>-=0.35')
})
vector.reverse().map((item, i) => {
    tl2.fromTo(item, {x: '110%', opacity: 0, rotate: 10}, {x: 0, opacity: 1, rotate: 0, duration: 0.5}, '>-=0.25')
})

document.addEventListener('mousemove', (e) => {
    let x = (e.clientX)
    let y = (e.clientY)
    if (x < window.innerWidth-20 && x > 20 && y < window.innerHeight-20 && y > 20) {
    gsap.to(cursor, {display: 'block', x: x, y: y})
    }
})

imageTitle.addEventListener('mouseover', () => {
    gsap.to(cursor, {scale: 4, mixBlendMode: 'difference'})
})
imageTitle.addEventListener('mouseout', () => {
    console.log('out')
    gsap.to(cursor, {scale: 1, mixBlendMode: 'normal'})
})