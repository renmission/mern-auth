import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const signInController = (req, res) => {
    res.json({
        message: 'Hello Sign In'
    });
};

export const signUpController = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(200).json({
            message: 'User created successfully'
        });
    } catch (error) {
        next(error);
    }
};