const vacancies = [
    {
        name: "Housemen",
        address: "USA",
        category: "industrial",
        responsibility: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam voluptatem ipsum laborum nostrum sed odio! Obcaecati aliquid earum reprehenderit ullam, molestias minima libero unde quaerat iusto ex ipsam nemo a debitis, distinctio mollitia expedita? Soluta omnis necessitatibus praesentium facilis rem adipisci ex laboriosam quae numquam inventore in eum accusantium quidem, velit eos, deserunt doloribus. Laborum praesentium enim deserunt, distinctio, labore sint soluta quisquam possimus, at dolorum adipisci? Quia aliquam aut inventore libero placeat facilis beatae modi, recusandae quam, eligendi amet numquam, voluptas corporis nobis sint ipsam quos porro harum delectus iusto soluta! Quaerat, at dolores ab perspiciatis reiciendis totam!",
        role: `
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>`
    },
    {
        name: "Housekeeper",
        address: "USA",
        category: "health",
        responsibility: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam voluptatem ipsum laborum nostrum sed odio! Obcaecati aliquid earum reprehenderit ullam, molestias minima libero unde quaerat iusto ex ipsam nemo a debitis, distinctio mollitia expedita? Soluta omnis necessitatibus praesentium facilis rem adipisci ex laboriosam quae numquam inventore in eum accusantium quidem, velit eos, deserunt doloribus. Laborum praesentium enim deserunt, distinctio, labore sint soluta quisquam possimus, at dolorum adipisci? Quia aliquam aut inventore libero placeat facilis beatae modi, recusandae quam, eligendi amet numquam, voluptas corporis nobis sint ipsam quos porro harum delectus iusto soluta! Quaerat, at dolores ab perspiciatis reiciendis totam!",
        role: `                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>`
    },
    {
        name: "Laundry Attendant",
        address: "USA",
        category: "industrial",        
        responsibility: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam voluptatem ipsum laborum nostrum sed odio! Obcaecati aliquid earum reprehenderit ullam, molestias minima libero unde quaerat iusto ex ipsam nemo a debitis, distinctio mollitia expedita? Soluta omnis necessitatibus praesentium facilis rem adipisci ex laboriosam quae numquam inventore in eum accusantium quidem, velit eos, deserunt doloribus. Laborum praesentium enim deserunt, distinctio, labore sint soluta quisquam possimus, at dolorum adipisci? Quia aliquam aut inventore libero placeat facilis beatae modi, recusandae quam, eligendi amet numquam, voluptas corporis nobis sint ipsam quos porro harum delectus iusto soluta! Quaerat, at dolores ab perspiciatis reiciendis totam!",
        role: `
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>`
    },
    {
        name: "Labourer",
        address: "St. Micheal, Barbados",
        category: "finance",
        responsibility: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam voluptatem ipsum laborum nostrum sed odio! Obcaecati aliquid earum reprehenderit ullam, molestias minima libero unde quaerat iusto ex ipsam nemo a debitis, distinctio mollitia expedita? Soluta omnis necessitatibus praesentium facilis rem adipisci ex laboriosam quae numquam inventore in eum accusantium quidem, velit eos, deserunt doloribus. Laborum praesentium enim deserunt, distinctio, labore sint soluta quisquam possimus, at dolorum adipisci? Quia aliquam aut inventore libero placeat facilis beatae modi, recusandae quam, eligendi amet numquam, voluptas corporis nobis sint ipsam quos porro harum delectus iusto soluta! Quaerat, at dolores ab perspiciatis reiciendis totam!",
        role: `
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>`
    },
    {
        name: "Housekeepers",
        address: "St.Lucy, Barbados",
        category: "fashion",
        responsibility: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam voluptatem ipsum laborum nostrum sed odio! Obcaecati aliquid earum reprehenderit ullam, molestias minima libero unde quaerat iusto ex ipsam nemo a debitis, distinctio mollitia expedita? Soluta omnis necessitatibus praesentium facilis rem adipisci ex laboriosam quae numquam inventore in eum accusantium quidem, velit eos, deserunt doloribus. Laborum praesentium enim deserunt, distinctio, labore sint soluta quisquam possimus, at dolorum adipisci? Quia aliquam aut inventore libero placeat facilis beatae modi, recusandae quam, eligendi amet numquam, voluptas corporis nobis sint ipsam quos porro harum delectus iusto soluta! Quaerat, at dolores ab perspiciatis reiciendis totam!",
        role: `
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>    `
    },
    {
        name: "Babysitting",
        address: "Colindale, Egdware, UK",
        category: "health",
        responsibility: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam voluptatem ipsum laborum nostrum sed odio! Obcaecati aliquid earum reprehenderit ullam, molestias minima libero unde quaerat iusto ex ipsam nemo a debitis, distinctio mollitia expedita? Soluta omnis necessitatibus praesentium facilis rem adipisci ex laboriosam quae numquam inventore in eum accusantium quidem, velit eos, deserunt doloribus. Laborum praesentium enim deserunt, distinctio, labore sint soluta quisquam possimus, at dolorum adipisci? Quia aliquam aut inventore libero placeat facilis beatae modi, recusandae quam, eligendi amet numquam, voluptas corporis nobis sint ipsam quos porro harum delectus iusto soluta! Quaerat, at dolores ab perspiciatis reiciendis totam!",
        role: `<li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit.</li>`
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
const closeApply = document.querySelector(".closeApply");
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

closeApply.addEventListener("click", ()=>{
    applyForm.style.display = "none";
})

closeApplicationForm.addEventListener("click", ()=>{
    careerContainer.style.top = "-120%";
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











