
import { Button, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';

import { LoginFormGrid } from './login.styles';

const Login = () => (
    <Container>
        <Grid container>
            <Grid xs={6}>
                <h1>Logo</h1>
            </Grid>
            <LoginFormGrid xs={6}>
                <TextField id="user" label="User" variant="standard" />
                <TextField id="password" label="Password" variant="standard" type="password" />
                <Button variant="contained">Login</Button>
            </LoginFormGrid>
        </Grid>
    </Container>
);

export default Login;