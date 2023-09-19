const reviews = [
    {
        name: "Xolani Jemmott",
        comment: "Hubb Central Services Inc. has a lot to consider. They have a lot of options to choose from that can definitely be useful to the average citizen.",
    },
    {
        name: "Unknown",
        comment: "I have received 3 local jobs with Recruiting Hubb, worked in the USA twice and now in the UK. </br></br></br>It is a privilege that I thank them for my success at this point especially when I was at the lowest with depression, doubt and even feeling to kill myself...</br></br></br>You see Sherry, you all see Sherry, people talk smack and try to bring her down and her business and staff daily but had not for her I would not be here writing this, I WOULD'VE BEEN DEAD. I started to be so weak and she was a strong pillar for me, even at hours that she should have been not available, she was.</br></br></br>Sherry, I thank you and will always blow the trumpets for Recruiting Hubb.",
    },
    {
        name: "JC",
        comment: "My experience with Recruiting Hubb is a testimony I need to speak of. </br></br></br> From the very beginning myself and everyone around me thought and said it's a scam, these people frauding people out their hard earned money, so I sat back and watched. Eventually I decided I will call and hear what it was all about.</br></br></br> Boy oh boy, heard all the explanations, about the fees etc...etc...in my mind I said stupse, not me and I said okay and hung up. But I still had something telling me to try and go long and short I did. Even though the process was long, and I got to understand why even more so now I'm here in the UK, it really is not the agencies fault but due to the changes being made in the UK.</br></br></br>I want to publicly apologize to the Recruiting Hubb Team  for my disrespect and behaviour, my words and spreading information due to vexation and impatience. I listened and read persons pulling down this organization and I too was one but eventhough I literally cussed them, they still never gave a bad work to the Employer about me and I'm truly thankfull because now I'm in the UK doing what I love because of Sherry and the Recruiting Hubb Team.</br></br></br>Again, my humblest apologies and continue to do what you are doing to help us Caribbean people.",
    },
    {
        name: "Unknown",
        comment: "I wanted to find a different environment, a new start and I decided to try Recruting Hubb's program.</br>Just like many others, I thought of scam, fraud even human trafficking loookkkkkk so many things went through my head.</br></br></br>Then it was would I risk being in Canada, UK or USA. Decisions, decisions...</br></br></br> I chose Canada, paid the money and then was given information to contact a lady, then I felt like man this ain't for me so I askedback for my money was given the 101 rules and regulations about refunds etc...anyhow I got it back but still wanted to go so I went back and Sherry said she will notbe taking the money...'like how she mean?' so I got pissed and annoyed, she started tell me sit back, watch the process of others and then make a decision if I really wanted to because she will not accept my money if I'm doubtful, that alone made me trust heighten because in my mind, if this woman or place was a scam or fraud they would've bound and take my money.</br></br></br> These people stake me out with my money I wanted to pay for near 3 months, eventually I called again and after a discussion they accepted it.",
    },
    {
        name: "Ali",
        comment: "People I'm in Canada now working along with my friend who came just after me and it's going very good. </br></br></br>This testimony is from both of us as we experienced the process.</br></br> </br> Hubb, please keep up the good work and don't let anyone stop you guys.</br></br></br>There's always 3 sides to a story so when people posting negativity, there's always another side that has not been heard.</br></br> </br> Be patient and don't jump on the band wagon or take up fire rage. </br></br></br>Already working for CAD $2,500.00 and initially started at CAD $2,000.00. </br></br></br> Keep letting the negative fools get in your head, you'll be stuck without trying something for yourself or knowning what other gains for you.</br></br></br>MY TRUE TESTIMONY.",
    },

]

let index = 1;
const desc = document.getElementById("info");
const reviewName = document.getElementById("review-name");

window.addEventListener("DOMContentLoaded", ()=>{
    desc.innerHTML = reviews[0].comment;
    reviewName.innerHTML = reviews[0].name;
})

// const reviewBtns = document.querySelectorAll(".reviewBtn");

// reviewBtns.forEach(btn => {
//     btn.addEventListener("click", ()=>{
//         if( btn.classList.contains("left")){
//             index--;
//         } else if ( btn.classList.contains("right")){
//             index++;
//         }

//         if (index < 0){
//             index = reviews.length - 1;
//         } 
        
//         if(index == reviews.length) {
//             index = 0;
//         }

//         desc.innerHTML = reviews[index].comment;
//         reviewName.innerHTML = reviews[index].name;
//     })
// })

setInterval(()=>{
        index++;
        
        if (index < 0){
            index = reviews.length - 1;
        } 
        
        if(index == reviews.length) {
            index = 0;
        }

        desc.innerHTML = reviews[index].comment;
        reviewName.innerHTML = reviews[index].name;
}, 30000)