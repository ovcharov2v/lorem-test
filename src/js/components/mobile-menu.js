document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header')
	const menuToggleBtn = header.querySelector('.header__menu-toggle')

	menuToggleBtn.addEventListener('click', () => {
		if(header.classList.contains('header--menu-shown')) {
			header.classList.remove('header--menu-shown')
			setTimeout(() => {
				header.classList.remove('header--menu-show')
			}, 220)
		}
		else {
			header.classList.add('header--menu-show')
			setTimeout(() => {
				header.classList.add('header--menu-shown')
			}, 20)
		}
	});
})
