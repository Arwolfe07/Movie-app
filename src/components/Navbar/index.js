import React from 'react';
import useIcon from '../../assets/userIcon.png';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector(store=>store.user);
  console.log(user);
  const navigate = useNavigate();

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((error) => {
        navigate('/error')
      })
  }
  return (
    <div className='fixed text-white z-10 w-full gradient-overlay-header py-6 px-24 bg-opacity-40 flex justify-between'>
      <p className='z-10 text-4xl font-extrabold tracking-tighter cursor-pointer'><span className='text-red-700'>Watch</span>Monkey</p>
      {
      user!==null &&
      <div className='flex z-10'>
        <img src={useIcon} className='w-10 h-10 mx-4' alt='user' />
        <button className='bg-red-600 px-4 rounded-lg font-semibold' onClick={signoutHandler}>Sign Out</button>
      </div>
      }
    </div>
  )
};

export default Navbar;