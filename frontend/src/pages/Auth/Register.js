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
      <form className='form' onSubmit={handleSubmit}>
        <p className='subtitle_register'>
          Cadastre-se para ver as fotos do seus amigos.
        </p>
        <input type='text' placeholder='Nome' />
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />
        <input type='password' placeholder='Confirme a senha' />
        <input type='submit' value='Cadatrar' />
        <p className='go_to_login'>
          Já é cadastrado <Link to='/login'>clique aqui</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
