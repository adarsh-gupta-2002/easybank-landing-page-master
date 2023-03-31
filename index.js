

const header = document.querySelector('.header')
const menuBtn = document.querySelector('.menu-btn')
const open = document.getElementById('open')
const close = document.getElementById('close')
 
  
open.addEventListener('click' , ()=>{
    console.log('clicked')
    header.classList.toggle('menu-open')

})