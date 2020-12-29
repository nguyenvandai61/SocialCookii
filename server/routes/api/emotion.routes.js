var express = require('express');
const emotionController = require('../../controller/emotion.controller');
var router = express.Router();


router.post('/', (req, res) => {
    return emotionController.createEmotion(req, res)
})

router.get('/', (req, res)=> emotionController.getEmotion(req, res))

router.put('/', (req, res)=> emotionController.updateEmotion)

router.delete('/', (req, res)=> {
    return emotionController.deleteEmotion(req, res)
})

module.exports = router