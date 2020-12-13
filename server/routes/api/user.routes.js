var express = require('express');
const passport = require('passport');
const userController = require('../../controller/user.controller');
var router = express.Router();
var jwt = require('jsonwebtoken');

var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;


var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'mysecretword';
// const signToken = userID =>{
//     return JWT.sign({
//         iss : "NoobCoder",
//         sub : userID
//     },"NoobCoder",{expiresIn : "1h"});
// }

router.get('/', (req, res)=> userController.getAllUser(req, res))
router.get('/userInfo/:id', (req, res)=> userController.getUserInfo(req, res))
router.get('/:id', (req,res)=> userController.getUser(req, res))
router.post('/', passport.authenticate('jwt', { session: false }), (req, res)=> {
    if (Array.isArray(req.body))
        return userController.createUsers(req, res)
    return userController.createUser(req, res)
})
router.post(
    '/login', 
    (req, res) => {
        console.log(req.body);
        return userController.checkLogin(req, res);
    }
);

router.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{username : "", role : ""},success : true});
});

router.post('/register', (req, res) => userController.checkRegister(req, res))

router.put('/', (req, res)=> userController.updateUser)
router.put('/:id', (req, res) => {
    return userController.updateUser(req, res);
})
router.delete('/', (req, res)=> {
    // Neu req.body rong thi xoa het
    if (Object.keys(req.query).length == 0)    
        return userController.deleteAllUsers(req, res);  
    return userController.deleteUser(req, res)
})
    
router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
    res.json({message: "Success!"});
  });
  
  router.get("/secretDebug",
    function(req, res, next){
      console.log(req.get('Authorization'));
      next();
    }, function(req, res){
      res.json("debugging");
  });
module.exports = router