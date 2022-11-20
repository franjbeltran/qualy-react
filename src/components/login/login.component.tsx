import { ChangeEvent, MouseEvent, useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

import { UserContext } from '../../contexts/user';
import { User as UserType } from '../../contexts/user/user.type';

const Login = () => {
    const [ loginData, setLoginData ] = useState<LoginType>(defaultLoginData);
    const [ loginError, setLoginError ] = useState<boolean>(defaultLoginError);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const { t } = useTranslation();
    
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

            if (isEmpty) return;

            setUser(_.first(result.data) as UserType);
            navigate(Routes.HOME);
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
                        label={t('login.user')}
                        variant="standard"
                        name="user"
                        value={user}
                        onChange={handleChange}
                        error={loginError}
                    />
                    <TextField
                        id="password"
                        label={t('login.password')}
                        variant="standard"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        error={loginError}
                    />
                    <Button variant="contained" onClick={handleLogin}>{t('login.login')}</Button>
                </LoginFormGrid>
            </Grid>
        </Container>
    );
};

export default Login;