//todo ------------ Initialize Swiper in JS - "Maine Slide" --------------------
if (document.querySelector('.mainslide')) {
	new Swiper('.mainslide__body', {
		autoplay: {
			delay: 5500,
			disableOnInteraction: true,
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: true,
		autoHeight: true,
		speed: 800,
		// loop: true,
		pagination: {
			el: ".mainslide__dots",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
	});
	let mainslideImages = document.querySelectorAll(
		'.mainslide__image');
	let placeholder = mainslideImages.nextElementSibling;
	let mainslideDots = document.querySelectorAll(
		'.swiper-pagination-bullet'
	);
	// let step = 0;
	for (let i = 0; i < mainslideImages.length; i++) {
		const mainslideImage = mainslideImages[i].querySelector(
			'img').getAttribute('src');
		mainslideDots[i].style.backgroundImage = "url('" + mainslideImage + "')";
	}
}
//todo ------------ Initialize Swiper in JS - "Products Slide" -----------------
if (document.querySelector('.products-slide')) {
	new Swiper('.products-slide__item', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		centeredSlides: true,
		autoHeight: true,
		speed: 800,
		preloadImages: true,
		loop: true,
		pagination: {
			el: ".products-slide__info",
			type: "fraction",
		},
		navigation: {
			nextEl: ".products-slide__arrow_next",
			prevEl: ".products-slide__arrow_prev",
		},
	});
}
//todo -------------- Initialize Swiper in JS - "Brand Slide" ------------------
if (document.querySelector('.brands-slide')) {
	new Swiper('.brands-slide__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 10,
		speed: 800,
		loop: true,
		navigation: {
			nextEl: ".brands-slide__arrow_next",
			prevEl: ".brands-slide__arrow_prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			}
		}
	});
}
