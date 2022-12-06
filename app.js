import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";

import HelloController from './controllers/hello-controllers.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/Tuiter'

mongoose.connect(CONNECTION_STRING)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
    return process.exit(1);
});

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://a9--cerulean-marzipan-1cea17.netlify.app'
}))
TuitsController(app);
HelloController(app);
UserController(app);

app.listen(process.env.PORT || 4000);