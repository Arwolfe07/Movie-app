import React, { useRef, useState } from 'react';
import { checkValidData } from '../../utils/validateForm';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import bgAuth from '../../assets/bgAuth.jpg'

const Auth = () => {
  const [isSignUp, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const auth = getAuth();

  const buttonHandler = (e) => {
    // Validating form data
    e.preventDefault();
    const isNotValid = checkValidData(email.current.value, password.current.value);
    setErrorMessage(isNotValid);
    if (isSignUp) {
      if (!name.current.value) {
        return setErrorMessage('Enter a valid name');
      }
    }
    if (isNotValid) return;
    if (isSignUp) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then()
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        })
    }
    else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then()
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        })
    }
  }

  return (
    <>
      <div className='h-screen w-screen absolute'>
        <div className='absolute inset-0 gradient-overlay'></div>
        <img src={bgAuth} alt='bgImg' className='h-screen w-screen bg-cover' />
      </div>
      <form className='absolute w-1/4 flex flex-col p-12 bg-black bg-opacity-90 my-36 mx-auto right-0 left-0 border-2 rounded-lg border-gray-500'>
        <h1 className='font-semibold text-white text-4xl'>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {isSignUp &&
          <input className='bg-gray-700 px-4 py-2 rounded-lg my-2 text-white' type="text" placeholder='Name' ref={name} />
        }
        <input className='bg-gray-700 px-4 py-2 rounded-lg my-2 text-white' type="text" placeholder='Email Address' ref={email} />
        <input className='bg-gray-700 px-4 py-2 rounded-lg my-2 text-white' type="password" placeholder='Password' ref={password} />
        {errorMessage && <p className='text-red-600 text-sm font-semibold'>*{errorMessage}</p>}
        <button type='submit' className='text-white bg-red-600 py-2 text-md rounded-lg my-2' onClick={buttonHandler}>{isSignUp ? "Sign Up" : "Sign In"}</button>
        <p className='text-gray-400 text-sm mt-2 text-center'>{isSignUp ? "Already have an account?" : "New to WatchMonkey?"} <span className='text-white text-md font-semibold cursor-pointer hover:underline' onClick={() => setIsSignup(!isSignUp)}>{isSignUp ? "Sign In" : "Sign Up Now"}</span></p>
      </form>
    </>
  )
};

export default Auth;