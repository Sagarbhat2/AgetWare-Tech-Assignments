function caesarCipher(message, shift, mode = 'encode') {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetMap = {};
    const result = [];

    for (let i = 0; i < alphabet.length; i++) {
        alphabetMap[alphabet[i]] = i;
        alphabetMap[alphabet[i].toLowerCase()] = i;
    }

    for (let char of message) {
        if (char in alphabetMap) {
            let currentIndex = alphabetMap[char];

            let newIndex;
            if (mode === 'encode') {
                newIndex = (currentIndex + shift) % 26;
            } else if (mode === 'decode') {
                newIndex = (currentIndex - shift + 26) % 26;
            }
            result.push(alphabet[newIndex]);
        } else {
            result.push(char);
        }
    }

    return result.join('')
}

const message = "Hello World!";
const shift = 5;

const encodedMessage = caesarCipher(message, shift, 'encode');
const decodedMessage = caesarCipher(encodedMessage, shift, 'decode');

console.log("Encoded:", encodedMessage);
console.log("Decoded:", decodedMessage);  