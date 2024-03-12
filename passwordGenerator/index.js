const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById('number');
const special = document.getElementById('special');
const slider = document.getElementById('slider');
const outputlength = document.getElementById('outputlength');
const strenghtBar = document.getElementById('strenghtBar');
const passwordOutput = document.getElementById('password');

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const specials = "@#$%^!&*()-+:";
const allChars = upper + lower + nums + specials;
var arr = document.getElementsByClassName('box');
// slider.oninput=function(){
//     outputlength.innerHTML=this.value;
// }
passwordOutput.innerHTML = "PASSWORD";
outputlength.innerHTML = slider.value;
strenghtBar.setAttribute("value", 1);
slider.addEventListener("input", showLength);
function showLength() {
    outputlength.innerHTML = slider.value;
    // let val= setProgess();
    strenghtBar.setAttribute("value", setProgess());
}
function setProgess() {

    if (slider.value >= 15) return 3;
    else if (slider.value >= 8) return 2;
    else if (slider.value >= 6) return 1;
    else return 0;
}
function generate() {
    // console.log('hello');
    // passwordOutput.setAttribute("value",makePassword());
    let len = slider.value;
    let pass = "";
    let c = 0;
    if (!arr[0].checked && !arr[1].checked && !arr[2].checked && !arr[3].checked) {
        // if (arr[0].checked==false && arr[1].checked==false && arr[2].checked==false && arr[3].checked==false) {
        for (let i = 0; i < len; i++)
            pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    } else {
        while (c < len) {
            let x = Math.floor(Math.random() * 4);
            if (arr[x].id == "uppercase" && uppercase.checked) {
                pass += upper.charAt(Math.floor(Math.random() * upper.length));
                c++;
            }
            else if (arr[x].id == "lowercase" && lowercase.checked) {
                pass += lower.charAt(Math.floor(Math.random() * lower.length));
                c++;
            }
            else if (arr[x].id == "number" && number.checked) {
                pass += nums.charAt(Math.floor(Math.random() * nums.length));
                c++;
            }
            else if (arr[x].id == "special" && special.checked) {
                pass += specials.charAt(Math.floor(Math.random() * specials.length));
                c++;
            }
        }
    }
    // passwordOutput.setAttribute("value", pass);
    passwordOutput.innerHTML = pass;
}
let anshu = document.querySelector(".wrapper");
let para=document.createElement("P");
para.textContent="By Sudhanshu Shekhar from BHU";
anshu.appendChild(para);

function copyf() {
    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);
    document.getElementById('copiedMsg').style.display = "block";
    setTimeout(() => { document.getElementById('copiedMsg').style.display = "none"; }
        , 2000);
}
function reset() {
    passwordOutput.innerHTML = "PASSWORD";
    outputlength.innerHTML = 6;
    arr[0].checked = false;
    arr[1].checked = false;
    arr[2].checked = false;
    arr[3].checked = false;
    slider.value = '6';
    strenghtBar.setAttribute("value", 1);
}

let shadow = document.querySelector("#mouseShadow");
const m_shadow = function (event) {
    shadow.style.top = event.pageY + 'px';
    shadow.style.left = event.pageX + 'px';
}

document.querySelector("body").onload = function () {
    this.addEventListener("mousemove", m_shadow);
}
// document.body.innerHTML="Sudhanshu Shekhar";
