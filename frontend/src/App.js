import "./App.css";

//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Hokks
import { useAuth } from "./hooks/useAuth";

// Components
import NavBar from "./components/NavBar/NavBar";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Footer from "./components/Footer/Footer";

function App() {
  const { auth, loading } = useAuth();

  console.log(loading);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <section className='section_left'></section>
          <Routes>
            <Route
              path='/'
              element={auth ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/login'
              element={!auth ? <Login /> : <Navigate to='/' />}
            />
            <Route
              path='/register'
              element={!auth ? <Register /> : <Navigate to='/' />}
            />
          </Routes>
          <section className='section_right'></section>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
