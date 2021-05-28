//Requiriendo Express
const express = require('express');
const app = express();
//Requiriendo Path y carpeta estatica
const path = require('path');
const publicPath = path.resolve(__dirname,'./public')


//Para dar opción de levantar server en el host 3000 o donde nos asigne Heroku.
app.set("port",process.env.PORT || 3000);

app.use(express.static(publicPath));
//Levantando Server
app.listen(app.get("port"),() =>
    console.log('Open Server en http://localhost:'+app.get("port")));
//Levantando Server
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

app.get('/registerForm', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

app.get('/loginForm', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});
