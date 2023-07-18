"use strict";

$(document).ready(function () {
	$(".team-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 1000,
	});
	let btn = $(".back-to-top");
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			btn.addClass("show");
		} else {
			btn.removeClass("show");
		}
	});
	btn.on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			500
		);
	});
	$("a.scroll").on("click", function (e) {
		let anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr("href")).offset().top - 80,
				},
				777
			);
		e.preventDefault();
		return false;
	});
	$(".account-menu span").on("click", function () {
		let _this = this;

		if ($(this).parent().hasClass("active")) {
			setTimeout(function () {
				$(_this).parent().removeClass("active");
			}, 200);
			$(".drop-down").slideUp(300);
		} else {
			setTimeout(function () {
				$(_this).parent().addClass("active");
			}, 50);
			setTimeout(function () {
				$(".drop-down").slideDown(500);
			}, 270);
		}
	});
	$(".amount-col input").focus(function () {
		$(this).addClass("focus");
		$(this).parent().closest(".basket-table__row").addClass("focused");
	});
	$(".amount-col input").blur(function () {
		$(this).removeClass("focus");
		$(this).parent().closest(".basket-table__row").removeClass("focused");
	});
	$(".header__menuopen").on("click", function () {
		$(".h-menu").addClass("active");
	});
	$(".h-menu__menuclose").on("click", function () {
		$(".h-menu").removeClass("active");
	});

	if ($("body").width() < 601) {
		$(".blog-list").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			autoplay: false,
			speed: 1000,
		});
	}

	if ($("body").width() < 801) {
		$(".recipes-options__list").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			autoplay: false,
			speed: 1000,
		});
	}

	$(".basket-table__select-all .c-check input").change(function () {
		$(".basket-table__col.ingr-col .c-check input").each(function () {
			if ($(".basket-table__select-all .c-check input").is(":checked")) {
				$(this).prop("checked", true);
			} else {
				$(this).prop("checked", false);
			}
		});
	});
	$(".basket-table__col.ingr-col .c-check input").change(function () {
		$(".basket-table__select-all .c-check input").prop("checked", false);
	});
});
$(window)
	.bind("update_quantity", function () {
		$('[class*="-number-item"]').on("click", function (e) {
			let input = $(this).parent().find("input[type=number]"),
				val = input.val();
			console.log(val);
			$(this).is(".plus-number-item") ? val++ : 1 < val && val--;
			console.log(val);
			input.val(val);
			input.trigger("change");
			e.preventDefault();
		});
	})
	.trigger("update_quantity");
$(document).mouseup(function (e) {
	if (
		!$(".account-menu span").is(e.target) &&
		$(".account-menu span").has(e.target).length === 0
	) {
		$(".drop-down").slideUp("slow");
		$(".account-menu").removeClass("active");
	}
});
//# sourceMappingURL=index.js.map
