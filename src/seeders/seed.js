const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');
const TodosCategories = require('../models/todos-categories.models');


const users = [
    {username:'Wolfgang', email:'wol@gmail.com', password:'1234'},
    {username:'Rubiela', email:'rubi@gmail.com', password:'1234'},
    {username:'Herminso', email:'hermi@gmail.com', password:'1234'}
];
const todos = [
    {tittle:'estudiar node',description:'descripcion para 1',userId:1}
];
const categories =[
    {name: 'personal',userId:1 },
    {name: 'educacion', userId:2},
    {name: 'salud', userId:3}
];
const todosCategories = [
    {categoriesId:2 , todoId: 1},
    {categoriesId:1 , todoId: 1}
];

//create
//findOne,findAll, findByPk
//update
//destroy
db.sync({force: true})
.then(()=>{
    console.log("iniciando con el sembradio malicioso");
    users.forEach((user)=> Users.create(user)); //INSERT INTO users
    setTimeout(()=>{
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(()=>{
        categories.forEach((category) => Categories.create(category));
    }, 250);
    setTimeout(()=>{
        todosCategories.forEach((todosCate) => TodosCategories.create(todosCate));
    }, 400);
    
})
.catch(error => console.log(error));