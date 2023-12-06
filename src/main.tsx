import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/login/login';
import Register from './pages/register/register.tsx'
import { UserContextProvider } from './contexts/usercontext.tsx'
import AuthGuard from './guards/authGuard.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>,
    element: <AuthGuard component={<App/>}/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "/register",
    // element: <Register/>,
    element: <AuthGuard component={<Register/>}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
  </React.StrictMode>,
)
