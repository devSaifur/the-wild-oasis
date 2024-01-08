import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { DarkModeProvider } from './context/DarkModeContext'
import AppLayout from './ui/AppLayout'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <div>dashboard</div>,
      },
      {
        path: 'bookings',
        element: <div>bookings</div>,
      },
      {
        path: 'bookings/:bookingId',
        element: <div>single booking detail</div>,
      },
      {
        path: 'check-in/:bookingId',
        element: <div>check in</div>,
      },
      {
        path: 'cabins',
        element: <div>cabins</div>,
      },
      {
        path: 'users',
        element: <div>newUsers</div>,
      },
      {
        path: 'settings',
        element: <div>settings</div>,
      },
      {
        path: 'account',
        element: <div>account</div>,
      },
    ],
  },
  {
    path: 'login',
    element: <div>login</div>,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
])

const queryClient = new QueryClient()

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
