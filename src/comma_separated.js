function formatIndianCurrency(number) {
    let numberStr = number.toString();
    let [integerPart, decimalPart] = numberStr.split('.');
    let integerPartReversed = integerPart.split('').reverse().join('');
    let formattedParts = [];
    formattedParts.push(integerPartReversed.slice(0, 3));

    for (let i = 3; i < integerPartReversed.length; i += 2) {
        formattedParts.push(integerPartReversed.slice(i, i + 2));
    }

    let formattedIntegerPart = formattedParts.join(',').split('').reverse().join('');
    if (decimalPart) {
        return `${formattedIntegerPart}.${decimalPart}`;
    } else {
        return formattedIntegerPart;
    }
}

let number = 12345678.7891;
let formattedNumber = formatIndianCurrency(number);
console.log(formattedNumber);  