const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();
const server = http.createServer(app);

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

let passID;

app.get('/l/:id', (req, res) => {
    let id = req.params.id;//id 정보 가져오기
    passID=id;

    res.render('index',{id:id});
})

app.get('/search/:id', (req, res) => {
    let id = req.params.id;//id 정보 가져오기

    res.render('search',{id:id});
})

app.get('/done/:id', (req, res) => {
    let id = req.params.id;//id 정보 가져오기

    res.render('done',{id:id});
})



server.listen(port, () => {
    console.log(`Server running at https://localhost:${port}/l/~id~`);
});