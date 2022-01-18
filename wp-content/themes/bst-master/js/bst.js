


(function ($) {
	
	"use strict";

	$(document).ready(function() {

	  $('.modal-play-btn').on('click', function() {
	    $("#video")[0].src += "&autoplay=1";

	  });


		$(function(){ 
			var navMain = $(".navbar-collapse"); // avoid dependency on #id
    	// "a:not([data-toggle])" - to avoid issues caused
    	// when you have dropdown inside navbar
    	navMain.on("click", "a:not([data-toggle])", null, function () {
    	   navMain.collapse('hide');
    	});
	 	});


		$(".fixed-content .btn-don a, .close-collapse").click(function(){
			$(".close-collapse").toggleClass('visible');
		});
		// Comments
		$(".commentlist li").addClass("panel panel-default");
		$(".comment-reply-link").addClass("btn btn-default");
	
		// Forms
		$('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
		$('input[type=submit]').addClass('btn btn-primary');
		
		// You can put your own code in here

		$('.social-btn').click(function(e) {
		  e.preventDefault();
		  if($(this).hasClass('share-email')) {
		  	$('#share-email').modal('show');
			} else {
		  	$(this).find('a');
		  	sharePopup($(this).find('a').prop('href'));
		  }
		  
		});

		$('.don-gift select').change(function(event) {
			var partial_total = parseInt($(this).data('unit-price')) * parseInt($(this).val());
			jQuery(this).next('.prix').html(partial_total+' €');
			birthDogGiftCalculator();
			return true;
		});
	});

	function birthDogGiftCalculator() {
		var total = 0;
		jQuery('.section-prix').each(function(element) {
			total += parseInt(jQuery(this).find('.prix').html()); 
		})
		jQuery('.prix-total').html(total + ' €');
		jQuery('.deduction-total').html(Math.round(total*0.34));

		var gift_url = jQuery('.don-gift.total a').prop('href');
		var params = AcgaoParseUrl(gift_url).search;
		if(params == '') {
			gift_url += '?amount=' + total;
		} else {
			gift_url += '&amount=' + total;
		}
		jQuery('.don-gift.total a').prop('href', gift_url);

		return true;
	}

	function sharePopup(url) {
	  window.open( url, "CgaoShare", "status = 1, height = 500, width = 660, resizable = 0" );
	}

	function AcgaoParseUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    return a;
	}
}(jQuery));