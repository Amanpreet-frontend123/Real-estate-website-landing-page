import React from 'react'
import team from '../Json/Team';
import Button from './Button';

const Team = () => {
  return (
    <>
    <div className='flex columns-2 justify-around p-20'>
    <div>
<img src={team.img} className='h-[540px] w-[504px]'/>
<div className=' absolute ms-100 -mt-100 bg-black text-white p-10 place-items-center h-[294px] w-[312px]'>
  <img src={team.person.img} className='h-[100px] w-[100px] rounded-full'/>  
  <h2>{team.person.title}</h2>
  <p className='text-balance '>{team.person.desc}</p>
</div>
</div>
<div className=''>
<h1 className='text-[46px] box-decoration-clone max-w-100'>{team.title}</h1>
<p className='max-w-100 text-justify text-[18px] text-gray-400'>{team.desc}</p>
<div className='flex p-10 justify-evenly items-start'>
<Button className="items-start">{team.teamBtn}</Button>
<h3 className='ps-10 m-5 text-black'>{team. footertext}</h3>
<img src={team.sign} className='h-[16px] w-[16px] m-5'/>
</div>
</div>
</div>
    
    </>
  )
}

export default Team;