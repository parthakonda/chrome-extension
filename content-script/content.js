console.log('From content script');

// Change <anchor> link colors
let anchors = document.getElementsByTagName('a');

for (let anchor of anchors) {
	anchor.style['color'] = 'blue';
	anchor.style['text-decoration'] = 'underline';
}
