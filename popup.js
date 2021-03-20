const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
var hostnamelink;
var valasz;



chrome.tabs.getSelected(null, function (tab) {
	var link = document.createElement('a');
	link.href = tab.url;
	console.log("Host: "+link.hostname);
	hostnamelink = link.hostname
	document.getElementById('hostname').innerHTML = "Ez a weboldal: "+hostnamelink
	Http.open("GET", 'https://neoncommunity.ml/api/v2/extension/oldalak/webapi');
	Http.send();
	Http.onreadystatechange = (e) => {
		console.log(Http.responseText)
		chrome.tabs.getSelected(null, function (tab) {
			var link = document.createElement('a');
			link.href = tab.url;
			console.log("Host: "+link.hostname);
			hostnamelink = link.hostname
			var clist = Http.responseText;
			kondi = clist.indexOf(hostnamelink);
			console.log(clist);
			console.log(hostnamelink);
			console.log(kondi);
			
			kondi = clist.indexOf(hostnamelink);
			console.log(kondi)
			
			chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
				console.log(request);
				// Callback for that request
				sendResponse({ message: "BOIIIIIIIIII" });
			});


			if (kondi === -1) {
				console.log("ez az oldal nem rossz");
				document.getElementById('joenekunk').innerHTML = "Oldal állapota: Nem tudunk lehetséges átverésről!";
			};
			if (kondi !== -1) {
				console.log("ez az oldal rossz");
				document.getElementById('joenekunk').innerHTML = "Oldal állapota: Átverést tartalmazhat!";
				
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
				});
			};
			


		});


	};


});

