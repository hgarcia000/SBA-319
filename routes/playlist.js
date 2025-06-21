import express from 'express'
import Playlist from '../models/Playlist.js';
import { userName } from './user.js';
import Song from '../models/Song.js';

const playlistRouter = express.Router();

playlistRouter.get('/', async (req, res) => {

    const query = await Playlist.find({});
    res.status(200).json(query);

});

playlistRouter.get('/:id', async (req, res) => {
    try {
        
        const query = await Playlist.findById(req.params.id);
        res.status(200).json(query);

    } catch (error) {
        
        res.status(404).json(error.message);

    }
});

playlistRouter.post('/add', async (req, res) => {
    try {
        
        if (userName.value == null) {
            
            throw new Error("You must be logged in to add a playlist.")

        }

        const playlistDoc = new Playlist({
            title: req.body.title,
            createdBy: userName.value,
            description: req.body.description
        });

        const result = await playlistDoc.save();
        res.status(201).json(result);

    } catch (error) {
        
        res.status(401).json({message: error.message});

    }
});

playlistRouter.put('/edit/:id', async (req, res) => {
    try {
        
        const query = await Playlist.findOneAndUpdate({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description
        });
        res.status(200).json(query);

    } catch (error) {

        res.status(404).json({message: error.message});

    }
});

playlistRouter.patch('/insertsong/:id', async (req, res) => {
    try {
        
        const query = await Playlist.findByIdAndUpdate(req.params.id, {$push: { songs: await Song.findById(req.body.song_id)}});
        res.status(200).json(query);

    } catch (error) {

        res.status(404).json({message: error.message});

    }
});

playlistRouter.patch('/removesong/:id', async (req, res) => {
    try {
        
        const query = await Playlist.findByIdAndUpdate(req.params.id, {$pull: {songs: await Song.findById(req.body.song_id)}});
        res.status(200).json(query);

    } catch (error) {
        
        res.status(404).json({message: error.message});

    }
});

playlistRouter.delete('/delete/:id', async (req, res) => {
    try {
        
        const query = await Playlist.findByIdAndDelete(req.params.id);
        res.status(204).json(query);

    } catch (error) {
        
        res.status(404).json({message: error.message});

    }
});

export default playlistRouter;