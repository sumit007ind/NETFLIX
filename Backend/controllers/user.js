const register= async(req,res) =>{
    try {
        const {FullName, Email, Password} = req.body;
        if(!FullName || !Email || !Password) {
            return res.status(404).json({message: "All fields are required"});
            success: false
        }
        const user = await user.findOne({Email});
            if (user) {
                return res.status(400).json({message: "User already exists"});

                
                success: false  
        }
        await user.create({
            Fullname: FullName, 
            Email: Email,
            Password: Password
  
                

        }) 
        
            return res.status(201).json({
                message: "User registered successfully",  

                success: true
            });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({message: "Internal server error", success: false});
        
    }
}