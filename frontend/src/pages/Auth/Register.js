import './Auth.css';
// Components
import { Link } from 'react-router-dom';

//Hooks
import { useState, useEffect } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);
  };

  return (
    <div className='register_box'>
      <form className='form' onSubmit={handleSubmit}>
        <p className='subtitle_register'>
          Cadastre-se para ver as fotos do seus amigos.
        </p>
        <input
          type='text'
          placeholder='Nome'
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <input
          type='email'
          placeholder='E-mail'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Senha'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <input
          type='password'
          placeholder='Confirme a senha'
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <input type='submit' value='Cadastrar' onClick={handleSubmit} />
        <p className='go_to_login'>
          Já é cadastrado? <Link to='/login'>Clique aqui!</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
