import './style.css'

let validate;

let passregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

let pass = document.getElementById("pass");
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let name = document.querySelector('#name');
let form = document.querySelector('#form');
let errorname = document.querySelector('#errorname');
let errorpass = document.querySelector('#errorpass');

show.addEventListener("click", () => {
  pass.type = "text";
  show.classList.add("hidden");
  hide.classList.remove("hidden");
 
});

hide.addEventListener("click", () => {
  pass.type = "password";
  hide.classList.add("hidden");
  show.classList.remove("hidden");
  
});



form.addEventListener("submit",function(e){
 e.preventDefault();

validate = true;


if ( name.value.trim() === ""){
errorname.classList.remove("hidden");
errorname.textContent="please enter the name ";
validate = false;
}
else{
    errorname.classList.add("hidden");

}

if ( pass.value.trim() === ""){
errorpass.classList.remove("hidden");
errorpass.textContent="please enter the password ";
 show.classList.remove("top-1/2");
 hide.classList.remove ("top-1/2");
 show.classList.add("top-[52%]");
 hide.classList.add("top-[52%]");
validate = false;
}
else if(!passregx.test(pass.value)){
errorpass.classList.remove("hidden");
errorpass.textContent="please enter the valid password ";
validate = false;
}
else{
    errorpass.classList.add("hidden");

}








})