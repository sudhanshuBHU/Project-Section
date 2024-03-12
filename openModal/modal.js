const modal=document.querySelector('.modal');
const overlay= document.querySelector('.overlay');

const open_modal=()=>{
    console.log("Modal is open");
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
}
const close_modal=()=>{
    console.log("Modal is close now");
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
}
const newwindow=()=>{
    window.open("https://www.linkedin.com/in/sudhanshu-shekhar-7979b2214/");
}