const services = [
    {
        id:"ML",
        name: "Micro Loans",
        priceString: "BBD $50.00",
        photo: "/HubbCentralServices/Photos/ML.jpg",
        amount: true,
        link: "",
    },
    {
        id:"RDL",
        name: "Renewal of Driver's License",  
        priceString: "Price varies",
        photo: "Photos/RDL.jpg",
        amount: false,
        link: "", 
    },
    {
        id:"UVA",
        name:"US Visa Application",
        priceString: "BBD $400.00",
        photo: "Photos/UVA.jpg",
        amount: true,
        link: "",
    },
    {
        id:"CETA",
        name:"Canadian ETA",
        priceString: "BBD $40.00",
        photo: "Photos/CETA.jpg",
        amount: true,
        link: "",
    },
    {
        id:"UBP",
        name:"Utility Bill Payments",
        priceString: "Price varies",
        photo: "Photos/UBP.jpg",
        amount: false,
        link: "",
    },
    {
        id:"CV",
        name:"CV / Resume Writing",
        priceString: "BBD $50.00",
        photo: "Photos/CV.jpg",
        amount: true,
        link: "",
    },
    {
        id:"TN",
        name: "Tamis Numbers",
        priceString: "BBD $50.00",
        photo: "Photos/TN.jpg",
        amount: true,
        link: "",
    },
    {
        id:"LT",
        name: "Land Tax",
        priceString: "BBD $20.00",
        photo: "Photos/LT.jpg",
        amount:true,
        link: "",
    },
    {
        id:"IT",
        name:"Income Tax",
        priceString: "BBD $50.00",
        photo: "Photos/IT.jpg",
        amount: true,
        link: "",
    },
    {
        id:"PCOC",
        name:"Police Certificate of Character",
        priceString: "BBD $50.00",
        photo: "Photos/PCOC.jpg",
        amount: true,
        link: "",
    },
    {
        id:"PIT",
        name:"Prison Inmate Top-Ups",
        priceString: "Price varies",
        photo: "Photos/usvisa.jpg",
        amount: false,
        link: "",
    },
    {
        id:"EALI",
        name:"Employment Agency Local & International",
        priceString: "Price varies",
        photo: "Photos/usvisa.jpg",
        amount: false,
        link: "",
    },
    {
        id:"IL",
        name:"Invitation Letters",
        priceString: "Price varies",
        photo: "Photos/usvisa.jpg",
        amount: false,
        link: "",
    },
    {
        id:"DP",
        name:"Document Preparations",
        priceString: "Price varies",
        photo: "Photos/usvisa.jpg",
        amount: false,
        link: "",
    },

]


const servicesBtns = document.querySelectorAll(".serviceBtn");

const serviceHeadingTitleContainer = document.querySelector(".serviceHeadingtitle-container");
const serviceHeadingTitle = document.querySelector(".serviceHeadingtitle");
const serviceHeadingPrice = document.querySelector(".servicesPrice");

const servicesContainer = document.querySelector(".services-container");


const slideShowAppointmentBtn = document.querySelector(".servicesAppointmentButton");


const onlinePaymentMethod = document.querySelector(".online");

const backToPay = document.querySelector(".goBack");

const selectOptions = document.getElementById("servicesList");
// console.log(selectOptions)

selectOptions.addEventListener("change", ()=>{
    console.log(selectOptions.value)
    
    setCheckout();
    
    subject.value = "Appointment to pay " + selectOptions.value;
})

const setCheckout = () => {    
    window.localStorage.setItem("checkout", true);
    appointmentContainer.classList.remove("no-show");
}



slideShowAppointmentBtn.addEventListener("click", ()=> {
    setCheckout();
    subject.value = "Appointment to pay " + slideShowAppointmentBtn.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML;
})

let index = 0;


setInterval(()=>{
    
    if (index == 2){
        index = 0;
    } else {
        index++;
    }
    serviceHeadingTitleContainer.style.backgroundImage = `url(${services[index].photo})`;
    serviceHeadingTitle.innerHTML = `${services[index].name}`;
    serviceHeadingPrice.innerHTML = `${services[index].priceString}`;    
},3000);


servicesBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("serviceHeading-left")){
            index--;
        } else if ( btn.classList.contains("serviceHeading-right")){
            index++;
        }

        if (index< 0){
            index = 2;
        } else if (index > 2){
            index = 0;
        }

        serviceHeadingTitleContainer.style.backgroundImage = `url(${services[index].photo})`;
        serviceHeadingTitle.innerHTML = `${services[index].name}`;
        serviceHeadingPrice.innerHTML = `${services[index].priceString}`;
    })
})


window.addEventListener("DOMContentLoaded", ()=>{
    services.forEach((e)=>{servicesContainer.innerHTML += ` <div class="service" id="${e.id}">
    <div class="servicesTitle-container">
        <h1 class="servicesTitle">${e.name}</h1>
    </div>
    <div class="servicesPrice-container">
        <h2 class="servicesPrice">
            ${e.priceString}
        </h2>
    </div>
    <div class="servicesAppointmentButton-container">
        <button class="servicesAppointmentButton book">
            BOOK APPOINTMENT
        </button>
    </div>`;

    const item = document.getElementById(`${e.id}`);

    item.style.backgroundImage = `url(Photos/${e.id}.jpg`;

    item.style.backgroundSize = "cover"});
    
    const bookBtn = document.querySelectorAll(".book");

    bookBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            setCheckout();
            subject.value = "Appointment to pay " + btn.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML;
        })
    })

    serviceHeadingTitleContainer.style.backgroundImage = `url(${services[0].photo})`;
    serviceHeadingTitle.innerHTML = `${services[0].name}`;
    serviceHeadingPrice.innerHTML = `${services[0].priceString}`;

});