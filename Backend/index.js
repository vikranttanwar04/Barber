const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded());

app.listen('8080', () => {
    console.log("App is listening on 8080.");
});

let head = "Vikrant Tanwar";

app.get("/", (req,res) => {
    res.json(head);
})

let data;

app.post('/book', (req,res) => {
    // console.log(req.body);
    data = req.body;
    console.log(data);
})

app.get('/status', (req,res) => {
    // res.json(data);
    console.log(data);
    res.send(data);
})