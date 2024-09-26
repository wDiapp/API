const Sequelize = require('sequelize');

const database = new Sequelize('Database', 'teste', '11223344', {
    dialect: 'mssql', host: 'localhost', port: 49928
});
database.sync();

module.exports = database;