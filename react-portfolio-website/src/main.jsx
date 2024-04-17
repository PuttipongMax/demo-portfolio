import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import HomePage from "./pages/HomePage.jsx"
import ResumePage from "./pages/ResumePage.jsx"
import ContactPage from './pages/ContactPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/resume",
        element: <ResumePage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/project",
        element: <ProjectPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
