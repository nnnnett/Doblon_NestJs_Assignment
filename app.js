
const express = require('express');
const app = express();
const assignmentRoutes = require('./routes/assignment2_routes');

app.use('/api/assignments', assignmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
