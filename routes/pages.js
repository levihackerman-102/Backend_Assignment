const express = require('express');
const router = express.Router();
const sql = require("mysql");

const db = sql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

router.get('/',(req,res) => {
    res.render("index");
});

router.get('/register',(req,res) => {
    res.render("register");
});

router.get('/login',(req,res) => {
    res.render("login");
});

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.render("index");
});

router.get('/clientportal', (req, res) => {
    var sql='SELECT * FROM books';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(req.session.user);
    if(req.session.user)
    {
        res.render('clientportal.ejs', { title: 'Books List', bookData: data, user: req.session.user});
    }
    else
    {
        res.render('error.ejs');
    }
  });

});

router.get('/adminportal', (req, res) => {    
    var sql='SELECT * FROM books';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(req.session);
    if(req.session.user === 'admin')
    {
        res.render('adminportal.ejs', { title: 'Books List', bookData: data, user: req.session.user});
    }
    else
    {
        res.render('error.ejs');
    }
    });
});

module.exports = router;