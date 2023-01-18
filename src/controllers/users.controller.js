const UserServices = require('../services/users.services');

const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    // res.json({ message: "Obteniendo todos los usuarios" })
}

const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    // res.json({ message: "Obteniendo todos los usuarios" })
}

const getUserWithTasks = async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await UserServices.getWithTasks(id);
        res.json(result);//por defecto se responde con un estatus 200
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserWithCategories = async (req,res)=>{
    try {
        const {id} = req.params;
        const result = await UserServices.getWithCategories(id);
        res.json(result);//por defecto se responde con un estatus 200
    } catch (error) {
        res.status(400).json(error.message); 
    } 
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    // res.json({ message: "Obteniendo todos los usuarios" })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    getUserWithTasks,
    getUserWithCategories
}