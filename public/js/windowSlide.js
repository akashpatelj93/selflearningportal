$(document).ready(function(){
	
    $(".supportButton").click(function(){
	
	    $("#feedback").animate({top:"69px"});

        $("#speaker-content").slideUp("slow",function(){
  		  $("#speaker-content").show("slow");
  		  $(".supportButton").attr("disabled","disabled");

  		});
        $("#chatwindow").slideUp("slow",function(){
  		  $("#chatwindow").show("slow");
    		$("#chatwindow").css({
      			"margin-top":"0px"
      		});
  		});
		$('.icon_help').stop(true,true).animate({
                            'top':'-15px'
                        }, 400);
		$('.rightSide').stop(true,true).animate({
                            'top':'-2px'
                        }, 400);
        return false;						
    });
	
   $(".endCall, .customClose").click(function(){
          $("#speaker-content").slideDown("slow",function(){
		  $("#speaker-content").hide("slow");
		  $("#chatwindow").hide("slow");
		  $(".supportButton").removeAttr("disabled");
		  $( "#messagewindow" ).empty();
		  $("#feedback").animate({top:"-411px"});
		});			
    });	
	
});	