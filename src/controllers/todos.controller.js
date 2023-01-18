const TodosServices = require('../services/todos.services');

const getAllTodos = async (req, res) => {
    try {
        const result = await TodosServices.getAllTo();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
}

const getTodosById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await TodosServices.getById(id);
      res.json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  const createTodos = async (req, res) => {
    try {
      const todo = req.body;
      const result = await TodosServices.create(todo);
      res.json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  const updateTodos = async (req, res) => {
    try {
      const { id } = req.params;
      const field = req.body;
      const result = await TodosServices.update(id, field);
      res.json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  const deleteTodos = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await TodosServices.delete(id);
      res.json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

const getTodosWithCategories = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await TodosServices.getWithCategories(id);
        res.json({
            message: "Enviando tareas con categorias",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            details: error.stack, 
        });
    }
}



module.exports = {
    getTodosWithCategories,
    getAllTodos,
    getTodosById,
    createTodos,
    updateTodos,
    deleteTodos
}