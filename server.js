const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');


const PORT = process.env.PORT || 3000;

// Parseo Body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Expongo estáticamente los archivos que están el directorio public
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'/public/index.html'));
});


//Genero una sesión
app.use(session({
    secret:'12345678',
    resave:true,
    saveUninitialized:true,
    cookie:{
        httpOnly: false,
        secure: false
    }
}));

app.listen(PORT,()=>{
    console.log("Server listening on PORT: ",PORT);
});