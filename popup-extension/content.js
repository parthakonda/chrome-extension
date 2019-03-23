console.log("Hey, i'm from popup");

chrome.runtime.onMessage.addListener(message => {
	console.log(message);
});
