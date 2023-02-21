const fs = require("fs")

function getTodasLocalizacoes (){
    return JSON.parse(fs.readFileSync("locais.json"))
}

function getLocalId (id){
    const locais = JSON.parse(fs.readFileSync("locais.json"))

    const filtroLocal = locais.filter( local => local.id === id)[0]
}

module.exports = {
    getTodasLocalizacoes
}