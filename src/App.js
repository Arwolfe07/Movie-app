import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Auth from './pages/Auth';
import Home from './pages/Home';

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Auth />,
    },
    {
      path: '/home',
      element: <Home />
    }
  ]
}])

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
