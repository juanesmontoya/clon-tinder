import moongose from 'mongoose';
const matchSchema = new moongose.Schema({
    user1_id: {
        type: String,
        required: true
    },
    user2_id: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default moongose.model('Match', matchSchema);