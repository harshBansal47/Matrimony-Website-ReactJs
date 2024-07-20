import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';

// Import components for routes
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog'; // Import BlogList component
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import BlogPost from './components/BlogPost'; // Import the new BlogPost component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blog />, // Render BlogList component here
      },
      {
        path: "blogs/:slug",
        element: <BlogPost />, // Render BlogPost component here
      },
    ],
  },
]);



// App component renders RouterProvider with defined router
const App = () => (
  <RouterProvider router={router} />
);

export default App;
