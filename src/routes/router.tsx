import { createBrowserRouter } from 'react-router-dom'
import { ComingSoonPage, RootLayout } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
