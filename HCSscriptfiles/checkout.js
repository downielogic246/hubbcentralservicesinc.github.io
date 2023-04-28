const closeCheckOut = document.querySelector(".close");

const back = document.querySelector(".goBack");

const checkOutContainer = document.querySelector(".checkoutContainer");

const checkOutTitle = document.querySelector(".checkoutTitle");

const f2f = document.querySelector(".f2f");

const btns = document.querySelector(".applyBtns");

const f2fContainer = document.querySelector(".f2fMethod");

window.addEventListener("DOMContentLoaded", ()=>{
    
    if(window.localStorage.checkout === 'true'){
        checkOutContainer.classList.remove("no-show");
    }
    
    if(f2fContainer.classList.contains("no-show")){
        checkOutTitle.innerHTML = "how to pay?"
    } else {
        checkOutTitle.innerHTML = "book an appointment"
    }
})


f2f.addEventListener("click", ()=>{
    btns.classList.add("no-show");
    f2fContainer.classList.remove("no-show");
    checkOutTitle.innerHTML = "book an appointment";
})

back.addEventListener("click", ()=>{
    f2fContainer.classList.add("no-show");
    btns.classList.remove("no-show");
    checkOutTitle.innerHTML = "how to pay?"

})

closeCheckOut.addEventListener("click", ()=>{
    window.localStorage.removeItem("checkout");
    checkOutContainer.classList.add("no-show");
})