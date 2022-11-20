import { AppBar, Box } from '@mui/material';
import styled from 'styled-components';

export const AppBarContainer = styled(AppBar)({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2rem',
    padding: '1rem 2rem',
});

export const TitleContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexGrow: 1,
    marginRight: '2rem'
});

export const AvatarContainer = styled(Box)({
    justifyContent: 'right'
});