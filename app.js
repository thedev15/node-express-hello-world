var express=require('express');
var app=express();

var routes=require('./routes/route.js');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);

app.get('/health', (req, res) => {
  res.json({ message: 'okay' }).status(200);
});

var port = process.env.PORT || 3000;

var server=app.listen(port, '0.0.0.0', function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
