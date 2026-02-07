import dotenv from "dotenv"
dotenv.config();
import express from "express";
import path from "path";
const app = express();
const PORT = process.env.PORT;

import authRouter from "./routes/auth.route.js"
import messageRouter from "./routes/message.route.js"

import { connectDB } from "./lib/db.js";
connectDB();
const __dirname = path.resolve();
console.log(__dirname);

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)

app.listen(PORT, () => {
    console.log(`Server Running in PORT ${PORT}`);
    
})