const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to get tasks
app.get('/tasks', (req, res) => {
    res.json([]);
});

// Endpoint to add a task
app.post('/tasks', (req, res) => {
    // In a real app, you'd save this to a database
    res.status(201).json(req.body);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
