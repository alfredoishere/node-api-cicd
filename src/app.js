const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Node.js funcionando correctamente',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/users', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: 'Alfredo',
    },
    {
      id: 2,
      name: 'Usuario de prueba',
    },
  ]);
});

module.exports = app;