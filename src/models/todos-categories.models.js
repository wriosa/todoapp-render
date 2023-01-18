const db = require('../utils/database');

const { DataTypes } = require('sequelize');
const Categories = require('./categories.model');
const Todos = require('./todos.model');

const TodosCategories = db.define("todos_categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    todoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "todo_id",
        references: {
            model: Todos,
            key: "id"
        }
    },
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "categories_id",
        model: Categories,
        key: "id"
    }
}, {
    timestamps: false,
});

module.exports = TodosCategories;