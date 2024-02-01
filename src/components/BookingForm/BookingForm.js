import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find(show => show.show.id === parseInt(id));

  // Load form data from local storage if available
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('bookingFormData');
    return storedData ? JSON.parse(storedData) : {
      name: '',
      email: '',
      phone: '',
      movieName: show.show.name,
    };
  });

  // Store form data in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookingFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Clear form data after submission if needed
    // setFormData({ name: '', email: '', phone: '', movieName: show.show.name });
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Book Movie Ticket for {show.show.name}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

        <input type="submit" value="Book Ticket" />
      </form>
    </div>
  );
};

export default BookingForm;
