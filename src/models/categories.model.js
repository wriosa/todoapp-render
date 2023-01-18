const db = require('../utils/database');

const { DataTypes } = require('sequelize');
const Users = require('./users.model');

const Categories = db.define("categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: Users,
            key: "id"
        }
    }
}, {
    timestamps: false,
});

module.exports = Categories;