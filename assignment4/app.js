const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

const hompg= require('./routes/user');
const addusr=require('./routes/add-user');

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(addusr.routes);
app.use(hompg);

app.use((req,res,next)=>{
   
    res.status(404).render('404',{pageTitle:'err 404'});
});
app.listen(3000);