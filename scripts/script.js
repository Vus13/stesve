/* if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
      WebView.setWebContentsDebuggingEnabled(true);
  }
*/


var image;

//Ny var til at holde base64 v?rdien
var imageBase64;

// start of camera function	
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
    imageBase64 = 'base64:picture.jpg//' + imageData;
			// pas p? / ! 
}

function onFail(message) {
    alert('Failed because: ' + message);
}
$(document).ready(function() {
	$('#takePicture').click(function () {
		$('#showAfterImage').show();
		$('#beforeImg').hide();	
		}
);
});


sendMail.onclick = function mail() {
	var telNr =($("#tel").val() );
	console.log(telNr);
	window.plugins.email.open({
	to:     			['lhg@mediqdanmark.dk'],
	bcc:				['claus.valloe@gmail.com'],
    subject: 		'Email sendt fra Mediq Danmark App',
    body:   			"<p><strong>Hej</p></strong><br><br><p>Hermed et billede af den grønne ordination<br><br>Patientens telefon nr. er: " + telNr + "<br><br>Med Venlig Hilsen.<br><br>",
    isHtml:  		true,
	attachments: 	[imageBase64]//absolute://storage/emulated/0/DCIM/Camera/test.jpg	
});
}
