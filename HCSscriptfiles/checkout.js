import {Links} from './fygaro.links.js';

// const noLinks = Links.filter((link)=>{
//     return link.link === undefined;
//   })

//   console.log(noLinks)
//import the choice from either membership or set a local variable and unset after use

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
        // console.log(location
        const onlineServices = localStorage.getItem('onlineService');

       Links.forEach((link)=>{
        // console.log(link);
        if(link.id === onlineServices){
            console.log(link.link);
            if (link.link === undefined){
                // const priceVaries = document.createElement('article');
                // const priceVariesMessage = document.createTextNode('Since the price varies on this service, kindly book an appointment to pay for this service.');
                // priceVaries.appendChild(priceVariesMessage);
                // document.querySelector('.method-container').appendChild(priceVaries);
                
                document.querySelector('.appointmentMessage').innerHTML = 'Since the price varies on this service, kindly book an appointment to pay for this service.'

            } else {
                
                window.open(link.link,'_blank')
            }
            
        }
       })

        // console.log(onlineServices)


        //location.href
        
    }
    
})

const closeForm = document.querySelector('.close-form');

closeForm.addEventListener('click', () => {
    appointment.classList.remove('down');
    
})
