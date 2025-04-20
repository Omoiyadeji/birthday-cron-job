const cron = require('node-cron');
const User = require('../models/User');
const { sendBirthdayEmail } = require('./emailService');

// Run every day at 7 AM
cron.schedule('0 7 * * *', async () => {
    const today = new Date();
    const users = await User.find();
    
    users.forEach(user => {
        const birthday = new Date(user.dateOfBirth);
        if (birthday.getMonth() === today.getMonth() && 
            birthday.getDate() === today.getDate()) {
            sendBirthdayEmail(user);
        }
    });
});