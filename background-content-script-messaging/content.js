console.log("I'm from background and content communication extension");

chrome.runtime.onMessage.addListener(message => {
	console.log(message);
});
