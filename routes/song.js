import express from "express";
import Song from "../models/Song.js";

const songRouter = express.Router()

songRouter.get('/', async (req, res) => {

    const query = await Song.find({});
    res.status(200).json(query);

});

songRouter.get('/:id', async (req, res) => {
    try {
        
        const query = await Song.findById(req.params.id);
        res.status(200).json(query);

    } catch (error) {

        res.status(404).json(error.message);

    }
});

songRouter.post('/add', async (req, res) => {
    
    const songDoc = new Song({
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
    });

    const result = await songDoc.save();
    res.status(201).json(result);

});

songRouter.patch('/updatescore/:id', async (req, res) => {
    try {
        
        const query = await Song.findOneAndUpdate({_id: req.params.id},{score: req.body.score});
        res.status(200).json(query);

    } catch (error) {

        res.status(404).json(error.message);
        
    }
})

export default songRouter;