import React from 'react';
import images from '../Json/Logo';

const Logo = () => {

  return (
    <>
    <div className='container flex ms-[129px] mt-[96px] mb-[169px]  gap-[96px] grayscale-[100] '>
{images.map((image)=>(< img key={image.id} src={image.url} className='h-[45px] w-[163px]'/>))}
    </div>
    </>
  )
}

export default Logo;