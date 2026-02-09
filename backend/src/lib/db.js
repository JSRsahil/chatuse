import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        let rem = await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected")

    } catch(error){
        console.log("Error Connection : ", error);
    }
}