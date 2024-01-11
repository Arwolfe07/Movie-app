import React, { useEffect } from 'react';
import useIcon from '../../assets/userIcon.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../store/userSlice';
import { toggleGPTSearch } from '../../store/gptSearchSlice';

const Navbar = () => {
  const user = useSelector(store => store.user);
  const { showGPTSearch } = useSelector(store => store.gpt);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signoutHandler = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate('/error')
      })
  };

  const gptSearchHandler = () => {
    dispatch(toggleGPTSearch());
  }

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
    <div className='fixed text-white z-30 w-screen max-w-screen gradient-overlay-header py-2 sm:py-6 xs:px-2 sm:px-10 lg:px-24 bg-opacity-40 flex sm:justify-between items-center sm:flex-row flex-col justify-center'>
      <p className='z-30 relative text-3xl sm:text-4xl font-extrabold tracking-tighter cursor-pointer'><span className='text-red-700'>Watch</span>Monkey</p>
      {
        user !== null &&
        <div className='mt-2 sm:mt-0 w-full sm:w-fit flex justify-between sm:justify-items-none z-30 items-center px-4 sm:px-0'>
          <button className='bg-blue-600 text-sm py-2 px-2 tracking-tighter sm:px-4 sm:tracking-normal rounded-lg font-semibold hover:bg-blue-500 duration-150' onClick={gptSearchHandler}>{showGPTSearch ? "Home" : "GPT Search"}</button>
          <div className='flex items-center'>

            <img src={useIcon} className='sm:w-10 sm:h-10 w-6 h-6 mx-1 sm:mx-4' alt='user' />
            <button className='bg-red-600 text-sm py-2 px-2 tracking-tighter sm:tracking-normal sm:px-4 rounded-lg font-semibold hover:bg-red-500 duration-150' onClick={signoutHandler}>Sign Out</button>
          </div>
        </div>
      }
    </div>
  )
};

export default Navbar;