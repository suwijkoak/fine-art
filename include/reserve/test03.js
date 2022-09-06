const		mobile_menu = document.querySelector(".mobile-menu"),
			mobile_trigger = document.querySelector(".mobile-menu__trigger");

document.addEventListener("click", function(event) {
	if (event.target == mobile_trigger) {
		mobile_menu.classList.toggle("mobile-menu_open");
	}
	if (event.target !== mobile_trigger && event.target !== mobile_menu) {
		if ( mobile_menu.classList.contains("mobile-menu_open") ) {
			mobile_menu.classList.remove("mobile-menu_open");
		}
	}
});

function scrollTo(element) {
	//const header_height = document.querySelector(".header").offsetHeight;
	window.scroll({
		behavior: "smooth",
		left: 0,
		top: element.offsetTop// - header_height
	});
}

mobile_menu.querySelectorAll("a").forEach(function(element) {
	element.addEventListener("click", function(event) {
		if (element.getAttribute("href").charAt(0) == "#") {
			let hash = element.hash;
			event.preventDefault();
			scrollTo(document.querySelector(hash));
		} else {
			//just let link work
		}
	});
});


let	initialPoint,
	 	finalPoint;

document.addEventListener("touchstart", function(event) {
	initialPoint = event.changedTouches[0];
});

document.addEventListener("touchend", function(event) {
	finalPoint = event.changedTouches[0];
	
	let	xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX),
		 	yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
	
	if (xAbs > 120 || yAbs > 120) { // 120 - SWIPE WIDTH
		if (xAbs > yAbs) {
			if (finalPoint.pageX < initialPoint.pageX) {
				mobile_menu.classList.remove("mobile-menu_open"); // SWIPE LEFT
			}
			else {
				mobile_menu.classList.add("mobile-menu_open"); // SWIPE RIGTH
			}
		}
		else {
			if (finalPoint.pageY < initialPoint.pageY) {
				// SWIPE UP
			}
			else {
				// SWIPE DOWN
			}
		}
	}
});