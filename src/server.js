const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`API ejecutándose en http://localhost:${PORT}`);
});

function shutdown(signal) {
  console.log(`${signal} recibido. Cerrando servidor...`);

  server.close(() => {
    console.log('Servidor cerrado correctamente.');
    process.exit(0);
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));