const express =  require('express');
const router = express.Router();


const users=[];
router.get('/users',(req,res,next)=>{
    res.render('add-user',{pageTitle:'Add User',path:'/users'});
})

router.post('/users',(req,res,next)=>{
    users.push({username : req.body.username});
   
    res.redirect('/');

});

exports.routes = router;
exports.usrs= users;