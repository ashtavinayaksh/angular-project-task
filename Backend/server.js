// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database'); // Configure your database connection

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define your API routes
const dataRoutes = require('./routes/data');
app.use('/api/data', dataRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
