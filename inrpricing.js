var button = document.getElementById("inr");
var btntext = document.getElementById("btntext")



var ecommerceprice = document.getElementById("ecommerceprice")
var standardprice = document.getElementById("standardprice")
var businessprice = document.getElementById("businessprice")
var simpleprice = document.getElementById("simpleprice")
var wordpressprice = document.getElementById("wordpressprice")
var corporateprice = document.getElementById("corporateprice")

var doublecorprice = document.getElementById("doublecorprice")
var doublesideprice = document.getElementById("doublesideprice")
var singlecardprice = document.getElementById("singlecardprice")
var unlimitedbprice = document.getElementById("unlimitedbprice")
var standardbprice = document.getElementById("standardbprice")
var basicbprice = document.getElementById("basicbprice")
var basiclogoprice = document.getElementById("basiclogoprice")
var standardlogoprice = document.getElementById("standardlogoprice")
var unlimitedlogoprice = document.getElementById("unlimitedlogoprice")
button.addEventListener("click", function() {
  btntext.innerHTML="INR (Selected)"
  ecommerceprice.innerHTML = (524857 * 0.449).toFixed(0) + " INR";
  standardprice.innerHTML = (175358 * 0.449).toFixed(0) + " INR";
  businessprice.innerHTML = (113767 * 0.449).toFixed(0) + " INR";
  simpleprice.innerHTML = (34990 * 0.449).toFixed(0) + " INR";
  corporateprice.innerHTML = (78747 * 0.449).toFixed(0) + " INR";
  wordpressprice.innerHTML = (52485 * 0.449).toFixed(0) + " INR";
  doublecorprice.innerHTML = (25875 * 0.449).toFixed(0) + " INR";
  doublesideprice.innerHTML = (8625 * 0.449).toFixed(0) + " INR";
  singlecardprice.innerHTML = (2587 * 0.449).toFixed(0) + " INR";
  unlimitedbprice.innerHTML = (17077 * 0.449).toFixed(0) + " INR";
  unlimitedlogoprice.innerHTML = (25702 * 0.449).toFixed(0) + " INR";
  basicbprice.innerHTML = (5002 * 0.449).toFixed(0) + " INR";
  basiclogoprice.innerHTML = (8447 * 0.449).toFixed(0) + " INR";
  standardbprice.innerHTML = (8600 * 0.449).toFixed(0) + " INR";
  standardlogoprice.innerHTML = (13627 * 0.449).toFixed(0) + " INR";
  

});

