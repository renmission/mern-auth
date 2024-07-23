import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const getUsersController = (req, res) => {
    res.json({
        message: 'Hello Users'
    });
};

export const updateUserController = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(403, 'You are not authorized to perform this action'));
    }

    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }
    
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture
            }
        },{
            new: true
        });

        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(errorHandler(400, error.message));
    }
};