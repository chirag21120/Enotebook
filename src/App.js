import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/Notes/NoteState';
import Alert from './components/Alert';

function App() {
 
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert alert = {alert}/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
