var xmlhttp = new XMLHttpRequest();

function getOutlet(long, lat) {
	var url = encodeURI(`http://localhost:8000/geo-location?long=${long}&lat=${lat}`);
	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var outlet = JSON.parse(this.responseText);
			document.getElementById("results").innerHTML = outlet.outlet_identifier;
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function serchAddress() {
	var address = document.getElementById("address").value;
	var url = encodeURI("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address);

	xmlhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var locations = JSON.parse(this.responseText);
			getOutlet(locations[0].lon, locations[0].lat);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}