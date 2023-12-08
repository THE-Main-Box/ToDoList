// requires
const express = require('express');
const checkListRouter = require('./src/routes/checkList');
require('./config/database')

// constantes que acompanham functions/métodos
const app = express();
app.use(express.json());

app.use('/checklist',checkListRouter)

app.listen(3000, ()=>{
    console.log('servidor iniciado');
})