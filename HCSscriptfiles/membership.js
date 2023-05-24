const small_services = [
    "Circulation of CV/Resume to employers",
    "Free 1/2 hour interview clinic",
    "Police Certificate of Character",
    "Free Tamis Number",
    "Free Workshop experience for one family member or friend",
    "1 month advertising for a business owned",
    "Free CV Revamp"
]

const bronzeLink = "";
const silverLink = "";
const goldLink = "";
const platLink = "";


const selectBtn = document.querySelectorAll(".selectBtn");
const smallBtn = document.querySelectorAll(".small");
const closeMember = document.querySelector(".closeMember");
const memberContainerForSmall = document.querySelector(".memberInfo-container");
const memberTitle = document.querySelector(".memberInfo-title");
const memberServices = document.querySelector(".memberInfo-services");
const payOnline = document.querySelector(".online");
// console.log(subjectOfEmail.value)

const checkMark = `<i class="fa-solid fa-check"></i> `;

selectBtn.forEach( btn => {
    btn.addEventListener("click", (e)=>{
        window.localStorage.setItem("checkout", true);
        checkOutContainer.classList.remove("no-show");

        if (btn.parentNode.classList.contains("platinum")){
            payOnline.href = platLink;
        } else if (btn.parentNode.classList.contains("silver")){
            payOnline.href = silverLink;
        } else if (btn.parentNode.classList.contains("gold")){
            payOnline.href = goldLink;
        } else if (btn.parentNode.classList.contains("bronze")){
            payOnline.href = bronzeLink;
        };

        if( e.target.classList.contains("memberInfo-select") ){
            closeMember.click();
        }
    })
})

smallBtn.forEach( btn => {
    btn.addEventListener("click", ()=>{
        
        memberContainerForSmall.classList.remove("no-show");

        if ( btn.classList.contains("b")){
            memberContainerForSmall.style.backgroundColor = `#cd8032`;
            memberServices.innerHTML = `<li>${checkMark}${small_services[0]}</li>
            <li>${checkMark}${small_services[1]}</li>`;
            payOnline.href = bronzeLink;
        } else if ( btn.classList.contains("s")){
            memberContainerForSmall.style.backgroundColor = `#C0c0c0`;
            memberServices.innerHTML = `<li>${checkMark}${small_services[0]}</li>
            <li>${checkMark}${small_services[1]}</li>
            <li>${checkMark}${small_services[2]}</li>`;
            payOnline.href = silverLink;
        } else if ( btn.classList.contains("g")){
            memberContainerForSmall.style.backgroundColor = `#d6b600`;
            memberServices.innerHTML = `<li>${checkMark}${small_services[0]}</li>
            <li>${checkMark}${small_services[1]}</li>
            <li>${checkMark}${small_services[2]}</li>
            <li>${checkMark}${small_services[3]}</li>
            <li>${checkMark}${small_services[4]}</li>`;            
            payOnline.href = goldLink;
        } else if ( btn.classList.contains("p")){
            memberContainerForSmall.style.backgroundColor = `#48BEFF`;
            memberServices.innerHTML = `<li>${checkMark}${small_services[0]}</li>
            <li>${checkMark}${small_services[1]}</li>
            <li>${checkMark}${small_services[2]}</li>
            <li>${checkMark}${small_services[3]}</li>
            <li>${checkMark}${small_services[4]}</li>
            <li>${checkMark}${small_services[5]}</li>
            <li>${checkMark}${small_services[6]}</li>`;
            payOnline.href = platLink;
        }

        memberTitle.innerHTML = btn.childNodes[1].innerHTML;

    })
})

closeMember.addEventListener("click", ()=>{
    memberContainerForSmall.classList.add("no-show");
})



