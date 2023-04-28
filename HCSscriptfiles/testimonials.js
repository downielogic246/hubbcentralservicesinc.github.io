const reviews = [
    {
        name: "Jack Smith",
        comment: "yabba bddsifhdufduhfaufhausdfdubadfhab sdfhhsfusn suhsduf hshf s",
    },
    {
        name: "Paul Duder",
        comment: "fsfwf arg zfgshtebtyjtuk ry jdj  jfhj usf shj dyjwy",
    },
    {
        name: "John Johnson",
        comment: "rgergsth sthsrthergcasfhsstvh th athsghst hh wrth sthxgnr6jy jajsrj",
    },
    {
        name: "Jaden Seal",
        comment: "rgergsth sthsrthergcasfhsstvh th athsghst hh wrth sthxgnr6jy jajsrj",
    },
    {
        name: "Jaxson Jackson",
        comment: "rgergsth sthsrthergcasfhsstvh th athsghst hh wrth sthxgnr6jy jajsrj",
    },
    {
        name: "Kyle Woodland",
        comment: "rgergsth sthsrthergcasfhsstvh th athsghst hh wrth sthxgnr6jy jajsrj",
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
