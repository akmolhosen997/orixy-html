(function ($) {
"use strict";

// mobile-menu
$('#mobile_menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "991"
});

//sidebar-toggle
$('.menu_toggle').on('click', function () {
	$('.sidebar_toggle').addClass('sidebar_open');
	$('.offcanvas-overlay').addClass('overlay_open');
})
$('.close_sidebar,.offcanvas-overlay').on('click', function () {
	$('.sidebar_toggle').removeClass('sidebar_open');
	$('.offcanvas-overlay').removeClass('overlay_open');
});

// banner-slide-active
function sliderActive_hero3() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".banner_1_slider_active").length > 0) {
		let sliderActive1 = '.banner_1_slider_active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			paginationClickable: true,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			  },

		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}

sliderActive_hero3();

// services-slider
if (jQuery(".service_slider_active").length > 0) {
	let acooterbrand = new Swiper('.service_slider_active', {
		slidesPerView: 3,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 5000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
		}

});}


// sponser-slider
if (jQuery(".sponser_slider_active").length > 0) {
	let acooterbrand = new Swiper('.sponser_slider_active', {
		slidesPerView: 3,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 5000,
			},

		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			480: {
			slidesPerView: 3,
			},
			576: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 6,
			},
			1400: {
				slidesPerView: 6,
			},
		}

});}

//	project filter
function enableMasonry2  () {
	// ----------------------------- isotop gallery

	$(window).on("load", function () {
	  if ($("#fillter_item_active").length) {
		var $grid = $("#fillter_item_active").isotope({
		  // options
		  itemSelector: ".isotop-item",
		  percentPosition: true,
		  masonry: {
			// use element for option
			columnWidth: ".grid-sizer",
		  },
		});

		// filter items on button click
		$(".project_filter_menu").on("click", "li", function () {
		  var filterValue = $(this).attr("data-filter");
		  $grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$(".project_filter_menu").each(function (i, buttonGroup) {
		  var $buttonGroup = $(buttonGroup);
		  $buttonGroup.on("click", "li", function () {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		  });
		});
	  }
	});
}

enableMasonry2();

// data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})

// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})

//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

})(jQuery);