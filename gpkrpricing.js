var button = document.getElementById("pkr");
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
  btntext.innerHTML="PKR (Selected)"
  doublecorprice.innerHTML="42,600 PKR"
  doublesideprice.innerHTML="14,200 PKR"
  singlecardprice.innerHTML="4,260 PKR"
  unlimitedbprice.innerHTML="28,116 PKR"
  unlimitedlogoprice.innerHTML="28,116 PKR"
  basicbprice.innerHTML="8,236 PKR"
  basiclogoprice.innerHTML="13,916 PKR"
  standardbprice.innerHTML="13,916 PKR"
  standardlogoprice.innerHTML="22,436 PKR"


});



