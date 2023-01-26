var items = []
var itemsWithPrices = [];


$(document).ready(function() {
    
    $('.sidenav').sidenav();
    
    //ADD TO CART button 
    $('.atcBtn').click(function() {

        var flavor = $(this).data('flavor');
        var price = $(this).prev('#price').text();
        var flavor = flavor + "-" + price

        items.push(flavor);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        console.log(price)

        $(this).next('.rmBtn').removeClass('hide');
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
            var flavor = currentCart[i].split('-')[0];
            var price = currentCart[i].split('-')[1];
            cartSticky.innerHTML += "<li>" + flavor + " price: " + price + "</li>";
        }
        cartSticky.innerHTML += "</ul>";  
        console.log('Cart sticky updated')
    }
    
});
