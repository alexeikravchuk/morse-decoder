const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let lettersArray = [];
    for(let i = 0; i < expr.length / 10; i++) {
        numbers = expr.slice(i * 10, i * 10 + 10);
        lettersArray[i] = '';
        for(let j = 0; j < 5; j++) {
          switch (numbers.slice(j * 2, j * 2 + 2)) {
            case "00" : break;
            case "**" : 
              lettersArray[i] = ' ';
              break;
            case "10" : 
              lettersArray[i] += '.';
              break;
            case "11":
              lettersArray[i] += '-';
          } 
        }
        lettersArray[i] = MORSE_TABLE[lettersArray[i]] || " ";
    }

    return lettersArray.join("");
}

module.exports = {
    decode
}