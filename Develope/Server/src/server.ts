import express from 'express';
const app = express();
const PORT = 3001;

// Simple route to test the server.
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
