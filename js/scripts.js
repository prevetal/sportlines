$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Бюджет - галерея
	if ($('.budget .gallery .swiper-container').length) {
		new Swiper('.budget .gallery .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Тарифы
	if ($('.tariffs .swiper-container').length) {
		new Swiper('.tariffs .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				1024: {
					spaceBetween: 30,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 80,
					slidesPerView: 2
				}
			},
			on: {
				init: () => {
					setTimeout(() => {
						setHeight($('.tariffs .tariff'))
					})
				},
				resize: () => {
					setTimeout(() => {
						$('.tariffs .tariff').height('auto')
						setHeight($('.tariffs .tariff'))
					})
				}
			}
		})
	}


	// Дополнительные услуги
	if ($('.additional_services .swiper-container').length) {
		new Swiper('.additional_services .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 30,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 80,
					slidesPerView: 2
				}
			},
			on: {
				init: () => {
					setTimeout(() => {
						let thumbH = $('.additional_services .service .thumb').outerHeight()

						$('.additional_services .swiper-button-prev').css('top', thumbH / 2)
						$('.additional_services .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: () => {
					setTimeout(() => {
						let thumbH = $('.additional_services .service .thumb').outerHeight()

						$('.additional_services .swiper-button-prev').css('top', thumbH / 2)
						$('.additional_services .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Лучшие рекомендуют лучших
	if ($('.persons .swiper-container').length) {
		new Swiper('.persons .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 30,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 80,
					slidesPerView: 2
				}
			},
			on: {
				init: () => {
					setTimeout(() => {
						let thumbH = $('.persons .person .thumb').outerHeight()

						$('.persons .swiper-button-prev').css('top', thumbH / 2)
						$('.persons .swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: () => {
					setTimeout(() => {
						let thumbH = $('.persons .person .thumb').outerHeight()

						$('.persons .swiper-button-prev').css('top', thumbH / 2)
						$('.persons .swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// ИНВЕСТИЦИОННАЯ ЭФФЕКТИВНОСТЬ
	if ($('.investment .swiper-container').length) {
		new Swiper('.investment .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Спойлер в тексте
	$('.text_block .spoler_btn').click(function (e) {
		e.preventDefault()

		$(this).hasClass('active')
			? $(this).removeClass('active').prev().slideUp(300)
			: $(this).addClass('active').prev().slideDown(300)
	})


	// Аккордион
	$('.accordion .item .head').click(function (e) {
		e.preventDefault()

		const $item = $(this).closest('.item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Поиск
	$('header .search_btn, .search_modal form .close').click(function (e) {
		e.preventDefault()

		$('#search_modal').toggleClass('show')
	})


	// Меню
	$('header .menu_btn, .menu_modal .close').click(function (e) {
		e.preventDefault()

		$('#menu_modal').toggleClass('show')
	})


	// // Расписание и бронирование
	// $('.booking .courts label').click(function () {
	// 	let schema = $(this).data('schema')

	// 	$('.booking .schemas .schema').hide()
	// 	$('.booking .schemas ' + schema).fadeIn(300)
	// })


	// Спойлер в тексте
	$('.more .link').click(function (e) {
		e.preventDefault()

		const $parent = $(this).closest('section')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			$parent.find('.hide').slideUp(300)
		} else {
			$(this).addClass('active')

			$parent.find('.hide').slideDown(300)
		}
	})
})