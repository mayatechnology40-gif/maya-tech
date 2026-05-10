require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { Resend } = require('resend');
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

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify Nodemailer connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer verification failed:', error);
  } else {
    console.log('Nodemailer is ready to send emails');
  }
});

// Resend Setup (Secondary/Admin Notification)
const resend = new Resend(process.env.RESEND_API_KEY);

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const newContact = new Contact({ name, email, phone, service, budget, message });
    await newContact.save();

    // Email Templates
    const adminEmailContent = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message regarding <strong>${service}</strong>. Our team will review your requirements and get back to you within 24 hours.</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p><strong>Your Submission Summary:</strong></p>
        <p><em>"${message}"</em></p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p>Best Regards,<br/><strong>Maya Technologies Team</strong></p>
      </div>
    `;

    // 1. Send to Admin via Nodemailer
    transporter.sendMail({
      from: `"Maya Technologies" <${process.env.EMAIL_USER}>`,
      to: 'nikhilkamboz24@gmail.com',
      subject: `New Inquiry: ${name} - ${service}`,
      html: adminEmailContent
    }).catch(err => console.error('Admin Email Error (Nodemailer):', err));

    // 2. Send to User via Nodemailer (Primary for Customers)
    transporter.sendMail({
      from: `"Maya Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting Maya Technologies`,
      html: userEmailContent
    }).then(() => console.log('User confirmation email sent to:', email))
      .catch(err => console.error('User Email Error (Nodemailer):', err));

    // 3. Fallback Admin Notification via Resend
    if (process.env.RESEND_API_KEY) {
      resend.emails.send({
        from: 'Maya Technologies <onboarding@resend.dev>',
        to: 'mayatechnology40@gmail.com',
        subject: `New Inquiry: ${name} - ${service}`,
        html: adminEmailContent

      }).catch(err => console.error('Admin Email Error (Resend Fallback):', err));
    }

    res.status(201).json({ success: true, message: 'Message received and emails dispatched' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Booking Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, email, phone, date, time, service, notes } = req.body;

    const newBooking = new Booking({ name, email, phone, date, time, service, notes });
    await newBooking.save();

    const formattedDate = new Date(date).toLocaleDateString('en-US', { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

    const siteUrl = req.headers.origin || 'http://localhost:5173';

    // Email Templates
    const adminBookingContent = `
      <h3>New Call Scheduled</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date:</strong> ${formattedDate}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Notes:</strong> ${notes || 'None'}</p>
    `;

    const userBookingContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #2563eb;">Strategy Session Confirmed!</h2>
        <p>Dear ${name},</p>
        <p>Your call with Maya Technologies has been scheduled successfully.</p>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Date:</strong> ${formattedDate}</p>
          <p style="margin: 0;"><strong>Time:</strong> ${time}</p>
          <p style="margin: 0;"><strong>Service:</strong> ${service || 'General Consulting'}</p>
        </div>
        <p>Need to reschedule? You can do so here: <a href="${siteUrl}/reschedule/${newBooking._id}">${siteUrl}/reschedule/${newBooking._id}</a></p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p>We look forward to speaking with you!</p>
        <p>Best Regards,<br/><strong>Maya Technologies Team</strong></p>
      </div>
    `;

    // Send emails via Nodemailer
    transporter.sendMail({
      from: `"Maya Technologies" <${process.env.EMAIL_USER}>`,
      to: 'nikhilkamboz24@gmail.com',
      subject: `New Call Scheduled: ${name}`,
      html: adminBookingContent
    }).catch(err => console.error('Admin Booking Email Error:', err));

    transporter.sendMail({
      from: `"Maya Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Booking Confirmed: Strategy Session with Maya Technologies`,
      html: userBookingContent
    }).then(() => console.log('Booking confirmation email sent to:', email))
      .catch(err => console.error('User Booking Email Error:', err));

    // Fallback Admin Notification via Resend
    if (process.env.RESEND_API_KEY) {
      resend.emails.send({
        from: 'Maya Technologies <onboarding@resend.dev>',
        to: 'mayatechnology40@gmail.com',
        subject: `New Call Scheduled: ${name}`,
        html: adminBookingContent
      }).catch(err => console.error('Admin Booking Email Error (Resend Fallback):', err));
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

    const formattedDate = new Date(updatedBooking.date).toLocaleDateString('en-US', { 
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

    const resendEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #2563eb;">Call Rescheduled</h2>
        <p>Dear ${updatedBooking.name},</p>
        <p>Your strategy session has been successfully rescheduled.</p>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>New Date:</strong> ${formattedDate}</p>
          <p style="margin: 0;"><strong>New Time:</strong> ${updatedBooking.time}</p>
        </div>
        <p>We look forward to speaking with you at the new time!</p>
        <p>Best Regards,<br/><strong>Maya Technologies Team</strong></p>
      </div>
    `;

    transporter.sendMail({
      from: `"Maya Technologies" <${process.env.EMAIL_USER}>`,
      to: updatedBooking.email,
      subject: `Call Rescheduled: Maya Technologies`,
      html: resendEmailContent
    }).then(() => console.log('Reschedule email sent to:', updatedBooking.email))
      .catch(err => console.error('Reschedule Email Error:', err));

    // Fallback Admin Notification via Resend
    if (process.env.RESEND_API_KEY) {
      resend.emails.send({
        from: 'Maya Technologies <onboarding@resend.dev>',
        to: 'mayatechnology40@gmail.com',
        subject: `Call Rescheduled: ${updatedBooking.name}`,
        html: `<h3>Call Rescheduled</h3>
               <p><strong>Name:</strong> ${updatedBooking.name}</p>
               <p><strong>New Date:</strong> ${formattedDate}</p>
               <p><strong>New Time:</strong> ${updatedBooking.time}</p>`
      }).catch(err => console.error('Reschedule Email Error (Resend Fallback):', err));
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
  console.log(`Server is running on port ${PORT}`);
});
