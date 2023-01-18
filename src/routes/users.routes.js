const {Router} = require('express');
const { getAllUsers, getUserById, createUser, getUserWithTasks, getUserWithCategories } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

//controller
router.get('/users',authMiddleware, getAllUsers);
router.get('/users/:id',authMiddleware, getUserById);
//obtener a un usuario con sus tareas
router.get('/users/:id/todos',authMiddleware, getUserWithTasks);
router.get('/users/:id/categories',authMiddleware, getUserWithCategories);
router.post('/users', createUser); 

module.exports = router;