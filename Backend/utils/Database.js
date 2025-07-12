import mongoose from "mongoose"

const Databaseconnection =()=>{

    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database connected successfully");
    }).catch((error)=>{
        console.error("Database connection failed:", error);
    });


}
export default Databaseconnection;