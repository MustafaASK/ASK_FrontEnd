

var oDoc, sDefTxt;

function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
 //alert("Uncheck \"Show HTML\".");
// oDoc.focus();
  return false;
}




/*
function ValidateFileUpload(){
	var fuData = document.getElementById('fileChooser');
	var FileUploadPath = fuData.value;
	
	if(FileUploadPath == ''){
		alert("please upload an image");
		
	}
	else{
		var Extension = FileUploadPath.substring(
				FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
		if(Extension == "gif" || Extension =="png" || Extension == "bmp" || Extension == "jpeg" ||Extension =="jpg"){
			if(fuData.files[0].size < 1024 * 300){
				if(fuData.files && fuData.files[0]){
					
					var reader = new FileReader();
					reader.onload = function(e){
						$('#blah').attr('src',e.target.result);
					}
					reader.readAsDataURL(fuData.files[0]);
				}
			}else{
				$("#fileChooser").replaceWith($("#fileChooser").val('').clone(true));
				alert("System allows uploading ONLY maximum of 300 KB size of file. ");
			}
			}
		else{
			$("#fileChooser").replaceWith($("#fileChooser").val('').clone(true));
			alert("System allows uploading of ONLY JPG, GIF or PNG file format. ");
		}
		
		
	}

}
*/


var oDocnew, sDefTxtnew;

function initDocnew() {
  oDocnew = document.getElementById("textBoxnew");
  sDefTxtnew = oDocnew.innerHTML;
  if (document.compFormnew.switchModenew.checked) { setDocModenew(true); }
}

function formatDocnew(sCmd, sValue) {
  if (validateModenew()) { document.execCommand(sCmd, false, sValue); oDocnew.focus(); }
}

function validateModenew() {
  if (!document.compFormnew.switchModenew.checked) { return true ; }
 //alert("Uncheck \"Show HTML\".");
// oDoc.focus();
  return false;
}
















function myFunction() {
    document.getElementById("em").disabled = false;
    document.getElementById("ph").disabled = false;
    document.getElementById("ji").disabled = false;
    document.getElementById("jt").disabled = false;
    document.getElementById("hc").disabled = false;
    document.getElementById("wl").disabled = false;
    document.getElementById("pr").disabled = false;
    document.getElementById("br").disabled = false;
    document.getElementById("or").disabled = false;
    document.getElementById("obr").disabled = false;
}







