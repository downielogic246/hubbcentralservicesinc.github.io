// import {Links} from './fygaro.links.js';

const closeCheckOut = document.querySelector(".close");

// const back = document.querySelector(".goBack");

const appointmentContainer = document.querySelector(".appointment-container");

// const appointmentTitle = document.querySelector(".appointment-title");


// const btns = document.querySelector(".applyBtns");

// const f2fContainer = document.querySelector(".book-appointment");



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


const methodBtn = document.querySelectorAll('.method-label');
const continueBtn = document.querySelector('.continue-button')
const appointment = document.querySelector('.book-appointment')
let method = undefined;

methodBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        // console.log(btn.dataset)

        method = btn.dataset.method === 'online' ? 'online' : 'person'
    })
})


continueBtn.addEventListener('click', ()=> {
    if ( method === 'person'){
        appointment.classList.add('down')
    }

    if ( method === 'online'){
        console.log('link to go to');
    }

    console.log(subject)
})

const closeForm = document.querySelector('.close-form');

closeForm.addEventListener('click', () => {
    appointment.classList.remove('down');
})
