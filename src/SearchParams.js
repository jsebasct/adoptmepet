import React, { useState } from 'react';
// import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  //   const location = 'Seatle, WA';
  const ANIMALS = ['dog', 'cat', 'bird', 'horse'];
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('dog');
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value="location"
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select>
            id="animal" value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
            <option key="all">ALL</option>
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
