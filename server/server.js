const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basis Route
app.get('/', (req, res) => {
  res.json({ message: 'Kaffee Webseite API Server läuft' });
});

// API Routes werden hier hinzugefügt

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});