import React from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = ({ shows }) => {
  return (
    <div className="show-list-container">
      <h2 className="show-list-title">Show List</h2>
      <ul className="show-list">
        {shows.map(show => (
          <li key={show.show.id} className="show-item">
            <Link to={`/show/${show.show.id}`} className="show-item-link">
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
