const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

async function testApi() {
  console.log('Testing Contact API...');
  try {
    const contactRes = await axios.post(`${API_URL}/contact`, {
      name: 'Test Customer',
      email: 'nikhilkamboz24@gmail.com', // Testing with your own email to see if it arrives
      phone: '1234567890',
      service: 'Web Development',
      message: 'Hello, this is a test message to verify the new email system.'
    });
    console.log('Contact API Success:', contactRes.data);
  } catch (err) {
    console.error('Contact API Error:', err.response ? err.response.data : err.message);
  }

  console.log('\nTesting Bookings API...');
  try {
    const bookingRes = await axios.post(`${API_URL}/bookings`, {
      name: 'Test Customer',
      email: 'nikhilkamboz24@gmail.com',
      phone: '1234567890',
      date: new Date().toISOString(),
      time: '10:00 AM',
      service: 'Strategy Session',
      notes: 'Testing email confirmation.'
    });
    console.log('Bookings API Success:', bookingRes.data);
  } catch (err) {
    console.error('Bookings API Error:', err.response ? err.response.data : err.message);
  }
}

testApi();
