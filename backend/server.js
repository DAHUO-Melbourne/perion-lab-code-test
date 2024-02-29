const express=require('express');
const cors=require('cors');
const usersRouter = require('./routes/users');

const app=express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);

app.listen(5000,()=>{
  console.log('Server is running on port: 5000');
})
