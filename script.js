/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

});

/* MOBILE MENU */

const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

nav.classList.toggle("active");

});

/* DARK MODE */

const themeBtn=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"theme",

document.body.classList.contains("dark")
? "dark"
: "light"

);

});

/* BACK TO TOP */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* SCROLL REVEAL */

const reveals=document.querySelectorAll("section,.card");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

item.classList.add("reveal");

}

});

});

/* STICKY NAVBAR */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.8)";

}else{

header.style.background="rgba(255,255,255,.15)";

}

});

/* ORDER MODAL */

const modal=document.getElementById("orderModal");

const orderBtn=document.getElementById("orderBtn");

const closeBtn=document.querySelector(".close");

orderBtn.onclick=()=>{

modal.style.display="flex";

}

closeBtn.onclick=()=>{

modal.style.display="none";

}

/* CONTACT VALIDATION */

const form=document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;

if(name==="" || email===""){

alert("Please fill all fields");

return;

}

alert("Message Sent!");

form.reset();

});

/* TYPING EFFECT */

const text="Fresh Coffee Every Morning";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typingText").innerHTML += text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();