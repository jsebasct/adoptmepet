// your code is going to go here
// getting started with pure react

import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet.js';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havannesse'
    }),
    React.createElement(Pet, {
      name: 'Peppe',
      animal: 'Bird',
      breed: 'Cockatail'
    }),
    React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'Stray' })
  ]);
};

render(
  //React.createElement(App),
  App(),
  document.getElementById('root')
);
