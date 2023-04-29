const navBar = document.querySelector(".nav-container");

const menuBtn = document.querySelector(".menuBtn");

const menuBtnContainer = document.querySelector(".menuBtn-container");

const navLinks = document.querySelectorAll(".nav-list"); //individual link

const navList = document.querySelector(".nav-ulist");//whole list

const closeNav = document.querySelector(".closeNav");

window.addEventListener("scroll", () => {
    if( window.scrollY >= 20){
        navBar.style.backgroundColor = "var(--footerColour-background-colour)";
        navBar.classList.add("navShadow");    
    } else if (window.scrollY == 0){
        navBar.style.backgroundColor = "transparent";
        navBar.classList.remove("navShadow");
    }
})

setInterval(()=>{
    if(localStorage.menuActive === 'true'){
        navList.style.display = "flex";
    }
})

menuBtn.addEventListener("click", () => {
    window.localStorage.setItem("menuActive", true);
    navList.style.display = "flex";
})


closeNav.addEventListener("click", ()=>{
    navList.style.display = "none";
    localStorage.removeItem("menuActive")
    
} )

navLinks.forEach(link => {
    link.addEventListener("click", ()=>{
        if(link.childNodes[1].href.slice(-1) != '#'){
            closeNav.click();
        }
    })
})
