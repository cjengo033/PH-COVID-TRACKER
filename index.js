window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/182')// api of the Philippines
	.then(function(resp) { 
		return resp.json() }
	     )
	.then(function(data) {
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 1000) 
}
