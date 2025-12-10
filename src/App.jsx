import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './admin/layout/AdminLayout';
import RequireAuth from './components/RequireAuth';
import PublicLayout from './components/PublicLayout';
import AdminLogin from './components/AdminLogin';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load Admin pages
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const Projects = lazy(() => import('./admin/pages/Projects'));
const AdminGallery = lazy(() => import('./admin/pages/Gallery'));
const Skills = lazy(() => import('./admin/pages/Skills'));
const Messages = lazy(() => import('./admin/pages/Messages'));
const Settings = lazy(() => import('./admin/pages/Settings'));
const PersonalDetails = lazy(() => import('./admin/pages/PersonalDetails'));
const ExpertArea = lazy(() => import('./admin/pages/ExpertArea'));

// Loading Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0c151d]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#2596be]"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
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
            <Route path="expert-area" element={<ExpertArea />} />
          </Route>

          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
