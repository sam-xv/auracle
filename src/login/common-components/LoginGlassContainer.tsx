import { Grid2 } from '@mui/material'
import { styled } from '@mui/system';

export const LoginGlassContainer = styled(Grid2)({
  padding: '40px 80px',
  maxHeight: 'min(550px,calc(100dvh - 80px))',
  // margin:'40px '
  maxWidth: 'min(410px, calc(100vw - 80px))',
  borderRadius: '28.5px',
  gap: '40px',
  backdropFilter: 'blur(9px)',
  backgroundColor: 'rgba(88, 130, 193, 0.28)'
});