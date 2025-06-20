import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';
import userRouter, { userName } from './routes/user.js';
import songRouter from './routes/song.js';
import playlistRouter from './routes/playlist.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

await mongoose.connect(process.env.MONGO_URI);
console.log(`${Date()} : MongoDB Connected!`);
console.log(userName);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.use('/api/users', userRouter);
app.use('/api/songs', songRouter);
app.use('/api/playlists', playlistRouter);

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});