import { useState } from 'react';
import Navbar from '../components/navBar';
import '../App.css';
import PageHeader from '../components/pageHeader';
import characters from '../data/characters.json';
import CharacterCard from '../components/characterCard';
import Footer from '../components/footer';

function Doujins() {
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
      <PageHeader text='Doujins' description='Pick your poison. 😈' bgImage={require('../images/doujins_container.jpg')} altBgImage='https://twitter.com/wai1010_/status/1696217719643713926' />
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
        <CharacterCard text="All" bgImage="all_thumb.jpg" altBgImage="https://www.pixiv.net/artworks/73415388" href="https://nhentai.net/search/?q=yaoi+crossdressing" isTargetBlank={true} />
        {sortedCharacters().map((character) => {
            // Check if the character has a doujinUrl before rendering CharacterCard
            if (character.doujinUrl) {
            return (
                <CharacterCard
                key={character.name}
                text={character.name}
                bgImage={character.thumbImg}
                altBgImage={character.altBgImage}
                href={character.doujinUrl}
                isTargetBlank={true}
                />
            );
            }
            return null; // Return null for characters without doujinUrl
        })}
      </div>
      <Footer />
    </>
  );
}

export default Doujins;
