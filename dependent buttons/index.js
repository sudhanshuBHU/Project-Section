const toggle1 = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');
const toggle3= document.getElementById( 'toggle3' );
function getRandom(){
    let value=Math.random();
    if(value<0.5) return 1;
    else return 2;
}
toggle1.addEventListener('change',function(){
     if(toggle2.checked==true && toggle3.checked==true){
        let value=getRandom();
        switch (value) {
            case 1:
                toggle2.checked=false;
                break;
            case 2:
                toggle3.checked=false;
                break;
        }
     }
});
toggle2.addEventListener('change',function(){
    if(toggle1.checked==true && toggle3.checked==true){
        let value=getRandom();
        switch (value) {
            case 1:
                toggle1.checked=false;
                break;
            case 2:
                toggle3.checked=false;
                break;
        }
     }
});
toggle3.addEventListener('change',function(){
    if(toggle1.checked==true && toggle2.checked==true){
        let value=getRandom();
        switch (value) {
            case 1:
                toggle1.checked=false;
                break;
            case 2:
                toggle2.checked=false;
                break;
        }
     }
});

let button=document.querySelector(".button");
function pri(event){
    let ele=document.createElement('p').textContent='Javascript insertAdjacentHTML afterEnd.';
    button.insertAdjacentHTML("afterEnd",ele);
}
button.addEventListener('click',pri);