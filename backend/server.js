const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dns = require('dns');
const Contact = require('./models/Contact');
const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4, // FORCE IPv4
  auth: {
    user: process.env.EMAIL_USER,
    pass: (process.env.EMAIL_PASS || '').replace(/\s+/g, '')
  },
  // Force IPv4 to resolve ENETUNREACH errors on Render
  lookup: (hostname, options, callback) => {
    dns.lookup(hostname, { family: 4 }, callback);
  },
  // High timeouts for slow networks like Render
  connectionTimeout: 60000, 
  greetingTimeout: 60000,
  socketTimeout: 60000,
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      service,
      budget,
      message,
    });

    await newContact.save();

    // Send email notifications to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mayatechnology40@gmail.com, nikhilkamboz24@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new contact form submission.

Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Budget: ${budget || 'Not specified'}

Message:
${message}`
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting Maya Technologies`,
      text: `Dear ${name},

Thank you for reaching out to Maya Technologies! We have received your message and will get back to you within 24 hours.

Here is a copy of your submission:
Service: ${service}
Budget: ${budget || 'Not specified'}
Message: ${message}

Best regards,
Maya Technologies Team`
    };

    // Validate email configuration
    if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your_app_password_here') {
      console.error('Email password is not configured properly in .env');
      return res.status(500).json({ error: 'Server email configuration is missing. Please set up an App Password.' });
    }

    try {
      console.log(`Attempting to send emails...`);
      await transporter.sendMail(adminMailOptions);
      console.log('Admin email sent.');
      await transporter.sendMail(userMailOptions);
      console.log('User confirmation email sent.');

      res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('NODEMAILER ERROR:', error.message);
      res.status(500).json({
        error: 'Failed to send message. Please try again later.',
        details: error.message // Sending details to help debug (optional)
      });
    }
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Booking Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, email, phone, date, time, service, notes } = req.body;

    const newBooking = new Booking({
      name, email, phone, date, time, service, notes
    });

    await newBooking.save();

    // Send email notifications to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mayatechnology40@gmail.com, nikhilkamboz24@gmail.com',
      subject: `New Call Scheduled: ${name}`,
      text: `A new call has been scheduled.
      
Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${new Date(date).toDateString()}
Time: ${time}
Service: ${service || 'Not specified'}
Notes: ${notes || 'None'}`
    };

    // Send confirmation email to customer
    const siteUrl = req.headers.origin || 'http://localhost:5173';
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Call Confirmation: Maya Technologies`,
      text: `Dear ${name},

Your strategy session with Maya Technologies has been scheduled successfully!

Booking Details:
Date: ${new Date(date).toDateString()}
Time: ${time}
Service: ${service || 'Not specified'}

Need to change something? You can reschedule your call here:
${siteUrl}/reschedule/${newBooking._id}

We look forward to speaking with you!

Best regards,
Maya Technologies Team`
    };

    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
      console.log('Booking emails sent successfully to:', email);
    } catch (err) {
      console.error('Email error:', err);
      // We don't fail the request if email fails, as the booking is saved
    }

    res.status(201).json({ success: true, booking: newBooking });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Failed to schedule call' });
  }
});

app.get('/api/bookings/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching booking' });
  }
});

app.patch('/api/bookings/:id', async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { ...req.body, status: 'rescheduled' },
      { new: true }
    );

    if (!updatedBooking) return res.status(404).json({ error: 'Booking not found' });

    // Send rescheduling confirmation
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: updatedBooking.email,
      subject: `Call Rescheduled: Maya Technologies`,
      text: `Dear ${updatedBooking.name},

Your call has been successfully rescheduled.

New Details:
Date: ${new Date(updatedBooking.date).toDateString()}
Time: ${updatedBooking.time}

We look forward to speaking with you!

Best regards,
Maya Technologies Team`
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error('Reschedule email error:', err);
    }

    res.json(updatedBooking);
  } catch (error) {
    console.error('Reschedule error:', error);
    res.status(500).json({ error: 'Failed to update booking' });
  }
});

app.get('/', (req, res) => {
  res.send('Maya Technologies API is running');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`To access from other devices on your network, use your IP address instead of localhost.`);
});
