import user from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


  export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const existingUser = await user.findOne({ Email 
});
    
   
    if (existingUser && (await bcrypt.compare(Password, existingUser.Password))) {
      return res.status(200).json({
        message: "Login successful",
        success: true,
        user: existingUser,
      });
    }
const tokenData = {
      id: existingUser._id}

    const token = await jwt.sign(tokenData  , "alfakfjlaksfnadnfknksf", {expiresIn: "1d"});
    return res.status(200).cookie("token",token ,{httponly:true}).json({
      message: `Login successful{existingUser.FullName}`,    
      success: true,
     
    });

    
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  
    
  }}

  export const LogOut = async (req, res) => {
    return res.status(200).cookie("token", "", {
      expires: new Date(Date.now()),hhtpOnly: true,
    }).json({ 
      message: "Logged out successfully",
      success: true,
    });
  }

export const register = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;

    if (!FullName || !Email || !Password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await user.findOne({ Email });

    const HashedPassword = await bcrypt.hash(Password, 10);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    await user.create({
      FullName,
      Email,
      Password: HashedPassword
    });

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });

  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
