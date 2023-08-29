document.addEventListener('DOMContentLoaded', (e) => {
	burger();
	mobChose();
	ibg();
});

function burger() {
	let burgerButton = document.querySelector('.header-fullscreen__menu');
	if (burgerButton) {
		burgerButton.addEventListener('click', () => {
			burgerButton.classList.toggle('active')
			document.body.classList.toggle('lock');
		})
	}
};

function mobChose() {
	const isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};

	if (isMobile.any()) {
		document.body.classList.add('touch');
		let arrows = document.querySelectorAll('.grow__arrow');
		if (arrows) {
			arrows.forEach(arrow => {
				arrow.addEventListener('click', (e) => {
					arrow.nextElementSibling.classList.toggle('active');
					arrow.parentElement.classList.toggle('active');
				})
			})
		}
	} else {
		document.body.classList.add('nottouch');
	}
}

function ibg() {
	let imgbackround = document.querySelectorAll(".ibg");
	if (imgbackround.length > 0) {
		console.log(imgbackround)
		imgbackround.forEach(imgbg => imgbg.style.backgroundImage = 'url(' + imgbg.querySelector('img').getAttribute('src') + ')');
	}
}
