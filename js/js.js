const bntJuice = document.querySelector("#bnt-juice");
const texte = document.querySelector(".main-desc");
const kindly = document.querySelector("#kindly");

const closee = document.querySelector('.close');

function desJuice(){
    kindly.style.display="block";
}

function Closseer(){
    kindly.style.display="none";
}

bntJuice.addEventListener('click',(e)=>{
    e.preventDefault();
 
    desJuice();
})

closee.addEventListener('click',()=>{
    Closseer();
})