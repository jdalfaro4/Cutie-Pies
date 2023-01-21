var items = []
$(document).ready(function() {

    $('.atcBtn').click(function() {
        console.log("add to cart button pressed")
        var flavor = $(this).data('flavor');
        items.push(flavor)
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        $(this).addClass('hide');
        $(this).next('.rmBtn').removeClass('hide');
    });
})
