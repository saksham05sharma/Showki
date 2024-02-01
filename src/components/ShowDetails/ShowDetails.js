import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowDetails.css';

const ShowDetails = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find(show => show.show.id === parseInt(id));

  return (
    <div className="show-details-card">
      <div className="show-details-container">
        <div className="show-details-image-card">
          {show.show.image && (
            <img src={show.show.image.medium} alt={show.show.name} className="show-details-image" />
          )}
        </div>
        <div className="show-details-info-container">
          <h1 className="show-details-title">{show.show.name}</h1>
          <p className="show-details-info"><span className="show-details-info-heading">Type : </span>{show.show.type}</p>
          <p className="show-details-info"><span className="show-details-info-heading">Language : </span>{show.show.language}</p>
          <p className="show-details-info"><span className="show-details-info-heading">Genre : </span>{show.show.genres.join(', ')}</p>
          <p className="show-details-info"><span className="show-details-info-heading">Premiered : </span>{show.show.premiered}</p>
          {show.show.ended !== null ? (
            <p className="show-details-info"><span className="show-details-info-heading">Till : </span>{show.show.ended}</p>
          ) : (
            <p className="show-details-info"><span className="show-details-info-heading">Till : </span>null</p>
          )}
          <p className="show-details-info"><span className="show-details-info-heading">Rating : </span>{show.show.rating.average}</p>
          <p className="show-details-info-heading">Summary :</p>
          <div className="show-details-summary" dangerouslySetInnerHTML={{ __html: show.show.summary }} />
          <Link to={`/book-ticket/${id}`} className="book-ticket-link">Book Movie Ticket</Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
