import express from "express"; 
import dotenv from "dotenv"
import userRouter from "./routes/userRoute"
import { dbConnection } from "./config/database";

const app = express();

dotenv.config();
dbConnection()

app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("listening at post", PORT)
});