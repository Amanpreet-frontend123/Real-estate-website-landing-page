import React from 'react'

const Card = ({img,title,desc,page,titleSize,date}) => {

   const imageStyle = page === 'article'
    ?  {width:"368px" ,height:"287px"  } 
    :  {width:"64px", height:"64px" }

const textStyle=titleSize==="art"?{className:"font-[600] text-[28px]"}:{className:"font-[600] text-[16px]"}
    
  return (
<>
<div className=' -mb-10 -ms-1'>
  
    <img className="ms-[48px] me-[50px]" src={img} style={imageStyle} />
    <div className='flex'>
    <span className='ms-[48px] mt-[38px] font-[600] text-[14px] max-w-10'>{date}</span>
    <h2 className='font-[600] text-[16px] ms-[1px] mt-[38px] max-w-80 ' style={textStyle}>{title}</h2>
    </div>
    <p className='text-[#C4C4C4] ms-[48px] mt-[37px] mt-[25px] leading-[40px] w-[333px]'>{desc}</p>
</div>
</>
  )
}

export default Card;