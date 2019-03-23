console.log('Im from background-content script app');
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log(tab);
	console.log("Hey I'm clicked");
	chrome.tabs.sendMessage(tab.id, { message: 'hello' });
}
