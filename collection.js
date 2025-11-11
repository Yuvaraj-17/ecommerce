var products = document.getElementById("product");
var search = document.querySelector(".search");
var productbox = document.querySelectorAll(".product-box");

search.addEventListener("keyup", function (event) {

    var enteredValue = event.target.value.toUpperCase();

    for ( var i = 0; i < productbox.length; i++) {
        var productname = productbox[i].querySelector("p").textContent;
        if (productname.toUpperCase().indexOf(enteredValue) < 0) { 
        productbox[i].style.display = "none";
    }else{
        productbox[i].style.display = "block";
        }
    }
});
