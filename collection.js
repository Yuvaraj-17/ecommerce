
var search = document.querySelector(".search");
var productbox = document.querySelectorAll(".product-box");

var productContainer = document.getElementById("product");
var noProductsMsg = document.createElement("p");
noProductsMsg.textContent = "No products found";
noProductsMsg.style.textAlign = "center";
noProductsMsg.style.fontSize = "20px";
noProductsMsg.style.color =" #2c1810";
noProductsMsg.style.display = "none";
productContainer.appendChild(noProductsMsg);

search.addEventListener("keyup", function (event) {

    var enteredValue = event.target.value.toUpperCase();
    var found = false;
    for ( var i = 0; i < productbox.length; i++) {
        var productname = productbox[i].querySelector("p").textContent;
        if (productname.toUpperCase().indexOf(enteredValue) < 0) { 
        productbox[i].style.display = "none";
    }else{
        productbox[i].style.display = "block";
        found=true;
        }
    }
    // Show or hide the "No products found" message
    noProductsMsg.style.display = found ? "none" : "block";
});
