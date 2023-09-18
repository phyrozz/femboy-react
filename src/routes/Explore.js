import React, { useState, useEffect } from 'react';
import Navbar from '../components/navBar';
import '../App.css';
import PageHeader from '../components/pageHeader';
import CharacterCard from '../components/characterCard';
import Footer from '../components/footer';
import CharacterModal from '../components/characterModal';
import { SyncLoader } from 'react-spinners';
import axios from 'axios';

function Explore() {
  const [sortCriteria, setSortCriteria] = useState('popularity'); // Default sorting criteria
  const [sortOrder, setSortOrder] = useState('descending'); // Default sorting order
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPostCount, setMaxPostCount] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://femboys-react-api.vercel.app/characters')
    .then(response => {
      setCharacters(response.data);
      axios.get('https://femboys-react-api.vercel.app/maxPostCount')
      .then(response => {
        setMaxPostCount(response.data.maxPostCount);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(true);
      })
    })
    .catch(error => {
      console.error('Error fetching character data: ', error);
      setIsLoading(true);
    })
  }, [])
  

  // Function to sort characters based on the selected criteria and order
  const sortedCharacters = () => {
    let sorted = [...characters];
    if (sortCriteria === 'popularity') {
      sorted = sorted.sort((a, b) => {
        const aCount = a.post_count ? a.post_count : 0;
        const bCount = b.post_count ? b.post_count : 0;

        if (sortOrder === 'ascending') {
          return aCount - bCount;
        } else {
          return bCount - aCount;
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

  const generateRankBadge = (index) => {
    if (sortCriteria === 'popularity' && sortOrder === 'descending') {
      const ranks = ['1st', '2nd', '3rd', '4th', '5th'];
      if (index < ranks.length) {
        return <div className={`${index === 0 || index === 1 || index === 2 ? 'bg-pink-400' : 'bg-sky-400'} text-slate-50 absolute z-20 right-0 px-5 rounded-bl-xl py-1 sm:rounded-tr-lg shadow-md font-bold`}>{ranks[index]}</div>;
      }
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <SyncLoader loading={isLoading} size={30} color="rgb(219, 39, 119)" />
      </div>
    );
  }

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
      <div className='py-6 text-center flex flex-col sm:flex-row justify-center gap-2 sm:gap-10 items-center bg-pink-200'>
          <div className='flex flex-col justify-center items-start sm:w-auto w-full px-8'>
              <label htmlFor='sortCriteria' className='block font-bold text-pink-500'>
                  Sort by:
              </label>
              <select
                  id='sortCriteria'
                  className='px-2 py-2 rounded-xl border-2 border-pink-300 sm:w-64 w-full'
                  value={sortCriteria}
                  onChange={(e) => setSortCriteria(e.target.value)}
              >
                  <option value='popularity'>Popularity</option>
                  <option value='name'>Name</option>
              </select>
          </div>
          <div className='flex flex-col justify-center items-start sm:w-auto w-full px-8'>
              <label htmlFor='sortOrder' className='block font-bold text-pink-500'>
                  Sort order:
              </label>
              <select
                  id='sortOrder'
                  className='px-2 py-2 rounded-xl border-2 border-pink-300 sm:w-64 w-full'
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
        {sortedCharacters().map((character, index) => {
          return (
            <div key={character.name} className="character-card-container">
              {generateRankBadge(index)}
              <CharacterCard
                text={character.name}
                bgImage={character.thumbImg}
                altBgImage={character.altBgImage}
                href={''}
                isTargetBlank={false}
                isLink={false}
                onClick={() => setSelectedCharacter(character)}
              />
            </div>
          );
        })}
      </div>
      <Footer />
      {/* Render the CharacterModal if a character is selected */}
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} maxPostCount={maxPostCount} onClose={() => setSelectedCharacter(null)} />
      )}
    </>
  );
}

export default Explore;
