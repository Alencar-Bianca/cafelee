/*BOTÃO*/
const bntJuice = document.querySelector("#bnt-juice");
const bntShake = document.querySelector("#bnt-shake");
const bntTrilofy = document.querySelector("#bnt-trilofy");
const bntCo = document.querySelector("#bntCo");
/*DIV*/
const kindly = document.querySelector("#kindly");
const shake = document.querySelector("#shake");
const trilofy = document.querySelector("#trilofy");
const co = document.querySelector("#co");

/*CLOSER*/
const closeKindly = document.querySelector('#closeKindly');
const closeShake = document.querySelector('#closeShake');
const closeTrilofy = document.querySelector("#closeTrilofy");
const closeCo = document.querySelector("#closeCo");

/************************************************************************** */
/* JUICE */
function desJuice(){
    kindly.style.display="block";
}
bntJuice.addEventListener('click',(e)=>{
    e.preventDefault();
    desJuice();
})

function closeK(){
    kindly.style.display="none";
}
closeKindly.addEventListener('click',()=>{
    closeK();
    
})
/************************************************************************** */
/*SHAKE */
function desShake(){
    shake.style.display="block";
}
bntShake.addEventListener('click',(e)=>{
    e.preventDefault();
    desShake();
})
function closeS(){
    shake.style.display="none";
}
closeShake.addEventListener('click',()=>{
    closeS();
})
/************************************************************************** */
/*Trilofy */
function desTrilofy(){
    trilofy.style.display = "block";
}
bntTrilofy.addEventListener("click", (e)=>{
    e.preventDefault();
    desTrilofy()
})

function closeT(){
    trilofy.style.display = "none";
}
closeTrilofy.addEventListener("click", ()=>{
    closeT();
})
/************************************************************************** */
/*Co */
function desCo(){
    co.style.display = "block";
}
bntCo.addEventListener("click",(e)=>{
    e.preventDefault();
    desCo()
})

function closeC(){
    co.style.display = "none";
}
closeCo.addEventListener("click",()=>{
    closeC();
})
/************************************************************************* */
/*MENU */
const bntMenu = document.querySelector(".NabMobile");

function toggleMenu(){
    const bntMenu = document.querySelector(".mobile");
    bntMenu.classList.toggle('active')
}

bntMenu.addEventListener('click',toggleMenu);