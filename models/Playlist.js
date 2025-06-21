import mongoose from "mongoose";
import { songSchema } from "./Song.js";

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        index: 1,
        default: 'Untitled Playlist'
    },
    createdBy: { type: String },
    description: { type: String },
    songs: [songSchema]

});

export default mongoose.model('Playlist', playlistSchema,'playlists');