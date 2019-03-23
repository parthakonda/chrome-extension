var options = {
	type: 'basic',
	title: 'Awesome Notificatoin',
	message: 'Awesome Long Message from Application',
	iconUrl: 'partha.png'
};
console.log(chrome);
chrome.notifications.create(options, callback);

function callback() {
	console.log('callback is done');
}
