const express =  require('express');
const router = express.Router();
const usrdata = require('./add-user');

router.get('/',(req,res,next)=>{

    res.render('users',{pageTitle:'Users',lo_users: usrdata.usrs, path:'/'});

});




module.exports = router;