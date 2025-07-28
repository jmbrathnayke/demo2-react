import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  
import App from './App.jsx'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import AboutPage from './pages/aboutPage.jsx';
import ContactPage from './pages/contactPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import ContentPage from './pages/contentPage.jsx';
import ProductPage from './pages/productPage.jsx';
import MapPage from './pages/mapPage.jsx';
import ContextPage from './pages/contextPage.jsx';

// Create a router with a single route that renders the App component
const router = createBrowserRouter([

  
  {
    // The root path will render the App component
    path: "/",
    element: <App />,
  },

  {// About Page Route
    path: "/about",
    element: <AboutPage />,
  },

      {// Contact Page Route
        path: "/contact",
        element: <ContactPage />,
      },

      {// Login Page Route
        path: "/login",
        element: <LoginPage />,
      }

      ,{// Content Page Route
        path: "/content",
        element: <ContentPage />,

      },

      {// Product Page Route
        path: "/product",
        element: <ProductPage />,
      },
      {// Map Page Route
        path: "/map",
        element: <MapPage />,
      }
      ,{// Context Page Route
        path: "/context",
        element: <ContextPage />,
      }

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)