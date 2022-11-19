import styled from '@emotion/styled';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const LogoGrid = styled(Grid)({
    justifyContent: 'center'
});

export const LogoImage = styled.img`
    max-width: 100%
`

export const LoginFormGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem'
});
