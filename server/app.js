//imports
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from 'dotenv';
import notFound from './middlewares/notFound.js';
import connectDB from "./db/connect.js";
import errorHandlerMiddleware from './middlewares/error-handler.js';
import usersRoutes from './api/v1/routes/userRoutes.js';
import postRoutes from './api/v1/routes/postRoutes.js';
import messageRoutes from './api/v1/routes/messageRoutes.js';
import {Server} from 'socket.io'
import http from 'http'

//app config
const app = express();
const server = http.createServer(app)
dotenv.config();

//extra security packages
app.use(cors());
app.use(helmet());

//middlewares
app.use(express.json());

//api  routes 
app.get("/api/v1/instagram-clone",(req,res)=>{
    res.status(200).json({success:true,message:"my instagram-clone app!!!"});
});
app.use('/api/v1/instagram-clone/users',usersRoutes);
app.use('/api/v1/instagram-clone/posts',postRoutes);
app.use('/api/v1/instagram-clone/messeger',messageRoutes);

//not found route
app.use(notFound);

//error handlermindleware
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
const start = async ()=>{
    await connectDB(process.env.MONGO_URL);
    app.listen(port,()=> console.log(`server listening at port ${port}...`));
    return io;
}

 start();

//socket server
const io = new Server(server,{origin: '*'})
io.on('connection',socket =>{
    console.log('a user connected');
})
io.on('disconnect', socket => console.log('a user disconnected'))

