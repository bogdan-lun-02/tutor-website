// Toggle mobile menu

document.addEventListener("DOMContentLoaded", function () {
	const toggleBtn = document.querySelector(".navbar .mobile-menu-toggle");
	const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

	toggleBtn.addEventListener("click", () => {
		mobileMenu.classList.toggle("active");
	});
});

// Change navbar background on scroll

window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".navbar");

	if (window.scrollY > 0) {
		navbar.classList.add("navbar-scroll");
	} else {
		navbar.classList.remove("navbar-scroll");
	}
});
