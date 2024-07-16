import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});