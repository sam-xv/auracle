
import React from 'react'
import { StyledImageContainer } from './LoginStyledImageContainer'
import { LoginGlassContainer } from './LoginGlassContainer'
import { SignIn } from '../components/sign-in/SignIn'
import { SignUp } from '../components/sign-up/SignUp'
import { useLocation } from 'react-router'

export default function LoginInitiator() {
  const location = useLocation();
  const isSignUp = location.pathname.includes('sign-up')

  return (
    <StyledImageContainer
      container
      className='height-100-per'
      alignItems='center'
      justifyContent='center'
    >
      <LoginGlassContainer className='height-100-per width-100-per'>
        {isSignUp ? <SignUp /> : <SignIn />}
      </LoginGlassContainer>
    </StyledImageContainer>
  )
}


