//jshint esversion:6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require("https");


module.exports.customSearch = function(req, res, name){
  let URL = "https://restcountries.eu/rest/v2/name/" + name;
  console.log(URL);

  let flagList = [];
  let nameList = [];
  let populationList = [];
  let regionList = [];
  let capitalList = [];

  https.get(URL, function(response){

    let chunks = "";


    response.on("data", function(data){
      chunks += data;
    });

    response.on("end", function(){

      for (let i = 0; i<8; i++){
        try{
          let Country = JSON.parse(chunks);
          let countryFlags = Country[i.toString()].flag;
          let countryName = Country[i.toString()].name;
          let countryPopulation = Country[i.toString()].population;
          let countryRegion = Country[i.toString()].region;
          let countryCapital = Country[i.toString()].capital;

          nameList.push(countryName);
          flagList.push(countryFlags);
          populationList.push(countryPopulation);
          regionList.push(countryRegion);
          capitalList.push(countryCapital);
        }
      catch(e){
        break;
      }

      }

    });

    setTimeout(function(){
      res.render("specificCountry.ejs",{
        countryName : nameList,
        countryFlag : flagList,
        countryPopulation :  populationList,
        countryRegion : regionList,
        countryCapital : capitalList
      });
    }, 2000);


  });
};
