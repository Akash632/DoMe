const taskModel = require('../Models/taskModel.js');

const getTaskController = async (req,res)=>{
    const {id}=req.params;

    const data = await taskModel.find({user:id});
    res.status(200).send({
        success:true,
        data
    })
}

const addTaskController = async (req,res)=>{
       const {task}=req.body;
       const {id}=req.params;

    if(!task){
        return res.status(200).send({
            success:false,
            message:"Please enter valid input"
        })
    }

    const data = await taskModel({task,user:id}).save();
    res.status(200).send({
        success:true,
        message:"Task added successfully"
    })
}

const updateTaskController = async (req,res)=>{
    const {task} = req.body;
    const {id}=req.params;
    const data = await taskModel.findByIdAndUpdate(id,{task:task});
    res.status(200).send({
        success:true,
        message:"Task Updated successfully"
    })
}

const deleteTaskController=async(req,res)=>{
    const {id}=req.params;

    const data = await taskModel.findByIdAndDelete(id);
    res.status(200).send({
        success:true,
        message:"Task deleted successfully"
    })
}
module.exports = {getTaskController,addTaskController,updateTaskController,deleteTaskController}