import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT,()=>{
    console.loog(`Server is running on http://localhost:${PORT}`);
})