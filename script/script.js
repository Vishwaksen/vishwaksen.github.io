/*
  Author : Vishwaksen
*/

$(document).ready(function(){
	myForm.trigger("reset");
});


/*// View Resume 
var view_resume = document.getElementById("view_resume");
view_resume.onclick = function(){
	window.open('https://drive.google.com/open?i','_blank');
}*/

// Handles the E-mail Functionality
$(document).ready(function(){
	$(".send_mail_button").click(function(){
		var myForm = $(".contact_form");
		var from_name = $("#email_name").val();
		var email_id = $("#email_id").val();
		var email_content = $("#email_content").val();

		if(from_name == ""){
			alert("Please Enter your Name");
		}
		if(email_id == ""){
			alert("Please Enter your Email ID");
		}
		if(email_content == ""){
			alert("Please Enter your message before sending the Email");
		}

		var email_json = {
			"to_name" : "Vishwaksen",
			"from_name" : from_name,
			"reply_to" : email_id,
			"message_html" : email_content
		}
		var service_id="default_service";
		var template_id="my_email_template";
		emailjs.send("service_id","template_id");
		myForm.find("button").text("Sending...");
		emailjs.send(service_id,template_id,email_json)
  			.then(function(){ 
       		alert("Email Sent Successfully!");
       myForm.find("button").text("Send");
       myForm.trigger("reset");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myForm.find("button").text("Send");
       myForm.trigger("reset");
    });
  return false;
	});
});