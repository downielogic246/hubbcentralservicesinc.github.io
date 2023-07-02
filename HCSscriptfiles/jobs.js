const vacancies = [
    {
        name: "Housemen",
        address: "USA",
        category: "Hospitality",
        responsibility: "Responsible for the overall sanitation and maintenance of the assigned premises.",
        role: `
        <li>Ensuring that grounds and the exterior workspaces are clean</li>
        <li>Maintaining household appliances and other tools in working order</li>
        <li>Raking gravel and leaves, jet spraying exterior walls and windowsills and other outdoor furniture</li>
        <li>Assiting to serve at dinners, looking after swimming pools, gyms and hot tubs</li>
        <li>Setting furniture and structures for parties and events</li>`
    },
    {
        name: "Housekeeper",
        address: "USA",
        category: "Home Care",
        responsibility: "Responsible for creating a clean and orderly environment of the house.",
        role: `<li>Perform a variety fo cleaning activities such as sweeping, mopping, dusting, and polishing</li>
                        <li>Ensuring all rooms are cared for and inspected according to standards</li>
                        <li>Protect equipment and make sure there are no inadequacies</li>
                        <li>Notify superiors on any damages, deficits and disturbances</li>
                        <li>Deal with reasonable complaints/requests with professionalism and patience</li>`
    },
    {
        name: "Laundry Attendant",
        address: "USA",
        category: "General Worker",        
        responsibility: "To support the functions of our establishment and the need of customers, playing a crucial role in the presentation of the establishment by ensuring all textiles are well cared for and maintained",
        role: `
                        <li>Sorting, washing, drying, pressing, and folding clothing and other textile items</li>
                        <li>Removing stains from items using the appropriate procedures</li>
                        <li>Performing minor sewing duties as needed</li>`
    },
    {
        name: "Labourer",
        address: "St. Micheal, Barbados",
        category: "Construction",
        responsibility: "Responsible for various supporting tasks in warehouses, construction sites or other similar settings.",
        role: `<li>Cleaning up worksites</li>
                <li>Helping erect scaffolding</li>
                <li>Handling materials</li>
                <li>Transporting materials</li>`
    },
    {
        name: "Housekeeper",
        address: "St.Lucy, Barbados",
        category: "Home Care",
        responsibility: "Responsible for creating a clean and orderly environment of the house.",
        role: `<li>Perform a variety fo cleaning activities such as sweeping, mopping, dusting, and polishing</li>
                        <li>Ensuring all rooms are cared for and inspected according to standards</li>
                        <li>Protect equipment and make sure there are no inadequacies</li>
                        <li>Notify superiors on any damages, deficits and disturbances</li>
                        <li>Deal with reasonable complaints/requests with professionalism and patience</li>`
    },
    {
        name: "Babysitting",
        address: "Colindale, Egdware, UK",
        category: "Child Care",
        responsibility: "Responsible for the care of a child.",
        role: `<li>Ensuring child safety</li>
                        <li>Preparing meals and snacks</li>
                        <li>Helping with homework</li>
                        <li>Changing diapers</li>
                        <li>Landry and light housework</li>`
    },
]

function loadAll(a){
        jobContainer.innerHTML +=  `<button class="job" title="Apply Now">
                <h1 class="job-listingTitle">
                    ${vacancies[a].name}
                </h1>
                <h2 class="job-listingTitleInstructions">
                    Location: ${vacancies[a].address}
                </h2>
                
                <h3 style="display: none">
                    ${vacancies[a].role}
                </h3>
                <h3 style="display: none">
                    ${vacancies[a].responsibility}
                </h3>
            </button>`
}

function displayApplicationForm(){
    const careers = document.querySelectorAll(".job");
    
    careers.forEach( career =>{
    career.addEventListener("click", ()=>{
            careerContainer.style.top = 0;
            
            careerContainer.childNodes[3].childNodes[1].innerHTML = career.childNodes[1].innerHTML;

            careerContainer.childNodes[3].childNodes[3].innerHTML = career.childNodes[3].innerHTML;

            careerContainer.childNodes[3].childNodes[5].childNodes[5].innerHTML = career.childNodes[7].innerHTML;

            careerContainer.childNodes[3].childNodes[7].childNodes[5].childNodes[1].innerHTML = career.childNodes[5].innerHTML;
         })
     })
}

const careerContainer = document.querySelector(".jobDesc");

const  closeApplicationForm = document.querySelector(".closeApplicationForm");
const btns = document.querySelectorAll(".btn");
const jobContainer = document.querySelector(".job-listingContainer");
const filterBtn = document.querySelector(".filterBtn");
const filterClose = document.querySelector(".filterClose");
const filterContent = document.querySelector(".btnContainer");
const applyBtn = document.querySelector(".applyNow");
const applyForm = document.querySelector(".applyForm");
// const closeApply = document.querySelector(".closeApply");
const subjectOfEmail = document.getElementById("subject");
const careerTitle = document.querySelector(".careerTitle");


btns.forEach( btn => {
    btn.addEventListener("click", ()=>{
        let available = false;
    
        jobContainer.innerHTML = ``;
        const filter = btn.dataset.industry;
        for( let i = 0; i < vacancies.length ; i++){
            let vacancy = vacancies[i].category;
            if ( filter === vacancy ){
                available = true;
                loadAll(i);
            }
        }
    
        if ( available == false && filter !== "all"){
            jobContainer.innerHTML = `<article class="availability">
                No jobs are currently available for this industry.
                </article>` 
        }
    
        if ( available == false && filter === "all"){
            for(let i = 0; i < vacancies.length; i++){
    
                loadAll(i);
            }
        }
        displayApplicationForm();
    })
});

applyBtn.addEventListener("click", ()=>{
    applyForm.style.display = "flex";
    subjectOfEmail.value = `Application Submission for ${careerTitle.textContent}`

})

// closeApply.addEventListener("click", ()=>{
//     applyForm.style.display = "none";
// })

closeApplicationForm.addEventListener("click", ()=>{
    careerContainer.style.top = "-120%";
    applyForm.style.display = "none";
})

filterBtn.addEventListener("click", () => {
    filterContent.style.display = "flex";
    filterContent.style.top = "20vh";
})

filterClose.addEventListener("click", () => {
    filterContent.style.display = "none";
    filterContent.style.top = "-120%";
})


window.addEventListener("DOMContentLoaded",() =>{
    
    // console.log(career.childNodes[3].innerHTML)
    
    for (index = 0; index < vacancies.length ; index++){
        loadAll(index);
    }
   
displayApplicationForm();

});











