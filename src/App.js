import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";


function App() {
  return (
    <div className="App">
          <Router>
              <Switch>
              <Route exact path="/" >
                <Home></Home>
              </Route>
              <Route exact path="/home" >
                <Home></Home>
              </Route>
              <Route exact path="/appointment" >
                <Appointment></Appointment>
              </Route>
              
            
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              </Switch>
          </Router>
      
    </div>
  );
}

export default App;
