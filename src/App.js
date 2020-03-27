// your code is going to go here
// getting started with pure react

import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ]);
};

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
