const express = require("express");
const cors = require('cors');
const routes = require("./routes");
const app = express();
app.use(cors());
app.use(express.json());// diz para o express que ira utilizar json // antes das rotas !!!
app.use(routes);
app.listen(3333);
