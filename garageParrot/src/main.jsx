import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage'
import APropos from './routes/APropos'
import CGU from './routes/CGU'
import MentionsLegales from './routes/MentionsLegales'
import Services from './routes/Services'
import VehiculeAccueil from './routes/VehiculeAccueil'
import Temoignages from './routes/Temoignages'
import Contacter from './routes/Contacter'
import Vehicule from './routes/Vehicule'



const router = createBrowserRouter([
  { path: '/', 
  element: <App/>, 
  errorElement: <ErrorPage/>,
  children:[
    {
      path: "/APropos",
      element: <APropos/>,
    },
    {
      path: "/Services",
      element: <Services/>,
      errorElement: <ErrorPage/>,
      loader: ({request}) =>
        fetch("/api/servicess",{
          signal: request.signal,
        }),
    },
    { path: "/VehiculeAccueil",
      element: <VehiculeAccueil/>,
      errorElement: <ErrorPage/>,
    },
    { path: "/Temoignages",
      element: <Temoignages/>,
      errorElement: <ErrorPage/>,
      loader: ({request}) =>
        fetch("/api/temoignages",{
          signal: request.signal,
        }),
    },
    { path: "/Contacter",
      element: <Contacter/>,
      errorElement: <ErrorPage/>,
    },
  ],
  },
{ path: '/CGU',
  element: <CGU/>,
  errorElement: <ErrorPage/>
},
{ path: '/MentionsLegales',
  element: <MentionsLegales/>,
  errorElement: <ErrorPage/>
},
{path:'/vehicule',
  element: <Vehicule/>,
  errorElement: <ErrorPage/>,
  loader: ({request}) =>
    fetch("/api/vehicules",{
      signal: request.signal,
    }),
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
