import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

await mongoose.connect(process.env.MONGO_URI);
console.log(`${Date()} : MongoDB Connected!`);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});