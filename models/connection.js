const Sequelize = require('sequelize')

const sequelize = new Sequelize ('tem_visto', 'root', '@Pah81730', {
    host: 'localhost',
    dialect:'mysql'
})

 async function authenticate(){
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = {
    authenticate
}