import React from "react";
import '../App.css';
import ScrollDown from "./scrollDown";

function PageHeader() {
    return (
        <div className="overflow-hidden md:mx-auto bg-black drop-shadow-xl sm:h-96 h-screen sticky top-0 -z-10">
            <img
            src={require('../images/gallery_container.png')}
            alt='https://www.pixiv.net/artworks/95990095'
            className="object-cover bg-blend-darken opacity-50 w-full h-full"
            />
            <ScrollDown className='flex-row gap-2 justify-center items-center absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 flex sm:hidden' />
            <div className='absolute top-1/2 left-3 -translate-y-1/2 w-100 md:w-1/2 text-left'>
                <h1 className="mt-4 text-slate-100 font-thin text-7xl">Gallery</h1>
                <p className='mt-5 text-xl text-slate-100 font-thin'>All artworks. All femboys!</p>
            </div>
        </div>
    );
}

export default PageHeader;