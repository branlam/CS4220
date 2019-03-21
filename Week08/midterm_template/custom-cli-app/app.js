// application that allows uses the custom-module
// allows the user to search, select a result, fetch details and display details
const
    superagent = require('superagent')

async function search(name = ""){
    const base = 'https://www.anapioficeandfire.com/api/characters'

    //const charResponse = await superagent.get(`${base}/${name}`)
    const charResponse = await superagent.get(`${base}`)
    console.log(charResponse.body)
}

module.exports = { search }