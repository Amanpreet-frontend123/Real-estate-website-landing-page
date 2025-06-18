import React from 'react';
import homeImg from '../assets/homeimg.jpg';
import Button from './Button';
import herosection from './Herosection';

const Herosection = () => {
    return (
        <>
            <div className='bg-black text-white h-screen flex justify-between'>
                
                <div>
                    <h1 className='text-7xl text-balance m-20'>
                        {herosection.title1}
                {herosection.title2}
                {herosection.title3}
                        
                    </h1>
                    <p className='text-lg text-balance m-20'>{herosection.description}</p>
                    <Button />
                    <div className='flex gap-20 ms-20 mt-10'>
                        <h2 className='text-4xl font-bold'>300<span className='text-blue-400 font-bold'>+</span>
                            <br /><span className='font-light text-lg'>
                                Happy Client</span></h2>
                        <h2 className='text-4xl font-bold'>900<span className='text-blue-400 font-bold'>+</span><br />
                            <span className='font-light text-lg'>Amazing projects</span></h2>
                        <h2 className='text-4xl font-bold'>20<span className='text-blue-400 font-bold'>+</span><br />
                            <span className='font-light text-lg'>Awards Winning</span></h2>
                    </div>
                </div>
                
                <div>
                    <img src={homeImg} alt='' className='h-150 me-2 w-150 mt-20' />
                    <div className='absolute -m-10 -ms-52 p-10 me-1  gap-10 h-45  bg-linear-to-r from-cyan-500 to-blue-500 flex justify-evenly'>
                        <div><h2 className='text-xl'>General <span className='text-3xl'>Project</span></h2></div>
                        <div><h2 className='text-3xl '>25 <span className='text-lg '>Years</span> 
                            Operated</h2></div>
                        <div> <p className='text-balance'>As a trusted general project that has been
                            operating for 25 years, our commitment is
                            always to prioritize our client satisfaction
                            Operated</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection;