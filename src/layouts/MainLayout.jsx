import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* We add flex-grow so the main content expands and pushes the footer down */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
