const crypto = require('crypto'); // responsável pela criptografia
const connection = require('../database/connection');
module.exports = {
	async index(req, res){
	 	const ongs = await connection('ongs').select("*");
	 	return res.json(ongs);
	},
	async create(req, res){


	const { name, email, whatsapp, city, uf } = req.body; // poderia usar uma variavel unica ex: data, dados, dado
  
	const id = crypto.randomBytes(4).toString('HEX'); // gera um id randomicamente
   //const params = req.params;
   // const param = req.query;
   //const body = req.body;

   await connection('ongs').insert({
   	 id,
   	 name,
   	 email,
   	 whatsapp,
   	 city,
   	 uf
   });
   
   return res.json({ id });
	}
}