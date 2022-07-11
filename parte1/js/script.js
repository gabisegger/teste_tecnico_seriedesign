/* Coloque o JS neste arquivo */

//Fullbanner
$('.block-1').slick({
    dots: false,
    infinite: true
});

//Vitrine produtos
$('.products').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
    ]
});

//Click para ir para o topo da página
$('.button-fixed').on('click', function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
})

//Header fixo
$(window).on('scroll', function(){
    if(window.scrollY >= 170){
        $('header').addClass('fixed')
    } else{
        $('header').removeClass('fixed')
    }
})

//Click no botão compra rápida 
$('.btn-buy').on('click', function(){
    $(".added-to-cart").addClass('active');
    setTimeout(function(){
        $(".added-to-cart").removeClass('active');
    },2000)
})

// JS Mobile
if (window.screen.width <= 768) {
    //Slick benefícios e banner de categorias
    $('.benefits, .banner-categories').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    })

    //Menu categorias mobile
    $('.menu-all-categories').on('click', function(){
        $('.list-categories').addClass('atv')
    })

    $('.list-categories > span').on('click', function(){
        $('.list-categories').removeClass('atv')
    })

    $('.submenu-item.has-dropdown').on('click', function(){
        $(this).toggleClass('active')
    })

}