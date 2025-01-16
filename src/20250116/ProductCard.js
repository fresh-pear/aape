import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({item}) {

  const navigate = useNavigate();
  
  const showD = () => {

    navigate(`/products/${item.id}`)
  }

  console.log(item)
  return (
    <div className='box' onClick={showD}>
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <h4>{item.price}</h4>
      <p>{item?.new == true ? "신제품" : ""}</p>
      <p>size</p>
      <ul>
        {
          item.size.map((size,idx)=>(
            <li key={idx}>{size}</li>
          ))}
      </ul>
    </div>
  )
}

export default ProductCard