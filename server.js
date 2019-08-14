const express = require('express'); // Preguntar porque import express from 'express'; no sirve
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect to DataBase
connectDB();
app.use(express.json({ extended: false }));
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ASK: Preguntar porque en la consola sale primero el log de app.listen y luego el de MongoDB Connected...
