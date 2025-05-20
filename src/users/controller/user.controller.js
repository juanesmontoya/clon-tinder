import User from '../model/user.model.js';
import { response } from 'express';

export const createUser = async (req, res = response) => {
    const { name, age, genre, preferences, ubicacion, fotoPerfil, password } = req.body;

    try {
        const user = new User({ name, age, genre, preferences, ubicacion, fotoPerfil, password });

        const userExists = await User.findOne({ name: name });

        if (userExists) {
            return res.status(403).json({ message: 'User already exists' });
        }

        await user.save();
        return res.status(201).json({
            ok: true,
            message: 'User created successfully',
            user: user
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res = response) => {
    const { name, age, genre, preferences, ubicacion, fotoPerfil, password } = req.body;

    try {

        const userExists = await User.findOne({ name: name });

        if (userExists) {
            return res.status(403).json({ message: 'User already exists' });
        }

        await user.save();
        return res.status(201).json({
            ok: true,
            message: 'User created successfully',
            user: user
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const loginUser = async (req, res = response) => {
    const { name, password } = req.body;
    try {

        const user = await User.findOne({ name: name });
        if (!user) {
            return res.status(403).json({ 
                ok: false,
                message: 'User not found, please register' 
            });
        }
        if (user.password !== password) {
            return res.status(403).json({ 
                ok: false,
                message: 'Password is incorrect, please try again' 
            });
        }


        return res.status(200).json({
            ok: true,
            message: 'User logged in successfully',
            user: user
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const logoutUser = async (req, res = response) => {
    return res.status(200).json({
        ok: true,
        message: 'User logged out successfully'
    });
}