const request = require('supertest');
const app = require('../src/app');

describe('API Node.js', () => {
  test('GET / debe responder correctamente', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: 'API Node.js funcionando correctamente',
    });
  });

  test('GET /health debe indicar que la API está disponible', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.timestamp).toBeDefined();
  });

  test('GET /api/users debe retornar usuarios', async () => {
    const response = await request(app).get('/api/users');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Una ruta inexistente debe responder 404', async () => {
    const response = await request(app).get('/ruta-inexistente');

    expect(response.statusCode).toBe(404);
  });
});