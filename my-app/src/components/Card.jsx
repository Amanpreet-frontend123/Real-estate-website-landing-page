import React from 'react'

const Card = ({img,title,desc,page,titleSize}) => {

   const imageStyle = page === 'article'
    ?  {width:"368px" ,height:"287px"  } 
    :  {width:"64px", height:"64px" }

const textStyle=titleSize==="art"?{className:"font-[600] text-[16px]"}:{className:"font-[600] text-[24px]"}
    
  return (
<>
<div className='-mb-10 -ms-10 '>
  
    <img className="ms-[48px] me-[50px]" src={img} style={imageStyle} />
    <h2 className='font-bold ms-[48px] mt-[38px] max-w-80 mt-[21px]' style={textStyle}>{title}</h2>
    <p className='text-[#C4C4C4] ms-[48px] mt-[37px] mt-[25px] leading-[40px] w-[333px]'>{desc}</p>
</div>
</>
  )
}

export default Card;