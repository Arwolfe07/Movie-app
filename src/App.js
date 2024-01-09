import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './store/userSlice';

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
  const dispatch = useDispatch();
  // Call this api once
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Is user signed in then called
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User not signed in then called
        dispatch(removeUser());
      }
    })
  }, [])

  return (<RouterProvider router={router} />);
}

export default App;
