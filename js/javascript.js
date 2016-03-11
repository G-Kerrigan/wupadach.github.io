$(document).ready(function(){
/*---------------------------------material js---------------------------------*/
	$(".button-collapse").sideNav();

	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: true, // Does not change width of dropdown to that of the activator
		hover: true, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: true, // Displays dropdown below the button
		alignment: 'left' // Displays dropdown with edge aligned to the left of button
		}
	);

	$('select').material_select();
/*---------------------------------material js---------------------------------*/

/*---------------------------------owl js---------------------------------*/
var owl = $("#partner-carousel");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 7],
        [700, 9],
        [1000, 10],
        [1200, 12],
        [1400, 13],
        [1600, 15]
      ],
      navigation : false,
      autoPlay: 3000,
 
  });
/*---------------------------------owl js---------------------------------*/

/*---------------------------------change header on scroll---------------------------------*/
$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 50) {
        $(".headerNavigation").css({"background-color":"rgba(0,0,0,0.9)", "transition":"all 0.5s ease","position":"fixed","border-bottom":"none"});
    }else {
        $(".headerNavigation").css({"background":"rgba(0, 0, 0, 0.3)","transition":"all 0.5s ease","position":"fixed;","border-bottom":"1px solid rgba(128,128,128,0.5)"});
    }
});
/*---------------------------------change header on scroll---------------------------------*/

/*---------------------------------main menu search bar---------------------------------*/
$('.clearMMsrch').click(function(){
    var value = $('#MMSRCHinp').val();
    if (value > '') {
      $('#MMSRCHinp').val('');
    }else {

      $('.MMsearchWRP').animate({
        marginTop: -156
      },500, 'easeOutQuart', function(){ $('.MMsearchWRP').hide(); });
      
    }
  });//clear input

  $('.tpBarBtnS').click(function(){

    if ($('.MMsearchWRP').css('display') == 'none') {

      $('.MMsearchWRP').show();
      $('.MMsearchWRP').animate({
        marginTop: 0
      }, {
        duration: 500,
        easing: "easeOutExpo"
      });

    }else {
      
      $('.MMsearchWRP').animate({
        marginTop: -156
      },500, 'easeOutQuart', function(){ $('.MMsearchWRP').hide(); });
    }

  });
/*---------------------------------main menu search bar---------------------------------*/

	
});



