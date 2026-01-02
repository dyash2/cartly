import { Router } from "express";

const authRouter = Router();

authRouter.post("/register",(req,res)=> {
    res.send({
        title:"Register the User"
    });
});

authRouter.post("/login",(req,res) => {
    res.send({
        title:"Login the User"
    })
})

export default authRouter;