import mongoose from "mongoose";

export const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: 1
    },
    artist: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    genre: String,
    score: {
        type: Number,
        index: 1,
        default: 50,
        min: 0,
        max: 100
    }
});

export default mongoose.model('Song',songSchema,'songs');