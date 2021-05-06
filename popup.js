const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
var hostnamelink;
var valasz;

// a console logok a debugginkhoz kellettek

var button = document.getElementById("repogomb");
button.addEventListener("click", function(){
    chrome.tabs.create({url:"https://neoncommunity.hu/extension/index.php"});
});

chrome.tabs.getSelected(null, function (tab) {
	
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		
		let url = tabs[0].url;
		// console.log(url)
		
		
		function popping() {
			var index_url = "https://neoncommunity.hu/extension/requestpage.php?linkie=" + url;
			window.open(index_url, 'Popup Window', 'width=392,height=362,location=yes,scrollbars=yes');
		}
	
		document.getElementById('jelentogomb').addEventListener("click", popping);
		
	});
	
})


chrome.tabs.getSelected(null, function (tab) {
	var link = document.createElement('a');
	link.href = tab.url;
	// console.log("Host: "+link.hostname);
	hostnamelink = link.hostname
	document.getElementById('hostname').innerHTML = "Ez a weboldal: "+hostnamelink
	Http.open("GET", 'https://neoncommunity.hu/api/v2/extension/oldalak/webapi');
	Http.send();
	Http.onreadystatechange = (e) => {
		console.log(Http.responseText)
		chrome.tabs.getSelected(null, function (tab) {
			var link = document.createElement('a');
			link.href = tab.url;
			// console.log("Host: "+link.hostname);
			hostnamelink = link.hostname
			var clist = Http.responseText;
			kondi = clist.indexOf(hostnamelink);
			// console.log(clist);
			// console.log(hostnamelink);
			// console.log(kondi);
			
			kondi = clist.indexOf(hostnamelink);
			// console.log(kondi)
			
			chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
				// console.log(request);
				// Callback for that request
				sendResponse({ message: "BOIIIIIIIIII" });
			});

			if (kondi === 0) {
				// console.log("ez az oldal nem rossz");
				document.getElementById('joenekunk').innerHTML = "Oldal állapota: Ez egy file nagy valószínűséggel.";
				// document.getElementById('jelentes').innerHTML = '<button id="btn" name="btn">Az oldal jelentése</button>';	
				return;
			
			};
			
			if (kondi === -1) {
				// console.log("ez az oldal nem rossz");
				document.getElementById('joenekunk').innerHTML = "Oldal állapota: Nem tudunk lehetséges átverésről!";
				// document.getElementById('jelentes').innerHTML = '<button id="btn" name="btn">Az oldal jelentése</button>';	
				
			};
			if (kondi !== -1) {
				// console.log("ez az oldal rossz");
				document.getElementById('joenekunk').innerHTML = "Oldal állapota: Átverést tartalmazhat!";
				// document.getElementById('joenekunk').innerHTML = "Register Here";
				// document.getElementById('joenekunk').setAttribute ("href");
				
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
				});
			};
			


		});


	};


});

