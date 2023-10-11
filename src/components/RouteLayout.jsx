import React from 'react';
import {Outlet} from 'react-router-dom';
import Navi from './NavigationBar/Navi';
import Footer from './Footer/Footer';


function RouteLayout() {

  return (
    <div>
      <Navi/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RouteLayout;