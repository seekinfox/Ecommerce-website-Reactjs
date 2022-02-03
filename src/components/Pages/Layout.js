import React from 'react';
import Navbar from '../features/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer';

export default function Layout(props) {
  return (
     <>
     <Navbar isDesktop={props.isDesktop} />
     <div>
     <Outlet />
     </div>
     <Footer />
     </>
  );
}
