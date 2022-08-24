const cepApi = require('../services/cepApi');

const cepController = {
    
    show: async (request, response) => {
        const {codigo} = request.params;
        const {data: foundData} = await cepApi.get(`/cep/v2/${codigo}`);
        
        response.statusCode = 200;
        return response.render('cep', {
            title: 'Buscar cep - Local',
            zipcode: foundData.cep,
            state: foundData.state,
            city: foundData.city,
            neighborhood: foundData.neighborhood,
            street: foundData.street
        });
    },

    screen: (request, response) => {
        return response.render('home', {title: "Buscar cep - Home"});
    },

    search: (request, response) => {
        const numCep = request.body.codigo;

        if(numCep == undefined){
            return  response.sendStatus(400);
        }else{
            response.redirect(`/cep/${numCep}`);
        }
        
    },
};

module.exports = cepController;