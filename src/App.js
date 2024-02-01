// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShowList from './components/ShowList/ShowList';
import ShowDetails from './components/ShowDetails/ShowDetails';
import BookingForm from './components/BookingForm/BookingForm';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/show/:id" element={<ShowDetails shows={shows} />} />
          <Route path="/book-ticket/:id" element={<BookingForm shows={shows} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
