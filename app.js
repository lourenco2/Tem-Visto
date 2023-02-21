const express = require("express") //função que cria um servidor express
const rotaLocalizacao = require("./routes/localizacao")

const app = express() //Importação do servidor para o arquivo principal do nosso projeto

app.use('/localizacao', rotaLocalizacao)

const port = 8000 //Porta de acesso

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})