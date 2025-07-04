import React from 'react'
import team from '../Json/Team';
import Button from './Button';

const Team = () => {
  return (
    <>
    <div className='container'>
    <div className=' -ms-[10px] column-reverse columns-2 flex -ms-[80px] sm:ms-[40px] mt-[174px] mb-[147px]'>
    <div >
<img src={team.img} className=' h-[540px] max-w-[504px] w-full sm:h-[540px] sm:max-w-[504px] '/>
<div className='absolute ms-70 sm:ms-70 -mt-100 bg-linear-to-r from-[#474747] to-[#222222] text-white place-items-center h-[294px] w-[312px]'>
  <img src={team.person.img} className=' mt-[33px] h-[100px] w-[100px] rounded-full'/>  
  <h2 className='mt-[28px]'>{team.person.title}</h2>
  <p className='mt-[13px] me-[30px] ms-[30px] max-w-60 text-justify pt-2 font-[400] text-[14px] '>{team.person.desc}</p>
</div>
</div>
<div className='relative ms-[700px] sm:ms-[290px] max-w-[493px] w-full h-[408px]'>
<h1 className='text-[46px] font-[600] min-w-120 mt-[120px] sm:max-w-200'>{team.title}</h1>
<p className='mt-5 max-w-110 text-justify leading-[35px] text-[18px] text-gray-400'>{team.desc}</p>
<div className='flex mt-10'>
<button className="cursor-pointer h-14 bg-[#0A72AD] text-white  w-50 ">{team.teamBtn}</button>
<h3 className=' p-5  text-black'>{team. footertext}</h3>
<img src={team.sign} className='h-[16px] w-[16px] m-5'/>
</div>
</div>
</div>
</div>
    
    </>
  )
}

export default Team;