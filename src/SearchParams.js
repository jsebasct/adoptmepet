import React, { useState, useEffect } from 'react';
import useDropdown from './useDropdown';
import pet, {ANIMALS} from '@frontendmasters/pet'


const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);

  // const [animal, setAnimal] = useState('dog');
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed('');
  //   Pet.breeds('dog').then(console.log, console.error);

    pet.breeds(animal).then( ({breeds}) => {
      const breedNames = breeds.map( item => item.name )
      setBreed(breedNames)
    }, console.error) // same as error => console.log(error)
  }, [animal, setBreed, setBreeds]);

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
        <BreedDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
