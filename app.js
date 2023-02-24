const express = require("express") //função que cria um servidor express
const rotaLocalizacao = require("./routes/localizacao")
import admin from 'firebase-admin'

const app = express() //Importação do servidor para o arquivo principal do nosso projeto

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.use('/localizacao', rotaLocalizacao)

const port = 8000 //Porta de acesso

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})