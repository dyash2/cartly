import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

const Auth = mongoose.model('Auth', authSchema);

export default Auth;