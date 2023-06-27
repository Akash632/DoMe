const express = require('express');
const {getTaskController,addTaskController,updateTaskController,deleteTaskController} = require('../Controllers/taskController.js');
const router = express.Router();


router.get('/get-tasks/:id',getTaskController);

router.post('/add-task/:id',addTaskController);

router.put('/update-task/:id',updateTaskController);

router.delete('/delete-task/:id',deleteTaskController);

module.exports = router;