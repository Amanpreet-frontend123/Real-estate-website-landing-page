import React from 'react'

const Card = ({img,title,desc,page}) => {

   const imageStyle = page === 'article'
    ?  {width:"368px" ,height:"287px"  } 
    :  {width:"64px", height:"64px" }
  return (
<>
<div className='-mb-10 -ms-5'>
  
    <img className='bg-blue-500 ms-[48px] ' src={img} style={imageStyle}/>
    <h2 className='font-bold ms-[48px] max-w-80 mt-[21px] font-[600px] text-[16px] '>{title}</h2>
    <p className='text-gray-400 ms-[48px] mt-[25px] leading-[40px] w-[333px]'>{desc}</p>
</div>
</>
  )
}

export default Card;