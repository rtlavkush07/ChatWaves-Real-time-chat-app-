import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';

const app = express();
dotenv.config();
app.use(express.json());
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


app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

