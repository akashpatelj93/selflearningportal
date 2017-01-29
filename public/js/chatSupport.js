var chat = "";

var recognizer = new webkitSpeechRecognition();
var jsonArray;
var jsonObj;
var isPlayingOn=true;

setInterval(function()
{ 
	if(isPlayingOn==false)
	{
		if(phoneOn == true)
		{
			recognizer.start();
			//alert("recording started...");
		}
	}
}, 5000);

var parameters = {
    onstart: voiceStartCallback,
    onend: voiceEndCallback
}

	
function voiceStartCallback() { 
   recognizer.stop();
   isPlayingOn=true;
}
 
function voiceEndCallback() {
	if(phoneOn == true)
	{
		recognizer.start();
		isPlayingOn=false;
	}
}
	
function askQuestion() {
	isPlayingOn=false;
    // Rest call to populate questions and answers
    var AssessKey = sessionStorage.getItem('ASSESSS_KEY')
        //console.log("AssessKey : "+AssessKey)
    $.ajax({
        url: APP_URL + "getChatSupport/" + AssessKey,
		headers: {
            "userId": sessionStorage.getItem('userID'),
            "userName": sessionStorage.getItem("uname")
        }
    }).complete(function(data) {
        jsonArray = JSON.stringify(data.responseJSON.csdata);

        jsonObj = JSON.parse(jsonArray);
    });

    chat = "How can I assist you?";
    $('<p class="bubbleBlue you">' + chat + '</p>').appendTo('#messagewindow');

    recognizer.continuous = false;
    recognizer.interimResults = false;
    recognizer.lang = "en";

    while (true) {

        if (phoneOn == true) {
            recognizer.start();

            recognizer.onstart = function() {
				//isPlayingOn=true;				
            };

            recognizer.onend = function() {
				//isPlayingOn=false;			              
            };

            recognizer.onerror = function(event) {

            }

            recognizer.onresult = function(event) {
				
				$('#messagewindow').animate({
                    scrollTop: $('#messagewindow')[0].scrollHeight
                }, 500);
                $('#chatwindow').animate({
                    scrollTop: $('#chatwindow')[0].scrollHeight
                }, 500);


                if (event.results.length > 0) {
														
                    var result = event.results[event.results.length - 1];
                    if (result.isFinal) {
                        var temp = result[0].transcript;

                        $("<p  class='bubbleBlue you'>" + temp + "</p>").appendTo('#messagewindow');

                        $("<p  class='bubbleBlue you'>" + "Preparing the response....." + "</p>").appendTo('#messagewindow');

                        $.ajax({
                            url: APP_URL + "predictQuestion?name=" + temp,
							headers: {
								"userId": sessionStorage.getItem('userID')
							},							
							error:function(){
								$("<p  class='bubbleBlue you' style='color: #f70000;'>There seems to be some network issue. Please retry later.</p>").appendTo('#messagewindow');
								responsiveVoice.speak("There seems to be some network issue. Please retry later.");
								}
                        }).complete(function(data) {

                            // Code to fetch value for key data.responseJSON.id
                            var questionCode = JSON.stringify(data.responseJSON.id);
                            questionCode = questionCode.substr(1, questionCode.indexOf(".") - 1);									

                            for (var ctr = 0; ctr < jsonObj.length; ctr++) {
                                if (jsonObj[ctr].key == questionCode) {
									if(phoneOn == true)
									{
										responsiveVoice.speak(jsonObj[ctr].value, 'UK English Female', parameters);
										$("<p  class='bubbleBlue you'>" + jsonObj[ctr].value + "</p>").appendTo('#messagewindow');
									}
                                }
                            }                

                        });
								

                        //responsiveVoice.speak(answer);
                        //$("<p  class='bubbleBlue you'>" + answer + "</p>").appendTo('#messagewindow');

                        temp = "";
                        result = "";
                    }
                }
            };
        }
    }

}