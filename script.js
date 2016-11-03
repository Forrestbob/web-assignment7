$(document).ready(function(){
    $("#card-info").hide();
	$("#wire-info").hide();
	
	$("input").click(function(){
		console.log("buy!");
		if($('#credit').is(':checked')){
			$("#card-info").show();
			$("#wire-info").hide();
		}
		else if($('#wire').is(':checked')){
			$("#wire-info").show();
			$("#card-info").hide();
		}
	});
});

$( init );

function init() {
	$('li').draggable();
}



