import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// pages
import Home, { userLoader } from './pages/home';
import Loggin from './pages/loggin'
import Register from './pages/register'
import OfferDetails from './pages/offerDetails';
import Aplications from "./pages/user/aplications"
import Profile from "./pages/user/profile"
import Credentials from "./pages/user/components/confCredentials.jsx"
import Personals from "./pages/user/components/confPersonal"
import Academics from "./pages/user/components/confAcademics"
import AboutOffers from "./pages/user/components/confaboutOffers"
import DeleteAccount from "./pages/user/components/confDeleteAccount"
import AnalystHome from './pages/analyst/home';
import Offers from './pages/analyst/components/moduleOne/offers';
import Preselection from './pages/analyst/components/moduleOne/preselection';
import SelectionPerfilation from './pages/analyst/components/moduleOne/selectionPerfilation';
import MenuNomina from './pages/analyst/components/menuNomina';
import MenuInteligenciaNegocio from './pages/analyst/components/menuInteligenciaNegocio';
import ErrorPage from './pages/error';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home haveUser={false} />,
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
    path: "/user/:id/:cedula",
    element: <Home haveUser={true} />,
    id: "userSessionHome",
    loader: userLoader,
    children: [
      {
        path: "myAplications",
        element: <Aplications />
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "credentials",
            element: <Credentials />
          },
          {
            path: "personals",
            element: <Personals />
          },
          {
            path: "academics",
            element: <Academics />
          },
          {
            path: "aboutOffers",
            element: <AboutOffers />
          },
          {
            path: "deleteAccount",
            element: <DeleteAccount />
          }
        ]
      }
    ]
  },
  {
    path: "/admin/:id/:userName",
    element: <AnalystHome />,
    children: [
      {
        path: "offers",
        element: <Offers />,
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
      {
        path: "nomina",
        element: <MenuNomina />
      },
      {
        path: "inteligencianegocio",
        element: <MenuInteligenciaNegocio />
      }
    ]
  },
  {

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
