import './style.css'


let pass = document.getElementById("pass");
let show = document.getElementById("show");
let hide = document.getElementById("hide");


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