var items = []
var itemsWithPrices = [];


$(document).ready(function() {
    
    $('.sidenav').sidenav();
    
    //ADD TO CART button 
    $('.atcBtn').click(function() {
        var flavor = $(this).data('flavor');
        var price = $(this).prev('#price').text();
        var flavorPrice = flavor + "-" + price
        items.push(flavorPrice);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        console.log(price)
        $(this).next('.rmBtn').removeClass('hide');
        refreshCart();
    });

    //REMOVE FROM CART button
    $('.rmBtn').click(function(){
        console.log("remove from cart button pressed")
        var flavor = $(this).data('flavor')
        var price = $(this).prev().prev('#price').text();
        var flavorPrice = flavor + "-" + price;
        var index = items.indexOf(flavorPrice); 
        items.splice(index, 1);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        console.log(items)
        refreshCart() 
    });

    var cartSticky = document.getElementById('cartSticky')
    var cartStickyPrices = document.getElementById('cartStickyPrices')

    //Price system ++


    //Updates the cart within the sticky to reflect the current cart.
    function refreshCart () {
        var currentCart = JSON.parse(localStorage.getItem("AddedToCart"));
        cartSticky.innerHTML = "<ul>";
        for (let i = 0; i < currentCart.length; i ++) {
            var flavor = currentCart[i].split('-')[0];
            var price = currentCart[i].split('-')[1];
            cartSticky.innerHTML += "<li>" + flavor + "</li>";
            cartStickyPrices.innerHTML += "<li>" + price + "</li>";
        }
        cartStickyPrices.innerHTML += "</ul>";
        cartSticky.innerHTML += "</ul>";  
        console.log('Cart sticky updated')
    }
    
});
