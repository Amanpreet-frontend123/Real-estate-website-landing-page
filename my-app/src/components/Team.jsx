import React from 'react'
import team from '../Json/Team';
import Button from './Button';

const Team = () => {
  return (
    <>
    <div className='container columns-2 flex ms-[120px] mb-[147px]'>
    <div >
<img src={team.img} className='h-[540px] w-[504px]'/>
<div className=' absolute ms-100 -mt-100 bg-black text-white p-10 place-items-center h-[294px] w-[312px]'>
  <img src={team.person.img} className='h-[100px] w-[100px] rounded-full'/>  
  <h2 className='mt-2'>{team.person.title}</h2>
  <p className='text-justify pt-2 font-[400px] text-[14px] '>{team.person.desc}</p>
</div>
</div>
<div className='relative ms-[250px] w-[493px] h-[408px]'>
<h1 className='text-[46px] font-[600px] mt-[120px] max-w-150'>{team.title}</h1>
<p className='max-w-110 text-justify leading-[35px] text-[18px] text-gray-400'>{team.desc}</p>
<div className='flex mt-5'>
<button className=" h-14 bg-linear-to-r from-cyan-500 to-blue-500 text-white  w-50 ">{team.teamBtn}</button>
<h3 className=' p-5  text-black'>{team. footertext}</h3>
<img src={team.sign} className='h-[16px] w-[16px] m-5'/>
</div>
</div>
</div>
    
    </>
  )
}

export default Team;