import React from 'react';
import '../App.css';

function Card(props) {
    // Component props
    const headerText = props.headerText;
    const text = props.text;
    const image = props.image;
    const altImage = props.altImage;
    const icon = props.icon;
    const href = props.href;

    return (
        <a href={href} className='group transition ease-in-out lg:hover:scale-105 relative'>
            <div className='overflow-hidden bg-black drop-shadow-xl rounded-0 lg:rounded-lg lg:w-96 h-72 w-screen'>
                <img
                src={require('../images/' + image)}
                alt={altImage}
                className="object-cover group-hover:opacity-50 bg-blend-darken opacity-100 transition-opacity w-full h-full"
                />
                <div className='absolute top-8 left-8 group-hover:opacity-100 opacity-0 transition-opacity'>
                    {icon}
                </div>
                    <div className='text-left bg-slate-50 absolute bottom-0 h-auto md:h-20 w-full p-2'>
                    <p className='font-bold text-slate-900'>{headerText}</p>
                    <p className='text-slate-900 font-thin'>{text}</p>
                </div>
            </div>
        </a>
    );
}

export default Card;