import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled Playlist'
    },
    createdBy: { type: String },
    
});