const reviews = [
    {
        name: "Xolani Jemmott",
        comment: "Hubb Central Services Inc. has a lot to consider. They have a lot of options to choose from that can definitely be useful to the average citizen.",
    },
]

let index = 1;
const desc = document.getElementById("info");
const reviewName = document.getElementById("review-name");

window.addEventListener("DOMContentLoaded", ()=>{
    desc.innerHTML = reviews[0].comment;
    reviewName.innerHTML = reviews[0].name;
})

const reviewBtns = document.querySelectorAll(".reviewBtn");

reviewBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if( btn.classList.contains("left")){
            index--;
        } else if ( btn.classList.contains("right")){
            index++;
        }

        if (index < 0){
            index = reviews.length - 1;
        } 
        
        if(index == reviews.length) {
            index = 0;
        }

        desc.innerHTML = reviews[index].comment;
        reviewName.innerHTML = reviews[index].name;
    })
})
