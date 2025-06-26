import React from 'react'

const Card = ({img,title,desc,page,titleSize,date}) => {

   const imageStyle = page === 'article'
    ?  {width:"368px" ,height:"287px"  } 
    :  {width:"368px", height:"267px" }

const textStyle=titleSize==="art"?{className:"font-[600] text-[28px]"}:{className:"font-[600] text-[16px]"}
    
  return (
<>
<div className='sm:columns-1 sm:-mb-10 sm:-ms-1'>
  
    <img className="p-[20px] sm:p-[0px] sm:ms-[48px] me-[50px]" src={img} style={imageStyle} />
    <div className='sm:flex'>
    <span className='ms-[48px]  mt-[38px] font-[600] text-[14px] max-w-10'>{date}</span>
    <h2 className='font-[600] text-[16px] ms-[20px] sm:ms-[1px] -mt-[10px] sm:mt-[38px] max-w-80 ' style={textStyle}>{title}</h2>
    </div>
    <p className='text-[#C4C4C4] ms-[20px] mt-[10px] sm:ms-[48px] sm:mt-[37px]  leading-[20px] sm:leading-[40px] min-w-10  sm:max-w-[333px]'>{desc}</p>
</div>
</>
  )
}

export default Card;