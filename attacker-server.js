const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Seteo puerto
const PORT = process.env.PORT || 3001;

/*CORS
app.use((req,res,next)=>{

});*/

// Parseo Body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/cookie',(req,res,next)=>{
    console.log(req.query);
    res.send('Gracias!');
});

app.get('/',(req,res,next)=>{
    console.log(req.query);
    res.send(req.query);
});

app.listen(PORT,()=>{
    console.log("Attacker Server listening on port: ",PORT);
})