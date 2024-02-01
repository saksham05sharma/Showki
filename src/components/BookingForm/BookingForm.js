import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find(show => show.show.id === parseInt(id));

  
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('bookingFormData');
    return storedData ? JSON.parse(storedData) : {
      name: '',
      email: '',
      phone: '',
      movieName: show.show.name,
    };
  });

  
  useEffect(() => {
    localStorage.setItem('bookingFormData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="booking-card">
      <div className="booking-form">
        <h2 className="title">Book Ticket for {show.show.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Ticket Booking Time:</label>
            <input type="text" id="time" name="time" value={show.show.schedule.time} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="date">Ticket Booking Date:</label>
            <input type="text" id="date" name="date" value={show.show.schedule.days[0]} readOnly />
          </div>
          <button type="submit" className="book-ticket-button">Book Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
