const express = require('express')
const app = express();

app.get('/test', (_req, res) =>{
    res.status(200).send("Hello Srirag CI/CD version 04")
});

module.exports = app;