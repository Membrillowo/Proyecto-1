const express = require('express');
const app = express();

const port = 3000;

var x = 'Arara'

views = __dirname + '/views/'

app.set('view engine', 'ejs');
app.set('views', views)
app.use(express.static(views))

app.get('/', (req, res) => {
    res.render('index', {titulo: views});
});

app.get('/servicios', (req, res) => {
    res.render('servicios', {titulo: 'Título dinámico'});
});

app.use((req,res,next) => {
    res.status(400).render('404', {test: x});
});    

app.listen(port, () => {
    console.log('servidor abierto en el puerto ' + port);
    console.log(views);
});
