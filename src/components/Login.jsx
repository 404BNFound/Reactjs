import { TextField, Button } from '@mui/material'
import './assets/css/Login.css'
const Login = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <div className='loginContent'>
                <div>
                    <TextField id="standard-basic" label="email" variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic" label="password" variant="standard" />
                </div>
            </div>
            <div>
                <Button variant='contained' sx={{marginTop:'30px', width:'100%'}}>Login</Button>
            </div>
        </div>
    );
}

export default Login;