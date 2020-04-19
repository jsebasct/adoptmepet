import React, { useState, useEffect } from 'react';
import useDropdown from './useDropdown';
import Pet from './Pet';
import {ANIMALS} from '@frontendmasters/pet'
// import {breeds} from '@frontendmasters/pet'

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);

  // const [animal, setAnimal] = useState('dog');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);

  // const ANIMALS = ['dog', 'cat', 'bird', 'horse'];
  // const BREEDS = ['havaneese', 'bulldog'];

  // const [breed, setBreed] = useState('');
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  // useEffect(() => {
  //   setBreeds([]);
  //   setBreed('');
  //   Pet.breeds('dog').then(console.log, console.error);
  // });

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />
        {/* <BreedDropdown /> */}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
