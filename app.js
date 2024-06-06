const express = require('express')
const app = express();

app.get('/test', (_req, res) =>{
    res.status(200).send("Hello Srirag CI/CD version 01")
});

module.exports = app;