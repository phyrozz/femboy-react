import React from "react";
import '../App.css';

function CharacterCard(props) {
    // Component props
    const text = props.text;
    const bgImage = props.bgImage;
    const altBgImage = props.altBgImage;
    const href = props.href;
    const isTargetBlank = props.isTargetBlank;
    const isLink = props.isLink;
    const onClick = props.onClick; // Add onClick prop

    const cardContent = isLink ? (
        <a href={href} target={isTargetBlank ? '_blank' : ''} className='group transition ease-in-out relative' rel="noreferrer">
            <div className='overflow-hidden bg-black drop-shadow-none sm:drop-shadow-xl rounded-0 sm:rounded-lg w-full sm:w-48 h-96' onClick={onClick}>
                <img
                src={require('../images/' + bgImage)}
                alt={altBgImage}
                className="object-cover group-hover:opacity-50 bg-blend-darken opacity-100 transition-opacity w-full h-full"
                />
                <div className='text-left bg-slate-50 absolute bottom-0 h-auto w-full p-2'>
                    <p className='font-bold text-slate-900'>{text}</p>
                </div>
            </div>
        </a>
    ) : (
        <div className='group transition ease-in-out relative cursor-pointer' onClick={onClick}>
            <div className='overflow-hidden bg-black drop-shadow-none sm:drop-shadow-xl rounded-0 sm:rounded-lg w-full sm:w-48 h-96'>
                <img
                src={require('../images/' + bgImage)}
                alt={altBgImage}
                className="object-cover group-hover:opacity-50 bg-blend-darken opacity-100 transition-opacity w-full h-full"
                />
                <div className='text-left bg-slate-50 absolute bottom-0 h-auto w-full p-2'>
                    <p className='font-bold text-slate-900'>{text}</p>
                </div>
            </div>
        </div>
    );

    return cardContent;
}

export default CharacterCard;
