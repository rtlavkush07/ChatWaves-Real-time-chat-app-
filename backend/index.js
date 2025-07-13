import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import messageRoute from './routes/message.route.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(cookieParser());

const URL = process.env.MONGO_URL;

const PORT = process.env.PORT || 3001;




try{
    mongoose.connect(URL);
 console.log("MongoDB Connected");
 
}

catch(error)
{
    console.log(error);
}

 
app.use("/api/user",userRoute); // Use the user route
app.use("/api/message", messageRoute); // Use the message route


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

