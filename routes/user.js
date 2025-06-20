import express from 'express'
import User from '../models/User.js';

export const userName = {
    id: null,
    value: null
};

// console.log(userName.value ? true : false);

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    const query = await User.find({}).select('-password');
    console.log(userName);
    res.json(query);
});

userRouter.get('/:id', async (req, res) => {
    try {
        
        const query = await User.findById(req.params.id).select('-password');

        if (query) {
            
            res.status(200).json(query);

        } else {

            throw new Error("User Not Found!");
            
        }
    } catch (error) {
        
        res.status(404).json(error.message);

    }
    
});

userRouter.post('/signup', async (req, res) => {
    try {

        const userDoc = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const result = await userDoc.save()
        console.log({_id: result._id, username: result.username, email: result.email});
        res.status(201).json({_id: result._id, username: result.username, email: result.email});

    } catch (error) {

        res.status(400).json({message: error.message});

    }
});

userRouter.post('/login', async (req, res) => {
    try {
        
        const query = await User.findOne({email: req.body.email});

        if (query && query.password === req.body.password) {

            userName.id = query._id;
            userName.value = query.username;
            res.status(200).json(`Logged in as ${userName.value}!`);

        } else {

            throw new Error("Incorrect Email or Password!");

        }
    } catch (error) {

        res.status(401).json({message: error.message});
        
    }
});

userRouter.post('/logout', (req, res) => {

    if (userName.value) {

        userName.id = null, userName.value = null;
        res.status(200).json({message: "Logout Successful!"});

    } else {

        res.status(401).json({message: "You're not logged in..."});
    }

});

userRouter.delete('/delete/:id', async (req, res) => {
    try {
        
        const query = await User.findByIdAndDelete(req.params.id);
        res.status(204).json(query);

    } catch (error) {

        res.status(404).json(error.message)

    }
})

export default userRouter