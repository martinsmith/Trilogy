/*
	Kwicks for jQuery (version 1.5.1)
	Copyright (c) 2008 Jeremy Martin
	http://www.jeremymartin.name/projects.php?project=kwicks
	
	Licensed under the MIT license:
		http://www.opensource.org/licenses/mit-license.php

	Any and all use of this script must be accompanied by this copyright/license notice in its present form.
*/

(function($){
	$.fn.kwicks = function(options) {
		var defaults = {
			isVertical: false,
			sticky: false,
			defaultKwick: 0,
			event: 'mouseover',
			spacing: 0,
			duration: 500
		};
		var o = $.extend(defaults, options);
		var WoH = (o.isVertical ? 'height' : 'width'); // WoH = Width or Height
		var LoT = (o.isVertical ? 'top' : 'left'); // LoT = Left or Top
		
		return this.each(function() {
			container = $(this);
			var kwicks = container.children('li');
			var normWoH = kwicks.eq(0).css(WoH).replace(/px/,''); // normWoH = Normal Width or Height
			if(!o.max) {
				o.max = (normWoH * kwicks.size()) - (o.min * (kwicks.size() - 1));
			} else {
				o.min = ((normWoH * kwicks.size()) - o.max) / (kwicks.size() - 1);
			}
			// set width of container ul
			if(o.isVertical) {
				container.css({
					width : kwicks.eq(0).css('width'),
					height : (normWoH * kwicks.size()) + (o.spacing * (kwicks.size() - 1)) + 'px'
				});				
			} else {
				container.css({
					width : (normWoH * kwicks.size()) + (o.spacing * (kwicks.size() - 1)) + 'px',
					height : kwicks.eq(0).css('height')
				});				
			}

			// pre calculate left or top values for all kwicks but the first and last
			// i = index of currently hovered kwick, j = index of kwick we're calculating
			var preCalcLoTs = []; // preCalcLoTs = pre-calculated Left or Top's
			for(i = 0; i < kwicks.size(); i++) {
				preCalcLoTs[i] = [];
				// don't need to calculate values for first or last kwick
				for(j = 1; j < kwicks.size() - 1; j++) {
					if(i == j) {
						preCalcLoTs[i][j] = o.isVertical ? j * o.min + (j * o.spacing) : j * o.min + (j * o.spacing);
					} else {
						preCalcLoTs[i][j] = (j <= i ? (j * o.min) : (j-1) * o.min + o.max) + (j * o.spacing);
					}
				}
			}
			
			// loop through all kwick elements
			kwicks.each(function(i) {
				var kwick = $(this);
				// set initial width or height and left or top values
				// set first kwick
				if(i === 0) {
					kwick.css(LoT, '0px');
				} 
				// set last kwick
				else if(i == kwicks.size() - 1) {
					kwick.css(o.isVertical ? 'bottom' : 'right', '0px');
				}
				// set all other kwicks
				else {
					if(o.sticky) {
						kwick.css(LoT, preCalcLoTs[o.defaultKwick][i]);
					} else {
						kwick.css(LoT, (i * normWoH) + (i * o.spacing));
					}
				}
				// correct size in sticky mode
				if(o.sticky) {
					if(o.defaultKwick == i) {
						kwick.css(WoH, o.max + 'px');
						kwick.addClass('active');
					} else {
						kwick.css(WoH, o.min + 'px');
					}
				}
				kwick.css({
					margin: 0,
					position: 'absolute'
				});
				
				kwick.bind(o.event, function() {
					// calculate previous width or heights and left or top values
					var prevWoHs = []; // prevWoHs = previous Widths or Heights
					var prevLoTs = []; // prevLoTs = previous Left or Tops
					kwicks.stop().removeClass('active');
					for(j = 0; j < kwicks.size(); j++) {
						prevWoHs[j] = kwicks.eq(j).css(WoH).replace(/px/, '');
						prevLoTs[j] = kwicks.eq(j).css(LoT).replace(/px/, '');
					}
					var aniObj = {};
					aniObj[WoH] = o.max;
					var maxDif = o.max - prevWoHs[i];
					var prevWoHsMaxDifRatio = prevWoHs[i]/maxDif;
					kwick.addClass('active').animate(aniObj, {
						step: function(now) {
							// calculate animation completeness as percentage
							var percentage = maxDif != 0 ? now/maxDif - prevWoHsMaxDifRatio : 1;
							// adjsut other elements based on percentage
							kwicks.each(function(j) {
								if(j != i) {
									kwicks.eq(j).css(WoH, prevWoHs[j] - ((prevWoHs[j] - o.min) * percentage) + 'px');
								}
								if(j > 0 && j < kwicks.size() - 1) { // if not the first or last kwick
									kwicks.eq(j).css(LoT, prevLoTs[j] - ((prevLoTs[j] - preCalcLoTs[i][j]) * percentage) + 'px');
								}
							});
						},
						duration: o.duration,
						easing: o.easing
					});
				});
			});
			if(!o.sticky) {
				container.bind("mouseleave", function() {
					var prevWoHs = [];
					var prevLoTs = [];
					kwicks.removeClass('active').stop();
					for(i = 0; i < kwicks.size(); i++) {
						prevWoHs[i] = kwicks.eq(i).css(WoH).replace(/px/, '');
						prevLoTs[i] = kwicks.eq(i).css(LoT).replace(/px/, '');
					}
					var aniObj = {};
					aniObj[WoH] = normWoH;
					var normDif = normWoH - prevWoHs[0];
					kwicks.eq(0).animate(aniObj, {
						step: function(now) {
							var percentage = normDif != 0 ? (now - prevWoHs[0])/normDif : 1;
							for(i = 1; i < kwicks.size(); i++) {
								kwicks.eq(i).css(WoH, prevWoHs[i] - ((prevWoHs[i] - normWoH) * percentage) + 'px');
								if(i < kwicks.size() - 1) {
									kwicks.eq(i).css(LoT, prevLoTs[i] - ((prevLoTs[i] - ((i * normWoH) + (i * o.spacing))) * percentage) + 'px');
								}
							}
						},
						duration: o.duration,
						easing: o.easing
					});
				});
			}
		});
	};
})(jQuery);


$(function () {
	//Hides the Slide Images and Panel Texts for Preloading
	$('.kwickimage').hide();	
	$('.kwickcaption').hide();
	$('.captionhover').hide();
	$('.kwickshadow').hide();
	var slidenos = $('.kwickimage').length;	
});
var i;
$(window).bind("load", function() {
	//Preload
	var slidenos = $('.kwickimage').length;
		$('.kwickimage:hidden').fadeIn(800);
		$(".kwicks.horizontal li").css('background', '#151515');		
		$('.kwickcaption').show();
		$('.captionhover').show();
		$('.kwickshadow').show();
});

$(function(){
	//Hide all Captions and Mini Captions
	$(".captionhover").fadeTo(1, 0);
	$(".kwickcaption").fadeTo(1, 0.7);

	//On hover of a Kwick Panel
	//The Following Block is repeated for every Kwick Panel added
	//Basically It Hides the mini captions - Shows the hovered Panel with Full Caption and Fades the rest.
	//On Mouse Out it resets things back with mini captions
	//If you Add another Panel Simply Duplicate this block with additional #kwick panel
	$('#kwick1').hover(function() {
		$(".kwickcaption").stop().fadeTo("fast", 0);	// Hide Small Caption
		$('#kwick1 .captionhover').stop().fadeTo("slow", 0.7);	// Show Fullcaption with Heading
		$("#kwick1 .kwickimage").stop().fadeTo("slow", 1);	// Show Image in without transparency
		$("#kwick2 .kwickimage,#kwick3 .kwickimage,#kwick4 .kwickimage").stop().fadeTo("slow", 0.3);	// Fade the rest of the kwich panels
	},function(){
		$('.captionhover').stop().fadeTo("slow", 0);	// Hide fullcaption on mouse out
		$(".kwickcaption").stop().fadeTo("slow", 0.7);	// Show minicaption
		$(".kwickimage").stop().fadeTo("slow", 1);	// Show all kwicks wihout transparency again
	});
	
	$('#kwick2').hover(function() {
		$(".kwickcaption").stop().fadeTo("slow", 0);
		$('#kwick2 .captionhover').stop().fadeTo("slow", 0.7);
		$("#kwick2 .kwickimage").stop().fadeTo("slow", 1);
		$("#kwick1 .kwickimage,#kwick3 .kwickimage,#kwick4 .kwickimage,#kwick5 .kwickimage").stop().fadeTo("slow", 0.3);
	},function(){
		$('.captionhover').stop().fadeTo("slow", 0);
		$(".kwickcaption").stop().fadeTo("slow", 0.7);
		$(".kwickimage").stop().fadeTo("slow", 1);	
	});
	
	$('#kwick3').hover(function() {
		$(".kwickcaption").stop().fadeTo("slow", 0);
		$('#kwick3 .captionhover').stop().fadeTo("slow", 0.7);
		$("#kwick3 .kwickimage").stop().fadeTo("slow", 1);
		$("#kwick1 .kwickimage,#kwick2 .kwickimage,#kwick4 .kwickimage,#kwick5 .kwickimage").stop().fadeTo("slow", 0.3);
	},function(){
		$('.captionhover').stop().fadeTo("slow", 0);
		$(".kwickcaption").stop().fadeTo("slow", 0.7);
		$(".kwickimage").stop().fadeTo("slow", 1);	
	});
	
	$('#kwick4').hover(function() {
		$(".kwickcaption").stop().fadeTo("slow", 0);
		$('#kwick4 .captionhover').stop().fadeTo("slow", 0.7);
		$("#kwick4 .kwickimage").stop().fadeTo("slow", 1);
		$("#kwick1 .kwickimage,#kwick2 .kwickimage,#kwick3 .kwickimage,#kwick5 .kwickimage").stop().fadeTo("slow", 0.3);
	},function(){
		$('.captionhover').stop().fadeTo("slow", 0);
		$(".kwickcaption").stop().fadeTo("slow", 0.7);
		$(".kwickimage").stop().fadeTo("slow", 1);
	});
	
	$('#kwick5').hover(function() {
		$(".kwickcaption").stop().fadeTo("slow", 0);
		$('#kwick5 .captionhover').stop().fadeTo("slow", 0.7);
		$("#kwick5 .kwickimage").stop().fadeTo("slow", 1);
		$("#kwick1 .kwickimage,#kwick2 .kwickimage,#kwick3 .kwickimage,#kwick4 .kwickimage").stop().fadeTo("slow", 0.3);
	},function(){
		$('.captionhover').stop().fadeTo("slow", 0);
		$(".kwickcaption").stop().fadeTo("slow", 0.7);
		$(".kwickimage").stop().fadeTo("slow", 1);
	});
});