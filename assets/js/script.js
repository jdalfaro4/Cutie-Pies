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
        console.log(flavorPrice)
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        // console.log(price)
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
        cartStickyPrices.innerHTML = ""
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


var apiurl2 ="https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=fd0d519865b662dfd044fa27b1e7cbf9&photoset_id=72177720305535430&user_id=197587105%40N08&format=json&nojsoncallback=1";
$(document).ready(function(){
    $.getJSON(apiurl2,function(response){
         console.log(response);
         $.each(response.photoset.photo,function(idx,photo){
            console.log(photo);
            //https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
            var imageUrl ="https://live.staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg";
            console.log(imageUrl);
            $("#"+photo.id).attr ("src",imageUrl);
        })
    })
});

