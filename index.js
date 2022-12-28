const express = require("express");
const mysql = require('mysql');
const app = express();
const port = 3001;
const axios = require('axios');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mobile"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.post("/save", (req, res) => {
    let donate = req.body.donate;
    let tdate = req.body.tdate;
    let thr = req.body.thr;
    let tminutes = req.body.tminutes;
    let tname = req.body.tname;
    let tsurname = req.body.tsurname;

    var sql = "INSERT INTO `donate`(`donate`,`tdate`,`thr`,`tminutes`,`tname`,`tsurname`) VALUES ('"+donate+"','"+tdate+"','"+thr+"','"+tminutes+"','"+tname+"','"+tsurname+"')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json({ data: result })
    });
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});