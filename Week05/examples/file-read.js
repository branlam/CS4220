const
    fs = require('fs'), // built in node module that allows for interacting with the file system
    path = require('path') // built in module that provides utilities for working with file and directory paths.


// read the file and output the contents to the console
fs.readFile(path.resolve('files', 'small.txt'), 'utf8', (err, data) => {
    if (err)
        console.log('err', err)

    console.log(data)
})

const files = ['large.txt', 'medium.txt', 'small.txt']

// word count using path and fs
const wordCount = () => {
    files.forEach((file) => {
        const fullPath = path.resolve('files', file)
        fs.readFile(fullPath, 'utf8', (err, data) => {
            if (err)
                console.log(err)

            const wordcount = data.split(' ').length
            console.log(file, wordcount)
        })
    })
}
// wordCount()
















