import express from "express";
import dotenv from "dotenv";
import Databaseconnection from "./utils/Database.js";
import cookieParser from "cookie-parser";

Databaseconnection();
dotenv.config(
    {
       path: "./.env"
    }
);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});