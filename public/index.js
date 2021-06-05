//jshint esversion:6

const rightNavbar = document.querySelector('.right-navbar');
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".left-navbar-header");
const inputSearch = document.querySelector(".input-column");
const inputSelect = document.querySelector(".input-select");
const countryContainer = document.querySelectorAll(".country");
const backButton = document.querySelector(".backButton");


var tracker = 1;




rightNavbar.addEventListener("click", function(){
  if(tracker === 1){
    rightNavbar.classList.remove("black");
    body.classList.remove("white-background");
    navbar.classList.remove("white-background");
    header.classList.remove("black");
    try{
      inputSearch.classList.remove("white-shadow");
      inputSearch.classList.remove("black");
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
    tracker = 0;

  }
  else{
    rightNavbar.classList.add("black");
    body.classList.add("white-background");
    navbar.classList.add("white-background");
    header.classList.add("black");
    try{
      inputSearch.classList.add("white-shadow");
      inputSearch.classList.add("black");
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

    tracker = 1;
  }
});
