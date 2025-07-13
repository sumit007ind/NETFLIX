import user from "../models/userSchema.js";
import bcrypt from "bcryptjs";

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
