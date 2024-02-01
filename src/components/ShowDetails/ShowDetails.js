import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowDetails = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find(show => show.show.id === parseInt(id));

  return (
    <div>
      <h2>{show.show.name}</h2>
      
      {show.show.image && (
        <img src={show.show.image.medium} alt={show.show.name} />
      )}
      
      <p>{show.show.type}</p>
      <p>{show.show.language}</p>
      <p>{show.show.genres.join(', ')}</p>
      <p>Premiered</p>
      <p>From : {show.show.premiered}</p>
      {show.show.ended !== null ? (
        <p>Till : {show.show.ended}</p>
      ) : (
        <p>Till : null</p>
      )}
      <p>Rating : {show.show.rating.average}</p>
      <div dangerouslySetInnerHTML={{ __html: show.show.summary }} />
      <Link to={`/book-ticket/${id}`}>Book Movie Ticket</Link>
    </div>
  );
};

export default ShowDetails;
