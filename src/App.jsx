import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './admin/layout/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import Projects from './admin/pages/Projects';
import AdminGallery from './admin/pages/Gallery';
import Skills from './admin/pages/Skills';
import Messages from './admin/pages/Messages';
import Settings from './admin/pages/Settings';
import PersonalDetails from './admin/pages/PersonalDetails';
import PublicLayout from './components/PublicLayout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import AdminLogin from './components/AdminLogin';
import RequireAuth from './components/RequireAuth';
import ExpertArea from './admin/pages/ExpertArea'; // Add Import

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Login */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="skills" element={<Skills />} />
          <Route path="personal-details" element={<PersonalDetails />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="expert-area" element={<ExpertArea />} /> {/* Add Route */}
        </Route>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
