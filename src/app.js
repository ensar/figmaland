let openBtn=document.querySelector(".openMenuBtn")
let closeBtn=document.querySelector(".closeMenuBtn")
let menu=document.querySelector(".menu")

openBtn.addEventListener("click",()=>{
    menu.classList.remove("-translate-x-full")
})

closeBtn.addEventListener("click",()=>{
    menu.classList.add("-translate-x-full")
})