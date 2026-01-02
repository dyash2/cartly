import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from './config/env.js';
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import connectDB from "./database/mongodb.js";
import  errorMiddleware  from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/users",userRouter);
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the Cartly');
});

app.listen(PORT, async() => {
    console.log(`Cartly API is running on http://localhost:${PORT}`)
    //Connect to the Database
    await connectDB();
});


export default app;
