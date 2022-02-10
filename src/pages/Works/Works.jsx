import React from 'react';
import { Outlet } from 'react-router-dom';
import WorksNavbar from './components/WorksNavbar/WorksNavbar';

const Works = () => {
  return (
    <div>
      <h1 class="section-title">Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <WorksNavbar />
      <Outlet />
    </div>
  );
};

export default Works;