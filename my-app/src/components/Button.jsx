import React from 'react'
import herosection from '../Js/Herosection';
const Button = () => {
    return (
        <>
            <button className='h-14 bg-linear-to-r from-cyan-500 to-blue-500 text-white ms-20 w-50'>
                {herosection.herosectionButton}
            </button>
        </>
    )
}

export default Button;