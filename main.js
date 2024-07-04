function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    if (displayValue === "1+1"){
        document.getElementById('display').value = "I love you  ";
    } else {
        try {
            document.getElementById('display').value = eval(displayValue);
        } catch(error) {
            document.getElementById('display').value = 'Error';
        }
    }
}
