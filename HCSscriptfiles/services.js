const services = [
    {
        id:"ML",
        name: "Micro Loans",
        price: "BBD $50.00",
        photo: "/HubbCentralServices/Photos/ML.jpg"
    },
    {
        id:"RDL",
        name: "Renewal of Driver's License",  
        price: "Price varies",
        photo: "Photos/RDL.jpg" 
    },
    {
        id:"UVA",
        name:"US Visa Application",
        price: "BBD $400.00",
        photo: "Photos/UVA.jpg"
    },
    {
        id:"CETA",
        name:"Canadian ETA",
        price: "BBD $40.00",
        photo: "Photos/CETA.jpg"
    },
    {
        id:"UBP",
        name:"Utility Bill Payments",
        price: "Price varies",
        photo: "Photos/UBP.jpg"
    },
    {
        id:"CV",
        name:"CV / Resume Writing",
        price: "BBD $50.00",
        photo: "Photos/CV.jpg"
    },
    {
        id:"TN",
        name: "Tamis Numbers",
        price: "BBD $50.00",
        photo: "Photos/TN.jpg"
    },
    {
        id:"LT",
        name: "Land Tax",
        price: "BBD $20.00",
        photo: "Photos/LT.jpg"
    },
    {
        id:"IT",
        name:"Income Tax",
        price: "BBD $50.00",
        photo: "Photos/IT.jpg"
    },
    {
        id:"PCOC",
        name:"Police Certificate of Character",
        price: "BBD $50.00",
        photo: "Photos/PCOC.jpg"
    },
    {
        id:"PIT",
        name:"Prison Inmate Top-Ups",
        price: "Price varies",
        photo: "Photos/usvisa.jpg"
    },
    {
        id:"EALI",
        name:"Employment Agency Local & International",
        price: "Price varies",
        photo: "Photos/usvisa.jpg"
    },
    {
        id:"IL",
        name:"Invitation Letters",
        price: "Price varies",
        photo: "Photos/usvisa.jpg"
    },
    {
        id:"DP",
        name:"Document Preparations",
        price: "Price varies",
        photo: "Photos/usvisa.jpg"
    },

]


const servicesBtns = document.querySelectorAll(".serviceBtn");

const serviceHeadingTitleContainer = document.querySelector(".serviceHeadingtitle-container");
const serviceHeadingTitle = document.querySelector(".serviceHeadingtitle");
const serviceHeadingPrice = document.querySelector(".servicesPrice");

const servicesContainer = document.querySelector(".services-container");

let index = 0;


setInterval(()=>{
    
    if (index == 2){
        index = 0;
    } else {
        index++;
    }
    serviceHeadingTitleContainer.style.backgroundImage = `url(${services[index].photo})`;
    serviceHeadingTitle.innerHTML = `${services[index].name}`;
    serviceHeadingPrice.innerHTML = `${services[index].price}`;

    
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
        serviceHeadingPrice.innerHTML = `${services[index].price}`;
    })
})

// console.log(services.length);

window.addEventListener("DOMContentLoaded", ()=>{
    services.forEach((e)=>{servicesContainer.innerHTML += ` <div class="service" id="${e.id}">
    <div class="servicesTitle-container">
        <h1 class="servicesTitle">
            ${e.name}
        </h1>
    </div>
    <div class="servicesPrice-container">
        <h2 class="servicesPrice">
            ${e.price}
        </h2>
    </div>
    <div class="servicesPayButton-container">
        <button class="servicesPayButton pay">
            pay now
        </button>
    </div>`;

    const item = document.getElementById(`${e.id}`);

    item.style.backgroundImage = `url(Photos/${e.id}.jpg`;

    item.style.backgroundSize = "cover"});
    
    const payBtn = document.querySelectorAll(".servicesPayButton");
    
    payBtn.forEach( btn => {
        btn.addEventListener("click", ()=>{
            window.localStorage.setItem("checkout", true);
            checkOutContainer.classList.remove("no-show");
        })
    })

    serviceHeadingTitleContainer.style.backgroundImage = `url(${services[0].photo})`;
    serviceHeadingTitle.innerHTML = `${services[0].name}`;
    serviceHeadingPrice.innerHTML = `${services[0].price}`;
});



