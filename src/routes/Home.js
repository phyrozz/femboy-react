import React, { useEffect, useState } from 'react';
import Navbar from '../components/navBar';
import '../App.css';
import ReactTyped from 'react-typed';
import Card from '../components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faNewspaper, faCompass, faPersonDigging,  } from '@fortawesome/free-solid-svg-icons';
import headingTexts from '../data/headingTexts.json';
import headingImages from '../data/headingImages.json';

const galleryIcon = <FontAwesomeIcon icon={faImages} transform='grow-36' inverse />
const doujinIcon = <FontAwesomeIcon icon={faNewspaper} transform='grow-36' inverse />
const exploreIcon = <FontAwesomeIcon icon={faCompass} transform='grow-36' inverse />
const constructionIcon = <FontAwesomeIcon icon={faPersonDigging} transform='grow-18' />
const discordIcon = <img src={require('../images/discord-icon.png')} alt='Discord Icon' className='-m-3' width={86} />

function Home() {
    const [randomText, setRandomText] = useState("");
    const [randomImage, setRandomImage] = useState("home_container-1.png");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * headingTexts.length);
        setRandomText(headingTexts[randomIndex]);
        const randomImageIndex = Math.floor(Math.random() * headingImages.length);
        setRandomImage(headingImages[randomImageIndex]);
    }, []);

    return (
    <>
        <Navbar />
        <div className="home-header overflow-hidden md:mx-auto bg-black drop-shadow-xl relative rounded-0 sm:rounded-b-xl">
            <img
            src={require('../images/' + randomImage)}
            alt='https://www.pixiv.net/artworks/66063427'
            className="object-cover bg-blend-darken opacity-50 w-full h-full"
            />
            <div className='absolute top-1/2 left-3 -translate-y-1/2 w-3/4 md:w-1/2 text-left'>
                <ReactTyped className='mt-4 text-slate-100 font-thin text-5xl md:text-7xl' strings={[randomText]} typeSpeed={100}/>
                <p className='mt-5 text-sm text-slate-100 font-thin md:text-xl'>From Astolfo of Fate Series to Mahiro-tan, all of your favorite femboy characters in anime/manga are here for you to explore and even discover!</p>
            </div>
        </div>
        <div className='flex gap-0 sm:gap-4 m-0 sm:m-5 flex-wrap justify-center'>
            <Card href='/gallery' headerText='Gallery' text='Check out artworks of your favorite femboy character.' image='mahiro-card.jpg' altImage='https://twitter.com/ixy/status/1700066663868375195' icon={galleryIcon} />
            <Card href='/doujins' headerText='Doujins (R-18)' text='Check doujins of your favorite femboy character.' image='bridget-card.jpg' altImage='https://twitter.com/click_burgundy/status/1698206122853978427' icon={doujinIcon} />
            <Card href='/explore' headerText='Explore' text='Explore the site and discover more femboys.' image='venti-card.jpg' altImage='https://twitter.com/mashiraion/status/1700992548439998835' icon={exploreIcon} />
            <Card href='https://discord.gg/CKhwKtDK' headerText='Join The Community' text='Join the Femboy Paradise community on Discord.' image='freminet-card.jpg' altImage='https://twitter.com/orillust/status/1700301645656277381' icon={discordIcon} />
        </div>
        <div className='my-20 text-center'>
            {constructionIcon}
            <p className='font-bold mt-3'>More features coming soon!</p>
        </div>
        <div className='bg-slate-50 p-6 text-center'>
            <p className='font-light text-2xl'>femboys.io</p>
            <p className='text-sm'>Developed by Phyrozz</p>
        </div>
    </>
  );
}

export default Home;