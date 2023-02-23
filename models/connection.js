const Sequelize = require('sequelize')

const sequelize = new Sequelize ('tem_visto', 'root', '@Pah81730', {
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conexão foi um sucesso!')
}).catch(function(erro){
    console.log('falhou ao conectar:'+erro)
})