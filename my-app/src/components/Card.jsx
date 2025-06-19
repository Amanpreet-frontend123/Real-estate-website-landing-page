import React from 'react'

const Card = ({img,title,desc}) => {
  return (
<>
<div className='container p-10'>
    <img className='h-[287px] w-[368px] bg-blue-500' src={img}/>
    <h2 className='font-bold max-w-100 text-balance'>{title}</h2>
    <p className='text-gray-500 max-w-100'>{desc}</p>
</div>
</>
  )
}

export default Card;