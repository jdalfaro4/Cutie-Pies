var items = []
var itemsWithPrices = [];


$(document).ready(function() {
    
    $('.sidenav').sidenav();
    
    //ADD TO CART button 
    $('.atcBtn').click(function() {
        console.log("add to cart button pressed")
        var flavor = $(this).data('flavor');
        var price = $(this).prev('#price').text();
        var cart = {flavor, price};
        items.push(flavor);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        $(this).next('.rmBtn').removeClass('hide');
        var price = $(this).prev('#price').text; 
      
        Object.assign(cart, flavor, price);
        itemsWithPrices.push(cart);
        console.log(itemsWithPrices);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        refreshCart();
    });

    //REMOVE FROM CART button
    $('.rmBtn').click(function(){
        console.log("remove from cart button pressed")
        var flavor = $(this).data('flavor')
        var index = items.indexOf(flavor); 
        items.splice(index, 1);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        console.log(items)
        refreshCart() 
    });

    var cartSticky = document.getElementById('cartSticky')
    //Updates the cart within the sticky to reflect the current cart.
    function refreshCart () {
        var currentCart = JSON.parse(localStorage.getItem("AddedToCart"));
        cartSticky.innerHTML = "<ul>";
        for (let i = 0; i < currentCart.length; i ++) {
            cartSticky.innerHTML += "<li>" + currentCart[i] + "</li>";
        }
        cartSticky.innerHTML += "</ul>";  
        console.log('Cart sticky updated')
    }
    
});
