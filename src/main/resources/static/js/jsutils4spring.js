var jsUtilsDialogWrapperDiv;
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
	return ".".repeat(current % maxDots + 1);
}

jsUtilsAlert = function(titleMsgCode, msgCode) {
	getAjaxMessage(titleMsgCode, function(msg) {
		jsUtilsDialogTitleDiv.innerHTML = msg;
	});
	getAjaxMessage(msgCode, function(msg) {
		jsUtilsDialogTextDiv.innerHTML = msg;
	});
	jsUtilsDialogWrapperDiv.style.display = 'block';
}

window.addEventListener("load", function() {

	jsUtilsDialogWrapperDiv = document.getElementById("jsutils-dialog-wrapper");
	jsUtilsDialogTitleDiv = document.getElementById("jsutils-dialog-title");
	jsUtilsDialogTextDiv = document.getElementById("jsutils-dialog-text");

	document.getElementById("jsutils-dialog-close").addEventListener("click", function() {
		closeAlert();
	});
	
	jsUtilsDialogWrapperDiv.addEventListener("click", function(e) {
		if (e.target === jsUtilsDialogWrapperDiv) {
			closeAlert();
		}
	})

	window.onkeyup = function(event) {
		if (event.keyCode == 27) {
			closeAlert()
		}
	}
	
	function closeAlert() {		
			jsUtilsDialogWrapperDiv.style.display = "none";
	}

});