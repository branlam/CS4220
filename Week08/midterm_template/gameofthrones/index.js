// Export a method for API search
// Export a method for API fetch

const config = require('./config')
const superagent = require('superagent')

const _fetch = (command) =>{
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

async function searchChars(name){
    console.log("Searching for Characters...")
    //Total of 2138 characters and default page size of 10
    //Adjusting to pages 1-43 (2138/50 = 42.76) if pagesize is 50
    let charNames = []
    for(let i = 1; i < 44; ++i){
        let page = await superagent.get(`${config.url}?page=${i}&pageSize=50`)
        for(let j = 0 ; j < page.body.length; ++j){
            let temp = page.body[j].url
            let charId = temp.substr(49)
            let character = page.body[j].name
            if(character != undefined){
                if(character.toLowerCase().includes(name)){
                    charNames.push({"name": character, "value": charId, "short": character})
                }
            }
        }
    }
    return charNames
}

exports.searchAll = (name) => {
    return searchChars(name)
}

exports.search = (id) => {
    return _fetch(`${id}`)
}