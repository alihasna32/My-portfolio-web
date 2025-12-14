import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import RequireAuth from '../components/RequireAuth';
import AdminLayout from '../admin/layout/AdminLayout';
import AdminLogin from '../components/AdminLogin';
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import PublicLayout from "../components/PublicLayout";
import Dashboard from "../admin/pages/Dashboard";
import Projects from "../admin/pages/Projects";
import Skills from "../admin/pages/Skills";
import PersonalDetails from "../admin/pages/PersonalDetails";
import Messages from "../admin/pages/Messages";
import Settings from "../admin/pages/Settings";
import ExpertArea from "../admin/pages/ExpertArea";
import Gallery from "../admin/pages/Gallery";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/login",
                element: <AdminLogin />
            },
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/admin",
        element: <RequireAuth>
            <AdminLayout />
        </RequireAuth>,

        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "personal-details",
                element: <PersonalDetails />
            },
            {
                path: "messages",
                element: <Messages />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "expert-area",
                element: <ExpertArea />
            }
        ]
    }

])
export default router
