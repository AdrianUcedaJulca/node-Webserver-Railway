require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public'));

app.get('/', (req, res)=> {

    res.render('home', {
        nombre: 'Eufer Uceda',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res)=> {

    res.render('generic', {
        nombre: 'Eufer Uceda',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res)=> {

    res.render('elements', {
        nombre: 'Eufer Uceda',
        titulo: 'Curso de Node'
    });
});

app.listen(port, ()=> {
    console.log(`Escuchando en el puerto: ${port}`);
});