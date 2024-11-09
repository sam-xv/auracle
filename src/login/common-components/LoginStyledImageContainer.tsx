import { Grid2 } from '@mui/material'
import { styled } from '@mui/system';
import loginBg from '../assests/loginBg.jpg'

export const StyledImageContainer = styled(Grid2)({
  backgroundImage: `url(${loginBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  '& *': {
    fontFamily: '"ADLaM Display ", system-ui !important'
  }
});