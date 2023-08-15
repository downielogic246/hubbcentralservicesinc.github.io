const slides = [
    {
        title: "need a job?",
        quote: "click here to see any jobs currently available internationally & regionally",
        photo: "Photos/jobs_large.jpg",
        link: `Click here to view
          <i class="fa-solid fa-long-arrow-right"></i>`,
        address: "jobs.html"
    }
    ,
    {
        title: "utility bill due?",
        quote: "click here to see all services provided",
        photo:"Photos/services_large.jpg",
        link: `Click here to view
          <i class="fa-solid fa-long-arrow-right"></i>`,
        address: "services.html",
    }    
];

const slideshow = document.querySelector(".main-area");

const mainTitle = document.querySelector(".title");

const mainRedirect = document.querySelector(".main-direct");

const mainLink = document.querySelector(".main-link");

let i = 1;

setInterval(() => {
    slideshow.style.backgroundImage = "url(" + slides[i].photo + ")";
    mainTitle.innerHTML = slides[i].title;
    mainLink.innerHTML = slides[i].link;
    mainLink.href = slides[i].address;
    mainRedirect.innerHTML = slides[i].quote;

    i++;
    if ( i == 2 ){
        i = 0;
    }

}, 5000);