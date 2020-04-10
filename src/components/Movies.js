import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map( x => <div>{x.title} - {x.time} <ul>{x.genres.map(x => <li> {x}</li>)}</ul> </div>)}
    </div>
  );
};

export default Movies;
