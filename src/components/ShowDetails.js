// ShowDetails.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find(show => show.show.id === parseInt(id));

  return (
    <div>
      <h2>{show.show.name}</h2>
      <p>{show.show.summary}</p>
      <Link to={`/book-ticket/${id}`}>Book Movie Ticket</Link>
    </div>
  );
};

export default ShowDetails;
