
// exports.up = function(knex) { // metodo up responsável sempre pela criação da tabela
//   return knex.shema.createTable("ongs", function(table){
//   	// tabela -> tipo -> nome -> visualização // regras, enfim
//   	table.string('id').primary(); // chame primaria
//   	table.string('name').notNullable(); // nome não pode ser valor nulo // vazio
//   	table.string('email').notNullable();
//   	table.string('whatsapp').notNullable();
//   	table.string('city').notNullable();
//   	table.string('uf', 2).notNullable();
//   });
// };

// exports.down = function(knex) { // metodo down caso de algum problema deleta a tabela
//   return knex.schema.dropTable("ongs");
// };
