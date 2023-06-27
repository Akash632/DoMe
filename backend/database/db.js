const mongoose= require('mongoose');

const connectdb= async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/crud');
        console.log('Connected to MongoDB');
    }
    catch (err){
        console.log(err);   
    }
}

module.exports = connectdb;