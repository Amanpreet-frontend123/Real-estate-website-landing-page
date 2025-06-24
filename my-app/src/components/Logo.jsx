import React from 'react';
import images from '../Json/Logo';

const Logo = () => {

  return (
    <>
    <div className='container flex ms-[120px] mt-[96px] mb-[169px]  gap-[96px]  '>
{images.map((image)=>(< img key={image.id} src={image.url} className='h-[45px] w-[163px]'/>))}
    </div>
    </>
  )
}

export default Logo;