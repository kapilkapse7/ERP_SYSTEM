import React from 'react'
import 
{ BsFillArchiveFill}
 from 'react-icons/bs'
import "./Card.css"
const Card = ({product_total,text,c}) => {
  return (
    <div className='card'>
    <div  className='card-inner'>
        <p  >{text}</p>
        <BsFillArchiveFill className='card_icon'/>
    </div>
    <h1 style={{color: c}}>{product_total}</h1>
</div>
  )
}

export default Card