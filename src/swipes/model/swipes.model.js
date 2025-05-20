import mongoose from "mongoose";

const swipeSchema = new mongoose.Schema({
    user_og_id: {
        type: String,
        required: true,
    },
    user_fate_id: {
        type: String,
        required: true,
    },
    action: {
        type: String,
        required: true,
    }
    }, { timestamps: true });
    
export default mongoose.model("Swipe", swipeSchema);