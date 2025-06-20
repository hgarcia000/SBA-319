import mongoose from "mongoose";
import { songSchema } from "./Song";

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled Playlist'
    },
    createdBy: { type: String },
    description: { type: String },
    songs: [songSchema]

});

export default mongoose.model('Playlist', playlistSchema,'playlists');