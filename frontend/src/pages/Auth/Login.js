import './Auth.css'

//Hooks
import { useState, useEffect } from 'react'

function Login() {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className='login_box'>
      <p className='login_subtitle'>Entre para ver as fotos do seus amigos.</p>
      <form className='form' onSubmit={handleSubmit}>
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />

        <input type='submit' value='Entrar' />
      </form>
    </div>
  )
}

export default Login
