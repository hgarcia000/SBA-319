import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
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
        default: 50,
        min: 0,
        max: 100
    }
});

export default mongoose.model('Song',songSchema,'songs');