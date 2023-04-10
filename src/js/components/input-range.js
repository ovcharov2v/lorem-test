document.addEventListener('DOMContentLoaded', () => {
	const rangeList = document.querySelectorAll('.input-range')
	if(rangeList.length) {
		rangeList.forEach((range) => {
			const input = range.querySelector('.input-range__field')
			const value = range.querySelector('.input-range__value')
			input.addEventListener('input', () => {
				value.innerHTML = input.value
			})
		})
	}
})
