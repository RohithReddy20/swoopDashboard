import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login.js';
import Matches from './Components/Matches/Matches';
import Contests from './Components/Contests/Contests';
import Contest from './Components/Contest/Contest';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import { AuthProvider } from './hooks/useAuth';

import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute';
import Winner from './Components/LeaderBoard/Winner';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/matches" element={<ProtectedRoute><Matches /></ProtectedRoute> } />
          <Route exact path="/contests" element={<ProtectedRoute><Contests /></ProtectedRoute> } />
          <Route exact path="/contest" element={<ProtectedRoute><Contest /></ProtectedRoute>} />
          <Route exact path="/leaderBoard" element={<ProtectedRoute><LeaderBoard /></ProtectedRoute>} />
          <Route exact path="/winners" element={<ProtectedRoute><Winner /></ProtectedRoute>} />
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
