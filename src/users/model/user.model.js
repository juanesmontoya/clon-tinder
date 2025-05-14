import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    preferences: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    }, 
    fotoPerfil: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
    }, { timestamps: true });

export default mongoose.model("User", userSchema);