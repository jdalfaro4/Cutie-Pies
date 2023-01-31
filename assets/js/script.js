var items = []
var itemsWithPrices = [];


$(document).ready(function() {
    
    $('.sidenav').sidenav();
    
    //ADD TO CART button 
    $('.atcBtn').click(function() {
        var flavor = $(this).data('flavor');
        var price = $(this).prev('#price').text().split('$')[0];
        console.log(price)
        var flavorPrice = flavor + "-" + price
        items.push(flavorPrice);
        console.log(flavorPrice);
        localStorage.setItem("AddedToCart", JSON.stringify(items))
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


    //Updates the cart within the sticky to reflect the current cart.
    function refreshCart () {
        var currentCart = JSON.parse(localStorage.getItem("AddedToCart"));
        cartSticky.innerHTML = "";
        cartStickyPrices.innerHTML = "";
        for (let i = 0; i < currentCart.length; i ++) {
            var flavor = currentCart[i].split('-')[0];
            var price = currentCart[i].split('-')[1];
            cartSticky.innerHTML += "<li>" + flavor + "</li>";
            var cartLineItems = cartStickyPrices.innerHTML += "<li>" + price + "</li>";
            
            //Creates a accumulated total for the entire order
            function totalPrice () {
                var cartSticky = document.getElementById('cartSticky')
                var cartStickyPrices = document.getElementById('cartStickyPrices')
                var checkoutBin = document.getElementById('checkoutBin')
                var currentCart = JSON.parse(localStorage.getItem("AddedToCart"));
                let runningTotal = 0;
                for (let i = 0; i < currentCart.length; i ++) {
                    let cartPrices = currentCart[i];
                    const itemPrice = parseFloat(cartPrices.split('-')[1]);
                    runningTotal = runningTotal + itemPrice;
                }
                    checkoutBin.innerHTML = "$" + runningTotal
                    console.log(runningTotal)
                };
        }
        cartStickyPrices.innerHTML += "</ul>";
        cartSticky.innerHTML += "</ul>";  
        console.log('Cart sticky updated')

        totalPrice ()
    };
    
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

