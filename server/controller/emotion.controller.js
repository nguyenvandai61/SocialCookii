var EmotionService = require('../services/emotion.service');

const createEmotion = (req, res) => {
    let Emotion = req.body;
    return EmotionService.createEmotion(Emotion).then((newEmotion, err) =>{
        console.log(err)
        if(err) return res.status(500).send(err);
        return res.status(200).json(newEmotion);
    });
}

const updateEmotion = (req, res) => {
    let content = req.body;
    return EmotionService.updateEmotion(res, content.query, content.newContent);
}

const deleteEmotion = (req, res) => {
    let query = req.body.query;
    return EmotionService.deleteEmotion(res, query);
}

const getEmotion = (req, res) => {
    return EmotionService.getEmotion(req, res);
}

module.exports = {
    createEmotion,
    updateEmotion,
    deleteEmotion,
    getEmotion,
}