import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Index from './pages/Index';
import Pricing from './pages/Pricing';
import Process from './pages/Process';
import Solutions from './pages/Solutions';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/process" element={<Process />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
