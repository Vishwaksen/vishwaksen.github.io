/*
  Author : Vishwaksen
*/

// Send Email
document.getElementById("myForm").addEventListener('submit', sendEmail);

function sendEmail(e){
//Get form values
var msg = document.getElementById("message").value;
console.log(msg);

// Prevent form from submitting
e.preventDefault();
}

// View Resume 
var view_resume = document.getElementById("view_resume");
view_resume.onclick = function(){
	window.open('https://drive.google.com/open?id=0B7I9_jGzeDDQS21QMFlJY0VJQkE','_blank');
}