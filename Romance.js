// let text = "Ever since I left the city, you, you, you You and me we just don't get along";
let text =
    "you need my love and me on me we just dont need my cell phone late night need my love call me on the city used to always stay at that can only mean just dont need my love call me";

function parseText(string) {
    let parsedArray = [];
    let word = "";
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === undefined) {
            parsedArray.push(word);
            break;
        }
        let character = string[i].toLowerCase();
        // console.log(character);
        if (character === "," || character === " " || character === "'") {
            if (word === "") {
                continue;
            } else if (character === "'") {
                continue;
            } else {
                parsedArray.push(word);
                // console.log(word);
                word = "";
            }
        } else {
            word += character;
            // console.log(word);
        }
    }
    // console.log(parsedArray);
    return parsedArray;
}

let wordPairs = generateWordPairs(parseText(text));

function generateWordPairs(array) {
    let markovChain = {};
    for (let i = 0; i < array.length; i++) {
        // debugger;
        // console.log(markovChain);
        let word = array[i];
        if (i === array.length - 1) {
            break;
        } else if (word in markovChain) {
            if (word !== array[i + 1]) {
                markovChain[word].push(array[i + 1]);
            } else {
                markovChain[word].push(word);
            }
        } else {
            markovChain[word] = [array[i + 1]];
            // console.log(markovChain);
        }
    }
    // debugger;
    // console.log(markovChain);
    return markovChain;
}
let textLen = Object.keys(wordPairs).length;
let lineLength = Math.floor(Math.random() * textLen);
let writer = writeLine(wordPairs, lineLength);

function writeLine(object, n) {
    // console.log(n);
    let line = [];
    for (let key in object)    {
        let array = object[key];
        let length = object[key].length;
        // console.log(length)
        let chosenWord = helper(array);
        function helper (words)    {
            let rando = Math.floor(Math.random() * length)
            // console.log(rando);
            let returnedValue = words[rando];
            // console.log(returnedValue)
            return returnedValue;
        }
        line.push(`${chosenWord}`);
        // console.log(line);
        if  (line.length === n) {
            line = line.join(' ');
            // console.log(line);
            break;
        }
    }
    
    // console.log(line)
    return line;
}

lineCount = Math.ceil(Math.random() * 5)
let writePoem = generatePoem(writer, lineCount);

function generatePoem(line, count) {
    let poem = "";
    for (let i = 0; i <= count; i++) {
        poem += line + '\n';
        // console.log(poem)
    }
    return poem;
}

console.log(writePoem)