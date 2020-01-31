import Stickyfill from 'stickyfilljs'
import 'ekko-lightbox'
import 'jquery-touchswipe'
import $ from 'jquery'
window.jQuery = $
window.$ = $

var elements = document.querySelectorAll('.sticky')
Stickyfill.add(elements)

// var $ = require('jquery')
;!function () {
  $(document).ready(function() {
  $('.thumbnail').click(function(){
        $('.modal-body--js').empty();
      var title = $(this).parent('a').attr("title");
      $('.modal-title--js').html(title);
      $($(this).parents('div').html()).appendTo('.modal-body--js');
      $('#galeria1').modal({show:true});
  });
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89184615-1', 'auto');
  ga('send', 'pageview');

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


}()


$('.nav-item a').on('click', function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== '') {
    // Prevent default anchor click behavior
    event.preventDefault()
    // Store hash
    var hash = this.hash
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function () {
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash
    })
  } // End if
})

$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop()

  // Assign active class to nav links while scolling
  $('.page-section').each(function (i) {
    if ($(this).position().top <= scrollDistance) {
      $('.navigation a.active').removeClass('active')
      $('.navigation a').eq(i).addClass('active')
    }
  })
}).scroll()

$(document).ready(function () {
  var animationElements = $.find('.animation-element')
  var webWindow = $(window)
  function checkIfInView () {
    var windowHeight = webWindow.height()
    var windowTopPosition = webWindow.scrollTop()
    var windowBottomPosition = (windowTopPosition + windowHeight)
    $.each(animationElements, function () {
      var element = $(this)
      var elementHeight = $(element).outerHeight()
      var elementTopPosition = $(element).offset().top
      var elementBottomPosition = (elementTopPosition + elementHeight)
      if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
        element.addClass('in-view')
      } else {
        element.removeClass('in-view')
      }
    })
  }
  $(window).on('scroll resize', function () {
    checkIfInView()
  })
  $(window).trigger('scroll')
})
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault()
  $(this).ekkoLightbox()
})

// Navegação Nav Fixed e Botão Voltar para o topo.
var btn = $('#button')
var navsec = $('.navsec')
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show')
    navsec.addClass('show')
  } else {
    btn.removeClass('show')
    navsec.removeClass('show')
  }
})

btn.on('click', function (e) {
  e.preventDefault()
  $('html, body').animate({scrollTop:0}, '300')
})

$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});