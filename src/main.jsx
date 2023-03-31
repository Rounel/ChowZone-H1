import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Bindings, BonsPlansTatta, ClassesMW2, ClassesMwCw, ClassesVanguard, Config1100, Config1600, Config1800, ConfigPcGaming, ConfigPcStreaming, ErrorPage, Evenements, Peripheriques, SettingsMW2, SettingsWarzone } from "./pages";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "bindings",
    element: <Bindings />,
    errorElement: <ErrorPage />,
  },
  {
    path: "promos",
    element: <BonsPlansTatta />,
    errorElement: <ErrorPage />,
  },
  {
    path: "classes-mw2",
    element: <ClassesMW2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "classes-mw-cw",
    element: <ClassesMwCw />,
    errorElement: <ErrorPage />,
  },
  {
    path: "classes-vanguard",
    element: <ClassesVanguard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "config-1100",
    element: <Config1100 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "config-1600",
    element: <Config1600 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "config-1800",
    element: <Config1800 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pc-gaming",
    element: <ConfigPcGaming />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pc-streaming",
    element: <ConfigPcStreaming />,
    errorElement: <ErrorPage />,
  },
  {
    path: "evenements",
    element: <Evenements />,
    errorElement: <ErrorPage />,
  },
  {
    path: "peripheriques",
    element: <Peripheriques />,
    errorElement: <ErrorPage />,
  },
  {
    path: "settings-mw2",
    element: <SettingsMW2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "settings-warzone",
    element: <SettingsWarzone />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
