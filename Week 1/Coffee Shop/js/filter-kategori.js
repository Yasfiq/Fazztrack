// add click event to category
$('.category').click(function(){
    // fetch id category as mark
    const category = $(this).attr('id');

    // if category id is all
    if(category == 'all'){
        // if any category has active class, remove active class 
        $('.category.active').removeClass('active');
        
        // add active class to element that has id is all 
        $('#all').addClass('active');

        // add hide class for hiding product
        $('.product').addClass('hide');

        // Wait 3 milisecond and remove hide class for show product again
        setTimeout(function(){
            $('.product').removeClass('hide');
        }, 300);
    } else {
        // if any category has active class, remove active class
        $('.category.active').removeClass('active');

        // add active class to selected category 
        $('#'+category).addClass('active');

        // add hide class for hiding product
        $('.product').addClass('hide');

        // Wait 3 milisecond and remove hide class for show product that has same class with selected category
        setTimeout(function(){
            $('.'+category).removeClass('hide');
        }, 300);
    }
})

