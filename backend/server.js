require('dotenv').config();
const express = require('express');
const connectdb = require('./database/db.js');
const router = require('./routes/routes.js');
const userRouter = require('./routes/userRoute.js');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT||8000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(({
        message:"server is working"
    }))
})

app.use('/api/v1/tasks',router);

app.use('/api/v1/user',userRouter);
connectdb();

app.listen(PORT);