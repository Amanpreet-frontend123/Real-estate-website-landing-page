import React from 'react'

const Card = ({img,title,desc,page}) => {

   const imageStyle = page === 'article'
    ?  {width:"368px" ,height:"287px"  } 
    :  {width:"64px", height:"64px" }
  return (
<>
<div className=''>
  
    <img className='bg-blue-500 gap-[48px]' src={img} style={imageStyle}/>
    <h2 className='font-bold max-w-80 mt-[21px] font-[600px] text-[16px] '>{title}</h2>
    <p className='text-gray-500  mt-[25px] leading-[40px]  w-[318px] h-[287px]'>{desc}</p>
</div>
</>
  )
}

export default Card;