import React, { useState, useEffect } from 'react';
import Navbar from '../components/navBar';
import '../App.css';
import axios from 'axios';
import ImageCard from '../components/imageCard';
import { SyncLoader } from 'react-spinners';

function Gallery() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://danbooru.donmai.us/posts.json?page=${currentPage}&tags=otoko_no_ko`)
      .then(response => {
        setPosts(response.data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
      <div className="overflow-hidden md:mx-auto drop-shadow-xl relative rounded-0 sm:rounded-b-xl h-72 flex flex-col justify-center items-center">
        <h1 className="mt-4 text-slate-900 font-thin text-5xl sm:text-7xl">Gallery</h1>
        <p className="mt-5 text-sm text-slate-900 font-thin sm:text-xl">
          All artworks. All femboys!
        </p>
      </div>
      <div className="flex gap-0 sm:gap-4 flex-wrap justify-center">
        {posts && posts.map(post => (
          <ImageCard
            key={post.id}
            href={post.id}
            previewImage={post.media_asset.variants ? post.media_asset.variants[2].url : ''}
            altImage={post.source}
          />
        ))}
      </div>
      <div className="flex justify-center my-4">
        <button
          className={currentPage === 1 ? "bg-slate-400 text-white font-bold py-2 px-4 rounded-xl mr-2" : "bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl mr-2 transition-all"}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl transition-all"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Gallery;
