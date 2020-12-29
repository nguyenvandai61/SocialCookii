var User = require('../models/emotion.model');

const getEmotion = (req, res) => {
  Emotion.find(req.query, (err, data) => {
    if (err) return res.status(500).send(err);
    res.json({"data": data});
  })
}



const createEmotion = (res, emotion) => {
  const newEmotion = new Emotion(emotion);
  newEmotion.save(err => {  
    console.log(err)
    if (err) return res.status(500).send(err);
    return res.status(200).json(newEmotion);
  });
}
const updateEmotion = (res, query, newData) => {
  const content = req.body;
  Emotion.findOneAndUpdate(content.query, content.newData, function(err) {
    if (err) return res.status(500).send(err);
    const response = {
        message: "Emotion successfully updated"
    };
    return res.status(200).send(response);
  });
}

const deleteEmotion = (res, query) => {
   Emotion.deleteOne(query, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "Emotion successfully deleted"
    };
    return res.status(200).send(response);
  })
}
module.exports = {
  getEmotion,
  createEmotion,
  updateEmotion,
  deleteEmotion,
}