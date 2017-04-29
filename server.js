"use strict";
let express = require('express');
let parser = require('body-parser');
let multer = require('multer');
let uploader = multer();

let app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/upload', uploader.single('filename'), (req, res) => {
    res.redirect('/filesize/' + req.file.size);
});
app.get('/filesize/:size', (req, res) => {
    res.json({ size: req.params.size });
});

app.listen(process.env.PORT || 8080, () => console.log('running...'));