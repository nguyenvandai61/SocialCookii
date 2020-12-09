var express = require('express');
const userController = require('../../controller/user.controller');
var router = express.Router();


router.get('/', (req, res)=> userController.getAllUser(req, res))
router.get('/userInfo/:id', (req, res)=> userController.getUserInfo(req, res))
router.get('/:id', (req,res)=> userController.getUser(req, res))
router.post('/', (req, res)=> {
    if (Array.isArray(req.body))
        return userController.createUsers(req, res)
    return userController.createUser(req, res)
})
router.post('/login', (req, res) => userController.checkLogin(req, res))
router.post('/register', (req, res) => userController.checkRegister(req, res))

router.put('/', (req, res)=> userController.updateUser)
router.delete('/', (req, res)=> {
    // Neu req.body rong thi xoa het
    if (Object.keys(req.query).length == 0)    
        return userController.deleteAllUsers(req, res);  
    return userController.deleteUser(req, res)
})
    

module.exports = router