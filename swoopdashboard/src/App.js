import { useState, useEffect } from "react";

import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login.js';
import Contests from './Components/Contests/Contests';
import Contest from './Components/Contest/Contest';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import { AuthProvider } from './hooks/useAuth';
import Sidebar from './Components/Sidebar/Sidebar';

//pages
import Matches from './Pages/Matches/Matches';
import Users from "./Pages/Users/Users";
import Storage from "./Pages/Storage/Storage";

import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute';
import Winner from './Components/LeaderBoard/Winner';
import Navbar from './Components/Navbar/Navbar';

import { useLocation } from 'react-router-dom';



function App() {

  const location = useLocation();

  useEffect(() => {
    if(location.pathname==="/"){
      if(document.querySelector('.sdnrou'))document.querySelector('.sdnrou').style.display = 'block';
    }else{
      if(document.querySelector('.sdnrou'))document.querySelector('.sdnrou').style.display = 'flex';
    }
  },[location.pathname])

  return (
    <div className="App">
            { location.pathname!=="/" && <Navbar />}
      <div className="sdnrou">
        { location.pathname!=="/" &&  <Sidebar />}
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/matches" element={<ProtectedRoute><Matches /></ProtectedRoute> } />
            <Route exact path="/contests" element={<ProtectedRoute><Contests /></ProtectedRoute> } />
            <Route exact path="/contest" element={<ProtectedRoute><Contest /></ProtectedRoute>} />
            <Route exact path="/leaderBoard" element={<ProtectedRoute><LeaderBoard /></ProtectedRoute>} />
            <Route exact path="/winners" element={<ProtectedRoute><Winner /></ProtectedRoute>} />
            <Route exact path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
            <Route exact path="/storage" element={<ProtectedRoute><Storage /></ProtectedRoute>} />
          </Routes>
          </AuthProvider>
      </div>
    </div>
  );
}

export default App;
