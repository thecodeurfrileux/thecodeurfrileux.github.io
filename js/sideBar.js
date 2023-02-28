const sideBar = document.getElementById("side-bar");
let close = 0;
const content = document.querySelector(".content");

sideBar.addEventListener("click", (e) => {
	sideBar.classList.add("active");
	close++;
	if ((e.target.className == "toggle"
	|| e.target.className == "toggle-btn")
		&& close >= 2)
	{
		sideBar.classList.remove("active");
		close = 0;
	}
});
content.addEventListener("click", () => {
	sideBar.classList.remove("active");
	close = 0;
});

// ------------------
// switch color
// ------------------
const footer = document.querySelector("footer");
const color = document.getElementById('color');
const mdColor = document.getElementById('md-color');
const switchText = document.querySelector('.switch-text');
const switchColor = document.getElementById('icon-light');
const mdSwitchColor = document.getElementById('md-icon-light');
let tmp = 0;

function lightMode() {
	switchColor.className = "fa-solid fa-moon";
	mdSwitchColor.className = "fa-solid fa-moon";
	switchText.textContent = " : Mode sombre";
	tmp++;
}
function darkMode() {
	mdSwitchColor.className = "fa-solid fa-lightbulb";
	switchColor.className = "fa-solid fa-lightbulb";
	switchText.textContent = " : Mode claire";
	tmp = 0;
}

color.addEventListener("click", () => {
	if (tmp == 0) {
		lightMode();
	} else {
		darkMode();
	}
});
mdColor.addEventListener("click", () => {
	if (tmp == 0) {
		lightMode();
	} else {
		darkMode();
	}
})

function indexHtml() {
	const main = document.querySelector("main");
	main.classList.toggle("light");
	footer.classList.toggle("light");
}
function otherHtml() {
	const body = document.querySelector("body");
	footer.classList.toggle("light");
	body.classList.toggle("light");
}

if (document.title === "Exhum-prestations | Votre exhumeur présent sur tout la France") {
	color.addEventListener("click", indexHtml);
	mdColor.addEventListener("click", indexHtml);
}
else {
	color.addEventListener("click", otherHtml);
	mdColor.addEventListener("click", otherHtml);
}

// ------------------
// current tab
// ------------------
// Get the current URL
const currentUrl = window.location.href;

// Get the links in the navbar
const links = document.querySelectorAll('nav a');
// Loop through the links and add the active class to the current link
links.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('current-tab');
  }
});

// ------------------
// scroll popUp
// ------------------
const navScrollUp = document.querySelector(".nav-scroll-up")
window.addEventListener("scroll", () => {
	if (window.scrollY > 390) {
		navScrollUp.style.top = 0;
	} else {
		navScrollUp.style.top = "-80px";
	}
})