import React from 'react';
import Navbar from '../features/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer';
import NavbarNotice from '../features/NavbarNotice';

export default function Layout(props) {
  return (
     <>
     <Navbar isDesktop={props.isDesktop} />
     <NavbarNotice />
     <div>
     <Outlet />
     </div>
     <Footer />
     </>
  );
}
