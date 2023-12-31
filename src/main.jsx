import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login-page.jsx'
import RegisterPage from './pages/register-page.jsx'
import ErrorPage from './pages/error-404'
import ProductsPage from './pages/products-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World!</h1>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
