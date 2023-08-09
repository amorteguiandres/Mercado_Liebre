const express = require('express');
const app = express();
const PORT = process.env.PORT||3001;
const path = require('path');



app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, '../views/home.html');
    res.sendFile(htmlPath);
});

app.get('/register', (req, res) => {
    let htmlPath = path.resolve(__dirname, '../views/register.html');
    res.sendFile(htmlPath);
});

app.get('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname, '../views/login.html');
    res.sendFile(htmlPath);
});

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, () => console.log('Escuchando en http://localhost:'+PORT));