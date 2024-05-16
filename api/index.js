import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('mongoose is connected');
    }
).catch(err => {
    console.log(err);
});




const app = express();
app.use(express.json())

app.listen(3000, () => {
console.log('listening on port 30000');
})




//api test 

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


//add a middleware and function to handle errors 

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error '
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,

    })
});