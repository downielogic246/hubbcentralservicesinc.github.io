const closeCheckOut = document.querySelector(".close");

// const back = document.querySelector(".goBack");

const appointmentContainer = document.querySelector(".appointment-container");

const appointmentTitle = document.querySelector(".appointment-title");


const btns = document.querySelector(".applyBtns");

const f2fContainer = document.querySelector(".book-appointment");



const subject = document.getElementById('_subject');
window.addEventListener("DOMContentLoaded", ()=>{
    
    if(window.localStorage.checkout === 'true'){
        appointmentContainer.classList.remove("no-show");
    }
})

closeCheckOut.addEventListener("click", ()=>{
    window.localStorage.removeItem("checkout");
    appointmentContainer.classList.add("no-show");
})