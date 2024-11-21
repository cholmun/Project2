import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, password: hashedPassword });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Error registering user' });
    }
  });

// Login user
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { username } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: '1h',
      });
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: 'Error logging in' });
    }
  });
  
  export default router;