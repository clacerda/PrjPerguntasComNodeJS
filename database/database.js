const Sequelize = require('sequelize');


const connection = new Sequelize('guiaperguntas', 'root', 'senhaDB', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = connection;