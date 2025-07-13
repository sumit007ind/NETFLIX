import express from "express";
import dotenv from "dotenv";
import Databaseconnection from "./utils/Database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
// ✅ Load environment variables first
dotenv.config({ path: "./.env" });

// ✅ Connect to database
Databaseconnection();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Netflix Clone API",    
    success: true
  })
}
);  


app.use("/api/v1/user/", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
