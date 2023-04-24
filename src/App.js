import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Accueil from './Accueil';
import React from 'react'; 
import { Card } from 'primereact/card';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import Formation from './Formation';
import Stage from './Stage';
import Certificats from './Certificats';
import Projets from './Projets';
import { NavLink } from 'react-router-dom';
import Competences from './Competences';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/primeicons/primeicons.css" />


        
function App() {

 

  return (
    <Router>
   <Dashboard />

    <Routes> 
        <Route exact path="/" element={<Accueil />}></Route>
        <Route exact path="/accueil" element={<Accueil />}></Route>
        <Route exact path="/formations" element={<Formation />}></Route>
        <Route exact path="/stages" element={<Stage />}></Route>
        <Route exact path="/projets" element={<Projets />}></Route>
        <Route exact path="/certificats" element={<Certificats />}></Route>
        <Route exact path="/competences" element={<Competences />}></Route>


      </Routes>
    </Router>
  );
};


export default App;
