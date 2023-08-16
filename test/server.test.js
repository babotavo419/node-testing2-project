const request = require('supertest');
const server = require('../index.js');

describe('Server', () => {
    it('runs the tests', () => {
        expect(true).toBe(true);
    });

    describe('GET /', () => {
        it('returns a status code of 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('returns a JSON object with a message', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ message: "API is up and running!" });
        });
    });

    describe('GET /items', () => {
        it('returns a status code of 200', async () => {
            const res = await request(server).get('/items');
            expect(res.status).toBe(200);
        });

        // Assuming that at the time of test, the 'items' table is empty
        it('returns an empty array for items', async () => {
            const res = await request(server).get('/items');
            expect(res.body).toEqual([]);
        });

    });
});

// Close the server after tests run
afterAll(() => {
    server.close();
});
