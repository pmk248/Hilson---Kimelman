import express from "express"; 
import dotenv from "dotenv"
import userRouter from "./routes/userRoute"

const app = express();

dotenv.config();

app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("listening at post", PORT)
});