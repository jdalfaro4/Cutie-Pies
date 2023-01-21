$(document).ready(function() {
    $('#atcBtn').click(function() {
        console.log("add to cart button pressed")
        var flavor = $(this).data('flavor');
        localStorage.setItem("AddedToCart", flavor)
    });
})
