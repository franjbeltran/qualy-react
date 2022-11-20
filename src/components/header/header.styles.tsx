import { AppBar, Box, Button } from '@mui/material';
import styled from 'styled-components';

export const AppBarContainer = styled(AppBar)({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2rem',
    padding: '1rem 2rem',
    minHeight: '100px'
});

export const TitleContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexGrow: 1,
    marginRight: '2rem'
});

export const AvatarContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center'
});

export const LogoutButton = styled(Button)({
    color: 'white'
});
