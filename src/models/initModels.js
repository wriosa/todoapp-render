const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');
const TodosCategories = require('./todos-categories.models');

const initModels = () => {
    // Categories;
    // TodosCategories;
    //vamos a crear las relaciones
    //hasOne -> para indicar que tiene uno solo
    //hasMany -> tiene muchos
    //belongsTo -> pertenece a
    Todos.belongsTo(Users, { as: "author", foreignKey: 'user_id' });
    Users.hasMany(Todos, { as: 'task', foreignKey: 'user_id' });

    //relacion de muchos a mcuhos categorias y tareas
    TodosCategories.belongsTo(Todos, { as: "task", foreignKey: "todo_id" });
    Todos.hasMany(TodosCategories, { as: "category", foreignKey: "todo_id" });

    TodosCategories.belongsTo(Categories, { as: "category", foreignKey: "categories_id" });
    Categories.hasMany(TodosCategories, { as: "task", foreignKey: "categories_id" });

    Categories.belongsTo(Users, { as: "author", foreignKey: 'user_id' });
    Users.hasMany(Categories, { as: 'category', foreignKey: 'user_id' });




}

module.exports = initModels;