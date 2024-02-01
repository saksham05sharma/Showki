// ShowList.js

import React from 'react';
import { Link } from 'react-router-dom';

const ShowList = ({ shows }) => {
  return (
    <div>
      <h2>Show List</h2>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
