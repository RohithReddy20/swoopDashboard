import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login.js';
import Matches from './Components/Matches/Matches';
import Contests from './Components/Contests/Contests';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/matches" element={<Matches /> } />
          <Route exact path="/contests" element={<Contests /> } />
        </Routes>
    </div>
  );
}

export default App;
