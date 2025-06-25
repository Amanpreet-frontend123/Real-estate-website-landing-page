import React from 'react'

const Button = ({children}) => {


    
    return (
        <>
            <button className=' mt-[62px]  h-[64px] w-[196px] bg-linear-to-r from-[#60BBEE] to-[#0A72AD] text-white  w-50'>
                {children}
            </button>
        </>
    )
}

export default Button;