const http = require('http');
const app = require('./app');
const { log } = require('console');

const server = http.createServer(app);


//set the view engine to ejs
app.set('View engine', 'ejs');

//user re.render to load up an ejs view file
//index page
app.get('/index', function(req,res) {
    res.render('pages/index');
});

//about page
app.get('/about', function(req,res) {
    res.render('pages/about');
});



server.listen(3000, () => {
    console.log("Serveur est en cours sur localhost:3000");
});


