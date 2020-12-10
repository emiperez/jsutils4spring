var jsUtilsDialogDiv;
var jsUtilsDialogTitleDiv;
var jsUtilsDialogTextDiv;

getAjaxMessage = function(msgCode, callback) {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "/get-localized-message/" + msgCode);
		xhr.send();
		xhr.onload = function() {
			callback(xhr.responseText);
		};
}

waitingDotsEffect = function(current, maxDots) {
	return ".".repeat(current%maxDots + 1);
}

jsUtilsAlert = function(titleMsgCode, msgCode) {
	getAjaxMessage(titleMsgCode, function(msg) {
		jsUtilsDialogTitleDiv.innerHTML = msg;
	});
	getAjaxMessage(msgCode, function(msg) {
		jsUtilsDialogTextDiv.innerHTML = msg;
	});
	jsUtilsDialogDiv.style.display = 'block';
}

window.addEventListener("load", function() {

	jsUtilsDialogDiv = document.getElementById("jsutils-dialog-wrapper");
	jsUtilsDialogTitleDiv = document.getElementById("jsutils-dialog-title");
	jsUtilsDialogTextDiv = document.getElementById("jsutils-dialog-text");
	

	
	document.getElementById("jsutils-dialog-close").addEventListener("click", function() {
		jsUtilsDialogDiv.style.display = 'none';
	});

});