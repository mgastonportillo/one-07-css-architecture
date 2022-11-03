const icon = document.querySelector("#menu__icon");
const menu = document.querySelector("#outer__menu");

const toggleMenu = () => {
	icon.classList.toggle("open");
	if (icon.classList.contains("open")) {
		menu.classList.add("open");
	} else {
		menu.classList.remove("open");
	}
};
