import { ChangeEvent, MouseEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';

import { LoginFormGrid, LogoGrid,  LogoImage, ErrorAlert } from './login.styles';

import logo from '../../assets/logo.png';
import { Login as LoginType } from './login.type';
import { defaultLoginData, defaultLoginError } from './data';
import { Api } from '../../utils/api';
import { ApiRoutes, Routes } from '../../utils/api/routes';

import _ from 'lodash';

const Login = () => {
    const [ loginData, setLoginData ] = useState<LoginType>(defaultLoginData);
    const [ loginError, setLoginError ] = useState<boolean>(defaultLoginError);
    const navigate = useNavigate();

    const { user, password } = loginData;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData({...loginData, [name]: value});
    };

    const handleLogin = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
    
        const { user, password } = loginData;

        Api.get({ endpoint: ApiRoutes.USERS, params: { username: user, password} }).then((result) => {
            const isEmpty = _.isEmpty(result.data);
            setLoginError(isEmpty);
            !isEmpty && navigate(Routes.HOME);
        }).catch(() => {
            setLoginError(true);
        });
    };

    return (
        <Container>
            { loginError && (<ErrorAlert severity='error'>Invalid user or password</ErrorAlert>)}
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
                        error={loginError}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="standard"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        error={loginError}
                    />
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                </LoginFormGrid>
            </Grid>
        </Container>
    );
};

export default Login;