var items = []
$(document).ready(function() {

    $('.atcBtn').click(function() {
        console.log("add to cart button pressed")
        var flavor = $(this).data('flavor');
        items.push(flavor)
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        $(this).addClass('hide');
        $(this).next('.rmBtn').removeClass('hide');
        console.log(items)
    });

    $('.rmBtn').click(function(){
        console.log("remove from cart button pressed")
        var flavor = $(this).data('flavor')
        var index = items.indexOf(flavor);
        items.splice(index, 1);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        $(this).addClass('hide');
        $(this).prev('.atcBtn').removeClass('hide');

    });
});
