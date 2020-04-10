import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map( x => <div>{x.name} <br/> <ul>{x.movies.map(x => <li> {x}</li>)}</ul> </div>)}
    </div>
  );
}

export default Directors
