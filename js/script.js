$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
    }
    );  
});

$(document).ready(function(){
    $('.slider2').slick({
        arrows: true,
        dots:false,
        adaptiveHeight: true,
        vertical: true,
        slidesToShow: 3,
        asNavFor: ".sliderbig",
        focusOnSelect: true
    }
    );  
});

$(document).ready(function(){
    $('.sliderbig').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        fade: true,
        asNavFor:".slider2"
    }
    );
    });

