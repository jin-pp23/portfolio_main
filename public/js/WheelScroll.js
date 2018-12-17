var WheelScroll = (function() {
	function WheelScroll(_opt) {
		var obj = this;
		if (_opt) {
			if (_opt.page) this.page = $(_opt.page);
			else this.page = $(".page");
			if (_opt.speed) this.speed = _opt.speed;
			else this.speed = 200;
		} else {
			this.page = $(".page");
			this.speed = 200;
			this.nav = null;
		}
		this.scTop = $(window).scrollTop();
		this.gap = [];
		this.oldNow = 0;
		this.now = 0;
		this.dir = 0;
		this.speedGap = 0;
		$(window).resize(function() {
			$(obj.page).each(function(i) {
				obj.gap[i] = $(this).offset().top;
			});
		}).trigger("resize");
		this.init(this);
		if (_opt.nav) this.navAdd(obj, _opt.nav);
	}
	WheelScroll.prototype.init = function(obj) {
		$(window).on("mousewheel DOMMouseScroll", wheelFn);

		function wheelFn(e) {
			e.preventDefault();
			e.stopPropagation();
			obj.dir = e.originalEvent.wheelDelta;
			obj.scTop = $(window).scrollTop();
			$(window).off("mousewheel DOMMouseScroll");
			for (var i = 0; i < obj.gap.length; i++) {
				if (obj.scTop <= obj.gap[i]) {
					obj.now = i;
					break;
				}
			}
			obj.oldNow = obj.now;
			if (obj.dir > 0) {
				if (obj.now > 0) obj.now--;
			} else {
				if (obj.now < obj.gap.length - 1) obj.now++;
			}
			obj.animation(obj, function() {
				$(window).on("mousewheel DOMMouseScroll", wheelFn);
				var aniFn = $(obj.page[obj.now]).data("fn");
				if (aniFn != undefined) {
					window[$(obj.page[obj.now]).data("fn")]();
				}
			});
		}
	}
	WheelScroll.prototype.navAdd = function(obj, navObj) {
		$(navObj).on("click", function() {
			obj.oldNow = obj.now;
			obj.now = $(this).data("now");
			obj.animation(obj, null);
		});
	}
	WheelScroll.prototype.animation = function(obj, fn) {
		obj.speedGap = Math.abs(obj.now - obj.oldNow);
		$("html, body").stop().animate({
			"scrollTop": obj.gap[obj.now] + "px"
		}, obj.speed * obj.speedGap, fn);
	}
	return WheelScroll;
}())
;

var chartChk = true;
function chartAni() {
	if (chartChk) {
		//원 그래프
		var data = [{
			datasets: [{
				data: [9, 1],
				backgroundColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderWidth: 1
			}]
		}, {

			datasets: [{
				data: [8, 2],
				backgroundColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderWidth: 1
			}]
		}, {

			datasets: [{
				data: [7, 3],
				backgroundColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderWidth: 1
			}]
		}, {

			datasets: [{
				data: [3, 7],
				backgroundColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderWidth: 1
			}]
		}, {

			datasets: [{
				data: [6, 4],
				backgroundColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderWidth: 1
			}]
		}, {

			datasets: [{
				data: [7, 3],
				backgroundColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderColor: [
					'rgba(235, 235, 235, 1)',
					'rgba(135, 145, 174, 1)'
				],
				borderWidth: 1
			}]
		}];

		var option = [{
			tooltips: {
				enabled: false
			},
			cutoutPercentage: 75,
			rotation: 1.5 * Math.PI,
			circumference: 2 * Math.PI,
			animation: {
				animateRotate: true,
				animateScale: true
			},
			legend: {
				display: false
			},
			reverse: false
		}, {
			tooltips: {
				enabled: false
			},
			cutoutPercentage: 75,
			rotation: -0.5 * Math.PI,
			circumference: 2 * Math.PI,
			animation: {
				animateRotate: true,
				animateScale: true
			},
			legend: {
				display: false
			}
		}, {
			tooltips: {
				enabled: false
			},
			cutoutPercentage: 75,
			rotation: -0.5 * Math.PI,
			circumference: 2 * Math.PI,
			animation: {
				animateRotate: true,
				animateScale: true
			},
			legend: {
				display: false
			}
		}, {
			tooltips: {
				enabled: false
			},
			cutoutPercentage: 75,
			rotation: -0.5 * Math.PI,
			circumference: 2 * Math.PI,
			animation: {
				animateRotate: true,
				animateScale: true
			},
			legend: {
				display: false
			}
		}, {
			tooltips: {
				enabled: false
			},
			cutoutPercentage: 75,
			rotation: -0.5 * Math.PI,
			circumference: 2 * Math.PI,
			animation: {
				animateRotate: true,
				animateScale: true
			},
			legend: {
				display: false
			}
		}, {
			tooltips: {
				enabled: false
			},
			cutoutPercentage: 75,
			rotation: -0.5 * Math.PI,
			circumference: 2 * Math.PI,
			animation: {
				animateRotate: true,
				animateScale: true
			},
			legend: {
				display: false
			}
		}];
		var chart = [];
		$(".chart").each(function(i) {
			$(this).css({
				"transform": "rotateY(180deg)"
			});
			chart[i] = new Chart($(this), {
				type: 'doughnut',
				data: data[i],
				options: option[i]
			});
		});
		chartAni = false;
	}
}
