import React from 'react';
import Navbar from '../components/navBar';
import '../App.css';

function Explore() {
    return (
        <>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-5 h-screen'>
            <img src={require('../images/venti-chibi.webp')} alt='Venti Chibi' width={192} />
            <h1 className=' font-thin text-4xl'>Nothing to see here... yet.</h1>
            <p className='text-sm'>This website is still in its earliest stage. Come back again soon!</p>
        </div>
        </>
  );
}

export default Explore;