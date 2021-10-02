const exp = require('express');
const bodyParser = require('body-parser');
const path =require('path');
const app=exp();

const adminRoutes =require('./routes/adminrout');
const navigrout = require('./routes/navigrout');
const ecomrout = require('./routes/ecom');



app.use(bodyParser.urlencoded({extended:false }));

// To serve the File statically we give the location of folder 
//where the files are located.
app.use(exp.static(path.join(__dirname,'public')));


app.use('/home',adminRoutes);
app.use('/home',ecomrout);

//Index or Home page
app.use(navigrout);

// 404 Page route
app.use((req,res,next)=>{
    res.status('404').send(`<h1> You may have Lost </h1>`);
})


app.listen(process.env.PORT || 3000);
