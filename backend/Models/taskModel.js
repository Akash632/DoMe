const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user:{
        type:mongoose.ObjectId,
        ref:'users',
        required:true
    },
    task:{
        type:String,
        required:true
    }
},{timestamps:true},{collection:'data'});

module.exports = mongoose.model('data',taskSchema,'data');