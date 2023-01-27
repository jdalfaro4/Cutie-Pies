var items = []

$(document).ready(function() {

    //ADD TO CART button
    $('.atcBtn').click(function() {
        console.log("add to cart button pressed")
        var flavor = $(this).data('flavor');
        items.push(flavor)
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        $(this).next('.rmBtn').removeClass('hide');
        console.log(items)
        refreshCart()
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
    }
    console.log('Cart sticky updated')
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

