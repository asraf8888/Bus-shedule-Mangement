$(document).ready(function(){
	
	if(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(success);
	else
		$("p").html("html not supported");
});

function success(position)
         {
			 $("p").html("Latitude: "+position.coords.latitude+"<br> 
			 Longiitude:"+position.coords.latitude "<br> 
			 Accuracy:"+position.coords.accuracy);
		 }