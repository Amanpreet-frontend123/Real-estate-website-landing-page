import React from 'react'

const Button = ({children}) => {


    
    return (
        <>
            <button className='h-14 bg-linear-to-r from-cyan-500 to-blue-500 text-white  w-50'>
                {children}
            </button>
        </>
    )
}

export default Button;