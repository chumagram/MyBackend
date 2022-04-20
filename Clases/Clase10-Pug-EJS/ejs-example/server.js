const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//app.set('views','./views');
app.set('viez engine','ejs'); //listo ya llamamos a ejs

app.get('/', function(req, res){
    let mascots = [
        {name: 'Sammy', oranization:"DigitalOcean",birth:2012},
        {name: 'Tux', oranization:"Linux",birth:1996},
        {name: 'Moby Dock', oranization:"Docker",birth:2013}
    ];
    let tagline = "No programming concepts is complete whitout a cute animal mascot.";
    res.render('pages/index',{macots:mascots,tagline:tagline});
})

app.get('/about',function(req,res){
    res.render('pages/about');
})

const server = app.listen(PORT,()=>{
    console.log("Aplicacion express escuchando en el puerto"+ server.address().port);
})