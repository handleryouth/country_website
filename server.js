//jshint esversion:6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require("https");
const getHomeCountry = require(__dirname + "/home.js");
const getRegionCountry = require(__dirname  + "/region.js");
const searchCustom = require(__dirname + "/specific.js");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.set('view engine', 'ejs');
app.engine('html', require("ejs").renderFile);


app.get("/", function(req, res){
  getHomeCountry.homeCountry(req,res);
});




app.post("/", function(req, res){
  let region = req.body.regionName;
  getRegionCountry.regionCountry(req, res, region);
});


app.get("/searchCountry", function(req,res){
  res.redirect("/");
});


app.post("/searchCountry", function(req, res){
let name = req.body.countryName;
searchCustom.customSearch(req, res, name);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("server is up and running at server 3000");
});
