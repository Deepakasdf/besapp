const express = require('express');
const app = express();
const path = require('path');

app.set('view engine ', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req, res) => {
    res.render('home.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('/services', (req, res) => {
    res.render('services.ejs')
})




app.get('/team', (req, res) => {
    res.render('team.ejs')
})


app.listen(4200, () => {
    console.log('it work');
})