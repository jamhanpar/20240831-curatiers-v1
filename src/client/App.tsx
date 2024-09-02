import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//--- LAYOUTS ---//
import RootLayout, { loader } from './routes/RootLayout.tsx';

//--- PAGES ---//
import HomePage from './routes/HomePage.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import ContactPage from './routes/ContactPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
