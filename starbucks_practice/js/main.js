window.onload = () => {
    const searchEl = document.querySelector(".search");
    const searchInputEl = searchEl.querySelector("input")
    console.log(searchEl);
    searchEl.addEventListener("click", () => {
        searchInputEl.focus();
    })
    searchInputEl.addEventListener("focus", () => {
        searchEl.classList.add("focused");
        searchInputEl.setAttribute('placeholder','통합검색')
    })
    searchInputEl.addEventListener("blur", () => {
        searchEl.classList.remove("focused");
        searchInputEl.setAttribute('placeholder','')

    })
}

