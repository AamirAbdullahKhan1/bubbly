import { Request, Response } from "express";
import User from "../modals/User";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/token";

export const registerUser = async (req: Request, res: Response) : Promise<void> => {
    const {email, password, name, avatar} = req.body
    try {
        //to check if already exists
        let user = await User.findOne({email})
        if(user){
            res.status(400).json({success: false, message: "User already exists"})
            return
        }

        //create new user
        user = new User({
            email,
            password,
            name,
            avatar: avatar || "",
        })

        //hashing the password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        //save the user
        await user.save()

        //generate token
        const token = generateToken(user)

        res.json({
            success: true,
            message: "User registered successfully",
            token,
        })

    } catch (error) {
        console.log("while registering user:", error)
        res.status(500).json({success: false, message: "while registering user"})
    }
}

export const loginUser = async (req: Request, res: Response) : Promise<void> => {
    const {email, password} = req.body
    try {
        //find user by email
        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({success: false, message: "Invalid credentials"})
                return
        }

        //comapre the password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.status(400).json({success: false, message: "Invalid credentials"})
            return
        }

        //generate token
        const token = generateToken(user)

        res.json({
            success: true,
            message: "User logged in successfully",
            token,
        })

    } catch (error) {
        console.log("while logging in user:", error)
        res.status(500).json({success: false, message: "while logging in user"})
    }
}
 