$(document).ready(function() {
			$(".btn-ricardo").click(function() {
				$(".btn-ricardo").hide();
			});
			$(".btn-ricardo").click(function() {
				$(".social-box-ricardo").fadeIn();
			});
		});

		$(document).ready(function() {
			$(".btn-alberto").click(function() {
				$(".btn-alberto").hide();
			});
			$(".btn-alberto").click(function() {
				$(".social-box-alberto").fadeIn();
			});
		});

		$(document).ready(function() {
			$(".btn-alva").click(function() {
				$(".btn-alva").hide();
			});
			$(".btn-alva").click(function() {
				$(".social-box-alva").fadeIn();
			});
		});

		$(function() {
			$('#scroll-top').click(function() {
				$('html, body').animate({
					scrollTop: 0.2
				}, 600);
				return false;
			});
		});

		$(".menu-mobile").click(function() {
			$(".list-nav").toggleClass("open_menu");
			$(".menu-mobile").hide();
		});

		$(document).mouseup(function(e) {
			var $target = $(e.target);
			if ($target.closest(".list-nav").length == 0 && $target.closest(".menu-mobile").length == 0) {
				$(".list-nav").removeClass("open_menu");
				$(".menu-mobile").fadeIn();
			}
		});