import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";


function App() {
  return (
    <div className="App">
          <Router>
              <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/appointment" element={<Appointment />} />
              <Route exact path="/login" element={<Login />} />
              </Routes>
          </Router>
      
    </div>
  );
}

export default App;
