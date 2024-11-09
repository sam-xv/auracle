import React, { useState } from "react"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { boxSizing, padding, styled } from '@mui/system';
import loginWays from '../.././assests/login-ways.svg'
import { useNavigate } from "react-router";
import { StyledLoginButton } from "./SignUp";

export default function SignUpTextFieldContainer() {
  const [emailsAndPassword, setEmailsAndPassword] = useState<{ email: string, password: string }>({ email: '', password: '' })

  const updateEmailPassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: 'email' | 'password') => {
    const value = event.target.value;
    setEmailsAndPassword(prev => ({ ...prev, [key]: value }))
  }

  const SignUp = () => {
    const passwordData = JSON.parse(localStorage.getItem('passwordData') || '{}')
    passwordData[emailsAndPassword.email] = {
      password: emailsAndPassword.password
    }
    localStorage.setItem('passwordData', JSON.stringify(passwordData))
  }

  return (
    <>
      <Grid2 display='flex' flexDirection='column' sx={{ gap: '8px' }}>
        <Typography variant="h2" sx={{ fontSize: '0.75rem', fontWeight: 600, width: '100%' }}>
          Email
        </Typography>
        <StyledTextField value={emailsAndPassword.email} fullWidth id="email-id" onChange={e => updateEmailPassword(e, 'email')} />
        <Typography variant="h2" sx={{ fontSize: '0.75rem', fontWeight: 600, width: '100%' }}>
          password
        </Typography>
        <StyledTextField value={emailsAndPassword.password} type="password" fullWidth id="outlined-basic" onChange={e => updateEmailPassword(e, 'password')} />
      </Grid2>
      <StyledLoginButton onClick={SignUp}>Sign Up</StyledLoginButton>
    </>
  )
}

export const StyledTextField = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '5px',
  '& input': {
    boxSizing: 'border-box',
    height: '32px',
    padding: '0px 16px',
    fontSize: '12px'
  }
});