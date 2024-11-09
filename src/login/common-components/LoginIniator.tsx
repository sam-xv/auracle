
import React, { useEffect } from 'react'
import { StyledImageContainer } from './LoginStyledImageContainer'
import { LoginGlassContainer } from './LoginGlassContainer'
import { SignIn } from '../components/sign-in/SignIn'
import { SignUp } from '../components/sign-up/SignUp'
import { passwordData } from '../assests/vault'

export default function LoginInitiator(props: { isSignUp: boolean }) {

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
        {props.isSignUp ? <SignUp /> : <SignIn />}
      </LoginGlassContainer>
    </StyledImageContainer>
  )
}


