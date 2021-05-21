const changeBackground = () => {
    const imageUrl = "https://placekitten.com/1280/425";
    
    //Desktop
    $('#solnoff-breadcrumb').parent().css("background-image", "url(" + imageUrl + ")");
    
    //Mobile
    $('.header-img').css("background-image", "url(" + imageUrl + ")");
}

changeBackground();