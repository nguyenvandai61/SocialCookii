var express = require('express');
var path = require('path')
var router = express.Router();
let fileLocation = path.join(__dirname, '..','assets/image/posts', '1.png');
console.log(fileLocation);
/* GET home page. */
router.get('/image/posts/:file', (req,res) =>{
    let file = req.params.file;
    let fileLocation = path.join(__dirname, '..','assets/image/posts', file);
    console.log("lala");
    res.sendFile(fileLocation);
  });
module.exports = router;