// search google for meaning of words
if (window.Worker) {
	console.log('crawlerWorker...');
		var crawlerWorker = new Worker('worker.js')
		window.onclick = function() {
			var selectedObj = this.getSelection
			console.log(selectedObj.toString());
		}
		crawlerWorker.postMessage(['message'])

	crawlerWorker.onmessage = function(e) {
		console.log(e.data)
	}
}