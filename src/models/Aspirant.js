const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Aspirant = sequelize.define('aspirant', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    paternalSurname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    motherSurname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    interestProgram: {
        type: DataTypes.STRING,
        allowNull: false
    },
    appointment: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    attendance: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    numberOfContacts: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    lastContact: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: true
    },

});

module.exports = Aspirant;