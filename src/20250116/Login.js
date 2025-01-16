import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setLoginok}) {

  const navigate = useNavigate();

  const login = (event) =>{

    event.preventDefault(); //form의 새로고침을 방지
    setLoginok(true)
    navigate("/")
  }
  return (
    <div>
      <form onSubmit={(event)=>login(event)}>
        <div className='idpw'>
          <div className="id">
            <label htmlFor="id">ID</label>
            <input type="text" id="id"/>
          </div>
          <div className="pw">
          <label htmlFor="pw">PW</label>
          <input type="password" id="pw"/>
          </div>
            <button type='submit' onSubmit={login}>LOGIN</button>
        </div>

      </form>
    </div>
  )
}

export default Login