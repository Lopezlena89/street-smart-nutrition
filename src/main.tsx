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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
     <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
