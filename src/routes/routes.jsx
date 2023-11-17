import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Home/OurMenu/OurMenu";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <OurMenu/>
      }
    ]
  }
])