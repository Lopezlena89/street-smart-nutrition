import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import App from './App'
import './index.css'
import './typography/title.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlutenFree,NutFree,VegetarianPage,VeganPage,DairyFree,RecipesPage } from './components/ui/categories';
import { RecipesId } from './components/ui/recipes/RecipesId';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/gluten-free",
    element: <GlutenFree/>,
  },
  {
    path: "/nut-free",
    element: <NutFree/>,
  },
  {
    path: "/vegetarian",
    element: <VegetarianPage/>,
  },
  {
    path: "/vegan",
    element: <VeganPage/>,
  },
  {
    path: "/libre-de-lacteos",
    element: <DairyFree/>,
  },
  {
    path: "/recipes",
    element: <RecipesPage/>,
  },
  {
    path: "/recipes/:name",
    element: <RecipesId/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
     <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
