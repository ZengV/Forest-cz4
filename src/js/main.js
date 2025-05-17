const htmlElement = document.documentElement
const navItem = document.querySelectorAll('.nav__item')
const navItems = document.querySelector('.nav__items')
const burgerBtn = document.querySelector('.burger-btn')
const footerYear = document.querySelector('.footer__container-company-year')
const sections = document.querySelectorAll('.section')
const navLinks = document.querySelectorAll('.nav__item')
const checkBox = document.querySelector('.contact__form-check-box')
const buttonSubmit = document.querySelector('#contact__form-btn')

const unlockSubmit = () => {
	if (checkBox.checked) {
		buttonSubmit.classList.add('contact__form-btn')
		buttonSubmit.classList.remove('contact__form-btn--disabled')
	} else {
		buttonSubmit.classList.remove('contact__form-btn')
		buttonSubmit.classList.add('contact__form-btn--disabled')
	}
}

const burgerActive = () => {
	navItems.classList.toggle('nav__items--active')
	htmlElement.classList.toggle('html--hidden')
}
navItem.forEach(item => {
	item.addEventListener('click', () => {
		navItems.classList.remove('nav__items--active')
		htmlElement.classList.remove('html--hidden')
	})
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const scrollspy = () => {
	let current = ''

	sections.forEach(section => {
		const sectionTop = section.offsetTop
		if (pageYOffset >= sectionTop - 82) {
			current = section.getAttribute('id')
		}
	})

	navLinks.forEach(link => {
		link.classList.remove('nav__item--active')
		if (link.getAttribute('href') === window.location.pathname + '#' + current) {
			link.classList.add('nav__item--active')
		}
	})
}

handleCurrentYear()
burgerBtn.addEventListener('click', burgerActive)
window.addEventListener('load', scrollspy)
window.addEventListener('scroll', scrollspy)
checkBox.addEventListener('change', unlockSubmit)
