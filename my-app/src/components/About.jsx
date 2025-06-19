import React from 'react';
import about from '../Js/About';

const About = () => {
  return (
    <>
    <div className='container ms-50'>
      
    <div className="flex justify-evenly columns-2">
          <h1 className=" text-[46px]  max-w-100 m-10">{about.titleAbout}</h1>
          <p className=" m-10 max-w-110 text-gray-500 leading-10 ">
            {about.descriptionAbout}
          </p>
          </div>
          <div className=' place-content-center m-20  font-bold text-[24px] grid grid-cols-4  '>
{about.img.map((image)=>(< img key={image.id} src={image.url} className='h-[45px] w-[45px] bg-blue-500 rounded-full'/>))}
         
          {about.logotitle.map((item) => (
            <h3 key={item.id}>{item.logotitl}</h3>
          ))}
        </div>
          </div>
        
    </>
  )
}

export default About;