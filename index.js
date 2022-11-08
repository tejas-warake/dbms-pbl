import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes.js';
// import path from 'path';
dotenv.config();

const app = express();


// app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


// configuring middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routes
app.use('/student', studentRoutes);
// app.use('/course', courseRoutes);


// listening the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${process.env.PORT}`);
})
