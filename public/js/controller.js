//
//  controller.js
//
WS_URL = "ws://192.168.1.192:8081";
//WS_URL = "ws://localhost:8081";
WEB_SOCKET_SWF_LOCATION = "js/WebSocketMain.swf";

var global = this;

$(document).ready(function(){

	function debug(message) {
		html = "<p><span class='time'>"+new Date()+"</span>"+message+"</p>"
		$("#debug").append(html);
	}

	debug("connecting to "+WS_URL+"...");
	ws = new WebSocket(WS_URL);

	ws.onopen = function() {
		debug("connected.");

		text = "+7776FU\n";
		ws.send(text);
		debug("message sent: "+text);
	}

	ws.onclose = function() {
		debug("disconnected...");
	}

	ws.onerror = function(msg) {
		debug("failed to connect："+msg);
	}

	ws.onmessage = function(event) {
		debug("message received: "+event.data);
		$("#message").append("<p>"+event.data+"</p>");
	}

	function sendMessage(data) {
		ws.send(data);
	}

	global.submitMessage = function() {
		var input = $("#input");
		if(input.val() != "") {
ws.send(input.val() + "\n");
			input.val("");
		}
		return false;
	}
});
