const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
var hostnamelink
console.log('content.js')
var szam = 1


	console.log("Host: "+location.host);
	hostnamelink = location.host
	Http.open("GET", 'https://neoncommunity.ml/api/v2/extension/oldalak/webapi');
	Http.send();	
	Http.onreadystatechange = (e) => {
		console.log(Http.responseText)
			console.log("Host: "+location.host);
			hostnamelink = location.host
			var clist = Http.responseText;
			var kondi = clist.indexOf(hostnamelink);
			console.log(clist);
			console.log(hostnamelink);
			console.log(clist['edigital.hu']);
			console.log(kondi);
			var kondi = clist.indexOf(hostnamelink);
			var onetime = 1
						
			if (kondi === -1) {
				console.log("ez az oldal nem rossz")
			}
			else {
			if (kondi === 0) {return} 
			else {
				console.log("ez az oldal rossz")
				

				var toolbarHeight = 30;

				var div = document.createElement("div");
				div.id = "myToolbar";
				div.textContent = "VIGYÁZZ! Ez a weboldal nagy valószínűséggel átverést tartalmazhat!";

				var st = div.style;
				st.display = "block";
				st.top = "0px";
				st.left = "0px";
				st.width = "100%";
				st.height = toolbarHeight + "px";
				st.background = "#e32b2b";
				st.color = "white";
				st.fontStyle = "comic-sans";
				st.position = "fixed";
				st.paddingTop = "9px";
				st.paddingLeft = "30%";
				st.paddingBottom = "15px";

				document.body.style.webkitTransform = "translateY(" + toolbarHeight + "px)";
				document.documentElement.appendChild(div);
			}
			}
			

		
	};