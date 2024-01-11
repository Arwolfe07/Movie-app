import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Error from './pages/Error';


const router = createHashRouter([{
  path: '/',
  element: <RootLayout />,
  errorElement: <Error />,
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
