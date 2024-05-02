// server/config/config.js

module.exports = {
    // MongoDB connection URI
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/UGuide',
  
    // JWT secret key for authentication
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key-here'
  };
  