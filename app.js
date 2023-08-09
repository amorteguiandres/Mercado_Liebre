const express = require('express');
const app = express();
const PORT = process.env.PORT||3001;
const path = require('path');


app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/register', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
});

app.get('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
});



app.listen(PORT, () => console.log('Escuchando en http://localhost:'+PORT));