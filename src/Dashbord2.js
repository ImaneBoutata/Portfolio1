import React from 'react'; 
import { Image } from 'primereact/image';
import logo from './images/2.jpg';
import logo1 from './images/sunset.jpg';
import logo2 from './images/hands.webp';
import logo3 from './images/p.jpg';
import logo4 from './images/l.jpg';


import { Routes, Route, Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';

import { useState } from 'react';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import Footer from './Footer';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/primeicons/primeicons.css" />

function Dashboard2(){

    const items = [
        {
          label: 'Accueil',
          icon: 'pi pi-fw pi-home',
          url:'/accueil'
        },
        {
          label: 'Formations',
          icon: 'pi pi-fw pi-info',
          url:'/formations'
        },
        {
            label: 'Compétences',
            icon: 'pi pi-fw pi-info',
            url:'/competences'
          },
        {
            label: 'Projets',
            icon: 'pi pi-fw pi-info',
            url:'/projets'
          },
          {
            label: 'Stages',
            icon: 'pi pi-fw pi-info',
            url:'/stages'
          },
          {
            label: 'Certificats',
            icon: 'pi pi-fw pi-info',
            url:'/certificats'
          },
        {
          label: <FaFacebook />,
          url: 'https://www.facebook.com/yourfacebookpage',
          target: '_blank'
        },
        {
          label: <FaLinkedin />,
          url: 'https://www.linkedin.com/in/yourlinkedinprofile',
          target: '_blank'
        },
        {
          label: <FaInstagram />,
          url: 'https://www.instagram.com/yourinstagramprofile',
          target: '_blank'
        }
      ];

    return (
        <div>
             
  <div className="menu"  >
      <Menubar model={items} style={{ justifyContent: 'center' , color:'white', background: 'transparent' , textDecorationColor:'white', textDecoration:'white'}} >
        <NavLink to="/accueil" exact className="p-menuitem-link">
          <i className="pi pi-fw pi-home" style={{ color:'white', textDecorationColor:'white' }}></i>
          <span >Accueil</span>
        </NavLink>

        <NavLink to="/formations" exact className="p-menuitem-link">
          <i className="pi pi-fw pi-info"></i>
          <span>Formations</span>
        </NavLink>
        <NavLink to="/competences" exact className="p-menuitem-link">
          <i className="pi pi-fw pi-info"></i>
          <span>Compétences</span>
        </NavLink>
        <NavLink to="/projets" exact className="p-menuitem-link">
          <i className="pi pi-fw pi-info"></i>
          <span>Projets</span>
        </NavLink>
        <NavLink to="/stages" exact className="p-menuitem-link">
          <i className="pi pi-fw pi-info"></i>
          <span>Stages</span>
        </NavLink>
        <NavLink to="/certificats" exact className="p-menuitem-link">
          <i className="pi pi-fw pi-info"></i>
          <span>Certificats</span>
        </NavLink>

      </Menubar>
      </div>

    
      <div style={{ 
      backgroundImage: `url(${logo3})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="card" >
        <Image src={logo} className="rounded" alt="profile" height='180px' width='180px' imageStyle={{ borderRadius: '100%' }} preview/>

        <h1 style={{ color: '#fff'}}>Mlle. Imane BOUTATA</h1>
        <h2>Etudiante en 4ème année à l'Ecole Marocaine des Sciences de l'Ingénieur</h2>
      </div>
    </div>
  );
      
        </div>
    )
}
export default Dashboard2;