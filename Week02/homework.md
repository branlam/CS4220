## Week 2 Homework - Due Friday 02/08/18 at 11:59pm
Complete all the problems below. 100 Points total. Please submit homework to CSNS.

- For FULL credit use proper ES6 syntax including using let/const properly.
- For FULL credit do not hard code values (unless otherwise stated).
- For FULL credit upload only a single javascript file and output all answers to the console.


##### 1.  Write a function called replaceLetters and that takes a string and an array of letters.
The replaceLetters function accepts two arguments a string and an array
This function replaces letters in the string with a dash (-) if they are contained in the array

    const arr = ['a', 'e', 'i', 'o', 'u' ]
    replaceLetters('node.js', arr)
    // n-d-.js


##### 2. Write a function called sumArray.
The sumArray function should sums all the numbers in an array of mixed primatives.
The function should be able to sum both numbers and any string that can be converted to a number. Booleans, Array and or Objects should not be treated as numbers.
HINT: Take a look at [mozilla dev docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) .... parseInt() Number.isNaN() etc

    const arr = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false]
    sumArray(arr)
    // 33


##### 4. Write a function called countingWords and it counts the number of times they are present in the array.
The countingWords function accepts an array argument.
The answer should be an object wit the key as the word and the count as the value.

    const arr = ['hi', 'hi', 'hello', 'world', hello', 'hi' , 'greetings']
    countingWords(arr);
    // { hi: 3, hello: 2, world: 1, greetings: 1 }


#### 4. Write a function called createAnimals and is able to create an object.
The function createAnimals accepts a nested array of objects which contain a property and what that property should be assigned to.
The function should create a nested object with the key as the index from the array and the value which is the object created from the property and assignment.

HINT: You may use the words 'property' and 'assign' as needed to compose the expected output object.

 ```
    const arr =
        [
            [
                { property: 'name', assign: 'Garfield'},
                { property: 'owner', assign: 'Jon Arbuckle'},
                { property: 'type', assign: 'cat' }
            ],
            [
                { property: 'name',assign: 'Snoopy' },
                { property: 'owner',assign: 'Charlie Brown' },
                { property: 'type',assign: 'dog' }
            ]
        ]
```

    createAnimals(arr)

    {
      '0': { name: 'Garfield', owner: 'Jon Arbuckle', typ: 'cat' },
      '1': { name: 'Snoopy', owner: 'Charlie Brown', type: 'dog' }
    }
