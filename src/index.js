// require("dotenv").config({path : './env'});
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const port = process.env.PORT||3000
const app = express();


dotenv.config({
    path:"./env"
})
 connectDB()
 
 .then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR",error);
        throw error
    })
    app.listen(port, ()=>{
        console.log(`server is running on : http://localhost:${port}`);
        
    })
 })
 .catch((error )=>{
    console.log("Mongodb connection failed!!",error);
    
 })


















/*
first approach
import express from "express"
const app =express()

( async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERROR",error);
        throw error
        
        app.listen(process.env.PORT,()=>{
            console.log(`app is running on port ${process.env.PORT}`);
        })
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw error
    }
})()
    */