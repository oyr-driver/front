const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();
const server = http.createServer(app);

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/user', (req, res) => {
    res.render('index');
})

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/search.html');//html파일 열어주기 위함. __dirname은 약속임
})

app.get('/done', (req, res) => {
    res.sendFile(__dirname + '/done.html');
})

server.listen(port, () => {
    console.log(`Server running at https://localhost:${port}/user`);
});