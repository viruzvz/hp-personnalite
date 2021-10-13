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