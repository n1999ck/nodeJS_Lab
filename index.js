var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var axios = require('axios').default;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/static', express.static('public'));
app.set("view engine", 'ejs');

app.get('/', function(req, res){
    axios.get('https://xkcd.com/info.0.json').then(function(response){
        console.log(response.data);
        res.render('home.ejs', {name:null, xkcdData: response.data});
    });
    
})

app.get('/path/:name', function(req,res){
    let name = req.params.name
    res.render('home.ejs');
})

app.get('/query', function(req,res){
    let name = req.query.name;
    let nameObject = {"name":name};
    res.render('home.ejs', nameObject);
})
app.get('/contact', function(req, res){
    //change to another ejs file with contact info
    res.render('home.ejs');
})

app.get('/results', function(req, res){
    //change to another ejs file with search results
    res.render('home.ejs');
})

app.post('/create', (req,res) => {
    console.log(req.body.email);
    res.redirect('/');
})


app.listen(3000, () => {
    console.log('Started on port 3000')
})


//project requirements:
/**
 * Project Requirements:
 * - Create node application using express
 * - Connect to an API
 * - NASA APOD API preferred but xkcd also works
 * - NASA APOD API requires sign up for a key 
 * - You'll need most api information for either
 * - make sure to commit and push; project should be on a separate repository from this one
 */