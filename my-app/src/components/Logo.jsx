import React from 'react';
import images from '../Js/Logo';

const Logo = () => {

  return (
    <>
    <div className='container flex justify-evenly m-20 ms-5 max-w-screen gap-20 -[922px] h-[120px] '>
{images.map((image)=>(< img key={image.id} src={image.url} className='h-[45px] w-[163px]'/>))}
    </div>
    </>
  )
}

export default Logo;