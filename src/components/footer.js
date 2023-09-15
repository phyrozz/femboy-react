import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

const reactIcon = <FontAwesomeIcon icon={faAtom} transform='grow-18' />

function Footer() {
    return (
        <div className='bg-slate-50 pb-10 p-4 text-center flex justify-around items-center'>
            <div>
                <p className='font-light text-2xl'>femboys.io</p>
                <p className='text-sm'>Developed by Phyrozz</p>
            </div>
            <div className='flex gap-4'>
                {reactIcon}
                <p className='text-sm'>Powered by <b>React</b></p>
            </div>
        </div>
    );
}

export default Footer;