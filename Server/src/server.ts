import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/connection';
import authRoutes from './routes/authRoutes';
import recipeRoutes from './routes/recipeRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
