! function() {
	window;
	const e = document.documentElement;
	if (e.classList.remove("no-js"), e.classList.add("js"), document.body.classList.contains("has-animations")) {
		(window.sr = ScrollReveal()).reveal(".reveal-on-scroll", {
			duration: 600,
			distance: "20px",
			easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
			origin: "bottom",
			interval: 100
		})
	}
}();