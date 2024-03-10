//call
NumberLetterCounts(1, 1000);
LongestCollatzSequence(1, 1000000);

function NumberLetterCounts(start, end) {
    let sum = 0;
    let unitsWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teensWord = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tensWord = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    for (let i = start; i <= end; i++) {
        let number = i;
        let words = '';
        let tensNumber = number % 100;
        number = number.toString();
        let unityDigit = number.charAt(number.length - 1);
        let tensDigit = number.charAt(number.length - 2);
        let hundredsDigit = number.charAt(number.length - 3);
        let thousandsDigit = number.charAt(number.length - 4);
        
        if (thousandsDigit > 0) {
            words += unitsWord[thousandsDigit] + ' thousand ';
        }
        if (hundredsDigit > 0) {
            words += unitsWord[hundredsDigit] + ' hundred ';
            if (tensNumber > 0) {
                words += 'and ';
            }
        }
        if (tensNumber < 20 && tensNumber > 10) {
            words += teensWord[unityDigit - 1] + ' ';
        } else {
            if (tensDigit > 0) {
                words += tensWord[tensDigit -1] + ' ';
            }
            if (unityDigit > 0) {
                words += unitsWord[unityDigit];
            }
        }
        sum += words.replace(/ /g, '').length;
    }
    console.log(`Number Letter Counts from ${start} to ${end} is ${sum} letters`);

}


function LongestCollatzSequence(start, end) {
    let results = [];
    for (let n = start; n <= end; n++) {
        let length = 0;
        let temp = n;
        while (temp != 1) {
            if (temp % 2 == 0) {
                temp = temp / 2;
            } else {
                temp = 3 * temp + 1;
            }
            length++;
        }
        results.push(length);
    }
    let maxValue = results.reduce((max, v) => max >= v ? max : v, -Infinity);
    let maxIndex = results.indexOf(maxValue);
    console.log(`Longest Collatz Sequence number: ${maxIndex + 1} value: ${maxValue}`);
}