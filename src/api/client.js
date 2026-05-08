const getBaseUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    console.log('Using API URL from Environment:', import.meta.env.VITE_API_URL);
    return import.meta.env.VITE_API_URL;
  }
  
  if (import.meta.env.DEV) {
    const { protocol, hostname } = window.location;
    const url = `${protocol}//${hostname}:5000`;
    console.log('Development Mode: Using Local IP:', url);
    return url;
  }
  
  console.warn('No VITE_API_URL found! Falling back to relative path. If your backend is on a different domain, please set VITE_API_URL in Netlify settings.');
  return '';
};

const BASE_URL = getBaseUrl();

const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  let data;

  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    // If not JSON, get text (could be an error page or empty)
    const text = await response.text();
    if (!response.ok) {
      throw new Error(text || `Server returned ${response.status}: ${response.statusText}`);
    }
    return text; // Or handle as needed
  }

  if (!response.ok) {
    throw new Error(data?.error || data?.message || 'Something went wrong');
  }
  return data;
};

export const contactApi = {
  submitForm: async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      return await handleResponse(response);
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        throw new Error(`Cannot connect to server at ${BASE_URL}. Please check your connection.`);
      }
      throw error;
    }
  },
};

export const bookingApi = {
  schedule: async (bookingData) => {
    const response = await fetch(`${BASE_URL}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    return await handleResponse(response);
  },
  getBooking: async (id) => {
    const response = await fetch(`${BASE_URL}/api/bookings/${id}`);
    return await handleResponse(response);
  },
  updateBooking: async (id, bookingData) => {
    const response = await fetch(`${BASE_URL}/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    return await handleResponse(response);
  },
};
