import express from "express"; 
import dotenv from "dotenv"
import userRouter from "./routes/userRoute"
import authRouter from "./routes/userRoute"
import { dbConnection } from "./config/database";
import cookieparser from "cookie-parser";

const app = express();

dotenv.config();

dbConnection()

app.use(express.json());
app.use(cookieparser());
app.use('/auth', authRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("listening at post", PORT)
});