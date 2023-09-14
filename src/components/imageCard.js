import React from 'react';
import '../App.css';

function ImageCard(props) {
    // Component props
    const href = props.href;
    const previewImage = props.previewImage;
    const altImage = props.altImage;

    return (
        <a href={"https://danbooru.donmai.us/posts/" + href} target={'_blank'} className='group transition ease-in-out hover:scale-105 relative' rel="noreferrer">
            <div className='overflow-hidden bg-slate-100 drop-shadow-xl rounded-0 sm:rounded-lg sm:w-96 h-72 w-screen'>
                <img
                src={previewImage}
                alt={altImage}
                className="object-cover group-hover:opacity-50 bg-blend-darken opacity-100 transition-opacity w-full h-full"
                />
            </div>
        </a>
    );
}

export default ImageCard;