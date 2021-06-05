//jshint esversion:6

let darkMode = localStorage.getItem("darkmode");

const rightNavbar = document.querySelector('.right-navbar');
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".left-navbar-header");
const inputSearch = document.querySelector(".input-column");
const inputSelect = document.querySelector(".input-select");
const countryContainer = document.querySelectorAll(".country");
const backButton = document.querySelector(".backButton");


var tracker = 1;


function enabledDarkMode(){
  rightNavbar.classList.add("black");
  body.classList.add("white-background");
  navbar.classList.add("white-background");
  header.classList.add("black");
  try{
    inputSearch.classList.add("white-shadow");
    inputSearch.classList.add("black");
    inputSearch.classList.add("input-column-black-placeholder");
    inputSelect.classList.add("white-shadow");
    inputSelect.classList.add("black");
    }
    catch(e){
    }
    try{
      backButton.classList.add("white-shadow");
      backButton.classList.add("black");
    }
    catch(e){
    }

  for(let i = 0; i< countryContainer.length; i++){
    countryContainer[i].classList.add("white-background");
    countryContainer[i].classList.add("black");
    countryContainer[i].classList.add("shadow");
  }
  localStorage.setItem("darkmode", "enabled");
  tracker = 1;
}


function disabledDarkMode(){
  rightNavbar.classList.remove("black");
  body.classList.remove("white-background");
  navbar.classList.remove("white-background");
  header.classList.remove("black");
  try{
    inputSearch.classList.remove("white-shadow");
    inputSearch.classList.remove("black");
    inputSearch.classList.remove("input-column-black-placeholder");
    inputSelect.classList.remove("white-shadow");
    inputSelect.classList.remove("black");
  }
  catch(e){
  }

  try{
    backButton.classList.remove("white-background");
    backButton.classList.remove("black");
  }
  catch(e){

  }

  for(let i = 0; i< countryContainer.length; i++){
    countryContainer[i].classList.remove("white-background");
    countryContainer[i].classList.remove("black");
    countryContainer[i].classList.remove("shadow");
  }
  localStorage.setItem("darkmode", "disabled");
  tracker = 0;
}



if(darkMode === "enabled"){
  enabledDarkMode();
}
else{
  disabledDarkMode();
}



rightNavbar.addEventListener("click", function(){
  darkMode = localStorage.getItem("darkmode");
  if(tracker === 1){
    disabledDarkMode();
  }
  else{
    enabledDarkMode();

  }
});
