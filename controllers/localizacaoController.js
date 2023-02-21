const {json} = require("express")
const fs = require("fs")
const { getTodasLocalizacoes } = require("../services/localizacaoService")

function getLocalizacao(req, res){
    try{
        const locais = getTodasLocalizacoes()
        
        res.send(locais)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLocalizacao(req, res){
    try{
        const locaisAtuais = getTodasLocalizacoes()//lê o arquivo atual
        
        const novoLocal = {id:'7', nome:'México'}//Novo dado
        
        const insereLocal = (fs.writeFileSync("locais.json", JSON.stringify([...locaisAtuais, novoLocal])))//Insere novo dado
        
        res.send(insereLocal)

    }catch{
        res.status(500)
        res.send(error.message)
    }
}

function patchLocalizacao(req, res){
    try{
        res.send("Atualizado!")
    }catch{
        res.status(500)
        res.send(error.message)
    }
}

function deleteLocalizacao(req, res){
    try{
        res.send("Excluído!")
    }catch{
        res.status(500)
        res.send(erro.message)
    }
}

function getLocalizacaoId(req, res){
    try{
        const req = req.params.id
        
        const locais = getLocalId(id)
        
        res.send(locais)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLocalizacao,
    postLocalizacao,
    patchLocalizacao,
    deleteLocalizacao,
    getLocalizacaoId
}