import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('mongoose is connected');
    }
).catch(err => {
    console.log(err);
});
const app = express();

app.listen(3000, () => {
console.log('listening on port 30000');
})




//api test 

app.use('/api/user', userRoutes);