var express = require('express');
const userController = require('../../controller/user.controller');
var router = express.Router();


router.get('/', (req, res)=> userController.getUser(req, res))
router.post('/', (req, res)=> {
    if (Array.isArray(req.body))
        return userController.createUsers(req, res)
    return userController.createUser(req, res)
})
router.put('/', (req, res)=> userController.updateUser)
router.delete('/', (req, res)=> {
    // Neu req.body rong thi xoa het
    if (Object.keys(req.query).length == 0)    
        return userController.deleteAllUsers(req, res);  
    return userController.deleteUser(req, res)
})
    

module.exports = router