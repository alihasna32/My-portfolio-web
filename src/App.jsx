import React, { Suspense, lazy, useState, useEffect } from 'react';
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
const PageLoader = () => {
  const [text, setText] = useState('');
  const fullText = "Hey, I am ALI HASAN. Are you finding me....";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        // Optional: Loop or stop. User implies just "finding me...."
        // Let's reset to loop for long loads or just stop. 
        // Stop is better for "Are you finding me...."
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0c151d] space-y-8 p-4">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#2596be] shadow-[0_0_15px_rgba(37,150,190,0.5)]"></div>

      {/* Glass Text Container */}
      <div className="px-6 py-3 bg-[#2596be]/10 backdrop-blur-md border border-[#2596be]/20 rounded-full shadow-[0_0_20px_rgba(37,150,190,0.2)] text-center max-w-[90vw]">
        <span className="text-[#2596be] font-mono text-lg md:text-xl font-medium tracking-wide break-words">
          {text}
          <span className="animate-pulse ml-1">|</span>
        </span>
      </div>
    </div>
  );
};

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
