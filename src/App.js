import Board from "./Components/Board";
import { Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import {useContext} from 'react';
import PrivateRoute from "./Components/PrivateRoute";
import { Names } from "./Components/Context";
import './Ap.css';
import NavBar from "./Components/NavBar";


function App() {
  const {names} = useContext(Names);
  return (
    <>
      <NavBar />
    <div className="App">
      <Routes>
        <Route path = '/' element = <Home />/>
        {names.firstPlayer || names.secondPlayer !== "" ? <Route path = '/Game' element = <Board />/> : <Route path="/Game" element = <PrivateRoute/>/>}
        
      </Routes>
    </div>
    </>
  );
}

export default App;
