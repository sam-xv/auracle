
import React from 'react'
import { StyledImageContainer } from './LoginStyledImageContainer'
import { LoginGlassContainer } from './LoginGlassContainer'
import { SignIn } from '../components/sign-in/SignIn'
import { SignUp } from '../components/sign-up/SignUp'

export default function LoginInitiator(props: { isSignUp: boolean }) {
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


