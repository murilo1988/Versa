import "./Auth.css";

//Components
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
//Hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Redux
import { login, reset } from "../../slices/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  //clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
    <div className='login_box'>
      <p className='subtitle_login'>Entre para ver as fotos do seus amigos.</p>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        {!loading && <input type='submit' value='Entrar' />}
        {loading && <input type='submit' disabled value='Aguarde...' />}
        {error && <Message msg={error} type='error' />}
      </form>
      <p className='go_to_register'>
        Não tem uma conta? <Link to='/register'>Clique aqui</Link>
      </p>
    </div>
  );
}

export default Login;
