import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/Notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert alert = {alert}/>
      <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert}/>} />
        <Route exact path="about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route exact path="login" element={<Login showAlert={showAlert} />} />
          <Route exact path="signup" element={<Signup showAlert={showAlert} />} />
      </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
