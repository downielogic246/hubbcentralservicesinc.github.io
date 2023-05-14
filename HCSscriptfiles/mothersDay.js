const closeMothersDay = document.querySelector(".mothersDayClose");

const mothersDay = document.querySelector("#mothersDay");


if(window.localStorage.mothersDay === 'false'){
    mothersDay.style.display = 'none';
}

closeMothersDay.addEventListener("click", ()=>{
    console.log("click");
    console.log(mothersDay);
    mothersDay.style.display = 'none';
    window.localStorage.setItem('mothersDay', false);
})

