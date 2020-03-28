const connection = require('../database/connection')
const generateUniqId = require('../utils/generateUniqueId');

module.exports = {
    async index(request,response){
        const ong = await connection('ongs').select('*');
        return response.json(ong);
    },
    async create(request,response){
        const {name,email,whatsapp,city,uf} = request.body;
        const id = generateUniqId();
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf});
        return response.json({id});
    }
};