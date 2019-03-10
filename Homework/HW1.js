const arr = ['a', 'e', 'i', 'o', 'u'];

function replaceLetters(x, y) {
    for (let i = 0; i < x.length; ++i) {
        for (let j = 0; j < y.length; ++j) {
            if (x[i] == y[j]) {
                x = x.replace(x[i], '-');
            }
        }
    }
    return x;
}

console.log(replaceLetters('node.js', arr));  

const sumArr = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false, ];

function sumArray(arr) {
    let total = 0;
    let parsed;
    for (let i = 0; i < arr.length; ++i) {
        parsed = parseInt(arr[i])
        if (isNaN(parsed)) continue;
        else total += parsed;
    }
    return total;
}

console.log(sumArray(sumArr));

const wordArr = ['hi', 'hi', 'hello', 'world', 'hello', 'hi', 'greetings'];

let wordCount = {};

function countingWords(arr) {
    let keys;
    for (let i = 0; i < arr.length; ++i) {
        keys = Object.keys(wordCount);
        if (keys.length == 0) {
            wordCount[arr[i]] = 1;
            continue;
        }
        for (let j = 0; j < keys.length; ++j) {
            if (arr[i] == keys[j]) {
                wordCount[arr[i]] += 1;
                break;
            }
            wordCount[arr[i]] = 1;
        }
    }
}
countingWords(wordArr);
console.log(wordCount);

const animalArr =
    [
        [
            { property: 'name', assign: 'Garfield' },
            { property: 'owner', assign: 'Jon Arbuckle' },
            { property: 'type', assign: 'cat' }
        ],
        [
            { property: 'name', assign: 'Snoopy' },
            { property: 'owner', assign: 'Charlie Brown' },
            { property: 'type', assign: 'dog' }
        ],
    ]

let outerArr = {};

function createAnimals(arr){
    for(let i = 0; i < arr.length; ++i){ 
        const innerArr = {};
        for(let j = 0; j < arr[i].length; ++j){ 
            const temp = Object.values(arr[i][j]);
            innerArr[temp[0]] = temp[1];
        }
        outerArr[i] = innerArr;
    }
    return outerArr;
}

console.log(createAnimals(animalArr));