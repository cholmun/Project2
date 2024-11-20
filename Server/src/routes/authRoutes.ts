import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });

    res.status(201).send({ id: newUser.id, username: newUser.username });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) 
        return res.status(404).send('User not found');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) 
        return res.status(401).send('Invalid password');

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || 'secret');
    res.send({ token });

    });

    export default router;