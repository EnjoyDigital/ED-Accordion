/* globals $ */
/* jshint browser: true, devel: true */
$.fn.edAccordion = function (options) {
	'use strict';
	var settings = $.extend({ 'customClass': '', 'closeAll': false }, options);

	return this.each(function () {

		var $accordion = $(this);

		$accordion.click(function() {

			var parent = $accordion.parent();
			var all_items = parent.siblings();
			var content = $accordion.siblings('.content');
			var offset = parent.offset().top;

			if(settings.closeAll){
				$.each(all_items, function(){
					$(this).removeClass('open');
					$('.content', $(this)).slideUp();
				});

				parent.addClass('open');
				content.slideDown(300);
			}else{
				if(parent.hasClass('open')){
					parent.removeClass('open');
					content.animate({ opacity: 0 }, 300, 'swing', function(){
						content.slideUp(300);
					});
				} else {
					content.css({ opacity: 0 });
					parent.addClass('open');
					content.slideDown(300, function(){
						content.animate({ opacity: 1 }, 300);
					});
				}
			}

		});

	});
};
