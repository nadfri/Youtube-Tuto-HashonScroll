//Global Variables
const sections     = document.querySelectorAll('section');
const links        = document.querySelectorAll('.link');
const nav          = document.querySelector('nav');
const navPos       = nav.getBoundingClientRect(); //Position of navBar
const scrollMargin = 10; //50px - 42px navBar height +2px security

//Update hash when link is active
function updateHash(hash) {
	const currentHash = window.location.hash;
	currentHash != hash && window.history.replaceState(null, null, hash);
}

window.onscroll = () => {
	sections.forEach((section, index) => {
		//Position of section
		const sectionPos = section.getBoundingClientRect(); 

		if (sectionPos.top   <= navPos.bottom + scrollMargin 
		&& sectionPos.bottom >= navPos.bottom) {
			//remove active class from all links
			links.forEach((link) => link.classList.remove('active'));
			//add active class to current link
			links[index].classList.add('active');
			const hash = links[index].getAttribute('href');
			updateHash(hash);
		}
	});
};
