$(document).ready(function(){

	const mediaQuery = window.matchMedia('(max-width: 957px)')

	if (mediaQuery.matches) {
  			
		$( ".arrow" ).click(function() {
			$( ".arrow" ).hide();
			$( ".cross" ).show();
			$( ".navbar" ).show();
		});

		$( ".cross" ).click(function() {
			$( ".cross" ).hide();
			$( ".arrow" ).show();
			$( ".navbar" ).toggle();
		});

	}

})