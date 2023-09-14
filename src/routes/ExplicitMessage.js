import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExplicitMessage() {
  const navigate = useNavigate();

  const goBack = () => {
    sessionStorage.setItem('visitedOneTimePage', "false");
    navigate('/');
  };

  const handleProceedClick = () => {
    // Set a session flag to indicate that the page has been visited.
    sessionStorage.setItem('visitedOneTimePage', "true");
    navigate('/gallery');
    navigate(0);
  };

  return (
    <>
    <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <img src={require('../images/danger-icon.png')} alt='Danger Icon' width={156} />
        <h1 className=' font-thin text-4xl'>Explicit (R-18) content ahead</h1>
        <p className='text-lg font-bold'>Are you 18 years old or older?</p>
        <div className='flex flex-row gap-2 justify-center items-center'>
            <button className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-7 rounded-xl transition-all' onClick={goBack}>No</button>
            <button className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-7 rounded-xl transition-all' onClick={handleProceedClick}>Yes</button>
        </div>
    </div>
    </>
  );
}

export default ExplicitMessage;
