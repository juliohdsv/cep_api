const express = require("express");
const cepRouter = require("./routes/cep.routes");

const app = express();

app.use(express.json());
app.use('/cep', cepRouter);

app.listen(4000, () => console.log("Server start"));