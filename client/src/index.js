import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// pages
import Home from './pages/home';
import Loggin from './pages/loggin'
import Register from './pages/register'
import OfferDetails from './pages/offerDetails';
import UserHome from "./pages/user/home"
import AnalystHome from './pages/analyst/home';
import Hall from './pages/analyst/hall';
import ModuleOneHome from './pages/analyst/moduleOne/moduleOneHome';
import Preselection from './pages/analyst/moduleOne/preselection';
import SelectionPerfilation from './pages/analyst/moduleOne/selectionPerfilation';
import ErrorPage from './pages/error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "offer/:id",
    element: <OfferDetails />
  },
  {
    path: "/loggin",
    element: <Loggin />
  },
  {
    path: "/registro",
    element: <Register />
  },
  {
    path: "/user/:id",
    element: <UserHome />
  },
  {
    path: "/admin/:id",
    element: <AnalystHome />,
    children: [
      {
        path: "home",
        element: <Hall />,
      },
      {
        path: "module1",
        element: <ModuleOneHome />,
        children: [
          {
            path: "preselection",
            element: <Preselection />
          },
          {
            path: "selectionPerfilation",
            element: <SelectionPerfilation />
          }
        ]
      },

    ]
  }
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
reportWebVitals();
