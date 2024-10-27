import { Grid2 } from '@mui/material'
import { styled } from '@mui/system';

export const LoginGlassContainer = styled(Grid2)({
  padding: '80px 40px',
  maxHeight: '550px',
  maxWidth: 'min(410px, calc(100vw - 80px))',
  borderRadius: '30px',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(88, 130, 193, 0.28)'
});