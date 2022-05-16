const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();
const server = http.createServer(app);

const hostname = '172.19.3.9';
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/user', (req, res) => {
    res.render('index');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});