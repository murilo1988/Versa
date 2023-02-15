import './Auth.css'

//Hooks
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className='login_box'>
      <p className='subtitle_login'>Entre para ver as fotos do seus amigos.</p>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nome' />
        <input type='email' placeholder='E-mail' />

        <input type='submit' value='Entrar' />
      </form>
    </div>
  )
}

export default Login
