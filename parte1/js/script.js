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
    slidesToScroll: 4,
    autoplaySpeed: 2000
});

//Click para ir para o topo da página
$('.button-fixed').on('click', function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
})