var express = require('express');
var path = require('path')
var router = express.Router();
// let fileLocation = path.join(__dirname, '..','assets/image/posts', '1.png');
// console.log(fileLocation);
router.get('/image/default/avatar/:file', (req,res) =>{
  let file = req.params.file;
  let fileLocation = path.join(__dirname, '..','assets/image/default/avatar', file);
  console.log("lala");
  res.sendFile(fileLocation);
})
/* GET home page. */
router.get('/image/posts/:file', (req,res) =>{
    let file = req.params.file;
    let fileLocation = path.join(__dirname, '..','assets/image/posts', file);
    console.log("lala");
    res.sendFile(fileLocation);
  });

// route middleware để kiểm tra một user đã đăng nhập hay chưa?
function isLoggedIn(req, res, next) {
    // Nếu một user đã xác thực, cho đi tiếp
    if (req.isAuthenticated())
        return next();
    // Nếu chưa, đưa về trang chủ
    res.redirect('/');
}
  
module.exports = router;