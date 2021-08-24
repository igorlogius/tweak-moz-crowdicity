function expandComments() {
	const links = document.querySelectorAll('button.b-single-idea__comment-expand');
	for(const link of links) {
		link.click();
	}
}

expandComments();

(new MutationObserver(expandComments)).observe(document.body, { attributes: false, childList: true, subtree: true });

