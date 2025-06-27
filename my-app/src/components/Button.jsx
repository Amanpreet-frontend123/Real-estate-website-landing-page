import React from 'react'

const Button = ({children}) => {


    
    return (
        <>
            <button className='cursor-pointer mt-[40px] sm:mt-[62px]  h-[64px] max-w-[196px] w-full bg-linear-to-r from-[#60BBEE] to-[#0A72AD]  text-white  w-50'>
                {children}
            </button>
        </>
    )
}

export default Button;