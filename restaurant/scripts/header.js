window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})

const mobileMenu = document.querySelector(".mobile-menu")

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open")

    if(mobileMenu.classList.contains("open")) {
        document.body.classList.add("menuIsOpen")
        const header = document.querySelector("header")
        header.classList.add("sticky")
    } else {
        document.body.classList.add("menuIsOpen")
        document.body.classList.remove("menuIsOpen")
        header.classList.remove("sticky")
    }
})