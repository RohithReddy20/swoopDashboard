import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login.js';
import Matches from './Components/Matches/Matches';
import Contests from './Components/Contests/Contests';
import Contest from './Components/Contest/Contest';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/matches" element={<Matches /> } />
          <Route exact path="/contests" element={<Contests /> } />
          <Route exact path="/contest" element={<Contest /> } />
          <Route exact path="/leaderBoard" element={<LeaderBoard /> } />
        </Routes>
    </div>
  );
}

export default App;
