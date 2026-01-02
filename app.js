import express from "express";
import { PORT } from './config/env.js';
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/users",userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Cartly');
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)

});

export default app;
