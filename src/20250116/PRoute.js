import React from 'react'
import ProductDetail from './ProductDetail'
import { Navigate } from 'react-router-dom'

function Route({loginok}) {
  return loginok == true ? <ProductDetail/> : <Navigate to={"/login"}/>
}

export default Route