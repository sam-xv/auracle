
import React, { useEffect } from 'react'
import { StyledImageContainer } from './LoginStyledImageContainer'
import { LoginGlassContainer } from './LoginGlassContainer'
import { SignIn } from '../components/sign-in/SignIn'
import { SignUp } from '../components/sign-up/SignUp'
import { passwordData } from '../assests/vault'
import { useLocation } from 'react-router'

export default function LoginInitiator() {
  const location = useLocation();
  const isSignIn = location.pathname.includes('sign-in')

  useEffect(() => {
    localStorage.setItem('passwordData', JSON.stringify(passwordData))
  }, [])

  return (
    <StyledImageContainer
      container
      className='height-100-per'
      alignItems='center'
      justifyContent='center'
    >
      <LoginGlassContainer className='height-100-per width-100-per'>
        {isSignIn ? <SignIn /> : <SignUp />}
      </LoginGlassContainer>
    </StyledImageContainer>
  )
}


