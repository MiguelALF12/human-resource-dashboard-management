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
import Applications from "./pages/user/applications"
import Profile from "./pages/user/profile"
import Credentials from "./pages/user/components/confCredentials.jsx"
import Personals from "./pages/user/components/confPersonal"
import Academics from "./pages/user/components/confAcademics"
import AboutOffers from "./pages/user/components/confaboutOffers"
import DeleteAccount from "./pages/user/components/confDeleteAccount"
import AnalystHome from './pages/analyst/home';
import Hall from './pages/analyst/hall';
import ModuleOneHome from './pages/analyst/moduleOne/moduleOneHome';
import Preselection from './pages/analyst/moduleOne/preselection';
import SelectionPerfilation from './pages/analyst/moduleOne/selectionPerfilation';
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
    path: "/user/:id",
    element: <Home haveUser={true} />,
    children: [
      {
        path: "myAplications",
        element: <Applications />
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
