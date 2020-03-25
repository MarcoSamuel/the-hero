const express = require('express');
const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
/**
Métodos HTTP:
GET:Buscar/listar informação do back-end
POST:Criar uma informação no back-end
PUT:Alterar informação do back-end
DELETE:Deletar informação do back-end
**/

/**

Tipos de parametros

Query Params: Parâmetros nomeados na rota após "?" (filtros, paginação)
Route Params:Utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
**/
routes.post('/sessions', SessionController.create);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;