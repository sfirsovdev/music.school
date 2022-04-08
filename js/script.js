$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
    }
    );  
});

$(document).ready(function(){
    $('.slider2').slick({
        arrows: true,
        dots:true,
        adaptiveHeight: false,
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
        adaptiveHeight: false,
        slidesToShow: 1,
        fade: true,
        asNavFor:".slider2"
    }
    );
    });

