import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import contactroute from './route/contact.route.js'
import enrollroutes from "./route/enroll.route.js";
import cors from 'cors';

dotenv.config()

const app = express()
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database connected!!");
})
.catch((err)=>{
    console.log("Database failed", err);
})
app.use(cors());
app.use(express.json())


app.use('/api',contactroute);
app.use("/api", enrollroutes);


app.listen(3000, ()=>{
    console.log("Server is running on port 3000!!");
})
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!!!';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})
