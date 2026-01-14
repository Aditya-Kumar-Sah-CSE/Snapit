import mongoose from "mongoose";

const connectDB = async()=>{
    {
        try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log("MongoDB Connect successfully")
        } catch(error){
            console.log("MongoDB connection error",error);
        }
    }
}

export default connectDB;