const {Router} = require('express');
const { getTodosWithCategories, getAllTodos, getTodosById, createTodos, updateTodos, deleteTodos } = require('../controllers/todos.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();


//controller
router.get('/todos', authMiddleware, getAllTodos);
router.get("/todos/:id",authMiddleware, getTodosById);
router.get('/todos/:id/categories',authMiddleware, getTodosWithCategories);
router.post("/todos",authMiddleware, createTodos);
router.put("/todos/:id",authMiddleware, updateTodos);
router.delete("/todos/:id",authMiddleware, deleteTodos);


module.exports = router; 