const JWTSECRET = process.env.JWTSECRET;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const pass = "qk0K2M2nlYAlqTrq";
module.exports = {
    mongoose: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/cookii'
    },
    
    jwtSecret: JWTSECRET
}