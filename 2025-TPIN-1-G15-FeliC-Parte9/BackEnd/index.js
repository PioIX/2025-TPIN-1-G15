const express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
var cors = require('cors');
const { realizarQuery } = require('./modulos/mysql');

var app = express(); //Inicializo express
var port = process.env.PORT || 4000; //Ejecuto el servidor en el puerto 3000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.post('/register', (req, res) => {
    const { username, password, email } = req.body;

    const sql = `
        INSERT INTO Users (username, password, email)
        VALUES (?, ?, ?)
    `;

    mySql.query(sql, [username, password, email], (err, result) => {
        if (err) {
            console.error('Error al intentar:', err);
            return res.status(500).send('Error en el servidor');
        };
        res.send('Usuario registrado correctamente');
    });
});

app.listen(port, function(){
    console.log(`Server running in http://localhost:${port}`);
});
