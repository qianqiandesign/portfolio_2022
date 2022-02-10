var hoverShake = hoverShake || {};

hoverShake.init = function(){
	this.shakeHandler('.rm1', 200, 5);
	this.shakeHandler('.rm2', 200, 5);
	this.shakeHandler('.rm3', 200, 5);
	this.shakeHandler('.rm4', 200, 5);
	this.shakeHandler('.rm5', 200, 5);
	this.shakeHandler('.rm6', 200, 5);
	this.shakeHandler('.rm7', 200, 5);
	this.shakeHandler('.rm8', 200, 5);
	this.shakeHandler('.rm9', 200, 5);
	this.shakeHandler('.rm10', 200, 5);

	this.shakeHandler('.store1', 200, 5);
	this.shakeHandler('.store2', 200, 5);
	this.shakeHandler('.store3', 200, 5);
	this.shakeHandler('.store4', 200, 5);
	this.shakeHandler('.store5', 200, 5);
	this.shakeHandler('.store6', 200, 5);
};


hoverShake.shakeHandler = function (myElement, speed, deg) {
	var myInterval;
	var myTimeout;
	$(myElement).mouseenter(function() {
		myInterval = setInterval(function() {
			$(myElement).css('transform', 'rotate('+deg+'deg)');
			myTimeout = setTimeout(function() {
				$(myElement).css('transform', 'rotate('+(360-deg)+'deg)');
			}, speed);
		}, speed * 2);
	});

	$(myElement).mouseleave(function() {
		clearInterval(myInterval);
		clearTimeout(myTimeout);
		$(myElement).css('transform', 'rotate(0deg)');
	});
};



var svgAnimation =  svgAnimation || {};

svgAnimation.animation_elements = $('.animation-element');
svgAnimation.window = $(window);

svgAnimation.init = function(){
	this.window.on('scroll resize', this.check_if_in_view);
	this.window.trigger('scroll');
};

svgAnimation.check_if_in_view = function () {
	var window_height = svgAnimation.window.height();
	var window_top_position = svgAnimation.window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each(svgAnimation.animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		} else {
			$element.removeClass('in-view');
		}
	});
};

var filter =  filter || {};

filter.data = {
	ramens : [
		{
			"image": "../images/unif1.png",
			"name": "Unif 100 Spicy Beef Flavor",
			"country": "China",
			"company": "Unif"
		},
		{
			"image": "../images/unif2.png",
			"name": "Unif 100 Furong Shrimp Flavor",
			"country": "China",
			"company": "Unif"
		},
		{
			"image": "../images/unif3.png",
			"name": "Unif 100 Stewed Pork Chop Flavor",
			"country": "China",
			"company": "Unif"
		},
		{
			"image": "../images/cqyd1.png",
			"name": "CQYD XO Sauce Seafood Flavour",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/cqyd2.png",
			"name": "CQYD Black Garlic Oil Pork",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/cqyd3.png",
			"name": "CQYD Miso Tonkotsu Pork Flavour",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/cqyd4.png",
			"name": "CQYD Prawn Flavour",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/cqyd5.png",
			"name": "CQYD Chicken Flavour",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/cqyd6.png",
			"name": "CQYD Beef Flavour",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/cqyd7.png",
			"name": "CQYD Tonkotsu Flavour",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/cqyd8.png",
			"name": "CQYD with Sesame Oil",
			"country": "HongKong",
			"company": "NISSIN"
		},
		{
			"image": "../images/mm1.png",
			"name": "MAMA Pork Flavour",
			"country": "Thailand",
			"company": "MAMA"
		},
		{
			"image": "../images/mm2.png",
			"name": "MAMA Shrimp Tom Yum",
			"country": "Thailand",
			"company": "MAMA"
		},
		{
			"image": "../images/mm3.png",
			"name": "MAMA Shrimp Flavour",
			"country": "Thailand",
			"company": "MAMA"
		},
		{
			"image": "../images/mm4.png",
			"name": "MAMA PA-LO Duck Flavour",
			"country": "Thailand",
			"company": "MAMA"
		},
		{
			"image": "../images/mm5.png",
			"name": "MAMA Chichen Flavour",
			"country": "Thailand",
			"company": "MAMA"
		},
		{
			"image": "../images/hwa.png",
			"name": "HWA Ramyun Hot & Spicy",
			"country": "Korea",
			"company": "HWA"
		},
		{
			"image": "../images/ancheng.png",
			"name": "ANSUNG TANG MYUN",
			"country": "Korea",
			"company": "NONGSHIM"
		},
		{
			"image": "../images/jml1.png",
			"name": "JML Spicy Beef Flavour",
			"country": "China",
			"company": "JML"
		},
		{
			"image": "../images/jml2.png",
			"name": "JML Spicy Stew Prok Flavour",
			"country": "China",
			"company": "JML"
		},
		{
			"image": "../images/jml3.png",
			"name": "JML Stew Beef Flavour",
			"country": "China",
			"company": "JML"
		}
	]
};

filter.init = function(){
	var filterButton = $('.filter_button');

	this.render(this.data);

	filterButton.click(this.filterHandler);
};


filter.render = function (data){
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var html = template(data);
	$('.product_row').fadeOut('slow',function() {
		$(this).html(html);
		$(this).fadeIn('slow')
	});
};



filter.filterHandler = function (){
	var filterText = $(this).text().toLowerCase();

	var newData = {};
	var newRamens = [];
	var ramen;

	if (filterText === 'all country'){
		filter.render(filter.data);
	}else {
		for(var i = 0; i < filter.data.ramens.length; i++ ){
			ramen = filter.data.ramens[i];
			if(ramen && ramen.country){
				if(ramen.country.toLowerCase() === filterText){
					newRamens.push(ramen);
				}
			}else {
				console.log("this ramen object doesn't has country");
			}
		}

		newData.ramens = newRamens;

		filter.render(newData);
	}
};

