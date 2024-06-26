import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './style.css';
import App from './App';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Index from './routes/Index';
import { Profile } from './routes/Profile';
import Logout from './routes/Logout';
import Feed from './routes/Feed';
import Post from './routes/Post';
import Foot from './routes/Foot';
import Header from './routes/Header';
import About from './routes/About';
import Faqs from './routes/Faqs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/foot",
        element: <Foot />,
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
