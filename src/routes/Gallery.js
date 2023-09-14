import React, { useState, useEffect } from 'react';
import Navbar from '../components/navBar';
import '../App.css';
import axios from 'axios';
import ImageCard from '../components/imageCard';
import { SyncLoader } from 'react-spinners';
import PageHeader from '../components/pageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const anglesLeftIcon = <FontAwesomeIcon icon={faAnglesLeft} />;
const anglesRightIcon = <FontAwesomeIcon icon={faAnglesRight} />;

function Gallery() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPosts, setTotalPosts] = useState(1);
  const postCount = 20000;
  const [pageLimit] = useState(5);

  useEffect(() => {
    setTotalPosts(postCount);
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchPosts = (page) => {
    setIsLoading(true);
    axios
      .get(`https://danbooru.donmai.us/posts.json?page=${page}&tags=otoko_no_ko`)
      .then(response => {
        setPosts(response.data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      fetchPosts(currentPage + 1); // Fetch next page's posts
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      fetchPosts(currentPage - 1); // Fetch previous page's posts
    }
  };

  const firstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
      fetchPosts(1);
    }
  };

  const lastPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(totalPages);
      fetchPosts(totalPages);
    }
  };

  if (isLoading) {
    return (
      <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <SyncLoader loading={isLoading} size={30} color="rgb(219, 39, 119)" />
      </div>
    );
  }

  // Calculate the total number of pages based on totalPosts
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  // Calculate the range of page links to show
  const startPage = Math.max(currentPage - Math.floor(pageLimit / 2), 1);
  const endPage = Math.min(startPage + pageLimit - 1, totalPages);

  // Generate numbered pagination links
  const pageLinks = [];
  for (let i = startPage; i <= endPage; i++) {
    pageLinks.push(
      <button
        key={i}
        className={`mr-1 px-2 sm:px-3 py-1 rounded-xl transition-all focus:outline-none ${
          i === currentPage ? 'bg-pink-500 hover:bg-pink-600 text-white font-bold' : 'text-pink-500 hover:bg-pink-500 hover:text-white'
        }`}
        onClick={() => {
          setCurrentPage(i);
          fetchPosts(i); // Fetch posts for the selected page
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <Navbar />
      {currentPage === 1 && <PageHeader />}
      <div className={"flex gap-0 sm:gap-4 flex-wrap justify-center z-50 bg-pink-200" + (currentPage === 1 ? " sm:pt-6 pt-0" : " sm:pt-24 pt-16")}>
        {posts && posts.map(post => (
          <ImageCard
            key={post.id}
            href={post.id}
            previewImage={post.media_asset.variants ? post.media_asset.variants[2].url : ''}
            altImage={post.source}
          />
        ))}
      </div>
      <div className="flex justify-center py-4 bg-pink-200 text-xs sm:text-base">
        <button
          className={`mr-1 sm:mr-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-2 sm:px-4 rounded-xl transition-all ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={firstPage}
          disabled={currentPage === 1}
        >
          {anglesLeftIcon}
        </button>
        <button
          className={`mr-1 sm:mr-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-2 sm:px-4 rounded-xl transition-all ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageLinks}
        <button
          className={`mr-1 sm:mr-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-2 sm:px-4 rounded-xl transition-all ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-2 sm:px-4 rounded-xl transition-all ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={lastPage}
          disabled={currentPage === totalPages}
        >
          {anglesRightIcon}
        </button>
      </div>
    </>
  );
}

export default Gallery;
