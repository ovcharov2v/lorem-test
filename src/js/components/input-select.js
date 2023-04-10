document.addEventListener('DOMContentLoaded', () => {
	const dropdownList = document.querySelectorAll('.input-select')
	if(dropdownList.length) {
		dropdownList.forEach((dropdown) => {
			const input = dropdown.querySelector('.input-select__value')
			dropdown.addEventListener('click', (evt) => {
				evt.stopPropagation()
				dropdown.classList.toggle('input-select--active')
				input.classList.toggle('input--active')
			})
			const optionsList = dropdown.querySelectorAll('.input-select__option')
			optionsList.forEach((option) => {
				option.addEventListener('click', (e) => {
					e.preventDefault();
					input.value = option.dataset.value
				})
			})
		})
	}

	document.addEventListener('click', closeAllSelect)

	function closeAllSelect() {
		dropdownList.forEach((dropdown) => {
			dropdown.classList.remove('input-select--active')
			dropdown.querySelector('input').classList.remove('input--active')
		})
	}
})
