import "./Auth.css";
// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";

//Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { register, reset } from "../../slices/authSlice";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // to access and use redux functions
  const dispatch = useDispatch();

  // import from authSlice (redux store)
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);
    dispatch(register(user));
  };
  // clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className='register_box'>
      <form className='form' onSubmit={handleSubmit}>
        <p className='subtitle_register'>
          Cadastre-se para ver as fotos do seus amigos.
        </p>
        <input
          type='text'
          placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type='email'
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type='password'
          placeholder='Confirme a senha'
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {!loading && <input type='submit' value='Cadastrar' />}
        {loading && <input type='submit' disabled value='Aguarde...' />}
        {error && <Message msg={error} type='error' />}

        <p className='go_to_login'>
          J?? ?? cadastrado? <Link to='/login'>Clique aqui!</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
