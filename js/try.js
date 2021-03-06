function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        getPin()
    }

}

function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calcInput = document.getElementById('typed-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    }
    else {
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value
    const number = document.getElementById('typed-numbers').value
    const successMsg = document.getElementById('notify-success')
    const errorMsg = document.getElementById('notify-fail')
    if (pin == number) {
        successMsg.style.display = 'block'
        errorMsg.style.display = 'none'
    }
    else {
        successMsg.style.display = 'none'
        errorMsg.style.display = 'block'
    }
}
