const Todos = require('../models/todos.model');
const Users = require('../models/users.model');
const Categories = require('../models/categories.model');

class UserServices {
    static async getAll(){
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error; 
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithTasks(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes:{
                    exclude:["password"],
                },
                include: {
                    model: Todos,
                    as: "task",
                    attributes:["tittle"],
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithCategories(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes:{
                    exclude:["password"],
                },
                include: {
                    model: Categories,
                    as: "category",
                    attributes:["name"],
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }     

    static async create(user){
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;