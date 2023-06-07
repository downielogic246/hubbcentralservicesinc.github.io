const about = [
    {
        id: "history",
        section: "first",
        heading: "who we are",
        desc: `Success is our destination.  
        <br>`,
        photo: `<img class="img-about" src="Photos/HCS_building.jpeg" alt="Hubb Central Services Staff">`
    },
    {
        id: "staff",
        section: "second",
        heading: "this is us",
        desc: `This is our staff.
        <br>`,
        photo:`<img class="img-about" src="Photos/staff_smaller.jpeg" alt="Hubb Central Services Staff">`
    }
]

const aboutUs = document.querySelector(".aboutus-infoContainer");

const navHeight = document.querySelector(".nav-container").getBoundingClientRect().bottom;

const headings = document.querySelector(".aboutusHeading");

const description = document.querySelector(".aboutusDescription");

const image = document.querySelector(".aboutus-img");

const learnMore = document.querySelector(".learnbtnContainer");

const btns = document.querySelectorAll(".Btn");

const subAreas = document.querySelectorAll(".sub-area");

let position = 0;

function createLearnMoreLink(arr){
    const link = document.createElement('a');
    
    link.setAttribute('href',`#${arr[position].id}`);

    link.innerHTML = "learn more";

    link.classList.add("learnMore");
    
    link.setAttribute('id', `${arr[position].section}`)
    learnMore.appendChild(link);
}

function fillAboutUs(arr, i){
    headings.innerHTML = arr[i].heading;

    description.innerHTML = arr[i].desc

    image.innerHTML = arr[i].photo;

    createLearnMoreLink(arr);

}

function goTo(element){
    subAreas.forEach(area => {
        if ( area.getAttribute('id') == about[position].id){
            let elementTop = area.getBoundingClientRect().top;
            console.log(elementTop);

            let top = elementTop - navHeight;
            console.log(top);

            scrollBy(0, top);
        }
    })
 }

window.addEventListener("load", ()=>{
    
    fillAboutUs(about,position);

    const link = learnMore.firstElementChild;

    link.addEventListener("click", (e) => {
        e.preventDefault();
        goTo(link);
        console.log(link.getAttribute('id'))
    })    
});

btns.forEach(btn => {
    btn.addEventListener("click", () =>{
        // console.log(btn);
        let removed = document.getElementById(about[position].section);

            if ( position === 0){
                
                position++;
            } else {
                position--;
            }
            
            fillAboutUs(about,position);

            learnMore.removeChild(removed);
            
            const link = learnMore.firstElementChild;

            link.addEventListener("click", (e) => {
                e.preventDefault();
                goTo(link);
            });
    })
});