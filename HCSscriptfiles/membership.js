const selectBtn = document.querySelectorAll(".selectBtn");
const smallBtn = document.querySelectorAll(".small");


selectBtn.forEach( btn => {
    btn.addEventListener("click", ()=>{
        window.localStorage.setItem("checkout", true);
        checkOutContainer.classList.remove("no-show");
    })
})

smallBtn.forEach( btn => {
    btn.addEventListener("click", ()=>{
        window.localStorage.setItem("checkout", true);
        checkOutContainer.classList.remove("no-show");
    })
})