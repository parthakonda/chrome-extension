console.log('Background running..');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(e) {
	console.log(e);
	console.log("Hey I'm clicked");
}

chrome.browserAction.setBadgeBackgroundColor({ color: 'orange' });
chrome.browserAction.setBadgeText({ text: '12' });
