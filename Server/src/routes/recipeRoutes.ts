import express from 'express';
import axios from 'axios';
import { authenticate } from '' // fill in path for authenticate middleware

const router = express.Router();

router.get('/recipes', authenticate, async (req, res) => {
    const { ingredients } = req.query;

    try { 
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching recipes');
    }
});

router.post('/add-recipe', authenticate, async (req, res) => {
    const { name, ingredients, instructions } = req.body;
});

export default router;