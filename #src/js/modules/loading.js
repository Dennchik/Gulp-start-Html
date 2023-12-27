//* --------------------------------[jScript]-----------------------------------
window.onload = function () {
	let preloader = document.querySelector('.preloader');
	setTimeout(() => {
		preloader.classList.add("preloader-remove");
	}, 250);

};