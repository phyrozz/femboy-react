import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const extLinkIcon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;

function CharacterModal({ character, maxPostCount, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const modalClass = isOpen ? 'modal-open' : 'modal-closed';

  // Function to calculate popularity rating based on post count
  const calculatePopularityRating = (postCount) => {
    if (maxPostCount === null) {
      return null;
    }
  
    // Apply a logarithmic transformation to the post count
    const logPostCount = Math.log10(postCount + 1); // Adding 1 to avoid log(0)
    // Scale the logPostCount to be from 0 to 10.0 based on the max post count
    const rating = (logPostCount / Math.log10(maxPostCount + 1)) * 10.0;
    return Number(rating.toFixed(2));
  };

  const popularityRating = calculatePopularityRating(character.post_count);

  return (
    <>
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${modalClass}`}>
        <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
        <div className="modal-container bg-white w-screen h-screen sm:h-auto sm:w-96 mx-auto sm:rounded-lg shadow-lg overflow-y-auto transform transition-opacity">
        <div className='w-full overflow-hidden h-auto sm:h-96'>
            <img className='object-cover w-full h-full' src={require(`../images/${character.thumbImg}`)} alt={character.source} />
        </div>
        <div className="modal-close absolute top-0 right-0 m-2">
            <button onClick={closeModal} className="text-slate-900 transition rounded-full hover:rounded-full p-3 hover:bg-pink-600 hover:text-slate-50">
            <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                fillRule="evenodd"
                d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293z"
                clipRule="evenodd"
                ></path>
            </svg>
            </button>
        </div>
        <div className="modal-content py-4 px-4 text-left flex flex-col justify-between">
            <div>
                <h2 className="text-3xl font-semibold">{character.name}</h2>
                <div className="text-gray-500 text-lg mb-4 font-thin">{character.characterSource}</div>
                <div className="text-gray-500 text-sm mb-4">
                  Popularity: {popularityRating}
                </div>
                <p className="text-gray-700">{character.wikiDescription}</p>
            </div>
            <div className="text-right mt-6 flex gap-2 justify-end items-center">
                <a className='px-4 py-2 bg-pink-500 transition hover:bg-pink-600 text-white rounded-lg focus:outline-none' href={character.wikiUrl} target='_blank' rel="noreferrer">{extLinkIcon} Read More</a>
                <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-pink-500 transition hover:bg-pink-600 text-white rounded-lg focus:outline-none"
                >
                    Close
                </button>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default CharacterModal;
