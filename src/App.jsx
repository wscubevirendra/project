import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Main from './pages/Main'
import Bulk from './pages/Bulk'
import About from './pages/About'
import MyGallery from './pages/MyGallery';
import Gaon from './pages/categories/Gaon'
import Kurties from './pages/categories/Kurties'
import Lahnga from './pages/categories/Lahnga'
import Saree from './pages/categories/Saree'
import Contact from './component/Contact';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/mygallery',
        element: <MyGallery/>
      },
      {
        path: '/gaon_design',
        element: <Gaon/>
      },
      {
        path: '/kurties_design',
        element: <Kurties/>
      },
      {
        path: '/langha_Choli_design',
        element: <Lahnga/>
      },  {
        path: '/Saree_design',
        element: <Saree/>
      }
    ]
  }

]
)

const App = () => {
  
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
