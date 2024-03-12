import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import "./Card.css"
const Card = ({product_total}) => {
  return (
    <div className='card'>
    <div className='card-inner'>
        <h3>TOTAL PRODUCTS IN INVENTORY</h3>
        <BsFillArchiveFill className='card_icon'/>
    </div>
    <h1>{product_total}</h1>
</div>
  )
}

export default Card