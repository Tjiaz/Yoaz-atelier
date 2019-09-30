 $(function(){
      $(".element").typed({
        strings: ["Web Designer / Front-End Developer"],
        typeSpeed: 70,
		showCursor: false,
      });
  });

$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

   (function($) {
        'use strict';
        window.sr= new scrollReveal({
          reset: false,
          move: '50px',
          mobile: false
        });
      })();