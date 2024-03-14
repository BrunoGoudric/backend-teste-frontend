const Sequelize = require('sequelize');
const database = require('../config/db.js');
const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');

const User = database.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        allowNull: false,
        primaryKey: true
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    rg:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    dt_birthday:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fone: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sector:{
        type: Sequelize.STRING,
        allowNull: false
    },
    position:{
        type: Sequelize.STRING,
        allowNull: false
    },
    company:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = User;