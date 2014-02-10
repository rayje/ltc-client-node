var sys = require("sys"),
    http = require("http"),
    url = require("url");

var host = process.argv[2];
var path = process.argv[3]
var runtime = parseInt(process.argv[4]);

var intervalId = setInterval(function() {
	// start time
	var t1 = process.hrtime();

	http.get(host + ":8080" + path, function(res) {
	    // capture duration
	    var t2 = process.hrtime(t1);
	    console.log(t2[0]/1000000000 + t2[1]);
	});

}, 10000);

setTimeout(function() {
	clearInterval(intervalId);
	process.exit(0);
}, 1000 * 60 * runtime + 1000);