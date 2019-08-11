const express = require('express'); // Preguntar porque import express from 'express'; no sirve
const connectDB = require('./config/db');

const app = express();

// Connect to DataBase
connectDB();
app.use(express.json({ extended: false }));
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// ASK: Preguntar porque en la consola sale primero el log de app.listen y luego el de MongoDB Connected...
