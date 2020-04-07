import React, { useState } from 'react';
import useDropdown from './useDropdown';

const SearchParams = () => {
  //   const location = 'Seatle, WA';
  const ANIMALS = ['dog', 'cat', 'bird', 'horse'];
  const BREEDS = ['havaneese', 'bulldog'];

  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);

  // const [animal, setAnimal] = useState('dog');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);

  // const [breed, setBreed] = useState('');
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

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
        <BreedDropdown></BreedDropdown>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
