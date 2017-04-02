onmessage = function(e) {
	console.log(e.data[0]);
	postMessage('dataaaa');
}