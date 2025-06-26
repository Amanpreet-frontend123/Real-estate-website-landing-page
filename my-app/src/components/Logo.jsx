import React from 'react';
import images from '../Json/Logo';

const Logo = () => {

  return (
    <>
    <div className='container'>
    <div className=' mt-[50px] ms-[140px]  sm:flex sm:ms-[129px] sm:mt-[96px] mb-[169px]  sm:gap-[96px] grayscale-[100] '>
{images.map((image)=>(< img key={image.id} src={image.url} className='h-[45px] w-[163px] mt-[30px] sm:mt-[0px]'/>))}
    </div>
    </div>
    </>
  )
}

export default Logo;