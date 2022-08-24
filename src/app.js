const express = require("express");
const path = require('path');

const cepRouter = require("./routes/cep.routes");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', cepRouter);

app.listen(4000, () => console.log("Server start"));