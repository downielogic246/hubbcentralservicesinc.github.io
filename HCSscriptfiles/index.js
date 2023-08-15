const slides = [
    {
        title: `<h1 class="title animate" style="margin: 0;">need to a job?</h1>`,
        quote: `<p class="main-direct animate">
            click here to see any jobs currently available internationally &
            regionally
          </p>`,
        photo: "Photos/jobs_large.jpg",
        link: `<a class="main-link animate" href="jobs.html">
            Click here to view
            <i class="fa-solid fa-long-arrow-right"></i>
          </a>`,
    }
    ,
    {
        title: `<h1 class="title animate" style="margin: 0; width: 100%">utility bill due?</h1>`,
        quote: `<p class="main-direct animate">
            click here to see all services provided
          </p>`,
        photo:"Photos/services_large.jpg",
        link: `<a class="main-link animate" href="services.html">
            Click here to view
            <i class="fa-solid fa-long-arrow-right"></i>
          </a>`,
        },
    {
        title: `<h1 class="title animate" style="margin: 0; width: 100%">need extra money?</h1>`,
        quote: `<p class="main-direct animate">
            click here to see all services provided
          </p>`,
        photo:"Photos/services_large.jpg",
        link: `<a class="main-link animate" href="services.html">
            Click here to view
            <i class="fa-solid fa-long-arrow-right"></i>
          </a>`,
        },
    {
        title: `<h1 class="title animate" style="margin: 0; width: 100%">join and benefit!</h1>`,
        quote: `<p class="main-direct animate">
            click here to see all membership plans
          </p>`,
        photo:"Photos/membership_large.jpg",
        link: `<a class="main-link animate" href="memberships.html">
            Click here to view
            <i class="fa-solid fa-long-arrow-right"></i>
          </a>`,
    }    
];

const slideshow_container = document.querySelector(".learn-container");

let current_slide = Math.floor(Math.random() * slides.length)


const setSlides = (slide) => {
    slideshow_container.innerHTML = `${slides[slide].title}
          ${slides[slide].quote}
          <br />
          ${slides[slide].link}`
}

window.addEventListener("DOMContentLoaded", () => {
    setSlides(current_slide);    
})

const mainTitle = document.querySelector(".title");

const mainRedirect = document.querySelector(".main-direct");

const mainLink = document.querySelector(".main-link");

const slide_nav = document.querySelectorAll(".slide-nav");

slide_nav.forEach((btn) => {
    btn.addEventListener(('click'), () => {
       if(btn.classList.contains('left-btn')){
            current_slide = current_slide === 0 ? slides.length - 1 : current_slide - 1;
       } else {
            current_slide = current_slide === slides.length - 1 ?  0 : current_slide + 1;
       }
       setSlides(current_slide);
    })
})