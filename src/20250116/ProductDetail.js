import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  
  const [product,setProduct] = useState(null);
  let{id} = useParams();

  const data = async()=>{
    try{
      const response = await axios.get(`https://my-json-server.typicode.com/fresh-pear/appe/products/${id}`);
      setProduct(response.data)
    } catch(error){
      console.error("에러")
    }
  }
  console.log('product:',product)

  useEffect(()=>{
    data();
  },[id])

  return (
    <div className='productdetail'>
      <img src={product?.img} alt={product?.title} />
      <h3>{product?.title}</h3>
      <h4>{product?.price}</h4>
      <p>{product?.new ? "신제품" : ""}</p>
      <p>사이즈</p>
      <ul>
        {
          product?.size.map((size,idx)=>(
            <li key={idx}>{size}</li>
          ))}
      </ul>

    </div>
  )
}

export default ProductDetail