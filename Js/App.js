new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    grabCursor: true,
    autoHeight: false,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});
const anchors = document.querySelectorAll('a[href^="#"]')
// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
const goTopBtn = document.getElementById('up');
goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll)
function trackScroll() {
    const offset = window.pageYOffset;
    if (offset > 0) {
        goTopBtn.classList.add('btn--isActive')
    } else {
        goTopBtn.classList.remove('btn--isActive')
    }
}
function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -25);
        setTimeout(goTop, 0);
    }
}
