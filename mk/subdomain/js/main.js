$(document).ready(function () {
  $('.nav').click(function(e){
    e.preventDefault();
    if ($('#nav').css('display') == 'none'){
      $(this).addClass('active');
      $('header').addClass('active');
      $('#wrapper').addClass('active');
      $('#nav').fadeIn();
    } else {
      $(this).removeClass('active');
      $('header').removeClass('active');
      $('#wrapper').removeClass('active');
      $('#nav').fadeOut();
    }

  });
  /*$('.soc-link').click(function(e){
    e.preventDefault();
    if ($('.cover-social li').css('opacity') == '0'){
      $('.cover-social').addClass('active');
    } else {
      $('.cover-social').removeClass('active');
    }
  });*/
  /*$('.soc-link').click(function(e){
    e.preventDefault();
    $('.cover-social').fadeToggle();
    $(this).toggleClass('active');
  });*/
  $('.soc-link').hover(function () {
    $(this).find('.cover-social').stop(true, true).delay(200).fadeIn();
  }, function () {
    $(this).find('.cover-social').stop(true, true).fadeOut();
  });
  $('.photo-box a.view').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent('.photo-box').toggleClass('not-show');
  });
  $('.form-order a.promo-link').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent('.promo-code').find('.promo-input').toggleClass('active');
  });
  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 700);
    return false;
  });
  $('.album-cover .btn-album').click(function () {
    var element = $('#info-album').offset().top;
    $('body,html').animate({
      scrollTop: element
    }, 700);
    return false;
  });

  $('.show-popup-1').click(function(e){
    e.preventDefault();
    $('.popup-choose').center().fadeIn( "fast" );
    $('body').append('<div class="shadow"></div>');
    $("ul.nav-tabs").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".tabs-format")
        .find("div.tab-content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
  $('.show-popup-2').click(function(e){
    e.preventDefault();
    $('.popup-choose-price').center().fadeIn( "fast" );
    $(".input-group").remove();
    $("input[type='number']").inputSpinner();
    $('body').append('<div class="shadow"></div>');
    $('body').css('overflow', 'hidden');
  });
  $('.show-popup-3').click(function(e){
    e.preventDefault();
    $('.popup-choose-success').center().fadeIn( "fast" );
    $('body').append('<div class="shadow"></div>');
    $('body').css('overflow', 'hidden');
  });
  $('.show-popup-4').click(function(e){
    e.preventDefault();
    $('.popup-gallery').center().fadeIn( "fast" );
    $('body').append('<div class="shadow"></div>');
    $('body').css('overflow', 'hidden');

    $('.slider-photo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      infinite:true,
      asNavFor: '.slide-nav'
    });
    $('.slide-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-photo',
      dots: false,
      arrows: false,
      infinite:true,
      variableWidth: true,
      focusOnSelect: true
    });
  });
  $('.slider-gallery .btn-buy-box a.download').click(function(e){
    e.preventDefault();
    $('.popup-gallery .buy-box').center().fadeIn( "fast" );
    $('.popup-gallery ').append('<div class="shadow"></div>');
  });
  $('.popup-gallery .buy-box .holder-btn .exit').click(function(e){
    e.preventDefault();
    $('.popup-gallery .buy-box').fadeOut( "fast" );
    $('.popup-gallery ').find('.shadow').remove();
  });
  $('.popup .close, .shadow').click(function(e){
    e.preventDefault();
    $('.popup').fadeOut( "fast" );
    $('.shadow').remove();
    $('body').css('overflow', 'initial');
  });
  $(document).click(function (event) {
    if ($(event.target).closest('.popup').length == 0 && $(event.target).attr('class') != 'popup-link') {
      $('.popup').fadeOut( "fast" );
      $('.shadow').remove();
      $('body').css('overflow', 'initial');
    }
  });

      $("ul.nav-tabs").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest(".tabs-format")
          .find("div.tab-content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });


  jQuery.fn.center = function () {
    //this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
  }
});
