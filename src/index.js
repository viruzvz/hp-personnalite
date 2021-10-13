import './styles/main.scss'
import './styles/main.less'
import 'popper.js'
import 'bootstrap'
import Stickyfill from 'stickyfilljs'
import 'ekko-lightbox'
import $ from 'jquery'
window.$ = window.jQuery = $

!(function($) {
  "use strict"

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
  
  // $(window).scroll(function () {
  //   var scrollDistance = $(window).scrollTop()
  
  //   // Assign active class to nav links while scolling
  //   $('.page-section').each(function (i) {
  //     if ($(this).position().top <= scrollDistance) {
  //       $('.navigation a.active').removeClass('active')
  //       $('.navigation a').eq(i).addClass('active')
  //     }
  //   })
  // }).scroll()
  
  // Navigation active state on scroll
  var nav_sections = $('.page-section')
  var main_nav = $('.nav-menu')

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight()

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active')
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active')
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active')
      }
    })
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

})(jQuery)