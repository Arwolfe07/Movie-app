import React, { useEffect } from 'react';
import useIcon from '../../assets/userIcon.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../store/userSlice';

const Navbar = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signoutHandler = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate('/error')
      })
  };

  // Call this api once
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Is user signed in then called
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/home', { replace: true });
      } else {
        // User not signed in then called
        dispatch(removeUser());
        navigate('/', { replace: true })
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='fixed text-white z-30 w-screen max-w-screen gradient-overlay-header py-6 px-24 bg-opacity-40 flex justify-between'>
    <p className='z-30 relative text-4xl font-extrabold tracking-tighter cursor-pointer'><span className='text-red-700'>Watch</span>Monkey</p>
    {
      user !== null &&
      <div className='flex z-30'>
        <img src={useIcon} className='w-10 h-10 mx-4' alt='user' />
        <button className='bg-red-600 px-4 rounded-lg font-semibold' onClick={signoutHandler}>Sign Out</button>
      </div>
    }
  </div>
  )
};

export default Navbar;