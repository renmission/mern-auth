import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signUpController = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({
            message: 'User created successfully'
        });
    } catch (error) {
        next(error);
    }
};


export const signInController = async (req, res, next) => {
   const { email, password } = req.body;

   try {
    const user = await User.findOne({ email });
    if (!user) return next(errorHandler(404, 'User not found'));

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return next(errorHandler(401, 'Invalid credentials'));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    const { password: userPassword, ...rest } = user._doc;

    res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
   } catch (error) {
        next(error);
   }
};

export const signInWithGoogle = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        console.log(user);

        if (!user) {
            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const username = `${req.body.name.split(' ')[0]}${Math.floor(Math.random() * 1000)}`;
            const newUser = new User({ 
                username, 
                email: req.body.email,
                password: hashedPassword,
                profilePicture: req.body.photo,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            const { password: userPassword, ...rest } = newUser._doc;
            return res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const { password: userPassword, ...rest } = user._doc;
        return res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const signOutController = (req, res) => {
    res.clearCookie('access_token').json({
        message: 'Sign out successfully'
    });
};
