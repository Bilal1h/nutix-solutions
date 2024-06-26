var button = document.getElementById("inr");
var doublecorprice = document.getElementById("doublecorprice")
var doublesideprice = document.getElementById("doublesideprice")
var singlecardprice = document.getElementById("singlecardprice")
var unlimitedbprice = document.getElementById("unlimitedbprice")
var standardbprice = document.getElementById("standardbprice")
var basicbprice = document.getElementById("basicbprice")
var basiclogoprice = document.getElementById("basiclogoprice")
var standardlogoprice = document.getElementById("standardlogoprice")
var unlimitedlogoprice = document.getElementById("unlimitedlogoprice")

var btntext = document.getElementById("btntext")



button.addEventListener("click", function() {
  btntext.innerHTML="INR (Selected)"
  doublecorprice.innerHTML="11,120 INR"
  doublesideprice.innerHTML="3,707 INR"
  singlecardprice.innerHTML="1,112 INR"
  unlimitedbprice.innerHTML="7,318 INR"
  unlimitedlogoprice.innerHTML="11,006 INR"
  basicbprice.innerHTML="2,678 INR"
  basiclogoprice.innerHTML="4,522 INR"
  standardbprice.innerHTML="4,522 INR"
  standardlogoprice.innerHTML="7,318 INR"
  
  
  });