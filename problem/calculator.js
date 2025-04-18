function calculator(num = 0, num1 = 0, operator = "") {
    if ((num === 0 && num1 === 0)) {
        return 'Provide valid input!'
    }
    if (operator === '') {
        return 'Error -> Operator is required, + - * /'
    }
    switch (operator) {
        case "+":
            return num + num1
        case "-":
            return num - num1
        case "*":
            return num * num1
        case "/":
            return num / num1
        default:
            break;
    }
}
const res = calculator()
console.log(res)