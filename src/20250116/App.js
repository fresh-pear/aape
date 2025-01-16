import React, {useState} from 'react'
import { Route,Routes } from 'react-router-dom'
import ProductAll from './ProductAll'
import Login from './Login'
import ProductDetail from './ProductDetail'
import Header from './component/Header'
import PRoute from "./PRoute"


function App() {

  const [loginok, setLoginok] = useState(false);

  console.log(loginok)

  return (
    <div>
      <Header loginok={loginok}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}></Route>
        <Route path='/Login' element={<Login setLoginok={setLoginok}/>}></Route>
        <Route path='/products/:id' element={<PRoute loginok={loginok}/>}></Route>
      </Routes>

    </div>
  )
}

export default App