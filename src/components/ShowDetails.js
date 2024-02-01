import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find(show => show.show.id === parseInt(id));

  return (
    <div>
      <h2>{show.show.name}</h2>
      <p>{show.show.type}</p>
      <p>{show.show.language}</p>
      <p>{show.show.genres}</p>
      <p>Premiered</p>
      <p>From : {show.show.premiered}</p>
      {show.show.ended !== null ? (
        <p>Till : {show.show.ended}</p>
      ) : (
        <p>Till : null</p>
      )}
      <p>Rating : {show.show.rating.average}</p>
      <p>{show.show.summary}</p>
      <Link to={`/book-ticket/${id}`}>Book Movie Ticket</Link>
    </div>
  );
};

export default ShowDetails;
