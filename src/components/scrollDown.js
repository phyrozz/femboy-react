import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const icon = <FontAwesomeIcon icon={faAnglesDown} bounce inverse />;

function ScrollDown(props) {
    const className = props.className

    return (
        <div className={className}>
            {icon}
            <p className='text-xs sm:text-lg font-thin text-slate-50'>Scroll down to see more</p>
        </div>
    );
}

export default ScrollDown;