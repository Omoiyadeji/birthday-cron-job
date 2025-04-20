const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendBirthdayEmail = async (user) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: 'Happy Birthday! 🎉',
        html: `
            <div style="text-align: center; font-family: Arial, sans-serif;">
                <h1>Happy Birthday ${user.username}! 🎂</h1>
                <p>Wishing you a fantastic day filled with joy and laughter!</p>
                <img src="https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif" alt="Birthday celebration">
                <p>Best wishes,<br>Your Friends at Our Company</p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Birthday email sent to ${user.email}`);
    } catch (error) {
        console.error('Error sending birthday email:', error);
    }
};

module.exports = { sendBirthdayEmail };