window.onload = function preload(){

	ImageArray = ['public/contact.jpeg','public/intro.jpeg']
	ContactImage = new Image()
	IntroImage = new Image()

	ContactImage.src =ImageArray[0];
	IntroImage.src= ImageArray[1];
	
	imageLoad()
		


	$(window).on('scroll', function () {
	    imageLoad()
	});
}

$(document).ready(

	function formsubmit(){
		console.log('redy')
	}

)


/// helper functions

function imageLoad(){
	var scrollTop     = $(window).scrollTop(), // 
	    elementOffset = $('.strip2').offset().top,
		distance      = (elementOffset - scrollTop);

	    if (distance < 0) {
			$('body').css('background-image', 'url('+ IntroImage.src +')');
		}
		else{
			$('body').css('background-image', 'url('+ ContactImage.src +')');
	}
}