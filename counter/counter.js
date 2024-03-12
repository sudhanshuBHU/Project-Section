const content=document.querySelector('.num');

const increment =()=>{
    let value=parseInt(content.innerText);
    value++;
    content.innerText=value;
}
const decrement=()=>{
    let value=parseInt(content.innerText);
    value--;
    content.innerText=value;
}

