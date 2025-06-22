import React from 'react'

const Card = ({img,title,desc,imgClassname}) => {
  
  return (
<>
<div>
    <img src={img}/>
    <h2>{title}</h2>
    <p>{desc}</p>
</div>
</>
  )
}

export default Card;