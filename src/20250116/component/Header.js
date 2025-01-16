import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'



function Header({loginok}) {

  const menus = ["T-shirts","Tops","Shirts","Sweats","Coats & Jackets", "Pants"]

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login")
  }


  const search = ( event ) => {
    if( event.key === "Enter"){
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <header>
      <div className='login' onClick={goToLogin}>
        <div>
        <FontAwesomeIcon icon={faUser} className='icon'/>
        <p>{loginok? "로그아웃" : "로그인"}</p>
        </div>

        </div>
      <div className='logo'>
        <h1>
          <Link to='/'>
          <img src="https://aape.jp/client_info/AAPE/view/userweb/images/logo.png" alt="logo" />
          </Link>
        </h1>
      </div>
      <div className='nav'>
      <ul>
    {
      menus.map((menu,idx)=>(
        <li key={idx}>{menu}</li>
      ))
    }
      </ul>

      <div className="search">
      <input type="text" onKeyDown={(event)=> search(event)}/>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
      </div>
      </div>
    </header>
  )
}

export default Header