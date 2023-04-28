const slides = [
    {
        title: "need a job?",
        quote: "click here to see any jobs currently available internationally & regionally",
        photo: "/HubbCentralServices/Photos/jobs_large.jpg",
        link: `<i class="fa-sharp fa-solid fa-link"></i>
        jobs`
    }
    ,
    {
        title: "utility bill due?",
        quote: "click here",
        photo:"/HubbCentralServices/Photos/services_large.jpg",
        link: `<i class="fa-sharp fa-solid fa-link"></i>
        services`
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
    mainRedirect.innerHTML = slides[i].quote;

    console.log("changed.");
    i++;
    if ( i == 2 ){
        i = 0;
    }    
}, 5000);