import { Button, Grid2, Typography } from "@mui/material"
import React from "react"
import { styled } from '@mui/system';
import loginWays from '../.././assests/login-ways.svg'
import { useNavigate } from "react-router";
import SignUpTextFieldContainer from "./SignUpTextFieldContainer";


export const SignUp = () => {
    const navigate = useNavigate();

    const redirectLoginPage = () => {
        navigate("/sign-in");
    }

    return (
        <Grid2 container sx={{ gap: '40px' }}>
            <Typography variant="h2" sx={{ fontSize: '1.5rem', textAlign: 'center', fontWeight: 600, width: '100%' }}>
                Auracle
            </Typography>
            <Grid2 display='flex' size={12} sx={{ gap: '24px' }} flexDirection='column'>
                <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, width: '100%' }}>
                    Sign Up
                </Typography>
                <SignUpTextFieldContainer />
                <Typography variant="h6" sx={{ fontSize: '0.67em', fontWeight: '500', textAlign: 'center', width: '100%' }}>
                    or continue with
                </Typography>
                <img src={loginWays}></img>
                <Typography className="underline-on-hover" variant="h6" sx={{ fontSize: '0.67em', fontWeight: '500', textAlign: 'center', width: '100%' }} onClick={redirectLoginPage}>
                    Already have an account? Login In
                </Typography>
            </Grid2>
        </Grid2>
    )

}



export const StyledLoginButton = styled(Button)({
    backgroundColor: '#003465',
    borderRadius: '8px',
    color: '#FFFFFF',
    textTransform: "none"
});