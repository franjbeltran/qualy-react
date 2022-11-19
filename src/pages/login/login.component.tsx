import { ChangeEvent, MouseEvent, useState } from 'react';

import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';

import { LoginFormGrid, LogoGrid,  LogoImage } from './login.styles';

import logo from '../../assets/logo.png';
import { Login as LoginType } from './login.type';
import { defaultLoginData } from './data';

const Login = () => {
    const [ loginData, setLoginData ] = useState<LoginType>(defaultLoginData);
    const { user, password } = loginData;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData({...loginData, [name]: value});
    };

    const handleLogin = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
    
        const { user, password } = loginData;

        
    
        console.log('ok');
        debugger
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <LogoGrid container xs={12} sm={6}>
                    <LogoImage src={logo} />
                </LogoGrid>
                <LoginFormGrid xs={12} sm={6}>
                    <TextField
                        id="user"
                        label="User"
                        variant="standard"
                        name="user"
                        value={user}
                        onChange={handleChange}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="standard"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </LoginFormGrid>
            </Grid>
        </Container>
    );
};

export default Login;