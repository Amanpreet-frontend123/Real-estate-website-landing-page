import React from 'react'

const Card = ({img,title,desc,page}) => {

   const imageStyle = page === 'article'
    ?  {width:"368px" ,height:"287px"  } 
    :  {width:"64px", height:"64px" }
  return (
<>
<div className='container p-10'>
  
    <img className='bg-blue-500' src={img} style={imageStyle}/>
    <h2 className='font-bold max-w-80 mt-[21px] font-[600px] text-[16px] '>{title}</h2>
    <p className='text-gray-500 max-w-100 mt-[25px] leading-[55px] text-balance'>{desc}</p>
</div>
</>
  )
}

export default Card;