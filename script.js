const previousNumber = document.querySelector('.previous-number p')
const currentNumber = document.querySelector('.current-number')
const mathSign = document.querySelector('.math-sign')
const numbersBtns = document.querySelectorAll('.number')
const operatorsBtns = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
const negativeBtn = document.querySelector('.negative')
const equalBtn = document.querySelector('.equal')

let result

function displayNumbers() {
	if (currentNumber.innerHTML === '' && this.textContent === '.') {
		currentNumber.innerHTML = '0'
	} else if (currentNumber.innerHTML.includes('.') && this.textContent === '.') {
		return
	}

	if (currentNumber.innerHTML.length >= 9) {
		return
	}

	currentNumber.innerHTML += this.textContent
}

function displayOperator() {
	if(mathSign.innerHTML !== ''){
		mathSign.innerHTML = this.textContent
	}
	
	if (currentNumber.innerHTML === '') {
		return
	}

	if(mathSign.innerHTML !== ''){
		showResult()
	}


	previousNumber.innerHTML = currentNumber.innerHTML
	mathSign.innerHTML = this.textContent
	currentNumber.innerHTML = ''

}

function showResult() {
if(currentNumber.innerHTML === '' || mathSign.innerHTML === ''){
	return
}

	let a = parseFloat(previousNumber.innerHTML)
	let b = parseFloat(currentNumber.innerHTML)
	let operator = mathSign.innerHTML

	switch (operator) {
		case '+':
			result = a + b
			break
		case '-':
			result = a-b
			break
		case '×':
			result = a * b
			break
		case '÷':
			result = a / b
			if(b === 0){
				return
			}
			break

	}

	currentNumber.innerHTML = result
	mathSign.innerHTML = ''
	previousNumber.innerHTML = ''
}

const clear = () => {
	currentNumber.innerHTML = ''
	previousNumber.innerHTML = ''
	mathSign.innerHTML = ''
	result =''
}

const deleteNumber = () => {
	currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1)
}

const negativeNumber = () => {
	if (currentNumber.innerHTML.includes('-')) {
		currentNumber.innerHTML = currentNumber.innerHTML.slice(1)
	} else {
		currentNumber.innerHTML = '-' + currentNumber.innerHTML
	}
}

numbersBtns.forEach(number => {
	number.addEventListener('click', displayNumbers)
})
operatorsBtns.forEach(operator => {
	operator.addEventListener('click', displayOperator)
})

clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)
negativeBtn.addEventListener('click', negativeNumber)
equalBtn.addEventListener('click', showResult)
