import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import { loader as clienteLoader} from './data/loaderClientes'
import Index from './pages/Index'
import { action as nuevoCliente } from './data/nuevoClienteActiont'
import Error from './components/Error'
import EditarCliente from './pages/EditarCliente'
import {actionEditarCliente, loaderEditarCliente} from './data/loaderEditarCliente'
import {action as  actionEliminarCliente } from './data/actionEliminarCliente'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clienteLoader,
        errorElement: <Error />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoCliente
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: loaderEditarCliente,
        errorElement: <Error />,
        action: actionEditarCliente
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: actionEliminarCliente
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
