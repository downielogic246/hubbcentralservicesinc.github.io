import {Links} from './fygaro.links.js';

const closeCheckOut = document.querySelector(".close");


const appointmentContainer = document.querySelector(".appointment-container");


const subject = document.getElementById('_subject');
window.addEventListener("DOMContentLoaded", ()=>{
    
    if(window.localStorage.checkout === 'true'){
        appointmentContainer.classList.remove("no-show");
    }
})

closeCheckOut.addEventListener("click", ()=>{
    window.localStorage.removeItem("checkout");
    appointmentContainer.classList.add("no-show");
    
        document.querySelector('.appointmentMessage').innerHTML = ' '
})


const methodBtn = document.querySelectorAll('.method-label');
const continueBtn = document.querySelector('.continue-button')
const appointment = document.querySelector('.book-appointment')
let method = undefined;

methodBtn.forEach((btn) => {
    btn.addEventListener('click', () => {

        method = btn.dataset.method === 'online' ? 'online' : 'person';

    })
})


continueBtn.addEventListener('click', ()=> {
    if ( method === 'person'){
        appointment.classList.add('down')
    }

    if ( method === 'online'){
        
        const onlineServices = localStorage.getItem('onlineService');

       Links.forEach((link)=>{
        
        if(link.id === onlineServices){
            
            if (link.link === undefined){                
                document.querySelector('.appointmentMessage').innerHTML = 'Since the price varies on this service, kindly book an appointment to pay for this service.'

            } else {
                
                window.open(link.link,'_blank')
            }
            
        }
       })
    }
})

const closeForm = document.querySelector('.close-form');

closeForm.addEventListener('click', () => {
    appointment.classList.remove('down');
    
})
