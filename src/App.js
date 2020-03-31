// your code is going to go here
// getting started with pure react

import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet.js';

import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havannesse" />
      <Pet name="Peppe" animal="Bird" breed="Cockatail" />
      <Pet name="Doink" animal="Cat" breed="Stray" /> */}
    </div>
  );
};

render(
  //React.createElement(App),
  App(),
  document.getElementById('root')
);
