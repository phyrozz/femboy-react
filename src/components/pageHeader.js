import React from "react";
import '../App.css';
import ScrollDown from "./scrollDown";

function PageHeader(props) {
    // Component props
    const text = props.text;
    const description = props.description;
    const bgImage = props.bgImage;
    const altBgImage = props.altBgImage;

    return (
        <div className="overflow-hidden md:mx-auto bg-black drop-shadow-xl sm:h-96 h-screen sticky top-0 -z-10">
            <img
            src={bgImage}
            alt={altBgImage}
            className="object-cover bg-blend-darken opacity-50 w-full h-full"
            />
            <ScrollDown className='flex-row gap-2 justify-center items-center absolute bottom-24 sm:bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 flex sm:hidden' />
            <div className='absolute top-1/2 left-3 -translate-y-1/2 w-100 md:w-1/2 text-left'>
                <h1 className="mt-4 text-slate-100 font-thin text-7xl">{text}</h1>
                <p className='mt-5 text-xl text-slate-100 font-thin'>{description}</p>
            </div>
        </div>
    );
}

export default PageHeader;