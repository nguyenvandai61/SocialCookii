const JWTSECRET = process.env.JWTSECRET;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const pass = "qk0K2M2nlYAlqTrq";
module.exports = {
    mongoose: {
      uri: process.env.MONGODB_URI || 'mongodb+srv://teamanmy:qk0K2M2nlYAlqTrq@cluster0.jojjg.mongodb.net/cookii'
    },
    
    jwtSecret: JWTSECRET
}