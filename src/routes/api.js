const express = require('express');

const routerAPI = express.Router();

routerAPI.get('/', (req, res) => {
    return res.status(200).json("Hello world")
})

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')


// routerAPI.get('/users', getUsersAPI);
// routerAPI.post('/users', postCreateUserAPI);
// routerAPI.put('/users', putUpdateUserAPI);
// routerAPI.delete('/users', deleteUserAPI);



module.exports = routerAPI; //export default