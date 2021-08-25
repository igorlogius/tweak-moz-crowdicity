function expandComments() {
	const links = document.querySelectorAll('button.b-single-idea__comment-expand');
	for(const link of links) {
		link.click();
	}
}

function addPermaLinks() {
	const postActions = document.querySelectorAll('div[id^=comment-] p.b-single-idea__comment-actions')
	for(const postAction of postActions) {
		// create anchor
		if(!postAction.querySelector('a[class="permalink"]')) {
			let a = document.createElement("a")
			a.innerHTML = '&#128279; permalink';
			a.classList.add('permalink');
			const url = new URL(window.location.href);
			const origin = url.origin;
			const path = url.pathname;
			// get post Id
			const post = postAction.closest('div[id^="comment-"]');
			const postid = post.id.split("-")[1];
			if(postid){
				a.href = origin + path + "?highlightPost=" + postid;
				postAction.appendChild(a);
			}
		}
	}
}

function tweak() {
	addPermaLinks();
	expandComments();
}

(new MutationObserver(tweak)).observe(document.body, { attributes: true, childList: true, subtree: false});
