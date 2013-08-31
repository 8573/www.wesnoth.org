'use strict';

var haveTextContent,
	aboutExpander, aboutTextwall, aboutExpanded = 'fake';

window.onload = function() {
	haveTextContent = typeof(document.body.textContent) === 'string';
	initAbout();
}

function initAbout() {
	aboutExpander = document.getElementById('aboutExpander');
	aboutTextwall = document.getElementById('aboutTextwall');
	aboutExpander.onclick = toggleAbout;
	aboutExpander.onclick();
}

function toggleAbout() {
	if (!aboutExpanded) {
		aboutTextwall.style.display = 'block';
		setText(this, this.getAttribute('data-lesslabel'));
		aboutExpanded = true;
	}
	else {
		aboutTextwall.style.display = 'none';
		setText(this, this.getAttribute('data-morelabel'));
		aboutExpanded = false;
	}
	return false;
}

function getText(e) {
	if (haveTextContent)
		return e.textContent;
	else
		return e.innerText;
}
function setText(e, s) {
	if (haveTextContent)
		return e.textContent = s;
	else
		return e.innerText = s;
}
