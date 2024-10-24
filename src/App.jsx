
import './App.css';
import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {Users} from "./user/pages/Users";
import {NewPlace} from "./places/pages/NewPlace";

function App() {
  return <Router>
      <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
  </Router>
}

export default App;
