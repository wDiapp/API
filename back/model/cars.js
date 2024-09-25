const Sequelize = require('sequelize');
const database = require('../config/db');
const Marca = require('./marca');
const schema = "";

class Carro extends Sequelize.Model{}

Carro.init(
    {
        Codigo: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Modelo: {
            type: Seqieçoze.STRING,
            allowNull: true,
        },
        Ano: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        Placa: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },
    {
        sequelize: database, modelName: 'Carro', schema
    }
);

Carro.belongsTo(Marca, {
    foreignKey: {
        name:'MarcaId',
        allowNull: false        
    },
    as: 'marca'
});
module.exports = Carro;
