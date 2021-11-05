import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="App">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/appointment" element={<Appointment />} />
          </Routes>
      
    </div>
  );
}

export default App;
