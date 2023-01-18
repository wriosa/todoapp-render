//importabamos express

const express = require('express');
const db = require("./utils/database");
const initModels = require('./models/initModels');
const Users = require('./models/users.model');
const Todos = require('./models/todos.model');
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const authRoutes = require('./routes/auth.routes')
const cors = require('cors');
require('dotenv').config()

console.log(process.env.PUERTO);
//crear una instancia de express
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
//probando la conexion a la base de datos
db.authenticate()
    .then(() => console.log("Autenticacion exitosa"))
    .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra bd
//usar el metodo syn para sincronizar la informacion de la base de datos
//devuelve una promesa y la resolvemos con then
db.sync({ force: false })//devuelve la promesa
    .then(() => console.log("Base de datos sincronizada"))
    .catch((error) => console.log(error))
app.get('/', (req, res) => {
    res.status(200).json({ message: "Bienvenido al servidor" });
});
app.use('/api/v1', userRoutes)
app.use('/api/v1', todosRoutes)
app.use('/api/v1', authRoutes)

//definir las rutas de nuestros endpoints(ep)
//todas las consultas de usuarios
// localhost:8000/users -> todo para usuarios
// GET a /users
app.get('/users', async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todos los usuarios de la bd
        const result = await Users.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//GET A /todos
app.get('/todos', async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todos los usuarios de la bd
        const result = await Todos.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});
//Obtener una todo obteniendo su ID
app.get("/todos/:id", async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todos los usuarios de la bd
        const { id } = req.params;
        const result = await Todos.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});
//OBTENER UN USUARIO OBETENIENDO SU ID
app.get("/users/:id", async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todos los usuarios de la bd
        const { id } = req.params;
        const result = await Users.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.get("/users/username/:username", async (req, res) => {
    try {
        //vamos a obtener el resultado de consultar a todos los usuarios de la bd
        const { username } = req.params;
        const result = await Users.findOne({ where: { username } });//select * from users where username = wolfgang
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
})

//creando un usuario
app.post('/users', async (req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

//Crear una TODO
app.post('/todos', async (req, res) => {
    try {
        const todo = req.body;
        const result = await Todos.create(todo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});


//actaulizar un usuario
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Users.update(field, {
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
})
//actualizar TODO
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await Todos.update(field, {
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
})
// Delete USERS
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // const field = req.body;
        const result = await Users.destroy({
            where: { id }
        });
        res.status(200).json(result);
        //validar que el usuario no tenga tareas
    } catch (error) {
        res.status(400).json(error.message);

    }
});
//Delete TODOS
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // const field = req.body;
        const result = await Todos.destroy({
            where: { id }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);

    }
});
// localhost:8000/todos -> todo para tareas

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

//vamos a terminar los modelos
// vamos a crear las relaciones entre los modelos
// les voy a enseñar a insertar informacion desde el mismo proyecto


//vamos a estar haciendo los endpoints y consultas

//users