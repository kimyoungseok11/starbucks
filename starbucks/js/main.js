const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
})

searchInputEl.addEventListener("focus", () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder',"통합검색");    
})

searchInputEl.addEventListener("blur", () => {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder',"");    
})

const badgeEl = document.querySelector("header .badges");
window.addEventListener("scroll", _.throttle(() => {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // badgeEl.style.display = 'none'
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:"none",
        }) //gsap.to(요소, 시간, 옵션);
    } else {
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:"block"
        })
    }
}, 300)); // _.throttle(함수, 시간) 함수를 입력한 시간만큼 지연시켜서 실행시켜줌