const backtop = document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth" 
    });
})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const slidebtn = document.querySelector(".second-1");

slidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
})

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
})

const sign = document.querySelector(".ac");
const trl = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    trl.classList.toggle("active");
})