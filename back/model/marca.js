const Sequelize = require('sequelize');
const database = require('../config/db');
const schema = "";

class Marca extends Sequelize.Model{}

Marca.init(
    {
        CodigoMarca: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull: true,

        }
    },
    {
        sequelize: database, modelName: 'Marca', schema
    }
)

module.exports = Marca;