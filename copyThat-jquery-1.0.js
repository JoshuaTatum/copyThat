$("html").css('cursor', 'url(rsc/cursor.png),  auto');
$("html").css('cursor', 'url(rsc/cursor.ico),  auto');

var audio = new Audio('rsc/copyThat.ogg');

$(document).ready(function() {
 
	$("body").bind({
		copy : function(){
			audio.play();
		}
	});
 
});	
