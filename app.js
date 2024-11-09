const express = require('express');
const app = express();
const fibonacciRoutes = require('./routes/assignment1_routes');

app.use(express.json());

app.use('/api', fibonacciRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
