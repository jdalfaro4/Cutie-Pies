var items = []
$(document).ready(function() {
    
    //ADD TO CART button 
    $('.atcBtn').click(function() {
        console.log("add to cart button pressed")
        //Created a "flavor" variable by finding the button that was clicked, then searching the data-flavor for the associated flavor with the button.
        var flavor = $(this).data('flavor');
        //Flavor is pushed to the end of the "items" array.
        items.push(flavor)
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        //This changes classes to reflect the state of an item being in the cart or out.
        $(this).addClass('hide');
        $(this).next('.rmBtn').removeClass('hide');
        console.log(items)
    });

    //REMOVE FROM CART button
    $('.rmBtn').click(function(){
        console.log("remove from cart button pressed")
        //Created a "flavor" variable by finding the button that was clicked, then searching the data-flavor for the associated flavor with the button.
        var flavor = $(this).data('flavor')
        //indexOf() is used to find the index of the flavor.
        var index = items.indexOf(flavor);
        //splice() is used to find the index variable of the current data-flavor that is being clicked and remove them from the array.
        //(index, 1) :: the index variable is the location where the splice will begin, and the 1 refers to the number of elements to remove. 
        items.splice(index, 1);
        localStorage.setItem("AddedToCart", JSON.stringify(items));
        //This changes classes to reflect the state of an item being in the cart or out.
        $(this).addClass('hide');
        $(this).prev('.atcBtn').removeClass('hide');
        console.log(items)

    });
});
