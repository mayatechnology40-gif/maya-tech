require('dotenv').config();
const nodemailer = require('nodemailer');

async function testMail() {
  console.log('Testing Nodemailer with:', process.env.EMAIL_USER);
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.verify();
    console.log('Transporter verified successfully!');
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self
      subject: 'Test Email from Maya Tech Backend',
      text: 'This is a test email to verify Nodemailer configuration.'
    });
    
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Nodemailer Error:', error);
  }
}

testMail();
