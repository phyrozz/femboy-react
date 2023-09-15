import React, { useState } from 'react';
import Navbar from '../components/navBar';
import '../App.css';
import PageHeader from '../components/pageHeader';
import characters from '../data/characters.json';
import CharacterCard from '../components/characterCard';

function Explore() {
  const [sortCriteria, setSortCriteria] = useState('popularity'); // Default sorting criteria
  const [sortOrder, setSortOrder] = useState('ascending'); // Default sorting order

  // Function to sort characters based on the selected criteria and order
  const sortedCharacters = () => {
    let sorted = [...characters.character];
    if (sortCriteria === 'popularity') {
      sorted = sorted.sort((a, b) => {
        if (sortOrder === 'ascending') {
          return a.popularity - b.popularity;
        } else {
          return b.popularity - a.popularity;
        }
      });
    } else if (sortCriteria === 'name') {
      sorted = sorted.sort((a, b) => {
        if (sortOrder === 'ascending') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    }
    return sorted;
  };

  return (
    <>
      <Navbar />
      <PageHeader
        text='Explore'
        description='Different femboys from different animes/mangas.'
        bgImage={require('../images/explore_container.jpg')}
        altBgImage='https://twitter.com/wai1010_/status/1568409196957421568'
      />
      {/* Sorting dropdown */}
        <div className='py-3 text-center flex justify-center gap-2 sm:gap-10 items-center bg-pink-200'>
            <div className='flex flex-col justify-center items-start'>
                <label htmlFor='sortCriteria' className='block font-bold text-pink-500'>
                    Sort by:
                </label>
                <select
                    id='sortCriteria'
                    className='px-4 py-2 rounded-xl border-2 border-pink-300'
                    value={sortCriteria}
                    onChange={(e) => setSortCriteria(e.target.value)}
                >
                    <option value='popularity'>Popularity</option>
                    <option value='name'>Name</option>
                </select>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <label htmlFor='sortOrder' className='block font-bold text-pink-500'>
                    Sort order:
                </label>
                <select
                    id='sortOrder'
                    className='px-4 py-2 rounded-xl border-2 border-pink-300'
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </select>
            </div>
        </div>
      <div className='sm:flex gap-0 sm:gap-4 p-0 sm:p-5 flex-wrap justify-center bg-pink-200 grid grid-cols-2'>
        {/* Render sorted CharacterCards */}
        {sortedCharacters().map((character) => {
          return (
            <CharacterCard
              key={character.name}
              text={character.name}
              bgImage={character.thumbImg}
              altBgImage={character.altBgImage}
              href={''}
              isTargetBlank={false}
            />
          );
        })}
      </div>
    </>
  );
}

export default Explore;
