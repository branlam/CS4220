const
    gameofthrones = require('gameofthrones'),
    inquirer = require('inquirer')


const print = (character) => {
    console.log(`    NAME: ${character.name}`)
    console.log(`    BORN: ${character.born}`)
    console.log('  TITLES:')
    character.titles.forEach(function(title) {
        console.log(`          ${title}`)
    })
    console.log(' ALIASES:')
    character.aliases.forEach(function(alias) {
        console.log(`          ${alias}`)
    })
}

async function search(name = " "){
    //1. Search for all characters that contain the "name" string
    const characters = await gameofthrones.searchAll(name)

    if(characters.length == 0){
        console.log("No Characters Found.")
    }
    else{
        //2. Inquire the user for character details
        const characterList = await detailsPrompt(characters)
        for(let i = 0; i < characters.length; ++i){
            if(characters[i].value == characterList.id){
                //3. Display details of selected character
                const details = await gameofthrones.search(characters[i].value)
                print(details)
            }
        }
    }

    const confirmSearch = await searchPrompt()
    if(confirmSearch.decision){
        const newSearch = await newPrompt()
        const newCharacter = await search(newSearch.name) 
    }
}

async function detailsPrompt(charNames){
   return inquirer.prompt([{
       type: 'rawlist',
       name: 'id',
       message: 'Character Details:',
       choices: charNames 
   }]) 
}

async function searchPrompt(){
    return inquirer.prompt([{
        type: 'confirm',
        name: 'decision',
        message: 'Would you like to search for another?'
    }])
}

async function newPrompt(){
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter the characters name: '
    }])
}

module.exports = { search }