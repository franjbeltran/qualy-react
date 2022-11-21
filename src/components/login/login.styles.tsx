import styled from 'styled-components';
import { Alert } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const LogoGrid = styled(Grid)({
    justifyContent: 'center'
});

export const LogoImage = styled.img`
    max-width: 100%;
    margin-top: 1rem;
`;

export const LoginFormGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem'
});


export const ErrorAlert = styled(Alert)({
    marginTop: '2rem',
    marginBottom: '2rem'
});