let previousOperent = '';
let currentOperent = '';
let operation = undefined;

   function clear() {
        previousOperent = '';
        currentOperent = '';
        operation = undefined;
    }

    function Delete() {

        currentOperent = currentOperent.toString().slice(0, -1)

    }
    function appendNumber(number) {
        if (number === "." && currentOperent.includes('.')) return
        currentOperent = currentOperent.toString() + number.toString()

    }

    function chooseOperation(operations) {
        if (currentOperent === '') return
        if (previousOperent !== '') {
            compute()
        }
        operation = operations
        previousOperent = currentOperent + ' ' + operation
        currentOperent = ''

    }

    function compute() {

        let computation;
        const prev = parseFloat(previousOperent)
        const current = parseFloat(currentOperent)
        if (isNaN(prev) || isNaN(current)) return
        switch (operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return

        }
        currentOperent = computation
        operation = undefined
        previousOperent = ''

    }
    function updateDisplay() {
        currentOperentTextElement.innerText = currentOperent

        previousOperentTextElement.innerText = previousOperent

    }





const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperentTextElement = document.querySelector('[data-previous-operent]')
const currentOperentTextElement = document.querySelector('[data-current-operent]')





numberButton.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerHTML)
        updateDisplay()
    })

})
operationButton.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerHTML)
        updateDisplay()
    })

})

equalsButton.addEventListener('click', button => {
    compute()
    updateDisplay()
})
allClearButton.addEventListener('click', button => {
    clear()
    updateDisplay()
})
deleteButton.addEventListener('click', button => {
    Delete()
    updateDisplay()
})