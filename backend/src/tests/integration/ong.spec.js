const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection')

describe('ong', () =>{
    it('should be able to create a new ong', async () => {
        beforeEach(async () => {
            await connection.migrate.rollback();
            await connection.migrate.latest();
        });

        afterEach(async () => {
            await connection.destroy();
        });

        const response = await request(app).post('/ongs').send({
            name:"ONG TESTE",
            email:"contato@teste.com",
            whatsapp:"010010101010",
            city:"São Paulo",
            uf:"SP"
        });
    })
});