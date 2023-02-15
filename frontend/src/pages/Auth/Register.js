import './Auth.css'
// Components
import { Link } from 'react-router-dom'

//Hooks
import { useState, useEffect } from 'react'

function Register() {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className='register_box'>
      <p className='register_subtitle'>
        Cadastre-se para ver as fotos do seus amigos.
      </p>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nome' />
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />
        <input type='password' placeholder='Confirme a senha' />
        <input type='submit' value='Cadatrar' />
        <p>
          Já é cadastrado <Link to='/login'>clique aqui</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
